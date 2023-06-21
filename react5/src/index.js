import React from 'react';
import ReactDOM from 'react-dom/client';
import App2 from './App2';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import AlbumSlice from './redux/AlbumSlice';
import TeacherSlice from './redux/TeacherSlice';
import EmployeeSlice from './redux/EmployeeSlice';

let allRed = combineReducers({
  AlbumSlice, TeacherSlice, EmployeeSlice
})

let store = configureStore({
  reducer : allRed
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
          <App2 />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


