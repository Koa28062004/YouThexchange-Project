import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './App';
import Run from './run'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homepage/>
    <Run></Run>
  </React.StrictMode>
);