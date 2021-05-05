import React, { Component } from 'react';
// import Apple from "../assets/Bonsai/Apple.jpg";
// import Mango from "../assets/Bonsai/Mango.jpg";
// import Grapes from "../assets/Bonsai/Grapes.jpg";
// import Orange from "../assets/Bonsai/Orange.jpg";
// import Bodhi from "../assets/Bonsai/Bodhi.jpg";
// import Azalea from "../assets/Bonsai/Azalea.jpg";
// import MandarinCoolieHat from "../assets/Bonsai/MandarinCoolieHat.jpg";
// import Hibiscus from "../assets/Bonsai/Hibiscus.jpg";
import ProductCategoryService from '../services/productCategoryService';
// import { getConstantValue } from 'typescript';
class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.match.params.id,
            products:[],
            category:{}
        }
    }
    componentDidMount(){
        ProductCategoryService.getProductByCategories(this.state.id)
        .then(res =>{
            this.setState({ products: res.data.message});
            console.log(res.data.message);
        }).catch(err=>{ console.log(err) });

        ProductCategoryService.getProductCategory(this.state.id)
        .then(res =>{
            this.setState({ category :res.data.message[0]});
             console.log(res.data.message);
        }).catch(err =>{ console.log(err) });
    }
    render() {
        var referTo="";
        return (
            <div>
                 <div className="productsAvailable">
                     <h2>Products Available</h2>
                     <h3>{this.state.category.name}</h3>
                </div> 
                <div class="bonsai">
                    {this.state.products && this.state.products.map((value)=>{
                        referTo ="/product-details"+value.id;
                return <div class="fruitbonsai" key={value.id}>
                    <a  href = {referTo} class="bonsaiBox" ><img src={value.images[0]} alt={value.productName}/>
                    <div class="box">
                    <h3>{value.productName}</h3>
                    </div>
                    </a>
                </div>
                 })
                }
            </div>   
            </div>
        );
    }
}

export default Products;