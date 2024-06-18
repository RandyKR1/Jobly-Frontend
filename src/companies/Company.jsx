import React from "react";
import {Link} from "react-router-dom"

const Company = ({handle, name, description, numEmployees, logoUrl}) => {

    return (
      
        <div className="card">
            <Link className="CompanyCard card" to={`/companies/${handle}`}>
                  {name}
                  {logoUrl && <img src={logoUrl}
                                   alt={name}
                                   className="float-right ml-5" />}
                
                <p><small>{description}</small></p>
                <p>Employee Count: {numEmployees} </p>
            </Link>
          </div>
     
    );
}

export default Company