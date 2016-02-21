import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// var React = require('react');
// var ReactDOM = require('react-dom');
// var App = require('./components/App');

// ReactDOM.render(
//   <App />,
//   document.getElementById('main')
// );

// var store = require('./store');
// window.store = store;