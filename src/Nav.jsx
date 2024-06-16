import React from "react";
import {Link} from "react-router-dom"
import LoginForm from "./auth/LoginForm";
import Companies from "./companies/Companies";
import Jobs from "./jobs/Jobs";
import Home from "./Home";
import SignUpForm from "./auth/SignUpForm";



const Nav = () => {
    return(
        <nav>
        <Link to="/home" element={<Home />}>Home</Link>
        <Link to="/login" element={<LoginForm />}>Login</Link>
        <Link to="/signup" element={<SignUpForm />}>Sign Up</Link>
        <Link to="/companies" element={<Companies />}>Companies</Link>
        <Link to="/jobs" element={<Jobs />}>Jobs</Link>
        </nav>
    )
}

export default Nav