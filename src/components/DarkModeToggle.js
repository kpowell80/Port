import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './DarkModeToggle.css';

function DarkModeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className="dark-mode-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      type="button"
    >
      <div className={`toggle-track ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="toggle-thumb"></div>
      </div>
    </button>
  );
}

export default DarkModeToggle;
