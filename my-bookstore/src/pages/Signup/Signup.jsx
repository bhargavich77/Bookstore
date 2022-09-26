import React from 'react'
import './Signup.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { signUp } from '../../services/Userservices';
const regexPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexFullName = /^[A-Z]{1}[a-z]{2,}$/;
const regexPhone = /[0-9]/;
function Signup() {

    const [signupObj, setSignupObj] = React.useState({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        service: "advance",
    });
    const [regexObj, setRegexObj] = React.useState({
        fullNameBorder: false,
        emailBorder: false,
        passwordBorder: false,
        phoneBorder: false,
        fullNameHelper: "",
        emailHelper: "",
        passwordHelper: "",
        phoneHelper: ""
    });

    
    const takeFullName = (event) => {
        
        setSignupObj((prevState) => ({
            ...prevState,
            fullName: event.target.value,
        }));
    };

    const takeEmail = (event) => {
        
        setSignupObj((prevState) => ({
            ...prevState,
            email: event.target.value,
        }));
    };

    const takePassword = (event) => {
        setSignupObj((prevState) => ({ ...prevState, password: event.target.value }));
    };

    const takePhone = (event) => {
        setSignupObj((prevState) => ({ ...prevState, phone: event.target.value }));
    };

    const submit = () => {
        let fullNameTest = regexFullName.test(signupObj.fullName);
        let emailTest = regexEmail.test(signupObj.email);
        let passwordTest = regexPassword.test(signupObj.password);
        let phoneTest = regexPhone.test(signupObj.phone);
        console.log(fullNameTest, emailTest, passwordTest, phoneTest);
        if (fullNameTest === false) {
            // console.log('something');
            setRegexObj((prevState) => ({
                ...prevState,
                fullNameBorder: true,
                fullNameHelper: "enter correct full name",
            }));
        } else {
            setRegexObj((prevState) => ({ ...prevState, fullNameBorder: false, fullNameHelper: "" }));
        }

        if (emailTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "enter correct email",
            }));
        } else {
            setRegexObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }));
        }

        if (passwordTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "enter correct password",
            }));
        } else {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: "",
            }));
        }

        if (phoneTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                phoneBorder: true,
                phoneHelper: "enter valid phone number",
            }));
        } else {
            setRegexObj((prevState) => ({
                ...prevState,
                phoneBorder: false,
                phoneHelper: " ",
            }));
        }
        if (fullNameTest === true && emailTest === true && passwordTest === true && phoneTest === true) {
            signUp(signupObj).then((response) => { console.log(response); localStorage.setItem('token', response.data.id) })
                .catch((error) => { console.log(error) })
            console.log("signup succeccful");
        }

    };
  return (
    
    <div className='textDivSignup'>
    
    <div className='textboxSignup'>
        <TextField id="outlined-basic" error={regexObj.fullNameBorder} helperText={regexObj.fullNameHelper} onChange={takeFullName}  label="Full Name" variant="outlined" size='small' />
    </div>
    <div className='textboxSignup'>
        <TextField id="outlined-basic" error={regexObj.emailBorder} helperText={regexObj.emailHelper} onChange={takeEmail}  label="Username" variant="outlined" size='small' className="inputUsername" />
    </div>
    <div className='textboxSignup'>
        <TextField id="outlined-basic" error={regexObj.passwordBorder} onChange={takePassword} helperText={regexObj.passwordHelper} label="Password" variant="outlined" size='small' className="inputText" />
    </div>
    <div className='textboxSignup'>
        <TextField id="outlined-basic" error={regexObj.phoneBorder} onChange={takePhone} helperText={regexObj.phoneHelper} label="Phone" variant="outlined" size='small' className="inputText" />
    </div>
    
    <div className='btnSignup'>
        
            <Button style={{
        
        backgroundColor: "#A03037",
    }} variant="contained" onClick={submit} fullWidth>SIGNUP</Button>
        
    </div>
</div>


  )
}

export default Signup