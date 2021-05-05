import React, { Component} from 'react';
// import Sapling from "/assets/Nature/Sapling.png";
class Home extends Component {
    constructor(props){
        super(props);
        this.state={

        }
       
    }
  
    render() {
        return ( 
        <div >
            <div className="container">
            <div className="mainPic">
                <img src="/assets/Nature/Sapling.png" alt="sapling"/>
                <div className="overview">
                    <p>Anything and Everything to MAKE and MAINTAIN your Garden ...</p>
                </div>
            </div>  
            
        </div>
            </div>
        );
    }
}

export default Home;