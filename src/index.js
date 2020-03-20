import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers, createStore } from "redux";
import { Provider } from 'react-redux';
import './styles/styles.scss';
import { searchedProducts, suggestedProducts } from './models'

const rootReducer = combineReducers({ searchedProducts, suggestedProducts });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
