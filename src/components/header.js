import React, { Component } from 'react';
import{NavLink, Link} from "react-router-dom";
import UserService from '../services/userService';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { red, yellow } from '@material-ui/core/colors';
// const email=localStorage.getItem('email');

class Header extends Component {
    constructor(props){
        super(props);
        this.state={    
            loggedIn:false,
            anchorEl:null
        };
        this.initialState = this.state;
        this.logout = this.logout.bind(this);
    }
    // Logout funtion
    logout=()=>{
        UserService.logout();
        this.setState({state:this.initialState});
    }
    //on componentMount set login state as true
    componentDidMount(){
    if(UserService.isLoggedIn()){
      this.setState({loggedIn:true});
    }
    else{
      this.setState({loggedIn:false});
    }
    }
    render() {
        //icon function
         const handleClick = (event) => {
        this.setState({anchorEl:event.currentTarget})
         };
        const handleClose = () => {
        this.setState({anchorEl:null})
         };
        return (
        <div>
            <header>
            <div className="header" style={{backgroundImage:"url(/assets/Nature/LeavesFinal.jpg)"}}>
                <img src="/assets/Logo/logoTreeBig.jpg" alt="Tree logo"/>
                <h2>Nature's Paradise<br/>
                <span>Make your Home a Greener Place !!</span></h2>
                <p>{!this.state.loggedIn && <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/login"
                      >Login</NavLink>
        }
        {
        this.state.loggedIn && <span id="IconLogin">
        <Button aria-controls="simple-menu"   aria-haspopup="true" onClick={handleClick}>
          <AccountCircleIcon/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={handleClose}
        >
          <MenuItem><a href="/cart"><ShoppingCartRoundedIcon style={{ color: yellow[500] }}/></a></MenuItem>
          <Link to="/orders"><MenuItem><Button variant="contained" color="primary">My Orders</Button></MenuItem></Link>
          <MenuItem onClick={this.logout}><a href="/login"><ExitToAppRoundedIcon style={{ color: red[500] }}/></a></MenuItem>
        </Menu>
      </span>
        }</p>
            </div>
            </header>
        </div>
        );
    }
}

export default Header;