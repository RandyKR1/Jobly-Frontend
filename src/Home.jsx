import React from "react";
import UserContext from "./auth/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./auth/LoginForm"
import SignUpForm from "./auth/SignUpForm"



const Home = () => {
    const { currentUser } = useContext(UserContext);

    const loggedInHome = () => {
        return(
            <>
            <div className="home-card-container">
            <div className="home-card">
                    <h1>Jobly</h1>
                    <p>Welcome, {currentUser.firstName}</p>
                </div>
            </div>
            </>
        )
    }

    const loggedOutHome = () => {
        return(
            <>
            <div className="home-card-container">
                <div className="home-card">
                    <h1>Jobly</h1>
                    <div className="home-btn-container">
                    <Link to="/login" element={<LoginForm />}>
                        <button className="home-btn">
                            Login
                        </button>
                    </Link>
                    <Link to="/signup" element={<SignUpForm />}>
                        <button className="home-btn">
                            Sign Up
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
            </>
        )
    }

    return(
        <>
            <div>
                {currentUser ? loggedInHome() : loggedOutHome()}
            </div>
        </>
    )
}

export default Home

