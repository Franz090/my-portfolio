import React, { useState, useEffect } from 'react';
import LoadingAnimation from '../LoadingAnimation';
import RootLayout from './shared/components/Layouts/RootLayout';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ResumePage from './pages/resume';
import MyProject from './pages/project';
import Skills from './pages/skills';
import NotFoundPage from './pages/NotFound';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 500); // Adjust the delay for the transition effect
    }, 2000);
  }, []);

  const handleTransitionEnd = () => {
    // Check if the current location is the home page before redirecting
    if (location.pathname === '/') {
      // Redirect only if the current location is the home page
      // navigate('/'); // You can perform redirection here if needed
    }
  };

  return (
    <>
      {loading ? ( // Display the loading animation if loading is true
        <LoadingAnimation />
      ) : (
        <div className={`transition-container ${showContent ? 'show' : ''}`} onTransitionEnd={handleTransitionEnd}>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/project" element={<MyProject />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
