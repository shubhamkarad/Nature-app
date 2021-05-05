import React, { Component } from 'react';
import{Link} from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="nav">
                <nav>
                    <ul>
                        <li><Link to="/"><a>HOME</a></Link></li>
                        <li><div className="dropdown">
                                <a href="products.html"><button className="dropbtn">PRODUCTS</button></a>
                                <div className="dropdown-content">
                                    <a href="bonsai.html">Bonsai</a>
                                    <a href="#">Flower saplings</a>
                                    <a href="#">Fruit saplings</a>
                                    <a href="#">Organic manure</a>
                                    <a href="#">Gardening tools</a>
                                    <a href="#">Vegetable saplings</a>
                                    <a href="#">Fruit seeds</a>
                                    <a href="#">Vegetable seeds</a>
                                    <a href="#">Special Offers</a>
                                </div>
                            </div></li>    
                        <li><Link to="/about-us"><a>ABOUT US</a></Link></li>
                        <li><Link to="/contact-us"><a>CONTACT US</a></Link></li>
                        <li><Link to="/feedback"><a>FEEDBACK</a></Link></li>
                    </ul>
                </nav>
            </div>
            </div>
        );
    }
}

export default Navbar;