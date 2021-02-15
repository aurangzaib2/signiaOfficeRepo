import { render } from '@testing-library/react';
import { extend } from 'jquery';
import React, { Component, useContext } from 'react';
import developer from '../assets/img/developer-img.png';
import './Profile.css';
import {AuthContext} from '../DispatchContext';


// class EditProfile extends Component {

// render() {
const EditProfile = () => {

    <AuthContext.Consumer>
        {() => {
            
        }}
    </AuthContext.Consumer>

    return ( 

        <div className="container-fluid">
        <div className="row pl-50 pr-50 mt-50 mb-50">
            <div className="col-lg-3">
                <div className="top-page-heading white-default">
                    <h1>Developer Profile</h1>
                    <p>Edit your name, avatar etc.</p>
                </div>
                <div className="developer-profile blue-default pd-50 justify-content-center text-center">
                    <img alt="#" src={developer} />
                    <button className="btn btn-primary button" type="submit">Upload Image</button>
                </div>
                <div className="profile-body text-center">
                    <p className="white-default">Registration Date <span className="text-right">30, January 2020</span></p>
                    <button className="btn btn-primary button" type="submit">Edit Password</button>
                </div>
            </div>
            <div className="col-lg-6">
                <form className="page-form dev-form">
                    <h2 className="white-default">Personal Information</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" /> 
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Date of Birth" />
                    </div>
                    <br />
                </form>
                <form className="page-form dev-form">
                    <h2 className="white-default mt-25">Contact Information</h2>

                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="tel" className="form-control" id="phone" name="phone" placeholder="Contact No"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Address Line 1"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Address Line 2"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="City"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Country"/>
                    </div>
                    <br />
                    <button className="btn btn-primary button" type="submit">Save</button>
                    <button className="btn btn-primary button" type="submit">Cancel</button>
                </form>
            </div>
            <div className="col-lg-3">
                <h3 className="white-default">Progress</h3>
                <div className="progressbar-section white-default">
                    <div className="projects">
                        <p><strong>3</strong> Projects <span>| 160 Points</span></p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="progress-list">
                    <h2 className="white-default">Projects</h2>
                    <ul>
                        <li className="white-default">
                            <span>- eHealth</span> | 0 Projects
                        </li>
                        <li className="white-default">
                            <span>- Smart City</span> | 0 Projects
                        </li>
                        <li className="white-default">
                            <span>- Smart Agriculture</span> | 3 Projects
                        </li>
                    </ul>
                    <button className="btn btn-primary button" type="submit">Project Detail</button>
                </div>
            </div>
            </div>
            </div>
        
        
    )
}
export default EditProfile;