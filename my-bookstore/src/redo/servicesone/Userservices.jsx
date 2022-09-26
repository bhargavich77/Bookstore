import axios from "axios";

export const SignUp = (SignupObj) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",SignupObj)
    return response;
}

export const LogIn = (LoginObj) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login",LoginObj)
    return response
}