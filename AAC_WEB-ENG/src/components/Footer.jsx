import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <h3>SmartStroke.</h3>
        <p>Digitizing classrooms, one marker at a time.</p>
      </div>
      <div className="footer-links">
        <h4>Product</h4>
        <a href="#">Features</a>
        <a href="#">Integrations</a>
      </div>
      <div className="footer-social">
        <h4>Connect</h4>
        <div className="social-icons"><Github size={20} /><Twitter size={20} /><Linkedin size={20} /></div>
      </div>
    </div>
    <div className="footer-bottom">&copy; {new Date().getFullYear()} SmartStroke. All rights reserved.</div>
  </footer>
);
export default Footer;