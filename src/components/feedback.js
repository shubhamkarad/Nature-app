import React, { Component } from 'react';
import UserService from '../services/userService';
// import Alert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
// let INTIAL_STATE;
const email=localStorage.getItem('email');
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
        this.initialState=this.state;
        this.submission=this.submission.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleCommentChange=this.handleCommentChange.bind(this);
    }
    // on change events
    handleNameChange = (e)=>{
        this.setState({name: e.target.value});
    }
    handleEmailChange = (e)=>{
        this.setState({email: e.target.value});
    }
    handleCommentChange = (e)=>{
        this.setState({comment: e.target.value});
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
    validateComment = () => {
         let commentError="";
         if(!this.state.comment){
             commentError = "Comment cannot be empty";
         }
         if(commentError){
            this.setState({commentError})
            return false;
         }
         else{this.setState({commentError:""})}
         return true;
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
             nameError="Name should contain characters only";
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
            const isvalidName=this.validateName()
            const isvalidComment = this.validateComment()
            if(isvalidName && isvalidComment)
            {
            alert(`Hey ${this.state.name} thanks for your feedback!`);
    //     <Alert iconMapping={{ success: <CheckCircleOutlineIcon fontSize="inherit" /> }}>
    //     Hey {this.state.name} thanks for your feedback!
    //    </Alert>
            console.log(this.state);
            let user = {name:this.state.name, email:this.state.email, comment:this.state.comment}
            UserService.postFeedback(user)
            .then(res=>{
            console.log(res.data);
            this.setState(this.initialState)
        })
       
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
                        <input type="text" id="customerName" placeholder="Enter your Name" value={this.state.name}
                        onChange = {this.handleNameChange}
                        onBlur={this.validateName} />
                        <span className="error">{this.state.nameError}</span>
                    </p>
                    
                </div>
                <div className="form-group">
                    <p>
                        <label htmlFor="cust_name">Email :</label>
                        <input type="text" id="customerMail" value={email} 
                        onChange={this.handleEmailChange} readOnly/>
                        {/* <span className="error">{this.state.emailError}</span> */}
                    </p>
                 </div>
                 <div className="form-group">
                    <p className="formfield">
                        <label htmlFor="cust_message">Comment:</label><br/>
                        <textarea rows="5" id="customerNote" name="customerNote" value={this.state.comment} placeholder="Write something here..." 
                        onChange={this.handleCommentChange}
                        onBlur={this.validateComment}></textarea>
                        <span className="error">{this.state.commentError}</span>
                    </p>  
                </div>
                <a href=" # "><input type="submit" id="submit" disabled={this.state.name.length<1 || this.state.comment.length<1} value="Post comment"/></a>
                {/* <div>{this.state.success}</div> */}
            </form>
        </div>
    </div>
 </div>   
        );
    }
}

export default Feedback;