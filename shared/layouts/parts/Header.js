import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { Menu } from '../../../routes/mainRoutes';

const Header = ({ classes }) => {
    return (
        <div>
            <ul>
                {_.map(Menu, (route, key) => {
                    const { path, name } = route;
                    return (
                        <li>
                            <Link to={path} key={key}> {name} </Link>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default Header;
