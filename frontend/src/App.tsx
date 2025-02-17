import React, {useState} from "react";

import "./styles/global.css";
import "./styles/grid.css";
import "./styles/style.css";

import { Helmet, HelmetProvider } from 'react-helmet-async'
import Footer from "./components/Footer/footer";
/* import NavBar from "./components/NavBar/navBar"; */
import HamburgerMenu from "./components/SideMenu/sideMenu";

import Profile from "./components/Profile/profile";
import Home from "./components/HomePage/home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
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
              <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
          </Helmet>
          {/* <NavBar /> */}
          <BrowserRouter>
              <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Profile" element={<Profile/>}/>
              </Routes>
          </BrowserRouter>
          <Footer />
      </HelmetProvider>
  );
};

export default App;
