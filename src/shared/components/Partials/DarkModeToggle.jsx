import React, { useEffect, useState } from 'react';

function DarkModeToggle() {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // Store the selected theme in local storage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    // Check if there is a stored theme preference in local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      // Apply the stored theme preference
      setDarkMode(savedTheme === 'dark');
    } else {
      // If no theme preference is found, default to light mode
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    // Update the document and body elements to apply the theme
    const rootElement = document.documentElement;
    const bodyElement = document.body;
    const navElement = document.querySelector('nav');

    if (darkMode) {
      rootElement.setAttribute('data-theme', 'dark');
      bodyElement.classList.add('dark');
      navElement.classList.add('dark');
    } else {
      rootElement.setAttribute('data-theme', 'light');
      bodyElement.classList.remove('dark');
      navElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="theme-switch">
      <label htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
}

export default DarkModeToggle;