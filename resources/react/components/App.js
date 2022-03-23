import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { useTransition } from 'react-spring';

import { StyledApp, AnimatedWrapper } from './AppStyle';
import Navbar from './Navbar';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

/** 
 * Array con las URLs en las que el Navbar no debe ser mostrado. 
 * Usado también en el Layout para aplicar un margin-top correspondiente a la altura del Navbar.
 */
export const ROUTES_WITHOUT_NAVBAR = [
    "/login",
    "/signup",
    // "/notfound"
];

/**
 * Main Application
 */
export default function App(props) {
    const isAuth = true;

    /** Transitioning between routes */
    const location = useLocation();
    const transition = useTransition(location, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        update: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 250 }
    });

    return (
        <StyledApp>
            {!ROUTES_WITHOUT_NAVBAR.includes(location.pathname) && <Navbar />}

            {transition((style, location) => <AnimatedWrapper style={style}>
                <Routes location={location}>
                    {/** Login */}
                    {/* <Route exact path="/login" element={
                        <RequireNoAuth>
                            <Login />
                        </RequireNoAuth>
                    } /> */}

                    {/** Routes with Layout */}
                    <Route element={<Layout />}>
                        {/** Inicio/Home */}
                        <Route exact path="/" element={
                            <RequireAuth>
                                <Home />
                            </RequireAuth>
                        } />

                        {/** Ruta por defecto (404: NotFound) */}
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </AnimatedWrapper>)}
        </StyledApp>
    );
}

/**
 * Auth Routing Wrapper.
 * Protege las principales rutas de la aplicación.
 */
function RequireAuth({ children }) {
    const isAuth = true;
    const location = useLocation();

    if(!isAuth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

/**
 * NO Auth Routing Wrapper.
 * Proteger las rutas de inicio de sesión, registro...
 */
function RequireNoAuth({ children }) {
    const isAuth = false;
    const location = useLocation();

    if(isAuth) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}
