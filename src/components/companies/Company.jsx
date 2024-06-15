import React from "react";
import {Link} from "react-router-dom"

const Company = ({handle, name, description, numEmployees, logoUrl}) => {

    return (
        <Link className="CompanyCard card" to={`/companies/${handle}`}>
          <div className="card-body">
            <h6 className="card-title">
              {name}
              {logoUrl && <img src={logoUrl}
                               alt={name}
                               className="float-right ml-5" />}
            </h6>
            <p><small>{description}</small></p>
            <p>Employee Count: {numEmployees} </p>
          </div>
        </Link>
    );
}

export default Company