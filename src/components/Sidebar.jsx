import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
    return (
        <Menu {...props} right>
            <a className="menu-item" href="/one">
                Item One
            </a>
            <a className="menu-item" href="/two">
                Item Two
            </a>
            <a className="menu-item" href="/three">
                Item Three
            </a>
        </Menu>
    );
};