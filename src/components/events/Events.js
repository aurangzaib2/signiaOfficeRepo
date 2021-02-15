import React from "react";
import EventItems from "./EventItems";
import BackLink from "../backLink/BackLink";
import { featuredData } from "../../data/DataService";
import { useQuery } from "@apollo/client";
import { GET_ALL_EVENTS } from "../constants";
import "./event.css";
import Header from "../Header";
import AvatarDummy from "../../assets/img/avatar.png";
import Hackathon1 from "../../assets/img/hackathon-1.jpg";
import LoginImage from "../../assets/img/login-img.png";
const Events = () => {
  const { loading, error, data } = useQuery(GET_ALL_EVENTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const logoutHandler = () => {
    window.location.pathname = "/";
  };
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
        <div className="row justify-content-around">
          <div className="col-md-4 pl-50 mt-50">
            <div className="support primary-text-color">
              <h1>Events</h1>
              <h3>Showing all events active and already done in past.</h3>
            </div>
          </div>
          {/* <EventItems eventData={featuredData} /> */}

          <div className="col-auto align-self-center">
            <BackLink link={`/newlanding`} />
          </div>
        </div>
        <div className="row pl-50 pr-50 mt-50 justify-content-center">
          <div className="col-lg-7 col-md-12">
            <div className="Eventsclass ms-0">
              {data.getAllEvents.map((getAllEvents) => {
                return (
                  <div className="row mb-5" key={getAllEvents.id}>
                    <div className="col-5">
                      <img className="img-fluid" src={Hackathon1} alt="#" />
                    </div>
                    <div className="col event-detail">
                      <h3>{getAllEvents.Title} </h3>

                      <p>{getAllEvents.Discription}</p>
                      {/* <div className="w-100 text-end">
                        <a href="/" className="text-white">
                          Join Now
                        </a>
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
