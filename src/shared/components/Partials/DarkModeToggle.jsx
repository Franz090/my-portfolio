import React from 'react';
import useDarkModeHook from '../../../hooks/useDarkmodehook'; 

const DarkModeToggle = ({ id }) => {
  const { isDarkMode, toggleDarkMode } = useDarkModeHook(id);

  return (
    <div className="container">
      <input
        type="checkbox"
        id={`toggle${id}`}
        onChange={toggleDarkMode}
        checked={isDarkMode}
        style={{
          backgroundColor: isDarkMode ? '#fffafa' : '#181818',
        }}
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
};

export default DarkModeToggle;