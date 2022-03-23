import React, { useState } from 'react';
import axios from 'axios';
import { clone } from '../utils';


const CategoriesContext = React.createContext([{}, () => {}]);

function CategoriesProvider({ children }) {
    /** Categorías cargadas en la aplicación */
    const [categories, setCategoriesState] = useState(null);

    /** Categoría cargada visible en '/categories/:id' */
    // const [category, setCategoryState] = useState(null);

    /** Indica si el contexto está realizando una llamada o haciendo una operación */
    const [loading, setLoading] = useState(false);

    /** Almacena el mensaje de error cuando una operación falla */
    const [error, setError] = useState(null);


    /**
     * Limpia la variable error
     */
    function clearError() {
        setError(null);
    }

    /**
     * Consulta las categorías disponibles para el usuario y las setea en la aplicación.
     * Devuelve una copia de las categorías recibidas.
     */
    async function getCategories() {
        if(categories === null) {
            setLoading(true);

            const cs = await axios.get('/api/categories')
                .then(response => {
                    console.dir(response);

                    setCategoriesState(response.data.success);
                    return response.data.success;
                })
                .catch(err => {
                    console.error(err);
                    setError(err.response.data.error);

                    setCategoriesState([]);
                    return [];
                });

            setLoading(false);

            return clone(cs);
        }

        return clone(categories);
    }

    /**
     * Setea una categoría encontrada por id. Si no encuentra, setea null (no encontrado).
     */
    async function getCategory(id) {
        // Si no se han pedido previamente, es decir, si
        // 'categories' es null, se piden las categorías
        const cats = categories === null ? await getCategories() : clone(categories);

        // Si el id que se busca está en la lista de categorías, se setea
        if(cats.some(c => c.id === id)) {
            const [cat] = cats.filter(c => c.id === id);
            // setCategoryState(cat);
            return cat;
        } 
        
        // Si no se encuentra el id, se setea la categoría a null
        else {
            setError(`No existe la categoría de id = ${id} entre las disponibles actualmente.`);
            // setCategoryState(null);
            return null;
        }
    }

    /**
     * Inserta una categoría. Si se inserta correctamente, vuelve a pedir las categorías.
     * Devuelve true o false indicando si la inserción ha tenido éxito.
     */
    async function insertCategory(category) {
        setLoading(true);

        const inserted = await axios.post('/api/categories', category)
            .then(res => {
                console.dir(res);
                return true;
            })
            .catch(err => {
                console.error(err);
                setError(err.response.data.error);
                return false;
            });
        
        // Si se ha insertado correctamente, volvemos a pedir las categorías
        if(inserted) {
            await getCategories();
        }

        setLoading(false);

        return inserted;
    }

    /**
     * Edita una categoría. Si se inserta correctamente, vuelve a pedir las categorías.
     * Devuelve true o false indicando si la edición ha tenido éxito.
     */
    async function editCategory(category) {
        // Comprobamos que se ha seteado un id correcto en la categoría
        if(typeof category.id !== "number") {
            console.error("INTENTANDO EDITAR UNA CATEGORÍA SIN ID");
            return false;
        }   

        setLoading(true);

        const editted = await axios.put('/api/categories', category)
            .then(res => {
                console.dir(res);
                return true;
            })
            .catch(err => {
                console.error(err);
                setError(err.response.data.error);
                return false;
            });
        
        // Si se ha editado correctamente, volvemos a pedir las categorías
        if(editted) {
            await getCategories();
        }

        setLoading(false);

        return editted;
    }

    /**
     * Elimina una categoría. Si se elimina correctamente, vuelve a pedir las categorías.
     * Devuelve true o false indicando si el borrado ha tenido éxito.
     */
    async function deleteCategory(id) {
        // Comprobamos que se ha pasado un id correcto por parámetro
        if(typeof id !== "number") {
            console.error("ID PASADO POR PARÁMETRO INCORRECTO. NO SE ELIMINA LA CATEGORÍA.");
            return false;
        } 

        setLoading(true);

        const deleted = await axios.delete(`/api/categories/${id}`)
            .then(res => {
                console.dir(res);
                return true;
            })
            .catch(err => {
                console.error(err);
                setError(err.response.data.error);
                return false;
            });

        // Si se ha editado correctamente, volvemos a pedir las categorías
        if(deleted) {
            await getCategories();
        }

        setLoading(false);
        
        return deleted;
    }

    const value = {
        getCategories, getCategory, insertCategory, editCategory, deleteCategory, loading, error, clearError
    };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
}

export { CategoriesContext, CategoriesProvider };
