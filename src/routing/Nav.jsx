import React, {useContext} from "react";
import {Link} from "react-router-dom"
import LoginForm from "../auth/LoginForm";
import Companies from "../companies/Companies";
import Jobs from "../jobs/Jobs";
import Home from "../Home";
import SignUpForm from "../auth/SignUpForm";
import UserContext from "../auth/UserContext";



const Nav = ({logout}) => {

    const { currentUser } = useContext(UserContext);

    const loggedInNav = () => {
        return(
            <ul>
                <Link to="/home" element={<Home />}>Home</Link>
                <Link to="/companies" element={<Companies />}>Companies</Link>
                <Link to="/jobs" element={<Jobs />}>Jobs</Link>
                <Link to="/" onClick={logout}>Log Out</Link>
            </ul>
        )
    }

    const loggedOutNav =() => {
        return(
            <ul>
                <Link to="/login" element={<LoginForm />}>Login</Link>
                <Link to="/signup" element={<SignUpForm />}>Sign Up</Link>
            </ul>
        )
    }


    return(
        <nav>
            <Link to="/"> Jobly </Link>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </nav>
    )
} 


export default Nav