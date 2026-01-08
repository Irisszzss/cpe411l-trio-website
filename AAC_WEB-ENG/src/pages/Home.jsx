import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 

const Home = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Digitize Your <br/>Whiteboard. <span className="highlight">Real-time.</span></h1>
      <p>The sensor-enhanced marker attachment that brings your classroom whiteboard into the digital age.</p>
      <div className="hero-buttons">
        <Link to="/about" className="cta-btn primary">View Features</Link>
        <Link to="/waitlist" className="cta-btn secondary">Join Waitlist</Link>
      </div>
    </div>
    <div className="hero-visual-container">
      <div className="hero-blob"><span className="blob-text">SmartStroke</span></div>
    </div>
  </section>
);
export default Home;