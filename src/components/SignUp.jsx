import React from "react";
import {Link} from "react-router-dom"
import Home from "./Home";

const SignUp = () => {
    return(
        <>
            <h1>This is the sign up form</h1>
            <Link to="/" element={<Home/>}> Go Home</Link>
        </>
    )
}

export default SignUp

