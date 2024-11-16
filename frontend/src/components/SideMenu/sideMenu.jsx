import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ toggleMenu, isMenuOpen }) => {
    return (
        <div className="hamburger-menu">
            {/* Hamburger button */}
            <button className="hamburger-icon" onClick={toggleMenu}>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            </button>

            {/* Side Menu */}
            <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleMenu}>X</button>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;
