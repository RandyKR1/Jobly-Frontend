import React from "react";
import {Link} from "react-router-dom"
import Home from "./Home";

const Login = () => {
    return(
        <>
            <h1>This is the login form</h1>
            <Link to="/" element={<Home/>}> Go Home</Link>
        </>
    )
}

export default Login