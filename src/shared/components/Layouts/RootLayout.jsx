import React, { useState, useEffect } from 'react';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import SlideFixIcon from '../Partials/SlideFixIcon';
import Contact from '../Partials/Contact';
import { Outlet } from 'react-router-dom';
import StarrySky from '../Partials/StarrySky';
import { ModalProvider } from '../Partials/ModalContext';
import { SpeedInsights } from '@vercel/speed-insights/next';


const RootLayout = () => {
    const [showStarrySky, setShowStarrySky] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const mobileWidth = 1024; // Set your desired mobile width threshold
            const isMobileDevice = window.innerWidth < mobileWidth;
            setIsMobile(isMobileDevice);
        };

        // Check initial width
        checkIsMobile();

        // Update isMobile state on resize
        window.addEventListener('resize', checkIsMobile);

        // Simulate a delay for 2 seconds before showing the StarrySky
        const timer = setTimeout(() => {
            setShowStarrySky(true);
        }, 1000);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <ModalProvider>
         <SpeedInsights/>
        <div className="root-main">
            <Header className="z-10" />
            <Outlet className="z-1" />
            {!isMobile && (
                <div className="fixed bottom-8 right-8 z-50"> 
                    <SlideFixIcon />
                </div>
            )}
            <Contact className="z-10" />
            <Footer className="z-10" />
            <StarrySky className="fixed top-0 left-0 z-[-1]" visible={showStarrySky} />
        </div>
        </ModalProvider>
    );
};

export default RootLayout;
