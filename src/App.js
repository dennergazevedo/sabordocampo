import React from "react";

// ROUTES
import { Router } from "react-router-dom";
import Routes from './routes';

// TOAST
import { ToastContainer } from 'react-toastify';

// REDUX / PERSIST
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';

// STYLES
import GlobalStyles from '../src/styles/global';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// SERVICES
import history from './services/history';

function cors() {

  let headers = new Headers();

  headers.append('Access-Control-Allow-Origin', 'http://localhost:0300');

  headers.append('GET', 'POST');
}

function App(){
  cors()
  return(
    <>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes/>
            <ToastContainer autoClose={3000}/>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;