import React from 'react';
import './HamburgerMenu.css';
import  { useNavigate } from 'react-router-dom';

interface HamburgerMenuProps {
    toggleMenu: () => void;
    isMenuOpen: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ toggleMenu, isMenuOpen }) => {
    const navigate = useNavigate();
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        navigate('/');
    };
    
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
                    <li><a onClick={handleSubmit}>Home</a></li>
                    <li><a onClick={()=>navigate('/profile')}>Profile</a></li>
                    {/* <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li> */}
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;
