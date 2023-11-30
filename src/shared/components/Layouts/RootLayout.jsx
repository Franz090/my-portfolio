import React from 'react';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import Contact from '../Partials/Contact';
import { Outlet } from 'react-router-dom';
import StarrySky from '../Partials/StarrySky';

const RootLayout = () => {
 return (
    <div className="root-main">
      <StarrySky className="fixed top-0 left-0 z-[-1]" />
        <Header />
        <Outlet />
        <Contact />
        <Footer />
    </div>
 );
};

export default RootLayout;