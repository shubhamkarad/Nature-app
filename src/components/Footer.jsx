import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                <div className="follow">
                   <h3>Follow Us</h3>
                   <p><img src="/assets/Logo/AllLogo.jpg" alt="logo"/><br/>
                   We also accept:<br/><br/>
                   <img src="/assets/Logo/visaLogo.jpg" alt="visaLogo"/></p>
                </div>
                <div className="support">
                    <h3>Support</h3>
                    <ul type="none" >
                        <li><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link></li>
                        <li><Link to="/products" style={{ color: 'inherit', textDecoration: 'inherit'}}>Products available</Link></li>
                        <li><Link to="/about-us"style={{ color: 'inherit', textDecoration: 'inherit'}}>About Us</Link></li>
                        <li><Link to="/contact-us"style={{ color: 'inherit', textDecoration: 'inherit'}}>Contact us</Link></li>
                        <li><Link to="/feedback"style={{ color: 'inherit', textDecoration: 'inherit'}}>Feedback</Link></li>
                    </ul>
                </div>
                <div className="account">
                    <h3>My Accounts</h3>
                     <ul type="none" >
                            <li>My account</li>
                            <li>My orders</li>
                            <li>My credit slips</li>
                            <li>My addresses</li>
                            <li>My personnel information</li>
                     </ul>
                </div>
                <div className="useful">
                    <h3>Useful Links</h3>
                    <ul type="none" >
                                <li>Specials</li>
                                <li>New Products</li>
                                <li>Best sellers</li>
                                <li>Our store(s)!</li>
                                <li>Contact us</li>
                                <li>Shipping and Delivery policy</li>
                                <li>Privacy Policy</li>
                                <li>Frequently Asked Questiones</li>
                                <li>Terms and Conditions of Use</li>
                    </ul>
                </div>
                <div className="copyright">
                    <h3>&copy;2017 Nature's Paradise, All rights reserved.</h3>
                </div>
                <div className="address">
                    <h3>Written by Nature's Paradise.<br/>
                        Visit us at:natureparadise.in or at MG Road,Bangalore, KA, India </h3>
                </div>
            </footer>
            </div>
        );
    }
}

export default Footer;