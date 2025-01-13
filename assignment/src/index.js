import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Validate from './components/Validate/Validate';
import Dashboard from './pages/Dashboard';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {path:"/", element: <Login/>},
      {path:"/validate", element: <Validate/>},
      {path:"/dashboard", element: <Dashboard/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);