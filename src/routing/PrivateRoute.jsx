import React, { useContext, useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";
import Alert from "../common/Alert";
import useTimedMessage from "../hooks/UseTimedMessage";

const PrivateRoute = () => {
  const { currentUser } = useContext(UserContext);
  const [showAlert, setShowAlert] = useTimedMessage(3000);
  const [alertMessages, setAlertMessages] = useState([]);

  useEffect(() => {
    if (!currentUser && !showAlert) {
      setAlertMessages(["You must log in to view this page."]);
      setShowAlert(true);
    }
  }, [currentUser, showAlert, setShowAlert]);

  if (!currentUser) {
    return (
      <>
        {showAlert && <Alert messages={alertMessages} />}
        <Navigate to="/" />
      </>
    );
  }

  return <Outlet />;
};

export default PrivateRoute;
