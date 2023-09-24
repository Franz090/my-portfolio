import React, { useState, useEffect } from 'react';

function DarkModeToggle({ id }) {
  // Read the dark mode state from local storage
  const storedDarkMode = localStorage.getItem('darkMode');
  const [isDarkMode, setIsDarkMode] = useState(
    storedDarkMode === 'true' || false
  );

  // Update theme colors based on the dark mode state
  useEffect(() => {
    const setThemeColors = () => {
      const root = document.documentElement;
      if (isDarkMode) {
        root.style.setProperty('--bg-color', '#181818');
        root.style.setProperty('--font-color', '#fffafa');
      } else {
        root.style.setProperty('--bg-color', '#fffafa');
        root.style.setProperty('--font-color', '#181818');
      }
    };

    setThemeColors();

    const toggleAfterElement = document.querySelector(`#toggle${id}:after`);
    const toggleElement = document.querySelector(`#toggle${id}`);
    
    if (toggleAfterElement && toggleElement) {
      toggleAfterElement.style.left = isDarkMode ? '27px' : '7px';
      toggleElement.checked = isDarkMode;
    }

    const navElement = document.querySelector('nav');
    const hamburgerBars = document.querySelectorAll('.bar');

    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      navElement.classList.add('dark');

      hamburgerBars.forEach((bar) => {
        bar.style.backgroundColor = 'var(--font-color)';
      });
    } else {
      document.body.classList.remove('dark-theme');
      navElement.classList.remove('dark');

      hamburgerBars.forEach((bar) => {
        bar.style.backgroundColor = 'var(--font-color)';
      });
    }

    const isFirstLoad = localStorage.getItem('isFirstLoad') !== 'false';
    if (isFirstLoad) {
      const toggleElements = document.querySelectorAll(`#toggle${id}`);
      toggleElements.forEach((toggleElement) => {
        toggleElement.style.transitionDuration = '0s';
        toggleElement.checked = isDarkMode;
      });
      localStorage.setItem('isFirstLoad', 'false');
    }
    localStorage.setItem('darkMode', isDarkMode);

  }, [isDarkMode]);

  const handleToggleChange = () => {
    setIsDarkMode((prevState) => !prevState);
  };


  return (
    <div className="container">
      <input
        type="checkbox"
        id={`toggle${id}`}
        onChange={handleToggleChange}
        checked={isDarkMode}
      />
      {isDarkMode ? (
        <style>
          {`
            #toggle${id}:checked:after {
              left: 25px;
              transform: translateX(5%);
            }
          `}
        </style>
      ) : null}
    </div>
  );
}

export default DarkModeToggle;