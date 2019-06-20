import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../../shared/layouts/parts/Header'

const DefaultLayout = ({ children }) => (
    <div>
        <Header />
        {children}
    </div>
);

const DefaultLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <DefaultLayout>
                <Component {...matchProps} />
            </DefaultLayout>
        )} />
    )
}

export default DefaultLayoutRoute;
