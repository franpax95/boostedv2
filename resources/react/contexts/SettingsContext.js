import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { THEME } from '../states/theming';
import { LANG } from '../states/lang';
import { validateState } from '../utils';


const SettingsContext = React.createContext([{}, () => {}]);

function SettingsProvider({ children }) {
    /** Tema actual de la aplicación (LIGHT / DARK) */
    const [theme, setThemeState] = useState(THEME.DARK);
    /** Lenguaje actual de la aplicación (ESP / ENG) */
    const [lang, setLangState] = useState(LANG.ESP);

    /**
     * Cambia el tema de la aplicación por el pasado por parámetro, si es válido.
     * Si no se especifica tema, hace toggle con el seteado actualmente.
     * @param newTheme (optional) 
     */
    function setTheme(newTheme) {
        // Si se pasa el tema a setear por parámetro y es válido...
        if(newTheme && validateState(THEME, newTheme)) {
            setThemeState(newTheme);
        }

        // Si NO se pasa el tema a setear por parámetro...
        else if(!newTheme) {
            // Hacemos toggle
            const themeToSet = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
            setThemeState(themeToSet);
        }
    }

    /**
     * Cambia el lenguaje de la aplicación por el pasado por parámetro, si es válido.
     * Si no se especifica lenguaje, hace toggle con el seteado actualmente.
     * @param {*} newLang (optional)
     */
    function setLang(newLang) {
        // Si se pasa el lenguaje por parámetro y es válido...
        if(newLang && validateState(LANG, newLang)) {
            setLangState(newLang);
        }

        // Si NO se pasa el tema a setear por parámetro...
        else {
            // Hacemos toggle
            const langToSet = lang === LANG.ESP ? LANG.ENG : LANG.ESP;
            setLangState(langToSet);
        }
    }

    /**
     * Variables, estados y funciones a exportar en el contexto
     */
    const value = {
        theme, setTheme, lang, setLang
    };

    return (
        <SettingsContext.Provider value={value}>
            <ThemeProvider theme={{ mode: theme }}>
                {children}
            </ThemeProvider>
        </SettingsContext.Provider>
    );
}

export { SettingsContext, SettingsProvider };
