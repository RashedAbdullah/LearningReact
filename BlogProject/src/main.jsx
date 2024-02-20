import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/publicCss.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
console.log(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
)
