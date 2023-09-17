import React, { useState, useEffect } from 'react';

function DarkModeToggle({ id }) {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    // Function to set the background color based on the mode
    const setThemeColors = () => {
      const root = document.documentElement;
      if (isDarkMode) {
        root.style.setProperty('--bg-color', '#181818'); // Dark mode background color
        root.style.setProperty('--font-color', '#fffafa'); // Dark mode font color
      } else {
        root.style.setProperty('--bg-color', '#fffafa'); // Light mode background color
        root.style.setProperty('--font-color', '#181818'); // Light mode font color
      }
    };

    // Call setThemeColors when the component mounts
    setThemeColors();

    const navElement = document.querySelector('nav');
    const hamburgerBars = document.querySelectorAll('.bar');

    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      navElement.classList.add('dark');

      // Update hamburger icon bars for dark mode
      hamburgerBars.forEach((bar) => {
        bar.style.backgroundColor = 'var(--font-color)';
      });
    } else {
      document.body.classList.remove('dark-theme');
      navElement.classList.remove('dark');

      // Update hamburger icon bars for light mode
      hamburgerBars.forEach((bar) => {
        bar.style.backgroundColor = 'var(--font-color)';
      });
    }
  }, [isDarkMode]);

  const handleToggleChange = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    // Save the mode to localStorage
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <div className="container">
      <input
        type="checkbox"
        id={`toggle${id}`}
        onChange={handleToggleChange}
        checked={isDarkMode}
      />
    </div>
  );
}

export default DarkModeToggle;