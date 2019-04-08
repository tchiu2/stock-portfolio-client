import React from 'react';
import ReactDOM from 'react-dom';
import JWTDecode from 'jwt-decode';
import './styles/index.css';
import App from './components/App';
import configureStore from './store/store';
import * as serviceWorker from './serviceWorker';

let store;
if (sessionStorage.jwt) {
  let decoded = JWTDecode(sessionStorage.jwt);
  const preloadedState = { 
    session: {
      currentUser: decoded.id,
    }
  };

  store = configureStore(preloadedState);
} else {
  store = configureStore();
}

window.getState = store.getState;

ReactDOM.render(<App store={ store } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
