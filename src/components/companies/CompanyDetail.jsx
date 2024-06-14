import React from "react";
import Home from "../Home";
import {Link} from "react-router-dom"

const CompanyDetail = () => {
    return (
        <>
            <h1>This is the Company Detail page</h1>
            
            <Link to="/" element={<Home/>}>Go Home</Link>
        </>
    )
}

export default CompanyDetail