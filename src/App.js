import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


import HomePage from './components/home/home';
import LoginPage from './components/login/login';
import RegisterPage from './components/register/register';


function App() {
  return (
    <div>
       <HomePage />
       {/* <LoginPage /> */}
    </div>

    // <Router>
    //   {/* <Switch>
    //     <Route path='/'> <HomePage /> </Route>
    //   </Switch> */}
    // </Router>
  );
}

export default App;
