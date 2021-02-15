import React from 'react'
import BackLink from '../backLink/BackLink';
function Publish() {
    return (
        <div className="container-fluid">
        <div className="row pl-50 pr-50 mt-50 mb-50">
            <div className="col-lg-10">
                <div className="top-page-heading white-default">
                    <h1>APIs List</h1>
                </div>
            </div>
            <div className="col-lg-2">
                <div className="page-button">
                    {/* <button className="btn btn-primary button" type="submit">Back</button> */}
                    <BackLink link={`/newlanding`} />
                </div>
            </div>
        </div>
        <div className="row pl-50 pr-50 mt-50 mb-50">
            <div className="col-lg-10">
                <div className="bd-example mt-50 mb-50">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr className="white-default">
                                    <th>Title</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="light-blue text-medium">Accelerated Mobile Pages (AMP) URL API</td>
                                    <td className="white-default text-medium">Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given list of public URL(s).</td>
                                    <td className="table-list-check">
                                        <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="light-blue text-medium">Accelerated Mobile Pages (AMP) URL API</td>
                                    <td className="white-default text-medium">Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given list of public URL(s).</td>
                                    <td className="table-list-check">
                                        <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="light-blue text-medium">Accelerated Mobile Pages (AMP) URL API</td>
                                    <td className="white-default text-medium">Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given list of public URL(s).</td>
                                    <td className="table-list-check">
                                        <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="light-blue text-medium">Accelerated Mobile Pages (AMP) URL API</td>
                                    <td className="white-default text-medium">Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given list of public URL(s).</td>
                                    <td className="table-list-check">
                                        <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="light-blue text-medium">Accelerated Mobile Pages (AMP) URL API</td>
                                    <td className="white-default text-medium">Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given list of public URL(s).</td>
                                    <td className="table-list-check">
                                        <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <button className="btn btn-primary button-filled api-list-button" type="submit">Publish</button>
            </div>
        </div>
    </div>
    )
}

export default Publish;