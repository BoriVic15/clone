import React from 'react';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ReactDOM from 'react-dom';;
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
