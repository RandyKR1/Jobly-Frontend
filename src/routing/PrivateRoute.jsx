import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

const PrivateRoute = () => {
    const { currentUser } = useContext(UserContext);

    return(
        currentUser ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoute