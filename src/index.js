import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/rental-car">
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />

        <App />
        <ToastContainer autoClose={2000} position="top-right" />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
