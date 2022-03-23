/**
 * Devuelve una promesa. Usado para sincronizar timeouts de peticiones fake, entre otras cosas.
 */
export const getPromise = () => {
    let promiseResolve = () => {};
    let promiseReject = () => {};
    
    const prom = new Promise((resolve, reject) => {
        promiseResolve = resolve;
        promiseReject = reject;
    });

    return [prom, promiseResolve, promiseReject];
}

/**
 * Devuelve true si existe un estado concreto en una definición de estado pasados por parámetros.
 */
export const validateState = (definition, state) => definition && state && Object.values(definition).includes(state);

/**
 * Crea una copia de un objeto
 * 
 * @param original   objeto a copiar
 * @returns          copia del objeto
 */
export const clone = original => {
    return JSON.parse(JSON.stringify(original));
}
