import React from 'react';
import BackLink from '../backLink/BackLink';
import SupportForm from './SupportForm';
import JoinComunity from './JoinComunity';
import Header from '../Header';
import AvatarDummy from '../../assets/img/avatar.png';
import LoginImage from '../../assets/img/login-img.png';
import './Support.css';
const Support = () => {

  
  const logoutHandler =()=>{
    window.location.pathname = "/";
}
return (
    <>
    <Header
        logoutText={"Logout"}
        onClickLogout={logoutHandler}
        name={"dummy name"}
        resource={"Resource"}
        support={"Support"}
        events={"Events"}
        imageTag={<img className="profile-user-image" src={LoginImage}/>}
    />
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-4 pl-50 mt-50">
                <div className="support primary-text-color">
                    <h1>Support</h1>
                    <h3>How can we help you?</h3>
                </div>
            </div>
            <SupportForm />
            <BackLink link={`/newlanding`} style = {{margintop: '10%'}}/>
        </div>
        <JoinComunity />
    </div>
    </>
  );
};

export default Support;
