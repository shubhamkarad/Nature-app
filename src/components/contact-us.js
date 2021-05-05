import React, { Component } from 'react';
import UserService from "../services/userService";

class ContactUs extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            phoneNo:"",
            query:"",
            nameError:"",
            emailError:"",
            phoneNoError:"",
            queryError:""
        }
        this.onNameChange=this.onNameChange.bind(this);
    }
    // on submit form
    submitForm = (e)=>{
        e.preventDefault();
        let user = {name:this.state.name, email:this.state.email,
             phoneNo:this.state.phoneNo, query:this.state.query}
             console.log('user data =>' +JSON.stringify(user));
        UserService.postResponse(user)
        .then(res=>
            console.log(res.data));
            this.setState({
            name:"",
            email:"",
            phoneNo:"",
            query:""
        })
        // this.props.history.push("/home");

        const isValid = this.validate();
        if(isValid){
            alert(`hey ${this.state.name} thanks for contacting us.`)
            console.log(this.state);
        }
    }
    //event binding 
    onNameChange=(e)=>{
        this.setState({name: e.target.value});
    }
    onEmailChange=(e)=>{
        this.setState({email: e.target.value});
    }
    onPhoneNoChange=(e)=>{
        this.setState({phoneNo: e.target.value});
    }
    onQueryChange=(e)=>{
        this.setState({query: e.target.value});
    }
    //validation for form
    validate(){
        let nameError;
        let emailError;
        let phoneNoError;
        let queryError;
        if(!this.state.name){
            nameError="Name should not be empty";
        }
        else if(!this.state.name.match(["^[a-zA-Z\s]+$"])){
            nameError="Name should contain characters only";
        }
        //email validation
        if(!this.state.email){
            emailError = "Email cannot not be empty";
        }
        else if(!this.state.email.match(["^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"])){
            emailError = "Please enter a valid Email";
        }
        if(!this.state.phoneNo){
            phoneNoError="It should not be empty";
        }
        //query validation
        if(!this.state.query){
            queryError = "Please add your query";
        }
        if(nameError || emailError || phoneNoError || queryError){
            this.setState({nameError, emailError, phoneNoError, queryError});
            return false;
        }
        return true;
    }
    render() {
        return (
                <div>
                <div className="contactUsBlock">
                    <h3>CONTACT US</h3>
                    <div className="contactUsForm">
                        <form name="contactForm" onSubmit={this.submitForm}>
                            <h2>Contact</h2>
                            <div className="form-group">
                                <p>
                                    <label htmlFor="cust_name">Name :</label>
                                    <input type="text" id="customerName" value={this.state.name}
                                    onChange={this.onNameChange}/>
                                    <div className="error">{this.state.nameError}</div>
                                </p>   
                                     
                            </div>
                           
                            <div className="form-group">
                                <p>
                                    <label htmlFor="cust_name">Email : </label>
                                    <input type="text" id="customerMail" value={this.state.email}
                                    onChange={this.onEmailChange}/>
                                    <div className="error">{this.state.emailError}</div>
                                    </p>
                            </div>

                            <div className="form-group">
                                <p>
                                    <label htmlFor="cust_name">Phone:</label>
                                    <input type="text" id="customerNumber"value={this.state.phoneNo}
                                    onChange={this.onPhoneNoChange}/>
                                    <div className="error">{this.state.phoneNoError}</div>
                                    </p>
                            </div>

                            <div className="form-group">
                                <p>
                                    <label htmlFor="cust_message" className="query">Query:</label><br/>
                                    <textarea rows="4" id="customerNote" name="customerNote" value={this.state.query}
                                    onChange={this.onQueryChange}></textarea>
                                    <div className="error">{this.state.queryError}</div>
                                    </p>
                            </div>
                            <a><input type="submit" id="submit" disabled={this.state.name.length<1 || 
                            this.state.email.length<1 || this.state.phoneNo.length<1 || this.state.query.length<1}value="Submit" /></a>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;