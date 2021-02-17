import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import Signia from '../assets/img/signia-logo.png';
import LoginImage from '../assets/img/login-img.png';
import { extend } from "jquery";
import { Grid } from "@material-ui/core";
import './Profile.css';
import {AuthContext} from '../DispatchContext';
import history from '../utils/history';
const Header = (props) => {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //          isLoggedIn : false
    //     }
    // }
    const editProfileShow = () => {
        
        const userDetails = JSON.parse(localStorage.getItem('user'));
            console.log('token', userDetails.accessToken, 'user', userDetails)
        if(userDetails.accessToken){
            
            history.push('/editprofile');
        }
        else{
            history.push('/');
        }
    }
    //const {userDetails} = useContext(AuthContext);
    
            return (
                <header className="primary-bg-color navbar shadow-sm nav-header">
                    <Grid container>
                        <Grid xs={2} md={6} className="nav-logo pl-50">
                            <div onClick={props.onClickLogo} className="profile-image">
                                <img src={Signia} alt="signia-logo" />
                            </div>
                        </Grid>
                        <Grid xs={4} md={4}>
                            <nav className="nav-list">
                                <ul>
                                    <li>
                                        <NavLink activeclassName='active'
                                            exact
                                            to="/newlanding">{props.resource}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeclassName='active'
                                            to="/support">{props.support}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeclassName='active'
                                            to="/events">{props.events}</NavLink>
                                    </li>
                                    <li>
                                        
                                        <NavLink activeclassName='active'
                                            to="/hackathon">{props.hackathon}</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </Grid>
                        <Grid xs={4} md={2}>
                            <Grid container>
                                <Grid className="padding-11" md={6}>
                                    <p  className="white-color-bold" >{props.name}</p>
                                    <p onClick={props.onClickLogout} style={{fontSize:props.fontSizeHeading}} className="white-color-logout" >{props.logoutText}</p>
                                </Grid>
                                <Grid md={6}>

                               <p className="imageIcon" onClick={editProfileShow}>{props.imageTag}</p>     
                               {/* {token.token && <Link to = '/editprofile' > </Link> }  */}

                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* {console.log('headerjs', userDetails)} */}
                </header>
                );
        
        
    
}

export default Header;