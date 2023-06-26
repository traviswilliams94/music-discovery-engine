import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <nav id='navbar'>
            <NavLink className='NavLink' exact to='/'>Home</NavLink>
            <NavLink className='NavLink' to='/searchbar'>Search Music</NavLink>
            <NavLink className='NavLink' to='/createplaylist'>Build a Playlist</NavLink>
            <NavLink className='NavLink' to='/randomgenerator'>Random Generator</NavLink>
        </nav>
    )
}

export default NavBar;