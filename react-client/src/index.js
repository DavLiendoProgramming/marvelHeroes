import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ mode: 'light' }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
