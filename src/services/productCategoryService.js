import axios from "axios";

const BASE_URL ="http://localhost:8081/user/category/";
const headers = {
    'content-type': 'application/json'
  };
class ProductCategoryService {

    getProductCategories(){
        return axios.get(BASE_URL, {headers:headers});
    }
    getProductByCategories(id){
        const newUrl=`${BASE_URL}${id}`;
        return axios.get(newUrl, {headers:headers});
    }
    getProductCategory(id){
        const url = `http://localhost:8081/user/categoryById/${id}`;
        return axios.get(url, {headers:headers});
    }
}

export default new ProductCategoryService()