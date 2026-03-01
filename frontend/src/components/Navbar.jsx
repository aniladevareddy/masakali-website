


import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu if resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => setMenuOpen(m => !m);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar logo-center">
      <div className="navbar-logo">
        <Link
          className="header-logo logo-top"
          to="/"
          aria-label="Homepage"
        >
          <img
            alt="Masakali logo top - Homepage"
            aria-label="Homepage"
            className="img-responsive logo-top"
            src={logo}
          />
        </Link>
      </div>
      {/* Hamburger button for mobile, top right */}
      <button
        className="navbar-toggle"
        type="button"
        aria-label="Toggle navigation"
        onClick={handleMenuToggle}
      >
        <span className="sr-only">Toggle navigation</span>
        {menuOpen && (
          <span className="navbar-toggle-label">Menu</span>
        )}
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      {/* Desktop menu bar (hidden on mobile) */}
      <div className="navbar-tabs navbar-tabs-desktop">
        <ul className="navbar-links">
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/drinks">Drinks</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li><Link to="/catering">Catering</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      {/* Mobile collapse menu, slides from top under navbar */}
      <div
        className={`navbar-collapse collapse${menuOpen ? ' in' : ''}`}
        id="navbar-collapse-1"
        aria-expanded={menuOpen}
        style={{ display: menuOpen ? 'block' : 'none' }}
      >
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/menu" onClick={handleLinkClick}>Menu</Link></li>
          <li><Link to="/drinks" onClick={handleLinkClick}>Drinks</Link></li>
          <li><Link to="/reservation" onClick={handleLinkClick}>Reservation</Link></li>
          <li><Link to="/catering" onClick={handleLinkClick}>Catering</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
