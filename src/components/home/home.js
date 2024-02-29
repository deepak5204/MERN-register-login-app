import React from 'react'
import './home.css'
import { useNavigate, Link } from "react-router-dom"


const HomePage = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login')
        
    }

    return(
        <div className='homepage'>
            <h1>hello homepage</h1>    

            <div className='button' onClick={handleClick}>Logout</div>
        </div>
    )
}


export default HomePage;