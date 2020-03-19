import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';
import './NavBar.css';

const NavBar = props => {
    const { search, searching } = props;
    const [nameSearchInput, setNameSearchInput] = useState('');
    const nameSearchRef = useRef();

    // call search with the input after giving the user some time to stop typing.
    useEffect(() => {
        const debounced = setTimeout(() => {
            if (nameSearchInput === nameSearchRef.current.value) {
                search(nameSearchInput);
            }
        }, 500);
        return () => {
            clearTimeout(debounced);
        };
    },[nameSearchInput, nameSearchRef, search] );

    return (
        <nav className={searching ? 'nav-thinking nav-header' : 'nav-header' }>
            <label htmlFor="nameSearch">Search by Name:</label>
            <input type="text" id="nameSearch"
                   ref={nameSearchRef}
                   value={nameSearchInput}
                   onChange={event => setNameSearchInput(event.target.value)}/>
        </nav>
    )
} ;

export default NavBar;