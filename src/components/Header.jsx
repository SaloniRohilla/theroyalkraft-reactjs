import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import Navbar from './Navbar.jsx';
import '../styles/Header.css';

const Header = ({ title }) => { // Removed showBanner
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : 'transparent'}`}>
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <button className="navbar-toggler" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Navbar isOpen={isMenuOpen} />
      </header>
    </>
  );
};

export default Header;
