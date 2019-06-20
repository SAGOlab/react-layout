import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../../shared/layouts/parts/Header';
import Sidebar from '../../shared/layouts/parts/Sidebar';

const SingleArticleLayout = ({ children }) => (
    <div>
        <Header />
        <Sidebar />
        layout del singolo articolo
        {children}
    </div>
);

const SingleArticleRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <SingleArticleLayout>
                <Component {...matchProps} />
            </SingleArticleLayout>
        )} />
    )
}

export default SingleArticleRoute;
