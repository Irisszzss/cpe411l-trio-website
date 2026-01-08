import React from 'react';
import { PenTool, Wifi, Layers, BatteryCharging } from 'lucide-react';
import '../styles/Home.css'; 

const About = () => (
  <section className="page-container">
    <div className="section-header">
      <h2>Why SmartStroke?</h2>
      <p>Bridging the gap between analog teaching and digital learning.</p>
    </div>
    <div className="grid">
      <div className="card"><div className="icon-box"><Wifi size={32} /></div><h3>Wireless Sync</h3><p>Transmits marker position data instantly via Bluetooth.</p></div>
      <div className="card"><div className="icon-box"><PenTool size={32} /></div><h3>Universal Fit</h3><p>Designed to fit any standard whiteboard marker.</p></div>
      <div className="card"><div className="icon-box"><Layers size={32} /></div><h3>Cloud Save</h3><p>Lectures are digitized as PDFs and uploaded automatically.</p></div>
      <div className="card"><div className="icon-box"><BatteryCharging size={32} /></div><h3>48h Battery</h3><p>Long-lasting battery life for uninterrupted lectures.</p></div>
    </div>
  </section>
);
export default About;