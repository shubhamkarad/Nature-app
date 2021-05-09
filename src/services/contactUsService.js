import axios from "axios";

const USER_BASE_URL = "http://localhost:8081/user/";

 class ContactUsService{
   
    // store the contact us form
    postResponse(user){
        return axios.post(USER_BASE_URL + "contact", user);
    }
   
 }
 export default new ContactUsService()