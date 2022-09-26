import React from 'react'
import'./Signin.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { login } from '../../services/Userservices';
import { useNavigate } from "react-router-dom";

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signin() {
  const navigate = useNavigate();
    const [regexObj, setRegexObj] = React.useState({
        emailBorder: false,
        emailHelper: " ",
        passwordBorder: false,
        passwordHelper: " ",
      });
      const [signinObj, setSigninObj] = React.useState({ email: "", password: "" });
    
      const takeEmail = (event) => {
        setSigninObj((prevState) => ({ ...prevState, email: event.target.value }));
      };
    
      const takePassword = (event) => {
        setSigninObj((prevState) => ({...prevState, password: event.target.value}));
      };
      const submit = () => {
        let emailTest = emailRegex.test(signinObj.email);
        let passwordTest = passwordRegex.test(signinObj.password);
        if (emailTest === false) {
          setRegexObj((prevState) => ({
            ...prevState,
            emailBorder: true,
            emailHelper: "enter correct email",
          }));
        } else if (emailTest === true) {
          setRegexObj((prevState) => ({
            ...prevState,
            emailBorder: false,
            emailHelper: "",
          }));
        }
        if (passwordTest === false) {
          setRegexObj((prevState) => ({
            ...prevState,
            passwordBorder: true,
            passwordHelper: "enter correct password",
          }));
        } else if (passwordTest === true) {
          setRegexObj((prevState) => ({
            ...prevState,
            passwordBorder: false,
            passwordHelper: "",
          }));
        }
        if (emailTest===true && passwordTest === true) {
          login(signinObj)
              .then((resp) => { console.log(resp); localStorage.setItem('token', resp.data.result.accessToken); navigate('/Home') })
              .catch((error) => { console.log(error) })
              console.log("successfull login");
      }
      };
  return (
    <div className='signinDiv'>
     
      <div className='textDivSignin'>

        <div className='textbox'>
          
          <TextField id="outlined-basic" error={regexObj.emailBorder} onChange={takeEmail}
          helperText={regexObj.emailHelper} label="Email" variant="outlined" size='small' />
        </div>
        <div className='textbox'>
          
          <TextField id="outlined-basic" error={regexObj.passwordBorder} onChange={takePassword} helperText={regexObj.passwordHelper} label="Password" variant="outlined" size='small' />
        </div>
        <div className="addText">
          <label>Forgot Password?</label>
        </div>
        <div className='btn1'>
          
            <Button style={{
        
        backgroundColor: "#A03037",
    }}variant="contained"  onClick={submit} fullWidth>LOGIN</Button>
          
        </div>
        <div>
          <h3 style={{ textAlign: "center" }} >----------------- OR -----------------</h3>
        </div>
        <div className='btn2'>
          <Button variant="contained">FACEBOOK</Button>
          <Button variant="contained">GOOGLE</Button>
        </div>
      </div>
    </div>
  )
}

export default Signin