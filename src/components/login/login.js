import React, {useState} from 'react'
import './login.css'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom"

const LoginPage = ( { setLoginUser } ) => {
    
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '', 
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = async () => {
        const {email, password} = user;

        if(email && password){
            const userData = axios.post('http://localhost:4002/login', user)
           
            if((await userData).data.message === 'Invalid password'){
                alert((await userData).data.message);
                navigate('/login')
            }
            else if((await userData).data.message === 'User not registered'){
                alert((await userData).data.message)
                navigate('/register')
            }

            else {
                userData.then(async (res) => {
                    alert(res.data.message);
                    await setLoginUser(res.data.user);
                    navigate('/register')
                })
            }

           
            // .catch
        }
    }

    return(
        <div className='login'>
            {console.log(user)}
            <h1>Login</h1>
            <input type='text' name='email' value={user.email} onChange={handleChange} placeholder='Enter your email '></input>
            <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='Enter your password'></input>

            <div className='button' onClick={login}>Login</div>
            <div>or</div>
            <div className='button'> <Link to="/register">Register</Link></div>
        </div>
    )
}


export default LoginPage;