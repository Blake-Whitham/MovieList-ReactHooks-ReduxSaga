import "regenerator-runtime/runtime";

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import store from './redux/store'

import App from './app.jsx'

// const Container = connect(mapStateToProps, mapDispatchToProps)(App);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)