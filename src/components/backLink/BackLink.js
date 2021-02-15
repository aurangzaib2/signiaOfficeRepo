import React from "react";
import {Link} from 'react-router-dom';

const BackLink = ({link}) => {
    return (
        
                <Link to={link} className="btn btn-primary button">Back</Link>
           
    );
}

export default BackLink;