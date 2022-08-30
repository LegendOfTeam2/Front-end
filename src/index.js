// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux
import { Provider } from 'react-redux';
import store from './redux/configStore';

// Packages
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

// Components
import App from './shared/App';

// Shared
import theme from './shared/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
