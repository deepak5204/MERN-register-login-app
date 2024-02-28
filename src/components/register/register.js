import React, { useState } from 'react'
import './register.css'
import axios  from 'axios';

const RegisterPage = () => {

    const [user, setUser] = useState({
        name: '',
        email: '', 
        password: '',
        passwordConfirm: ''
    });

    const handleChange = (e) => {
        const {name, value}= e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const register = () => {
        const {name, email, password, passwordConfirm } = user

        if(name && email && password && (passwordConfirm === password)) {
            axios.post('http://localhost:4002/register', user)
        } else {
            alert('Invalid input')
        }
    }

    return(
        <div className='register'>
            {console.log("user", user)}
            <h1>Register</h1>
            <input type='text' name="name" value={user.name} placeholder='Enter your name' onChange={handleChange} ></input>
            <input type='text' name='email' value={user.email} placeholder='Enter your email ' onChange={handleChange} ></input>
            <input type='password' name='password' value={user.password} placeholder='Enter your password' onChange={handleChange}></input>
            <input type='password' name='passwordConfirm' value={user.passwordConfirm} placeholder='Re-enter your password' onChange={handleChange}></input>

            <div className='button' onClick={register}>Register</div>
            <div>or</div>
            <div className='button'>Login</div>
        </div>
    )
}


export default RegisterPage;