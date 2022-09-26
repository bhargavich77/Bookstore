import axios from 'axios';

//signup 
export const signUp = (loginObj) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration", loginObj);
    return response;
}

// user login
export const login = (signUpObj) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login", signUpObj);
    return response;
}