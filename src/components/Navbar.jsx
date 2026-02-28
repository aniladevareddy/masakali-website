


import React from 'react';
import './Navbar.css';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar logo-center">
    <div className="navbar-logo">
      <Link className="header-logo logo-top" to="/">
        <img
          alt="Masakali logo top - Homepage"
          aria-label="Homepage"
          className="img-responsive logo-top"
          src={logo}
        />
      </Link>
      {/* Divider removed, border will be on menu */}
    </div>
    <div className="navbar-tabs">
      <ul className="navbar-links">
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/drinks">Drinks</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/catering">Catering</Link></li>
        <li><a href="/#about">About</a></li>
      </ul>
      {/* Social links removed as requested */}
    </div>
  </nav>
);

export default Navbar;
