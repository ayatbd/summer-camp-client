import React, { useState, createContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import Animation from './Animation';
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';

// Create a context for the theme
export const ThemeContext = createContext();

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <div className={`bg-${isDarkMode ? 'gray-900' : 'white'}`}>
        <div className="flex justify-end p-4">
          <button
            className={`p-2 rounded-full ${
              isDarkMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
            }`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
        <Slider />
        <Animation />
        <PopularClasses />
        <PopularInstructors />
      </div>
    </ThemeContext.Provider>
  );
};

export default Home;
