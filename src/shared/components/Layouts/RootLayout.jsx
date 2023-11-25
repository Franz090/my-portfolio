import React from 'react';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import Contact from '../Partials/Contact';
import { Outlet } from 'react-router-dom';
import StarrySky from '../Partials/StarrySky';

const RootLayout = () => {
  return (
    <div className="root-main" style={{ position: 'relative', overflowX: 'hidden' }}>
      <StarrySky /> {/* Render the StarrySky component first */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Outlet />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;