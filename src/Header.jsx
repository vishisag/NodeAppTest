
import React, { Component } from 'react';
import './css/TextStyle.css';
import './css/Header.css';

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container headerTop">
                <div className="navbar-header">
                    <div className="navbar-brand positionHeaderTextCenter">Welcome to my test app    </div>
                </div>
            </div>
        </nav>
        );
    }
}

export default Header;
    