import React, { Component } from 'react';
import UserService from '../services/userService';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            signUpEmail:"",
            useremailError:"",
            signUpPassword:"",
            password:"",
            nameError:"",
            emailError:"",
            passwordError:""
        }
        this.onnameChange=this.onnameChange.bind(this);
        this.onEmailChange=this.onEmailChange.bind(this);
        this.onUserEmailChange=this.onUserEmailChange.bind(this);
        this.onUserPasswordChange=this.onUserPasswordChange.bind(this);
        this.onPasswordChange=this.onPasswordChange.bind(this);
    }
    // event call
    onnameChange=(e)=>{
        this.setState({ name: e.target.value});
    }
    onEmailChange=(e)=>{
        this.setState({ signUpEmail: e.target.value});
    }
    onUserEmailChange=(e)=>{
        this.setState({ email: e.target.value});
    }
    onUserPasswordChange=(e)=>{
        this.setState({ password: e.target.value});
    }
    onPasswordChange=(e)=>{
        this.setState({ signUpPassword: e.target.value});
    }
    //on submit call
    submitAccount = (e)=>{
        e.preventDefault();
        let user = {name:this.state.name, email:this.state.signUpEmail, password:this.state.signUpPassword}
        UserService.signup(user)
        .then(res=>{
            console.log(res.data);
            this.setState({name:"", signUpEmail:"", signUpPassword:""});
        })
        const isValid = this.validate();
        if(isValid){
            alert(`Hey ${this.state.name} your account is created successfully.`)
            console.log(this.state);
        }

    }
    // login call
    onLogin =(event)=>{
        event.preventDefault();
        let user = {email:this.state.email, password:this.state.password}
        localStorage.setItem('email', this.state.email);
        UserService.login(user)
        .then(res=>{console.log(res);
        UserService.setLocalStorage(res)
        this.setState({email:"", password:""});
        })
        
        
        const isvalidate = this.loginValidate();
        if(isvalidate){
            alert("your are logged in!!");
            console.log("user=>", this.state.email, this.state.password);
        }  
    }
    // login form validation
    loginValidate(){
        let userEmailError;
        if(!this.state.email){
            userEmailError="please enter your email";
        }
        if(userEmailError){
            this.setState({userEmailError})
            return false;
        }
        return true;

    }
    // form validation
    validate(){
        let nameError;
        let emailError;
        let passwordError;
        if(!this.state.name){
            nameError="Enter your name";
        }
        else if(!this.state.name.match(["^[a-zA-Z\s]+$"])){
            nameError="name should contain characters only";
        }
        //email validation
        if(!this.state.signUpEmail){
            emailError = "Email cannot not be empty";
        }
        else if(!this.state.signUpEmail.match(["^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"])){
            emailError = "Please enter a valid Email";
        }
        if(!this.state.signUpPassword){
            passwordError="Please enter a password";
        }
        else if(!this.state.signUpPassword.match(["^(?=.*[0-9])"
                       + "(?=.*[a-z])(?=.*[A-Z])"
                       + "(?=.*[@#$%^&+=])"
                       + "(?=\\S+$).{8,20}$"])){
            passwordError="password must contain special character & number";
        }
        if(nameError || emailError|| passwordError){
            this.setState({nameError, emailError, passwordError});
            return false;
        }
        return true;
    } 
    render() {
        return (
            <div>
                 <div className="loginBlock">
                <h3>AUTHENTICATION</h3>
                    <div className="createAccount">
                        <form onSubmit={this.submitAccount}>
                            <h2>Add Account</h2>
                            <p><label htmlFor="name">name: </label>
                            <input type="text" name="name" value={this.state.name}
                            onChange={this.onnameChange}/>
                            <div className="error">{this.state.nameError}</div>
                            </p>
                            <p><label htmlFor="email">Email : </label>
                            <input type="text" name="email" value={this.state.signUpEmail}
                            onChange={this.onEmailChange}/>
                            <div className="error">{this.state.emailError}</div>
                            </p>
                            <p><label htmlFor="password">Password : </label>
                            <input type="password"name="password"value={this.state.signUpPassword} 
                            onChange={this.onPasswordChange}/>
                            <div className="error">{this.state.passwordError}</div>
                            </p>
                            <p><a href="#"><input type="submit" disabled={ this.state.name.length<1 ||
                            this.state.signUpEmail.length<1 || this.state.signUpPassword.length<1} value="Create Account"/></a></p>
                            <div>{this.state.message}</div>
                        </form>
                    </div>
                    <div className="alreadyUser">
                        <form onSubmit={this.onLogin}>
                            <h2>Already a User??</h2>
                            <p><label htmlFor="email">Email : </label>
                            <input type="email" name="email" value={this.state.email}
                            onChange={this.onUserEmailChange}/>
                            <div className="error">{this.state.useremailError}</div>
                            </p>
                            <p><label htmlFor="password">Password : </label>
                            <input type="password"name="password" value={this.state.password}
                            onChange={this.onUserPasswordChange}/></p>
                            <p><a href="#"><input type="submit" disabled={this.state.email.length<1} value="Login"/></a></p>
                        </form>
                    </div>
            </div>
            </div>
        );
    }
}

export default Login;