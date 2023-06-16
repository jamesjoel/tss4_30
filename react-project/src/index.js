import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import CartSlice from './redux/CartSlice';
import UserAuthSlice from './redux/UserAuthSlice';
import AdminAuthSlice from './redux/AdminAuthSlice';

let combineRed = combineReducers({
  CartSlice,
  UserAuthSlice,
  AdminAuthSlice
})

let data = configureStore({
  reducer : combineRed
})


/*
let data = configureStore({
  cartSlice
})

*/



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={data}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


