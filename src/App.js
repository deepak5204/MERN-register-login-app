import './App.css';

import HomePage from './components/home/home';
import LoginPage from './components/login/login';
import RegisterPage from './components/register/register';

function App() {
  return (
    <div className="App">
     <HomePage />
     <LoginPage />
     <RegisterPage />
    </div>
  );
}

export default App;
