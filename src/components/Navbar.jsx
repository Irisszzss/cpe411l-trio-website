import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">SmartStroke.</div>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span><span className="bar"></span><span className="bar"></span>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>Features</Link>
        <Link to="/technology" onClick={() => setIsOpen(false)}>Specs</Link>
        <Link to="/team" onClick={() => setIsOpen(false)}>Team</Link>
        <Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
        <Link to="/waitlist" onClick={() => setIsOpen(false)}>Waitlist</Link>
        <Link to="/waitlist" className="nav-cta" onClick={() => setIsOpen(false)}>Get Access</Link>
      </div>
    </nav>
  );
};
export default Navbar;