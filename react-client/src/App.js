import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppContext from './AppContext';
import Header from './components/layout/Header';
import Characters from './components/characters/Characters';
import CharactersFav from './components/characters/CharactersFav';
import CharactersSearched from './components/characters/CharacterSearched';
import ComicView from './components/comics/ComicView';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/layout/GlobalStyle';
import { lightTheme, darkTheme } from './components/layout/Themes';
const App = () => {
  const [theme, setTheme] = useState('light');
  const [input, setInput] = useState();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyles />
        <Header
          setTheme={setTheme}
          themeVal={theme}
          setInput={setInput}
          input={input}
        />
        <Switch>
          <Route exact path="/">
            <Characters />
          </Route>
          <Route exact path="/character">
            <CharactersSearched char setChar />
          </Route>
          <Route exact path="/favorites">
            <CharactersFav />
          </Route>
          <Route exact path="/comic">
            <ComicView input />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
