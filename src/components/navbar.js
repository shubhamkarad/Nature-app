import React, { Component } from 'react';
import{Link, NavLink} from "react-router-dom";
import productCategoryService from '../services/productCategoryService';
class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={
            categories:[]
        }
    }
    componentDidMount(){
        productCategoryService.getProductCategories().then(res=>{
        this.setState({categories:res.data.message});
    }).catch(err=>{
      console.log(err);
    });
    }
    render() {
        var referto="";
        return (
            <div>
                <div className="nav">
                <nav>
                    <ul>
                        <li><Link to="/"><a href="/">HOME</a></Link></li>
                        <li><div className="dropdown">
                                <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/products"
                      >
                       <button className="dropbtn">PRODUCTS</button> 
                </NavLink>
                    <div className="dropdown-content">
                        {
                        this.state.categories && this.state.categories.map((val)=>{
                          referto="/productsByCategory/"+val.id;
                          return <a key={val.id} href={referto}>{val.name}</a>
                          })
                        }
                    </div>
                </div></li>
            <li><NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/about-us"
                      >
                        ABOUT US
                </NavLink></li>
            <li><NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/contact-us"
                      >
                        CONTACT US
                </NavLink></li>
            <li><NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/feedback"
                      >
                        FEEDBACK
                </NavLink></li>
                    </ul>
                </nav>
            </div>
            </div>
        );
    }
}

export default Navbar;