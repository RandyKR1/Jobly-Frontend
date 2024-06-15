import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Nav from "./Nav"
import Home from "./components/Home"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Companies from "./components/companies/Companies";
import CompanyDetail from "./components/companies/CompanyDetail";
import Jobs from "./components/jobs/Job";
import Profile from "./components/Profile";


const Routing = () => {

    
    return(
    <>
        <BrowserRouter> 
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
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