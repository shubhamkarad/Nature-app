import React, { Component } from 'react';
import UserService from '../services/userService';
let INTIAL_STATE;
class Feedback extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            comment:"",
            nameError:"",
            emailError:"",
            commentError:"",
            success:""
        }
        this.submission=this.submission.bind(this);
    }
    //form validation
    validate = ()=>{
        let nameError="";
        let emailError="";
        let commentError = "";
        // name validation
        if(!this.state.name){
            nameError = "Name Cannot be empty";
        }
        else if(!this.state.name.match(["^[a-zA-Z\s]+$"])){
            nameError="name should contain characters only";
        }
        //email validation
        if(!this.state.email){
            emailError = "Email cannot not be empty";
        }
        else if(!this.state.email.match(["^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"])){
            emailError = "Please enter a valid Email";
        }
        //feedback validation
        if(!this.state.comment){
            commentError = "feedback cannot be empty";
        }
        if(nameError || emailError || commentError){
            this.setState({nameError, emailError, commentError})
            return false;
        }
        return true;

    }
    // on submit call
    submission =(e)=>{
       
        e.preventDefault()
        let user = {name:this.state.name, email:this.state.email, comment:this.state.comment}
        UserService.postFeedback(user)
        .then(res=>{
            console.log(res.data);
            this.setState({
                name:"", email:"", comment:""
            })
        })
        const isValid = this.validate();
        if(isValid){
            alert(`Hey ${this.state.name} thanks for your feedback!`);
            console.log(this.state);
            // this.setState = INTIAL_STATE;

        }
    }
    render() {
        return (

    <div>
    <div className="feedbackBlock">
        <h3>FEEDBACK</h3>
        <div className="feedbackForm" onSubmit={this.submission}>
            <form name="feedbackForm">
                <h2>Your Feedback</h2>
                <div className="form-group">
                    <p>
                        <label htmlFor="cust_name">Name :</label>
                        <input type="text" id="customerName" value={this.state.name}
                        onChange = {(e)=> this.setState({name: e.target.value})} />
                        <div className="error">{this.state.nameError}</div>
                    </p>
                    
                </div>
                <div className="form-group">
                    <p>
                        <label htmlFor="cust_name">Email :</label>
                        <input type="text" id="customerMail" value={this.state.email} 
                        onChange={(e)=>this.setState({email: e.target.value})} />
                        <div className="error">{this.state.emailError}</div>
                    </p>
                 </div>
                 <div className="form-group">
                    <p className="formfield">
                        <label htmlFor="cust_message">Comment:</label><br/>
                        <textarea rows="5" id="customerNote" name="customerNote" value={this.state.comment} placeholder="Write something here..." 
                        onChange={(e)=> this.setState({comment: e.target.value})}></textarea>
                        <div className="error">{this.state.commentError}</div>
                    </p>  
                </div>
                <a href=" # "><input type="submit" id="submit" disabled={this.state.name.length<1 || this.state.email.length<1 || this.state.comment.length<1} value="Post comment"/></a>
                {/* <div>{this.state.success}</div> */}
            </form>
        </div>
    </div>
 </div>   
        );
    }
}

export default Feedback;