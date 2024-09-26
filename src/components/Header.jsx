import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import Navbar from './Navbar.jsx';
import '../styles/Header.css'; // Import the new CSS file

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open

  // Effect to detect scroll and update state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <button className="navbar-toggler" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"></span> {/* Add a hamburger icon here */}
      </button>
      <Navbar isOpen={isMenuOpen} /> {/* Pass the isOpen state to Navbar */}
    </header>
  );
};

export default Header;
