import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css'
import App from './App.jsx'

//import pages
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';

//dashboard sub-pages
import Home from './components/Dashboard/Home.jsx';
import Suggestions from './components/Dashboard/Suggestions.jsx';
import Upload from './components/Dashboard/Upload.jsx';
import Profile from './components/Dashboard/Profile.jsx';
import Notifications from './components/Dashboard/Notfications.jsx';
import Privacy from './components/Dashboard/privacy.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        index: true, // default route for /dashboard
        element: <Home />
      },
  
      {
        path: 'upload',
        element: <Upload />
      },
      {
        path: 'suggestions',
        element: <Suggestions />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'notifications',
        element: <Notifications />
      },
      {
        path: 'privacy',
        element: <Privacy />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" />
  </StrictMode>
);
