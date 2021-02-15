import React from 'react';
import eventthumbnail1 from '../../assets/img/eventthumbnail1.png';
import undrawproud from '../../assets/img/undrawproud.png';
import undrawmobile from '../../assets/img/undrawmobile.png';
import illustration from '../../assets/img/illustration.png';
import { useQuery } from "@apollo/client";
import { GET_ALL_EVENTS } from "../constants";
import Hackathon1 from "../../assets/img/hackathon-1.jpg";
const AdminLogin = () => {
    const { loading, error, data } = useQuery(GET_ALL_EVENTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (

        <div className="container-fluid">
        
        <div className="row pl-50 pr-50 mt-50">
            <div className="col-lg-10">
                <div className="top-page-heading white-default">
                    <h1>Events <span>14 running</span></h1>
                </div>
            </div>
            <div className="col-lg-2">
                <div className="page-button">
                    <button className="btn btn-primary button-transparent" type="submit">Create Event</button>
                </div>
            </div>
        </div>
        <div className="row pr-50 pl-50">
            <div className="col-lg-6">
                <div className="alp">
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
                    {/* <a href="#">
                        <div className="admin-event-thumbnail">
                            <img src={eventthumbnail1} alt="#" />
                        </div>
                        <div className="admin-event-body white-default">
                            <h5>Amet minim mollit non deserunt <span>5 days left</span> </h5>
                            <small>20 participants</small>
                        </div>
                    </a>
                </div>
                <div className="alp">
                    <a href="#">
                        <div className="admin-event-thumbnail">
                            <img src={eventthumbnail1} alt="#" />
                        </div>
                        <div className="admin-event-body white-default">
                            <h5>Amet minim mollit non deserunt <span>5 days left</span> </h5>
                            <small>20 participants</small>
                        </div>
                    </a>
                </div>
                <div className="alp">
                    <a href="#">
                        <div className="admin-event-thumbnail">
                            <img src={eventthumbnail1} alt="#" />
                        </div>
                        <div className="admin-event-body white-default">
                            <h5>Amet minim mollit non deserunt <span>5 days left</span> </h5>
                            <small>20 participants</small>
                        </div>
                    </a> */}
                </div>
                <button className="btn btn-primary button-transparent mt-25" type="submit">Load More</button>
            </div>
            <div className="col-lg-6">
                <div className="admin-login-panel-thumbnail">
                    <img src={undrawproud} alt="#" />
                </div>
            </div>
        </div>
    
    <div className="container-fluid">
        <div className="row blue-default pd-50 white-default mt-50">
            <div className="col-lg-6">
                <div className="alp-thumbnail">
                    <img src={undrawmobile} alt="#" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="alp-button">
                    <button className="btn btn-primary button-transparent mb-50 float-end" type="submit">Developers blog</button>
                </div>
                <div className="alp-body">
                    <h1>220 Developers are registered</h1>
                    <span>120 active</span>
                    <span>100 non active</span>
                </div>
            </div>
        </div>
        <div className="row pr-50 pl-50 mt-50">
            <div className="col-lg-8">
                <div className="top-page-heading white-default">
                    <h1 className="mb-25">500 APIs are registered <span>354 APIs are used by 129 developers</span></h1>
                </div>
                <div className="alp">
                    <a href="#">
                        <div className="alp-body white-default">
                            <h5>Accelerated Mobile Pages (AMP) URL API <span>5 days left</span> </h5>
                        </div>
                    </a>
                </div>
                <div className="alp">
                    <a href="#">
                        <div className="alp-body white-default">
                            <h5>Amet minim mollit non deserunt <span>Used by 29 developers</span> </h5>
                        </div>
                    </a>
                </div>
                <div className="alp">
                    <a href="#">
                        <div className="alp-body white-default">
                            <h5>Amet minim mollit non deserunt <span>Used by 29 developers</span> </h5>
                        </div>
                    </a>
                </div>
                <button className="btn btn-primary button-transparent mt-25" type="submit">Load More</button>
            </div>
            <div className="col-lg-4">
                <div className="alp-button">
                    <button className="btn btn-primary button-transparent mt-25 float-end " type="submit">Revoke APIs </button>
                </div>
                <div className="alp-thumbnail">
                    <img src={illustration} alt="#" />
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default AdminLogin;