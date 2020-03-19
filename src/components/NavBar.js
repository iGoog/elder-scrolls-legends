import React from 'react';
import './Nav.css';
import './NavBar.css';

const NavBar = props => (
    <nav className={props.searching ? 'nav-thinking nav-header' : 'nav-header' }>
        <label htmlFor="nameSearch">Search by Name:</label>
        <input type="text" id="nameSearch"/>
    </nav>
);

export default NavBar;