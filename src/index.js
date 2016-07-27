import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from '../src/reducers/index'

let store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
