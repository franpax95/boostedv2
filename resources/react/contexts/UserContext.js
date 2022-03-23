import React, { useState } from 'react';


const UserContext = React.createContext([{}, () => {}]);

function UserProvider({ children }) {
    /** Información del usuario cargada en la aplicación */
    const [user, setUser] = useState(null);
    /** Indica si el usuario está actualmente autenticado en la aplicación */
    const [isAuth, setIsAuth] = useState(false);

    /**
     * TODO
     */
    function login() {
        setIsAuth(true);
        setUser({
            id: 1,
            alias: 'Franpax95',
            email: 'franpax95@gmail.com'
        });
    }

    /**
     * TODO
     */
    function logout() {
        setIsAuth(false);
        setUser(null);
    }

    /**
     * Variables, estados y funciones a exportar en el contexto
     */
    const value = {
        user, isAuth, login, logout
    };

    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>;
}

export { UserContext, UserProvider };
