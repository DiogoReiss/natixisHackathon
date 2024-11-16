import React from 'react';
import './Navbar.css';

const Navbar = ({ isMenuOpen }) => {
    return (
        <div className="navbar">
            <div className={`search-bar ${isMenuOpen ? 'slide-right' : ''}`}>
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                />
            </div>
        </div>
    );
};

export default Navbar;
