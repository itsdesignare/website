import React, { useState } from 'react';
import '../styles/navbar.css';
import logo from '../assets/logo.svg';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className='header'>
        <a href="#"><img src={logo} alt="" /></a>

        <div className='mobile-menu-button' onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>

        <nav className={`navbar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Gallery</a>
          <a href="#">Services</a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
