import { useEffect } from 'react';
import useDarkModeStore from '../../src/store/useDarkModeStore';

const useDarkModeHook = (id) => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  useEffect(() => {
    const root = document.documentElement;
    const toggleElement = document.querySelector(`#toggle${id}`);
    const navElement = document.querySelector('nav');
    const hamburgerBars = document.querySelectorAll('.bar');

    const setThemeColors = () => {
      root.style.setProperty('--bg-color', isDarkMode ? '#181818' : '#fffafa');
      root.style.setProperty('--font-color', isDarkMode ? '#fffafa' : '#181818');
      if (isDarkMode) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      }
    };

    const addTransitionToElement = (selector) => {
      const element = document.querySelector(selector);
      if (element) {
        element.style.transition = 'background 0.5s ease';
      }
    };

    const updateToggleStyles = () => {
      const toggleAfterElement = document.querySelector(`#toggle${id}:after`);
      if (toggleAfterElement && toggleElement) {
        toggleAfterElement.style.left = isDarkMode ? '27px' : '7px';
        toggleElement.checked = isDarkMode;
      }
    };

    const updateBodyAndNavStyles = () => {
      if (navElement) {
        document.body.classList.toggle('dark-theme', isDarkMode);
        navElement.classList.toggle('dark', isDarkMode);
      }

      if (hamburgerBars.length > 0) {
        hamburgerBars.forEach((bar) => {
          if (bar) {
            bar.style.backgroundColor = isDarkMode ? 'var(--font-color)' : 'var(--font-color)';
          }
        });
      }
    };

    const initializeToggleState = () => {
      const isFirstLoad = localStorage.getItem('isFirstLoad') !== 'false';
      if (isFirstLoad) {
        const toggleElement = document.querySelector(`#toggle${id}`);
    
        if (toggleElement) {
          toggleElement.style.transitionDuration = '0s';
          toggleElement.style.backgroundColor = isDarkMode ? 'var(--bg-color)' : 'var(--font-color)';
          toggleElement.checked = isDarkMode;
        }
    
        localStorage.setItem('isFirstLoad', 'false');
      }
      localStorage.setItem('darkMode', isDarkMode);
    };
    
    setThemeColors();
    const navColor = isDarkMode ? '#181818' : '#fffafa';
  if (navElement) {
    navElement.style.backgroundColor = navColor;
   
  }
    document.body.style.transition = 'background 0.5s ease';
    addTransitionToElement('nav');
    addTransitionToElement('.nav-links');
    updateToggleStyles();
    updateBodyAndNavStyles();
    initializeToggleState();
  }, [id, isDarkMode, toggleDarkMode]);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkModeHook;
