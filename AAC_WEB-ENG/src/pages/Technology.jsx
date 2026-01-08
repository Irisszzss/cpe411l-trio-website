import React from 'react';
import { Cpu, Bluetooth, Battery, Maximize } from 'lucide-react';
import '../styles/Technology.css';

const Technology = () => {
  return (
    <section className="tech-page">
      <div className="tech-header">
        <h1>Hardware Specifications</h1>
        <p>Built with high-precision sensors to capture every stroke with sub-millimeter accuracy.</p>
      </div>

      {/* Tech Highlights Grid */}
      <div className="tech-grid">
        <div className="tech-item">
          <Cpu size={40} className="tech-icon" />
          <h3>IMU Sensor Fusion</h3>
          <p>9-axis accelerometer and gyroscope integration for real-time motion tracking.</p>
        </div>
        <div className="tech-item">
          <Bluetooth size={40} className="tech-icon" />
          <h3>Bluetooth 5.0 LE</h3>
          <p>Low latency transmission less than 20ms ensures what you write appears instantly.</p>
        </div>
      </div>

      {/* Technical Specs Table */}
      <div className="specs-container">
        <h2>Technical Data</h2>
        <table className="specs-table">
          <tbody>
            <tr>
              <td><Maximize size={18} /> Dimensions</td>
              <td>140mm x 15mm (Cylindrical)</td>
            </tr>
            <tr>
              <td><Battery size={18} /> Battery Capacity</td>
              <td>350mAh Lithium-Polymer</td>
            </tr>
            <tr>
              <td>Sample Rate</td>
              <td>100 Hz (100 samples/second)</td>
            </tr>
            <tr>
              <td>Microcontroller</td>
              <td>ESP32 Dual Core</td>
            </tr>
            <tr>
              <td>Charging Port</td>
              <td>USB-C (5V / 1A)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Technology;