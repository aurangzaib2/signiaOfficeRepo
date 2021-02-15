import React from 'react';

    const EditProfile = () => {
        return (
        
        <div className="container-fluid">
        <div className="row pl-50 pr-50 mt-50 mb-50">
            <div className="col-lg-3">
                <div className="top-page-heading white-default">
                    <h1>Developer Profile</h1>
                    <p>Edit your name, avatar etc.</p>
                </div>
                <div className="developer-profile blue-default pd-50 justify-content-center text-center">
                    <img alt="#" src="asstes/img/developer-img.png" />
                    <button className="btn btn-primary button-transparent" type="submit">Upload Image</button>
                </div>
                <div className="profile-body text-center">
                    <p className="white-default">Registration Date <span className="text-right">30, January 2020</span></p>
                    <button className="btn btn-primary button-transparent mt-50" type="submit">Edit Password</button>
                </div>
            </div>
            <div className="col-lg-6">
                <form className="page-form dev-form">
                    <h2 className="white-default">Personal Information</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" /> 
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Date of Birth" />
                    </div>
                </form>
                <form className="page-form dev-form">
                    <h2 className="white-default mt-25">Contact Information</h2>

                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input type="tel" className="form-control" id="phone" name="phone" placeholder="Contact No"/>
                    </div>
                    <div class="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Address Line 1"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Address Line 2"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="City"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Country"/>
                    </div>
                    <button className="btn btn-primary button-filled mt-25 " type="submit">Save</button>
                    <button className="btn btn-primary button-transparent float-start mt-25" type="submit">Cancel</button>
                </form>
            </div>
            <div className="col-lg-3">
                <h3 className="white-default">Progress</h3>
                <div className="progressbar-section white-default">
                    <div className="projects">
                        <p><strong>3</strong> Projects <span> | 160 Points</span></p>
                    </div>
                    {/* <div className="progress" style={{height:'14px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">

                        </div>
                    </div> */}
                    <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">

  </div>
</div>
                    {/*  */}
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
                    <button className="btn btn-primary button-transparent" type="submit">Project Detail</button>
                </div>
            </div>
        </div>
    </div> 
    
        )
}
export default EditProfile;