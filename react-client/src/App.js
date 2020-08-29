import React, { Fragment } from 'react';
import Header from './components/layout/Header';
import Characters from './components/characters/Characters';
const App = () => {
  return (
    <Fragment>
      <Header />
      <Characters />
    </Fragment>
  );
};

export default App;
