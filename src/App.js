import React, { useState } from 'react';
import './App.css';


import HomePage from './components/home/home';
import LoginPage from './components/login/login';
import RegisterPage from './components/register/register';
import NotFound from './components/notFound/notFound'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import {Route} from 'react-router'


function App() {

  const [user, setLoginUser] = useState({});

  const router = createBrowserRouter([
    {
      
      path: '/',
      element: <HomePage />,
      errorElement: <NotFound />
    },
    {
      path: '/login',
      element: <LoginPage setLoginUser={setLoginUser} />
    },
    {
      path: '/register',
      element: <RegisterPage />
    }
  ])

  return (
    <React.StrictMode>
    <RouterProvider router = {router} />
   </React.StrictMode>
  )
}


export default App;
