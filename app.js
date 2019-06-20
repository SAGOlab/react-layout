import React from 'react';
import _ from 'lodash';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** 
 * Import dei Layouts
*/
import DefaultLayoutRoute from './shared/layouts/DefaultLayout';
import SingleArticleRoute from './shared/layouts/SingleArticleLayout';
import NoHeaderFooterLayoutRoute from './shared/layouts/NoHeaderFooterLayout';

/** 
 * import del menu
*/
import { Menu, SingleArticle } from './routes/mainRoutes';

/**
 * import dei components
 */
// import Home from './page/home/Home';
import NotFound from './page/404/404';

function App() {
  return (
    <Router>
      <Switch>
        { _.map(Menu, (route, key) => {
          const { component, path } = route;
            return (
              <Route
                  exact
                  path={path}
                  key={key}
                  render={ (route) => <DefaultLayoutRoute component={component} route={route}/>}
              />
            )
          })
        },
        { _.map(SingleArticle, (route, key) => {
          const { component, path } = route;
            return (
              <Route
                  exact
                  path={path}
                  key={key}
                  render={ (route) => <SingleArticleRoute component={component} route={route}/>}
              />
            )
          })
        }
        <NoHeaderFooterLayoutRoute component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
