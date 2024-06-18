import React, {useContext} from "react";
import {Link} from "react-router-dom"
import Companies from "../companies/Companies";
import Jobs from "../jobs/Jobs";
import Home from "../Home";
import UserContext from "../auth/UserContext";
import "./Nav.css"



const Nav = ({logout}) => {

    const { currentUser } = useContext(UserContext);

    const loggedInNav = () => {
        return(
            <>
            <ul>
                <Link to="/home" element={<Home />}>Home</Link>
                <Link to="/companies" element={<Companies />}>Companies</Link>
                <Link to="/jobs" element={<Jobs />}>Jobs</Link>
            </ul>
                <div className="nav-logout">
                    <Link to="/" onClick={logout}>Log Out</Link>
                </div>
            </>
        )
    }

    const loggedOutNav =() => {
        return(
            <>
            </>
        )
    }


    return(
        <nav>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </nav>
    )
} 


export default Nav