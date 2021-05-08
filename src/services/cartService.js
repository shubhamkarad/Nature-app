import axios from 'axios';
    // import token interceptor library
    const tokenProvider = require('axios-token-interceptor');
    const instance = axios.create({
        baseURL: 'http://localhost:8081/user/cart'
    });
    // get token by request
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

class CartService {
    // Add items to cart
    addItems(email,productsToAdd){
        return instance.post("",{email:email,productsToAdd:productsToAdd} ,{headers:headers});
    }
    // Get items from email
    getItems(email){
        return instance.post("id",{email:email},{headers:headers});
    }
    // Update the cart by Removing the products from carts
    emptyCart(email){
        return instance.put("empty",{email:email},{headers:headers});
    }
    // Update the cart
    updateCart(email,productsToUpdate){
        return instance.put("update",{email:email,productsToUpdate:productsToUpdate},{headers:headers});
    }

}

export default new CartService()