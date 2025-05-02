import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import './index.css'
import App from './App.jsx'

//import pages

import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  },

  

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" />
  </StrictMode>
)
