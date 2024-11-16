import './styles/global.css'
import './styles/grid.css'
import './styles/style.css'

import Home from './components/HomePage/home'
import HamburgerMenu from "./components/SideMenu/sideMenu.jsx";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Navbar from "./components/NavBar/navBar.jsx";
import { useState } from 'react';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage menu open state

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>My First React App</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
            </Helmet>
            <div>
                {/* Pass isMenuOpen and toggleMenu to Navbar */}
                <Navbar />
                <Home />
                <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            </div>
        </HelmetProvider>
    )
}

export default App;
