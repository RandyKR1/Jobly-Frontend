import React from "react";
import {Link, Navigate} from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Companies from "./components/companies/Companies";
import Jobs from "./components/jobs/Job";
import Home from "./components/Home";

const Nav = () => {
    return(
        <>
        <Link to="/login" element={<Login />}>Login</Link>
        <Link to="/signup" element={<SignUp />}>SignUp</Link>
        <Link to="/companies" element={<Companies />}>Companies</Link>
        <Link to="/jobs" element={<Jobs />}>Jobs</Link>
        <Link to="/home" element={<Home />}>Home</Link>
        </>
    )
}

export default Nav