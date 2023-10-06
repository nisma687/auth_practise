import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './component/Root.jsx'
import Home from './component/Home';
import Login from './component/login';
import Register from './component/register';
import AuthProviders from './component/providers/AuthProviders';
import Oders from './component/Oders';
import PrivateRoutes from './Routes/PrivateRoutes';
import Profile from './component/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path: "/",
        element:<Home />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/register',
        element:<Register />
      },
      {
        path:'/orders',
        element:<PrivateRoutes>
          <Oders />
        </PrivateRoutes>
      },
      {
        path:'/profile',
        element:<PrivateRoutes>
          <h1>Profile</h1>
        </PrivateRoutes>
      },
      {
        path:'/dashboard',
        element:<PrivateRoutes>
          <h1>Dashboard</h1>
        </PrivateRoutes>
      },
      {
        path:'/profile',
        element:<PrivateRoutes>
          <Profile />
        </PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
