import React, { useState } from 'react'
import './orderlogin.css'
import image from './2766594.png'
import Login from '../../components/login/login'
import Signup from '../../components/signup/signup'
function Orderlogin() {
    
    const [loginSignup,setLoginSignup] = useState(true)
    const viewLogin = () => {
        setLoginSignup(true)
    }
    const viewSignup = () => {
        setLoginSignup(false)
    }
  return (
    <div className='main-box'>
        <div className='sub-box1'>
            <img className='orderlogin-image' src={image} />
            <p className='text'>ONLINE BOOK SHOPPING</p>
        </div>
        <div className='sub-box2'>
            <div className='heading'>
                <h1 className='login' onClick={viewLogin}>LOGIN</h1>
                <h1 className='signup' onClick={viewSignup}>SIGNUP</h1>
                
            </div>
           
                {
                    loginSignup ? <Login /> : <Signup />
                }
           
            
            
        </div>
    </div>
    )
}

export default Orderlogin