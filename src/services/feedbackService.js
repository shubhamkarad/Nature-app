import axios from "axios";
const USER_BASE_URL = "http://localhost:8081/user/";

 class FeedbackService{
   
    // store the feedack form 
    postFeedback(user){
        return axios.post(USER_BASE_URL + "feedback", user);
    }
   
 }
 export default new FeedbackService()