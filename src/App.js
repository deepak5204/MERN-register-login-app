import React, { useState } from 'react';
import './App.css';


import HomePage from './components/home/home';
import LoginPage from './components/login/login';
import RegisterPage from './components/register/register';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {Route} from 'react-router'


function App() {

  const [user, setLoginUser] = useState({})

  return (
   <Router>
    <Routes>
      <Route path='/login' element={<LoginPage  setUser={setLoginUser}/>} />
      <Route exact path='/' element={<HomePage />} /> 
      <Route path='/register' element={<RegisterPage /> } />  
    </Routes>
   </Router>
  )
}

export default App;
