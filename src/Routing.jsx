import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Nav from "./Nav"
import Home from "./components/Home"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Companies from "./components/companies/Companies";
import CompanyDetail from "./components/companies/CompanyDetail";
import Jobs from "./components/jobs/Job";


const Routing = ({comps}) => {

    
    return(
    <>
        <BrowserRouter> 
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/companies" element={<Companies comps={comps}/>} />
                <Route path="/company:name" element={<CompanyDetail comps={comps} />} />
                <Route path="/jobs" element={<Jobs comps={comps}/>} />
                <Route path="*" element={<Navigate to="/"/>} />
                {/* <Route path="/profile" element={<Profile />} /> */}
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default Routing