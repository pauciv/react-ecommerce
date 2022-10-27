// es el entry point de nuestra app
// es lo que le decimos a webpack para construir la app
// a partir de aquí vamos a ir importando módulos

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
