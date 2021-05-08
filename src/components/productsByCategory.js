import React, { Component } from 'react';
import ProductCategoryService from '../services/productCategoryService';

class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.match.params.id,
            products:[],
            category:{}
        }
    }
    // Get products by categories
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
                    <a class="bonsaiBox" href = {referTo}><img src={value.images[0]} alt={value.productName}/>
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