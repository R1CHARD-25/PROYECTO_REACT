import React from 'react';
import './Navbar.css';

function Navbar() {
    return (

            <div className="navbar-search">
                <input type="text" placeholder="Buscar..." />
                <button type="submit">🔍</button>
            </div>

    );
}

export default Navbar;
