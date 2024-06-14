import React from "react";
import Home from "../Home";
import {Link} from "react-router-dom"

const CompanyDetail = ({comps}) => {
    return (
        <>
            <h1>This is the Company Detail page</h1>
            <ul>
                {comps.map(c => (
                    <li>{c.name}/{c.descrition}
                            <br/>
                            {c.jobs}
                    </li>
                ))}
            </ul>
            <Link to="/" element={<Home/>}>Go Home</Link>
        </>
    )
}

export default CompanyDetail