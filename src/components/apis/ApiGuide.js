import React from 'react';
import BackLink from '../backLink/BackLink';
import Header from '../Header';
import AvatarDummy from '../../assets/img/avatar.png';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import LoginImage from '../../assets/img/login-img.png';
import './ApiGuide.css'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


const ApiGuide = () => {
    const classes = useStyles();

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
                imageTag={<img className={classes.profileUserImage} src={LoginImage} />}
            />
            <div className="container-fluid">
                <div className="row pl-50 pr-50 mt-50 mb-50">
                    <div className="col-lg-10">
                        <div className="top-page-heading heading-font">
                            <h1>API Guide</h1>
                            <p className={classes.headingTitle}>Showing how to configure and use the APIs</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="page-button">
                            <BackLink link={`/newlanding`} />
                        </div>
                    </div>
                    <Tabs>
                        <div className="row p-0">
                            <div className="col-lg-4 heading-font">
                                <div className={classes.root}>
                                    <Accordion className={classes.accordionBackground}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            className={classes.accordionHeading}
                                        >
                                            <Typography className={classes.heading}>Quick Start Guide</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className={classes.accordionTitle}>
                                                <TabList>
                                                    <div className="accordion-list">
                                                        <Tab><a href="#">Introduction</a></Tab>
                                                        <Tab><a href="#">Get Started</a></Tab>
                                                        <Tab> <a href="#">Consume API</a></Tab>
                                                        <Tab> <a href="#">Publish your first application</a></Tab>

                                                    </div>
                                                </TabList>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className={classes.accordionBackground}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                            className={classes.accordionHeading}
                                        >
                                            <Typography className={classes.heading}>API Consumer Guide</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className={classes.accordionTitle}>
                                            <Typography>
                                            <TabList>
                                                    <div className="accordion-list">
                                                        <Tab><a href="#">Introduction</a></Tab>
                                                        <Tab><a href="#">Get Started</a></Tab>
                                                        <Tab> <a href="#">Consume API</a></Tab>
                                                        <Tab> <a href="#">Publish your first application</a></Tab>

                                                    </div>
                                                </TabList>
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className={classes.accordionBackground}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3a-content"
                                            id="panel3a-header"
                                            className={classes.accordionHeading}
                                        >
                                            <Typography className={classes.heading}>Administration Guide</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className={classes.accordionTitle}>
                                            <Typography>
                                            <TabList>
                                                    <div className="accordion-list">
                                                        <Tab><a href="#">Introduction</a></Tab>
                                                        <Tab><a href="#">Get Started</a></Tab>
                                                        <Tab> <a href="#">Consume API</a></Tab>
                                                        <Tab> <a href="#">Publish your first application</a></Tab>

                                                    </div>
                                                </TabList>
          </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>

                            <div className="col-lg-8 hr" style={{ color: "white" }}>
                                <TabPanel>
                                    <div className="heading-font">
                                        <h1>Introduction</h1>
                                        <p>This Quick Start Guide is designed to get you up and running quickly with APIM. You can find more detailed information about publishing and consuming APIs in APIM in the following sections:</p>
                                        <ul>
                                            <li className="light-blue">API Configuration Guide</li>
                                            <li className="light-blue">API Consumer Guide</li>
                                        </ul>

                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <h1>Introduction123</h1>
                                    <p>This Quick Start Guide is designed to get you up and running quickly with APIM. You can find more detailed information about publishing and consuming APIs in APIM in the following sections:</p>
                                </TabPanel>
                                <TabPanel>
                                    <h1>Introduction567</h1>
                                    <p>This Quick Start Guide is designed to get you up and running quickly with APIM. You can find more detailed information about publishing and consuming APIs in APIM in the following sections:</p>
                                </TabPanel>
                                <TabPanel>
                                    <h1>Introduction787</h1>
                                    <p>This Quick Start Guide is designed to get you up and running quickly with APIM. You can find more detailed information about publishing and consuming APIs in APIM in the following sections:</p>
                                </TabPanel>
                            </div>


                        </div>
                    </Tabs>
                    
                </div>

                <div className="container-fluid">
                    <div className="row pl-50 pr-50 mt-50 float-end">
                        <div className="col-lg-12">
                            <div className="join-community heading-font">
                                <h3>Join the Community</h3>
                                <p>Subscribe to get product updates in your inbox</p>
                            </div>
                            <div className="page-form">
                                <div className="form-group heading-font">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small>We won’t send you spam, unsubscribe at any time</small>
                                </div>
                                <button className="btn2 btn-primary button" type="submit">Subscribe</button>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApiGuide;
