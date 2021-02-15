import React from "react";
import "./event.css";
const CreateEvents = () => {
  return (
    <div className="container-fluid text-white">
      <div className="row pl-50 pr-50 mt-50 mb-50">
        <div className="col-lg-10">
          <div className="top-page-heading white-default">
            <h1>Create your event</h1>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="page-button">
            <button
              className="btn btn-primary button-transparent"
              type="submit"
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <div className="row pl-50 pr-50 mb-50 justify-content-center">
        <div className="col-lg-8">
          <form className="page-form dev-form">
            <h2 className="white-default">Event information</h2>
            <div className="row">
              <div className="col-md-9">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Title"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="12"
                    id="exampleTextarea"
                    placeholder="Event description"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Event end date"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Event end time"
                  />
                </div>
              </div>

              <div className="col-md-3 text-end">
                <button
                  className="btn btn-primary button-transparent"
                  type="submit"
                >
                  Upload Media
                </button>
              </div>
            </div>
          </form>

          <form className="page-form dev-form">
            <h2 className="white-default mt-25">Judges detail</h2>

            <div className="row">
              <div className="col-md-9">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Judge name"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Oraganization & position"
                  />
                </div>
                <div className="text-end">
                  <button
                    className="btn btn-primary button-transparent"
                    type="submit"
                  >
                    Add another judge
                  </button>
                </div>
              </div>
              <div className="col-md-3 text-end">
                <button
                  className="btn btn-primary button-transparent"
                  type="submit"
                >
                  Add Photo
                </button>
              </div>
            </div>
          </form>

          <form className="page-form dev-form">
            <h2 className="white-default mt-25">Event type</h2>
            <p className="white-default">
              If Event type is closed then admin should invite the specific
              developers to the event
            </p>
            <div className="form-check-inline radio-button mb-25">
              <input className="radio" type="radio" name="optradio" checked />
              <label className="white-default">Open</label>
            </div>
            <div className="form-check-inline radio-button mb-25">
              <input className="radio" type="radio" name="optradio" checked />
              <label className="white-default">Closed</label>
            </div>
            <div className="row">
              <div className="col-md-9">
                <div className="dropdown form-group">
                  <button
                    className="dropdown-toggle form-control"
                    type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    Select developer
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 text-end">
                <button
                  className="btn btn-primary button-transparent"
                  type="submit"
                >
                  Add another Dev
                </button>
              </div>
            </div>

            <p className="white-default">
              Select event to send invite to developers{" "}
            </p>
            <div className="row">
              <div className="col-md-9">
                <div className="dropdown form-group">
                  <button
                    className="dropdown-toggle form-control"
                    type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    Select event
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9">
                <div className="dropdown form-group">
                  <button
                    className="dropdown-toggle form-control"
                    type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    Select developer
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 text-end">
                <button
                  className="btn btn-primary button-transparent"
                  type="submit"
                >
                  Add another Dev
                </button>
              </div>
            </div>

            <div className="text-end">
              <button
                className="btn btn-primary button-filled mt-25"
                type="submit"
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvents;
