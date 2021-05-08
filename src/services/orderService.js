import axios from 'axios';
 // import token interceptor library
const tokenProvider = require('axios-token-interceptor');
  // create instance
 const instance = axios.create({
    baseURL: 'http://localhost:8081/user/order'
  });
// Get token request
instance.interceptors.request.use(tokenProvider({
  getToken: () => {
      if(localStorage.getItem('id_token')){
      return localStorage.getItem('id_token').split("Bearer ")[1];
    }
}
})); 

const headers = {
    'content-type': 'application/json'
};

class OrderService {
    // Add products in orderList
    addItems(email,total_per_item,total){
        return instance.post("add",{email:email,total_per_item:total_per_item,total:total} ,{headers:headers});
    }
    // Get the items
    getItems(email){
        return instance.post("",{email:email},{headers:headers});
    }

}

export default new OrderService()