import React, { Component } from 'react';
import UserService from "../services/userService";
const email=localStorage.getItem('email');
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
        this.initialState=this.state;
        this.onNameChange=this.onNameChange.bind(this);
        this.onPhoneNoChange=this.onPhoneNoChange.bind(this);
        this.onQueryChange=this.onQueryChange.bind(this);
    }
    // on submit form
    submitForm = (e)=>{
        e.preventDefault();
        const isValidName = this.validateName();
        const isvalidQuery = this.validateQuery();
        if(isValidName && isvalidQuery){
            alert(`hey ${this.state.name} thanks for contacting us.`)
            console.log(this.state);
        let user = {name:this.state.name, email:this.state.email,
             phoneNo:this.state.phoneNo, query:this.state.query}
             console.log('user data =>' +JSON.stringify(user));
        UserService.postResponse(user)
        .then(res=>
            console.log(res.data));
        // this.props.history.push("/home");
        this.setState(this.initialState);
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
     validateName = () => {
        let nameError="";
         if(!this.state.name){
             nameError = "Name Cannot be empty";
         }
         else if(!this.state.name.match(["^[a-zA-Z\s]+$"])){
             nameError="Name should contain characters only";
         }
         if(nameError){
            this.setState({nameError})
            return false;
         }
         else{this.setState({nameError:""})}
         return true;
    }
    validateQuery = () => {
         let queryError="";
         if(!this.state.query){
             queryError = "Please mention your query";
         }
         if(queryError){
            this.setState({queryError})
            return false;
         }
         else{this.setState({queryError:""})}
         return true;
    }
    //validation for form
    // validate(){
    //     let nameError;
    //     let emailError;
    //     let phoneNoError;
    //     let queryError;
    //     if(!this.state.name){
    //         nameError="Name should not be empty";
    //     }
    //     else if(!this.state.name.match(["^[a-zA-Z\s]+$"])){
    //         nameError="Name should contain characters only";
    //     }
    //     //email validation
    //     if(!this.state.email){
    //         emailError = "Email cannot not be empty";
    //     }
    //     else if(!this.state.email.match(["^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"])){
    //         emailError = "Please enter a valid Email";
    //     }
    //     if(!this.state.phoneNo){
    //         phoneNoError="It should not be empty";
    //     }
    //     //query validation
    //     if(!this.state.query){
    //         queryError = "Please add your query";
    //     }
    //     if(nameError || emailError || phoneNoError || queryError){
    //         this.setState({nameError, emailError, phoneNoError, queryError});
    //         return false;
    //     }
    //     return true;
    // }
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
                                    <input type="text" id="customerName" placeholder="Enter your name" value={this.state.name}
                                    onChange={this.onNameChange}
                                    onBlur={this.validateName}/>
                                    <span className="error">{this.state.nameError}</span>
                                </p>   
                                     
                            </div>
                           
                            <div className="form-group">
                                <p>
                                    <label htmlFor="cust_name">Email : </label>
                                    <input type="text" id="customerMail" value={email}
                                    onChange={this.onEmailChange}/>
                                    <span className="error">{this.state.emailError}</span>
                                    </p>
                            </div>

                            <div className="form-group">
                                <p>
                                    <label htmlFor="cust_name">Phone:</label>
                                    <input type="text" id="customerNumber" placeholder="Optional"value={this.state.phoneNo}
                                    onChange={this.onPhoneNoChange}
                                   />
                                    <span className="error">{this.state.phoneNoError}</span>
                                    </p>
                            </div>

                            <div className="form-group">
                                <p>
                                    <label htmlFor="cust_message" className="query">Query:</label><br/>
                                    <textarea rows="4" id="customerNote" name="customerNote" placeholder="Mention your query" value={this.state.query}
                                    onChange={this.onQueryChange}
                                    onBlur={this.validateQuery}></textarea>
                                    <span className="error">{this.state.queryError}</span>
                                    </p>
                            </div>
                            <a><input type="submit" id="submit" disabled={this.state.name.length<1 || 
                             this.state.query.length<1}value="Submit" /></a>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;