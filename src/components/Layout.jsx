import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="layout-wrapper">
    <Navbar />
    <main style={{ minHeight: '80vh' }}>{children}</main>
    <Footer />
  </div>
);
export default Layout;