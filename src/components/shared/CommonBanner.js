import React from "react";

const CommonBanner = (props) => {
  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-lg-8 pl-50 mb-50">
            <div className="hackathon primary-text-color mt-50">
                <h1>{props.heading1}</h1>
                <h3>{props.heading3}</h3>
                <p>{props.para}</p>
                <button type="button" className="btn btn-primary button">
                    {props.btname}
                </button>
            </div>
        </div>
        <div className="col-lg-4 pr-50 mt-50">
                <img src={props.imgsrc} alt="images" className="w-100" />
        </div>
    </div>
</div>
  )
}

export default CommonBanner;