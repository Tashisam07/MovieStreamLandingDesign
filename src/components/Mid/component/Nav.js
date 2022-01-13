import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <nav className='nav'>
            <div className="nav_container">
                <ul className="nav_items">
                    <li className="nav_item">Movies</li>
                    <li className="nav_item active">TV Show</li>
                    <li className="nav_item">Anime</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
