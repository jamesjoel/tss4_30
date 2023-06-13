import React from 'react';
import ReactDOM from 'react-dom/client';
import App4 from './App4';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  preloadedState : "rohit",
  reducer : (data)=>{
    return data;
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App4 />
    </Provider>
  </React.StrictMode>
);


