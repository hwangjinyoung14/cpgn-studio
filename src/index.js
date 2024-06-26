import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/reset.css';
import './style/index.css';
import './style/app.css';
import './style/responsive.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// React Router v6
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
