import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './reducers';
import Middleware from './middleware';


const store = createStore(Reducers, Middleware);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))