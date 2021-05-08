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
            signUpFail:"",
            emailError:"",
            passwordError:"",
            loginPasswordError:"",
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
    //validation part
    validateName = () => {
        let nameError="";
         if(!this.state.name){
             nameError = "Name Cannot be empty";
         }
         else if(!this.state.name.match(/[A-za-z]+$/)){
             nameError="Name should contain characters only";
         }
         if(nameError){
            this.setState({nameError})
            return false;
         }
         else{this.setState({nameError:""})}
         return true;
    }
    validateEmail = () => {
       let emailError="";
         if(!this.state.signUpEmail){
             emailError = "Email Cannot be empty";
         }
         else if(!this.state.signUpEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/)){
             emailError="Please enter a valid Email";
         }
         if(emailError){
            this.setState({emailError})
            return false;
         }
         else{this.setState({emailError:""})}
         return true;
    }
    validatePassword = () => {
       let passwordError="";
        if(!this.state.signUpPassword){
            passwordError="Please enter a password";
        }
        else if(!this.state.signUpPassword.match(["^(?=.*[0-9])"
                       + "(?=.*[a-z])(?=.*[A-Z])"
                       + "(?=.*[@#$%^&+=])"
                       + "(?=\\S+$).{8,20}$"])){
            passwordError="password must contain special character & number";
        }
         if(passwordError){
            this.setState({passwordError})
            return false;
         }
         else{this.setState({passwordError:""})}
         return true;
    }
    //on sign up call
    submitAccount = (e)=>{
        const isValidName = this.validateName();
        const isvalidEmail = this.validateEmail();
        const isValidPassword = this.validatePassword();
        e.preventDefault();
        let user = {name:this.state.name, email:this.state.signUpEmail, password:this.state.signUpPassword}
        localStorage.setItem('name', this.state.name);
        if(isValidName && isvalidEmail && isValidPassword){
            alert(`Hey ${this.state.name} your account is created successfully.`)
            console.log(this.state);
        UserService.signup(user)
        .then(res=>{
            console.log(res.data);
            this.setState({name:"", signUpEmail:"", signUpPassword:""});
        }).catch(err=>{
            if(err.message === "Request failed with status code 401"){
                this.setState({signUpFail:"User already exists"});
            }
        });
        }
    }
    // login call
    onLogin =(event)=>{
        let loginPasswordError="";
        event.preventDefault();
        let user = {email:this.state.email, password:this.state.password}
        localStorage.setItem('email', this.state.email);
        localStorage.getItem('name', this.state.name);
        UserService.login(user)
        .then(res=>{console.log(res);
        UserService.setLocalStorage(res)
        console.log("Login successful");
        
        if(localStorage.getItem('productId')&&localStorage.getItem('productPrice')&&localStorage.getItem('productName')){
            this.props.history.push("/cart");
        }else{
            this.props.history.push("/");
        }
        this.setState({email:"", password:""});
        }).catch(
            err => {
                    localStorage.removeItem('email');
                  // Handle error
                  if (err.status === 401) {
                    loginPasswordError = "Invalid Username/Password";
                    return false;
                  } else {
                    loginPasswordError = "Invalid Username/Password";
                    this.setState({loginPasswordError:loginPasswordError});
                    return false;
                  }
              }
        );
        //validation call
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
    render() {
        return (
            <div>
                 <div className="loginBlock">
                 <h3>AUTHENTICATION</h3>
                    <div className="createAccount">
                        <form onSubmit={this.submitAccount}>
                            <h2>Add Account</h2>

                            <p><label htmlFor="name">Name: </label>
                            <input type="text" name="name" value={this.state.name}
                            onChange={this.onnameChange}
                            onBlur={this.validateName}/>
                            <span className="error">{this.state.nameError}</span>
                            </p>
                            
                            <p><label htmlFor="email">Email : </label>
                            <input type="text" name="email" value={this.state.signUpEmail}
                            onChange={this.onEmailChange}
                            onBlur={this.validateEmail}/>
                            <span className="error">{this.state.emailError}</span>
                            </p>
                            
                            <p><label htmlFor="password">Password : </label>
                            <input type="password"name="password"value={this.state.signUpPassword} 
                            onChange={this.onPasswordChange}
                            onBlur={this.validatePassword}/>
                            <span className="error">{this.state.passwordError}</span>
                            </p>
                            
                            <p><a><input type="submit" disabled={ this.state.name.length<1 ||
                            this.state.signUpEmail.length<1 || this.state.signUpPassword.length<1} value="Create Account"/></a></p>
                           <p><span id="error">{this.state.signUpFail}</span></p>
                        </form>
                    </div>
                    {/* login part */}
                    <div className="alreadyUser">
                        <form onSubmit={this.onLogin}>
                            <h2>Already a User??</h2>
                            <p><label htmlFor="email">Email : </label>
                            <input type="email" name="email" value={this.state.email}
                            onChange={this.onUserEmailChange}/>
                            <span className="error">{this.state.useremailError}</span>
                            </p>
                            
                            <p><label htmlFor="password">Password : </label>
                            <input type="password"name="password" value={this.state.password}
                            onChange={this.onUserPasswordChange}/></p>
                            <span className="error">{this.state.loginPasswordError}</span>
                            <p><a><input type="submit" disabled={this.state.email.length<1}  value="Login"/></a></p>
                        </form>
                    </div>
            </div>
            </div>
        );
    }
}

export default Login;