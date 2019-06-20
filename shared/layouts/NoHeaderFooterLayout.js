import React from 'react';
import { Route } from 'react-router-dom';

const NoHeaderFooterLayout = ({ children }) => (
    <div>
        <p>Layout della pagina 404</p>
        {children}
    </div>
);

const NoHeaderFooterLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <NoHeaderFooterLayout>
                <Component {...matchProps} />
            </NoHeaderFooterLayout>
        )} />
    )
}

export default NoHeaderFooterLayoutRoute;
