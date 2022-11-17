import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import Demo from './Demo';
import { DataContextProvider } from './context/DataContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <DataContextProvider>
        <App />
        {/* <Demo /> */}
      </DataContextProvider>
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </>
);

// es el entry point de nuestra app
// es lo que le decimos a webpack para construir la app
// a partir de aquí vamos a ir importando módulos
