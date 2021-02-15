import React from 'react';
import BackLink from '../backLink/BackLink';
import AvatarDummy from '../../assets/img/avatar.png';
import LoginImage from '../../assets/img/login-img.png';
import './ApiGuide.css'
import Header from '../Header';
import { useQuery } from "@apollo/client";
import { GET_ALL_APIS } from "../constants"; 

const SearchApi = (props) => {
    
    const { loading, error, data } = useQuery(GET_ALL_APIS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
     
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
            <div className="col-lg-3">
                <div className="top-page-heading heading-font">
                    <h1>Search API</h1>
                    <p>API Explorer for all registered APIs on the platform</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="search-api page-form">
                    <div className="form-group">
                        {/* <input type = "text"
                            value = {this.state.search}
                            onChange = {this.updateSearch.bind(this)} /> */}
                        <input type="search" className="form-control" id="gsearch" name="gsearch" placeholder="Search API" />
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="page-button">
                    <BackLink link={`/newlanding`} />
                </div>
            </div>
        </div>
        <div className="row pl-50 pr-50 mt-50 mb-50 justify-content-center">
            <div className="col-lg-10">
                <div className="search-api">
                    <table className="table table-hover table-responsive heading-font">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.getAllWso2Apis.map((getAllWso2Apis) => {
                            return (
                            <tr key = {getAllWso2Apis.id}>
                                <td className = "underline">
                                    <div className="table-title">
                                    
                                        <span className="light-blue">{getAllWso2Apis.name}</span>
                                    </div>
                                </td>
                                <td className = "underline">
                                    <span className="table-title">{getAllWso2Apis.description}</span>
                                </td>
                            </tr> 
                         ) })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default SearchApi;
