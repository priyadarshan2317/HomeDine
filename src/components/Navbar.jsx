import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../images/logo2.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="navbar-links">
        <div className="navbar-item">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-item">
          <Link to="/foodmenu">Menu</Link>
        </div>
        <div className="navbar-item">
          <Link to="/homechef">Chef</Link>
        </div>
        <div className="navbar-item">
          <Link to="/cart">Cart</Link>
        </div>
        <div className="navbar-item">
          <Link to="/login">Login</Link>
        </div>
        <div className="navbar-item">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="navbar-item">
          <Link to="/about">About</Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
