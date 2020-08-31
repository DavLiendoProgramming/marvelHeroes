import React, { useState } from 'react';
import Header from './components/layout/Header';
import Characters from './components/characters/Characters';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/layout/GlobalStyle';
import { lightTheme, darkTheme } from './components/layout/Themes';
const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header setTheme={setTheme} />
      <Characters />
    </ThemeProvider>
  );
};

export default App;
