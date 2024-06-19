import React from "react";
import {Link} from "react-router-dom"

const Company = ({handle, name, description, numEmployees, logoUrl}) => {

    return (
      
        <>
            <Link className="card-body" to={`/companies/${handle}`}>
                <h3>{name}</h3><small>Employee Count: {numEmployees}</small>  
                <div className="card-text">  
                    <p>{description}</p>
                </div>
            </Link>
          </>
     
    );
}

export default Company