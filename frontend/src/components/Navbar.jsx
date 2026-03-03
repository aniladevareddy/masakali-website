



import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

// Contact strip above navbar
const ContactStrip = () => (
  <div className="contact-strip-inner">
    <a href="tel:(514) 228-6777" className="contact-link">
      <i className="fa fa-phone"></i> (514) 228-6777
    </a>
    <a href="https://www.google.com/maps/search/?api=1&query=10310+S+De+Anza+Blvd,+Cupertino,+CA" target="_blank" rel="noopener noreferrer" className="contact-link">
      <i className="fa fa-map-marker"></i> 10310 S De Anza Blvd, Cupertino, CA
    </a>
  </div>
);

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
    <>
      <ContactStrip />
      <nav className="navbar">
      {/* Desktop header row */}
      <div className="navbar-header-row desktop-navbar">
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
        <div className="navbar-tabs navbar-tabs-desktop">
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>
              <Link to="/reservation" className="navbar-btn">Reservation</Link>
            </li>
            <li>
              <Link to="/catering" className="navbar-btn">Catering</Link>
            </li>
          </ul>
        </div>
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
      </div>

      {/* Mobile header row */}
      <div className="mobile-nav-container">
        <div className="mobile-navbar">
          {/* Left: Hamburger */}
          <button className="mobile-nav-toggle" onClick={handleMenuToggle} aria-label="Open menu">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/* Center: Logo */}
          <div className="mobile-logo">
            <Link to="/" aria-label="Homepage">
              <img src={logo} alt="Logo" className="mobile-logo-img" />
            </Link>
          </div>
          {/* Right: MENU button */}
          <div className="mobile-nav-right">
            <Link to="/menu" className="mobile-menu-btn">MENU</Link>
          </div>
        </div>
      </div>
      {/* Mobile collapse menu, slides from top under navbar */}
      <div
        className={`navbar-collapse collapse${menuOpen ? ' in' : ''}`}
        id="navbar-collapse-1"
        aria-expanded={menuOpen}
        style={{ display: menuOpen ? 'block' : 'none' }}
      >
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
          <li><Link to="/menu" onClick={handleLinkClick}>Menu</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
          <li><Link to="/reservation" className="navbar-btn" onClick={handleLinkClick}>Reservation</Link></li>
          <li><Link to="/catering" className="navbar-btn" onClick={handleLinkClick}>Catering</Link></li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
