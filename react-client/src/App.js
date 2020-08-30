import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Characters from './components/characters/Characters';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyle';
import { lightTheme, darkTheme } from './components/Themes';
const App = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <Characters />
    </ThemeProvider>
  );
};

export default App;
