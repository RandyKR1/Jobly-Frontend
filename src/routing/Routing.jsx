import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Nav from "./Nav"
import PrivateRoute from "./PrivateRoute";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import Companies from "../companies/Companies";
import CompanyDetail from "../companies/CompanyDetail";
import Jobs from "../jobs/Jobs";
import ProfileForm from "../profile/ProfileForm";
import Home from "../Home";

const Routing = ({signup, login, logout}) => {

    
    return(
    <>
        <Nav logout={logout}/>
            <Routes className="wrapper">
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm login={login}/>} />
                <Route path="/signup" element={<SignUpForm signup={signup}/>} />
                <Route element={<PrivateRoute />}>
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/companies/:handle" element={<CompanyDetail />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/profile" element={<ProfileForm />} />
                </Route>
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
    </>
    )
}

export default Routing