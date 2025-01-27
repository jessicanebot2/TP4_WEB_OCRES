import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Vitals from './Vitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: Vitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
Vitals();
