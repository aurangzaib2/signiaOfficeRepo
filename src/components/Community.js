import React from 'react';
import image15 from '../assets/img/image15.png';
import image16 from '../assets/img/image16.png';
import image17 from '../assets/img/image17.png';
import image18 from '../assets/img/image18.png';
import AvatarDummy from '../assets/img/avatar.png';
import {Link} from 'react-router-dom';
import Header from './Header';
import LoginImage from '../assets/img/login-img.png';
const Community = () => {

const logoutHandler = () => {
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
            imageTag={<img className="profile-user-image" src={LoginImage} />}
        />
        <div className="container-fluid">
        <div className="row pl-50 pr-50 mt-50 mb-50">
            <div className="col-lg-10">
                <div className="top-page-heading heading-font">
                    <h1>Developer’s Community</h1>
                    <p>Join the Signia’s Developer Community. Share your expertise, discover new solutions, grow your network. Whether you code in Java, Open Source, or build on the Cloud, you will find fellow enthusiasts here.</p>
                </div>
            </div>
            <div className="col-lg-2">
                <div className="page-button">
                <Link className="btn btn-primary button" to = '/addyourblog'>Add Your Blog</Link>
                    
                </div>
            </div>
        </div>
        <div className="row pl-50 pr-50 mt-50 mb-50">
            <div className="col-lg-8">
                <div className="row community-panel mb-3">
                    <div className="col-md-5 community-image">
                        <img className="rounded-corners w-100" src={image15} />
                    </div>
                    <div className="col-md-7 community-text heading-font">
                        <h2>Diversity, Inclusion and Community Outreach</h2>
                        <p className="text-medium">Join the Signia’s Developer Community. Share your expertise, discover new solutions, grow your network. Whether you code in Java, Open Source, or build on the Cloud, you will find fellow enthusiasts here.</p>
                        <div className="text-end">
                           <button type="button" className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="row community-panel mb-3">
                    <div className="col-lg-5 community-image">
                        <img className="rounded-corners w-100" src={image16} alt="#" />
                    </div>
                    <div className="col-lg-7 community-text heading-font">
                        <h3>Oracle Linux</h3>
                        <p className="text-xs-small">Learn how to use industry practices and use of Oracle Linux in coding</p>
                    </div>
                </div>
                <div className="row community-panel mb-3">
                    <div className="col-lg-5 community-image">
                        <img className="rounded-corners w-100" src={image17} alt="#" />
                    </div>
                    <div className="col-lg-7 community-text heading-font">
                        <h3>Oracle Linux</h3>
                        <p className="text-xs-small">Learn how to use industry practices and use of Oracle Linux in coding</p>
                    </div>
                </div>
                <div className="row community-panel mb-3">
                    <div className="col-lg-5 community-image">
                        <img className="rounded-corners w-100" src={image18} alt="#" />
                    </div>
                    <div className="col-lg-7 community-text heading-font">
                        <h3>Oracle Linux</h3>
                        <p className="text-xs-small">Learn how to use industry practices and use of Oracle Linux in coding</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row pl-50 pr-50 mt-50 mb-50">
            <div className="col-lg-6 heading-font">
                <div className="blog">
                    <h2>Latest from the Developer’s Blogs</h2>
                </div>
                <div className="blog-list">
                    <small className="d-block">JANUARY 31, 2021</small>
                    <h3>Oracle JDBC 19.9.0.0 on Maven Central</h3>
                    <span>Kuassi Mensah</span>
                    <p className="text-xs-small">The 19.9.0.0 release of the Oracle JDBC drivers are now available on Maven Central</p>
                    <a href="#" className="mt-50 text-white">Read the full post</a>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="news-panel blue-default pd-50 rounded heading-font">
                    <div className="news">
                        <h2>More Developer News and Blogs</h2>
                    </div>
                    <div className="news-list">
                        <small className="d-block">DECEMBER 4, 2020</small>
                        <a href="#" className="text-white">ACE Articles: November-December 2020 -- JSON, Database, MySQL, and More</a>
                    </div>
                    <div className="news-list">
                        <small className="d-block">DECEMBER 4, 2020</small>
                        <a href="#" className="text-white">Using Resource Manager solution templates</a>
                    </div>
                    <div className="news-list">
                        <small className="d-block">DECEMBER 4, 2020</small>
                        <a href="#" className="text-white">Launching Your Own Free Private VPN In The Oracle Cloud</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
    )
}

export default Community;