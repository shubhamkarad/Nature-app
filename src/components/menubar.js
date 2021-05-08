import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ProductCategoryService from '../services/productCategoryService';
class Menubar extends Component {
    constructor(props){
        super(props);
        this.state={
            categories:[]
        }  
    }
    // fetching the menulist from productCategory
    componentDidMount(){
        ProductCategoryService.getProductCategories()
        .then(res=>{
            this.setState({categories : res.data.message});
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        });
    }
    render() {
        let referTo="";
        return (
            <div>
                <div className="menu">
                <p>PRODUCT CATEGORIES</p>
                {this.state.categories && this.state.categories.map((value)=>{
                    referTo="/productsByCategory/"+value.id;
                
                return <Link to={referTo} className="links" key={value.id}>{value.name}</Link>
                })
                }    
                </div>
            </div>
        );
    }
}

export default Menubar;