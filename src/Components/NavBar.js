import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div>
        <header id='header'>
        <h1>Music Discovery Engine</h1>
         </header>
        <nav id='navbar'>
            <NavLink className='NavLink' exact to='/'>Home</NavLink>
            <NavLink className='NavLink' to='/searchbar'>Search Music</NavLink>
            <NavLink className='NavLink' to='/mysavedtracks'>Saved Tracks</NavLink>
            <NavLink className='NavLink' to='/randomgenerator'>Random Generator</NavLink>
        </nav>
        </div>
    )
}

export default NavBar;