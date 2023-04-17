import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';
import lightTheme from './theme_light';
import darkTheme from './theme_dark';

const useTheme = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const theme = currentTheme === 'light' ? lightTheme : darkTheme;
  return { theme, toggleTheme };
};

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  const theme = currentTheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <div style={{ background: theme.background, color: theme.color, minHeight: '100vh' }}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              useTheme,
            });
          }
          return child;
        })}
      </div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useTheme };
export default ThemeProvider;
