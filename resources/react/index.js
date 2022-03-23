import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { SettingsProvider } from './contexts/SettingsContext';
import { UserProvider } from './contexts/UserContext';
import { CategoriesProvider } from './contexts/CategoriesContext';

import { GlobalStyle } from './styles/global';
import App from './components/App';


const app = document.getElementById('app');

ReactDOM.render(
    <SettingsProvider>
        <UserProvider>
            <CategoriesProvider>
                <BrowserRouter>
                    <GlobalStyle />
                    <App />
                </BrowserRouter>
            </CategoriesProvider>
        </UserProvider>
    </SettingsProvider>
    , app
);
