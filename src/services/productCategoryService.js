import axios from "axios";

const BASE_URL ="http://localhost:8081/user/category/";
const headers = {
    'content-type': 'application/json'
  };
class ProductCategoryService {
    // Get all categories
    getProductCategories(){
        return axios.get(BASE_URL, {headers:headers});
    }
    // Get category by id
    getProductByCategories(id){
        const newUrl=`${BASE_URL}${id}`;
        return axios.get(newUrl, {headers:headers});
    }
    // Get Product category by id
    getProductCategory(id){
        const url = `http://localhost:8081/user/categoryById/${id}`;
        return axios.get(url, {headers:headers});
    }
}

export default new ProductCategoryService()