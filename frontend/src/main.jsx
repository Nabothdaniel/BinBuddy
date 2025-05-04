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
        path:'home', // this is for the default route within /dashboard
        element: <Home />
      },
      {
        path: 'upload', // path for the Upload page
        element: <Upload />
      },
      {
        path: 'suggestions', // path for the Suggestions page
        element: <Suggestions />
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
