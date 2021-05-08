import React, { Component } from 'react';
import ProductService from '../services/productService';
class ProductDetails extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:this.props.match.params.id,
            product:{id:"",},
            position:""
        }
        this.addProduct= this.addProduct.bind(this);
    }
    // get the Product details using product id
    componentDidMount(){
        ProductService.getProduct(this.state.id).then(res=>{
            console.log(res.data.message);
            let prod = res.data.message[0];
            let id = prod.id;
            let categoryId = prod.categoryId;
            let productName = prod.productName;
            let images = prod.images.slice(1, );
            let description = prod.description;
            let price = prod.price;
            let position = description.split("Position :")[1];
            this.setState({position:position});
            description=description.split("Position :")[0];
            this.setState({product:{id:id, categoryId:categoryId, productName:productName, images:images, description:description, price:price}})    
        }).catch(err =>{
            console.log(err);
        })
    }
     // add products to cart
     addProduct(){
       console.log(this.state);
      localStorage.setItem('productId',this.state.product.id);
      localStorage.setItem('productName',this.state.product.productName);
      localStorage.setItem('productPrice',this.state.product.price);
      this.props.history.push("/cart");
    }

    render() {
        return (
            <div>
                <div class="appleBonsai">
                <div class="Description">
                <h2>{this.state.product.productName}</h2>
                </div>
                <div class="appleImage">
                    {this.state.product.images && this.state.product.images.map((value, index)=>{
                        return <span key={index}>
                            <img className="apple1" src = {value} alt={this.state.product.productName}></img>
                        </span>
                    })
                    }
                </div>
                <div class="Description">
                    <p>{this.state.product.description}<br/>
                    <b>Position :</b>{this.state.position}</p>
                    <div class="select">
                    <h3>{this.state.product.price}</h3>
                    <input type="submit" value="Buy Product" onClick={this.addProduct}/>
                    <span style={{marginLeft:'10px'}}></span><input type="submit" value="Back" onClick={()=>this.props.history.goBack()}/>
                    </div>
                </div>
                </div> 
            </div>
        );
    }
}

export default ProductDetails;