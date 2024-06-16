import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Nav from "./Nav"
import Home from "./Home"
import LoginForm from "./auth/LoginForm";
import CompanyDetail from "./companies/CompanyDetail";
import Jobs from "./jobs/Jobs";
import Profile from "./profile/Profile";
import SignUpForm from "./auth/SignUpForm";
import Companies from "./companies/Companies";


const Routing = ({signup}) => {

    
    return(
    <>
        <BrowserRouter> 
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignUpForm signup={signup}/>} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/companies/:handle" element={<CompanyDetail />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default Routing