import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';  // importing React Bootstrap
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

import { store } from './Redux/store.js'
// Store is the place where all the state variables are stored.
import { Provider } from 'react-redux'
// Provider will give access of redux store to entire react App

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // As we have wrapped entire App component by using Provider component, so any nested component present in our react app can read or write to redux store from anywhere
  // </StrictMode>
  // </BrowserRouter>
)