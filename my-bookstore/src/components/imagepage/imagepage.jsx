import React from 'react'
import './imagepage.css'
import Signin from '../../pages/Signin/Signin'
import Signup from '../../pages/Signup/Signup'
import storeimage from '../../images/storeimage.png'

function Imagepage() {
  const [loginTab, setLoginTab] = React.useState(true)
  
  const loginPage = () => {
    setLoginTab(true)
  }

  const signupPage = () => {
    setLoginTab(false)
  }
  return (
    <div className='mainDiv'>
      <div className='imgDiv'>
        <div className='img1'>
          <img src={storeimage} alt='' className='image' />
        </div>
        <div className='imgText'>
          <p id='text1'>ONLINE BOOK SHOPPING</p>
        </div>
      </div>
      <div className='textDiv'>
        <div className='text2'>
          <h3 onClick={loginPage}>LOGIN</h3>
          <h3 onClick={signupPage}>SIGNUP</h3>
        </div>
        <div className='blankDiv'>
          {
            loginTab ? <Signin /> : <Signup />
          }
        </div>
        </div>
      </div>
  )
}

export default Imagepage