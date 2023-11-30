import React, { useState, useEffect } from 'react';

import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import Contact from '../Partials/Contact';
import { Outlet } from 'react-router-dom';
import StarrySky from '../Partials/StarrySky';

const RootLayout = () => {
    const [showStarrySky, setShowStarrySky] = useState(false);

  useEffect(() => {
    // Simulate a delay for 2 seconds before showing the StarrySky
    const timer = setTimeout(() => {
      setShowStarrySky(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
 return (
   
     <div className="root-main">
        <Header className="z-10" />
        <Outlet className="z-1" />
        <Contact className="z-10" />
        <Footer className="z-10" />
        <StarrySky className="fixed top-0 left-0 z-[-1]" visible={showStarrySky} />
    </div>
 );
};

export default RootLayout;