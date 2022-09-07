// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Packages
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import ReactModal from 'react-modal';
import { CookiesProvider } from 'react-cookie';

// Components
import App from './shared/App';

// Shared
import theme from './shared/theme';

ReactModal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </ThemeProvider>
  </BrowserRouter>
);
