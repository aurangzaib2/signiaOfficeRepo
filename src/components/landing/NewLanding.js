import React from 'react';
import CommonBanner from "../shared/CommonBanner";
import DrImage from '../../assets/img/drc-img.png';
import Movie from '../../assets/img/movie.png';
import Handyman from '../../assets/img/handyman.png';
import AvatarDummy from '../../assets/img/avatar.png';
import Explore from '../../assets/img/explore.png';
import Hackathon1 from '../../assets/img/hackathon-1.jpg';
import Hackathon2 from '../../assets/img/hackathon-2.jpg';
import Hackathon3 from '../../assets/img/hackathon-3.jpg';
import LoginImage from '../../assets/img/login-img.png';
import { useQuery } from "@apollo/client";
import { GET_ALL_EVENTS } from "../constants";
import {Link} from 'react-router-dom';
import './Landing.css';
import Header from '../Header';


const NewLanding = () => {

    const { loading, error, data } = useQuery(GET_ALL_EVENTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

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
         <CommonBanner 
            heading1 = 'Developer Resource Center'
            heading3 =  'Learn more about building applications with us'
            para = "Signia allows you to use our published APIs for your applications and use our test bed. This platform provides complete knowledge and documentation for all resources"
            imgsrc = {DrImage}
            btname={"Learn more"}
        />
        <div className="row land blue-default white-default pd-50">
            <div className="col-lg-3">
                <div className="process-heading">
                    <h1 className="color-white">
                        Build Applications
                        <br />
                        using Signia
                    </h1>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="process-list">
                    <img src={Movie} alt="#" />
                    <h3>Watch</h3>
                    <p>
                        Watch how to deploy and configure
                        APIs in your application
                    </p>
                    <Link to = '/demovideos'>Watch Demo Videos</Link>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="process-list">
                    <img src={Handyman} alt="#" />
                    <h3>Build</h3>
                    <p>
                        Build you application using Signia
                        APIs with ease
                    </p>
                    <Link to = '/apiguide'>Build your first app</Link>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="process-list">
                    <img src={Explore} alt="#" />
                    <h3>Explore</h3>
                    <p>Dive deeper on Signia API platform to match your needs</p>
                    <Link to = '/searchapi'>Search APIs & Documents</Link>
                    
                </div>
            </div>
        </div>
        <div className="row pl-50 pr-50 mt-50 mb-50">
            <div className="col-lg-12">
                <div className="top-page-heading white-default">
                    <h1>Developer Community and Events</h1>
                    <p>See whats new and whats coming in for you to participate</p>
                </div>
            </div>
        </div>

    <div className="container">
    {data.getAllEvents.map((getAllEvents) => {
        return (
        <div className="row mb-50" key={getAllEvents.id}>
            <div className="col-lg-4">
            <div className="card events rounded-top rounded-bottom">
                <img className="rounded-top" src={Hackathon2} /> 
            </div>
            <div className="card-body dark-blue-default white-default rounded-bottom">
            
            <h2>{getAllEvents.Title} </h2>

                <p>{getAllEvents.Discription}</p>
                <div className="d-flex justify-content-between align-items-center events-detail">
                        <small>5 days left</small>
                        <Link to = '/upcomingevent'>Join Now</Link>
                    </div>
                {/* <div className="card events rounded-top rounded-bottom">
                    <img className="rounded-top" src={Hackathon2} />
                </div>
                <div className="card-body dark-blue-default white-default rounded-bottom">
                    <h2>Code Innovate</h2>
                    <p>
                        Hold a three-day hackfest at your company by letting us bring the Oracle Code experience to you.
                    </p>
                    <div className="d-flex justify-content-between align-items-center events-detail">
                        <small>5 days left</small>
                        <Link to = '/upcomingevent'>Join Now</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card events rounded-top rounded-bottom">
                    <img className=" rounded-top" src={Hackathon1} />
                </div>
                <div className="card-body dark-blue-default white-default rounded-bottom">
                    <h2>Tech Challenge for 5G</h2>
                    <p>
                        Have a couple minutes? Check out an abundance of useful technical tips, each done in two minutes or less.
                    </p>
                    <div className="d-flex justify-content-between align-items-center events-detail">
                        <small>5 days left</small>
                        <Link to = '/upcomingevent'>Join Now</Link>
                       
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card events rounded-top rounded-bottom">
                    <img className=" rounded-top" src={Hackathon3} />
                </div>
                <div className="card-body dark-blue-default white-default rounded-bottom">
                    <h2>Cloud Companion</h2>
                    <p>
                        Make a clpoud provider your challenge partner. Build innovative apps and win amazing prizes.
                    </p>
                    <div className="d-flex justify-content-between align-items-center events-detail">
                        <small>5 days left</small>
                        <a href="#" className="text-medium red" style= {{color: 'red'}}>Registration Closed</a>
                    </div>
                </div> */}
            </div>
        </div>
        </div>
    
        )})}
    </div>
    <div className="container-fluid">
        <div className="row pl-50 pr-50">
            <div className="col-lg-4">
                <h3 className="process-heading white-default">
                <Link to = '/community' style= {{color: 'white'}}>Whats new in Community</Link>
                </h3>
            </div>
            <div className="col-lg-4">
                <div className="card text-center blue-default rounded white-default">
                    <div className="card-header">
                        <p>Build low code apps with Signia APIs - Pros and Cons</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 pr-50">
                <div className="card text-center blue-default rounded white-default">
                    <div className="card-header">
                        <p>Announcing breakthrough MySQL innovation in the cloud</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default NewLanding;