import axios from "axios";
// Javascript library for parsing, validating, manipulating and formatting Date 
import * as moment from 'moment';
const USER_BASE_URL = "http://localhost:8081/user/";

 class UserService{
   
    // create a new account
    signup(user){
        return axios.post(USER_BASE_URL, user);
        
    }
    // login end point 
    //using email and password
    login(user){
        return axios.post(USER_BASE_URL + "login", user);
    }
        setLocalStorage(responseObj) {
        const expiresAt = moment().add(responseObj.data.expiresIn);
        console.log(responseObj.data);
        localStorage.setItem('id_token', responseObj.data.token);
        localStorage.setItem('name',responseObj.data.name);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
      }

    //Logout function to remove items from localStorage
    logout() {
        localStorage.removeItem('email');
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        localStorage.removeItem('name');
        localStorage.removeItem('productId');
        localStorage.removeItem('productName');
    }
    isLoggedIn() {
        return moment().isAfter(this.getExpiration());
    }
    
    //Function to check if user is logged out or not
    isLoggedOut() {
        return !this.isLoggedIn();
    }
    
    //Function to check the status of token
    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }

 }
 export default new UserService()