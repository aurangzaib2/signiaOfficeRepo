import React, { Component, useState } from "react";
import hackathon from "../../assets/img/hackathon.png";
import hackathon2 from "../../assets/img/hackathon-2.jpg";
import date from "../../assets/img/date.png";
import developer from "../../assets/img/developer-img.png";
import schedule from "../../assets/img/schedule.png";
import EventTabs from "./EventTabs";
import CommonBanner from "../shared/CommonBanner";
import FeaturedItems from "../landing/FeaturedItems";
import { Link } from 'react-router-dom';

import {
  featuredContent,
  featuredData,
  panelItems,
} from "../../data/DataService";
import "./event.css";
import Header from "../Header";
import AvatarDummy from "../../assets/img/avatar.png";
import LoginImage from "../../assets/img/login-img.png";
import Modal from "react-modal";

import { useQuery } from "@apollo/client";
import { GET_ALL_REGISTER_EVENT } from "../constants";

const UpComingEvent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const logoutHandler = () => {
    window.location.pathname = "/";
  };

  const { loading, error, data } = useQuery(GET_ALL_REGISTER_EVENT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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
      <div>
        <div className="container-fluid">
          <CommonBanner
            heading1="Code Innovate Challenge"
            heading3="Code, learn and win exciting prizes. Next level opportunity for code innovators"
            para="Faster and Safer Application Deployments on Kubernetes with Shipa and Oracle Kubernetes Engine (OKE)"
            imgsrc={hackathon}
            btname="Learn More"
          />
        </div>
        <div className="row blue-default heading-font pd-50 schedule-panel g-0">
          <div className="col-lg-3">
            <div className="card events rounded-top rounded-bottom">
              <img className="rounded-top" src={hackathon2} />
            </div>

            <div className="card-body dark-blue-default heading-font rounded-bottom">
              <h2>Code Innovate</h2>
              <p className="text-medium">
                Hold a three-day hackfest at your company by letting us bring
                the Oracle Code experience to you.
              </p>
              <div className="d-flex justify-content-between align-items-center events-detail">
                <small>5 days left</small>
                <a href="#" className="text-medium">
                  Join Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="hackathon-schedule heading-font">
              <div className="hackathon-list">
                <img src={date} alt="#" />
                <p>January 12, 2021</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="hackathon-schedule heading-font">
              <div className="hackathon-list">
              <Link className="btn btn-primary button" to = '/editprofile' > Register Now </Link>
                {/* <button
                  type="button"
                  className="btn btn-primary button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setModalIsOpen(true)}
                >
                  Registered Now
                </button> */}
                {/* <Modal
                  isOpen={modalIsOpen}
                  shouldCloseOnOverlayClick
                  onRequestClose={() => setModalIsOpen(false)}
                  style={{ width: "900px" }}
                >
                  <div className="container" style={{ textAlign: "justify" }}>
                    <div className="row" role="document">
                      <div className="col-md-10">
                        <div className="modal-content">
                          <div className="registeration-profile">
                            <div className="developer-profile blue-default pd-50 justify-content-center text-center">
                              <img alt="#" src={developer} />
                              <button
                                className="btn btn-primary button-transparent"
                                type="submit"
                              >
                                Upload Image
                              </button>
                            </div>
                            <div className="profile-body text-center">
                              <p>
                                Registration Date{" "}
                                <span class="text-right">30, January 2020</span>
                              </p>
                              <button
                                className="btn btn-primary button-transparent mt-50"
                                type="submit"
                              >
                                Edit Password
                              </button>
                            </div>
                          </div>
                          <form className="registeration-form page-form">
                            <h2>Personal Information</h2>
                            {data.getAllRegisterEvents.map(
                              (getAllRegisterEvents) => {
                                return (
                                  <div key={getAllRegisterEvents.id}>
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control input-color"
                                        id="formGroupExampleInput"
                                        placeholder="Name"
                                      >
                                        {" "}
                                        {getAllRegisterEvents.Name}
                                      </input>
                                    </div>
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control input-color"
                                        id="formGroupExampleInput"
                                        placeholder="Name"
                                      >
                                        {" "}
                                        {getAllRegisterEvents.Email}
                                      </input>
                                    </div>
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control input-color"
                                        id="formGroupExampleInput"
                                        placeholder="Name"
                                      >
                                        {" "}
                                        {getAllRegisterEvents.Address}
                                      </input>
                                    </div>
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control input-color"
                                        id="formGroupExampleInput"
                                        placeholder="Name"
                                      >
                                        {" "}
                                        {getAllRegisterEvents.City}
                                      </input>
                                    </div>
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control input-color"
                                        id="formGroupExampleInput"
                                        placeholder="Name"
                                      >
                                        {" "}
                                        {getAllRegisterEvents.Country}
                                      </input>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                            
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="hackathon-schedule heading-font">
              <div className="hackathon-list">
                <img src={schedule} alt="#" />
                <p>11:59pm EST</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 offset-md-4">
              <EventTabs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpComingEvent;
