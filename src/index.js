import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

ReactDOM.render(
  <BrowserRouter history={createBrowserHistory()}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
