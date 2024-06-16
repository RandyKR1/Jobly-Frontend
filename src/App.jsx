/** manages user authentication, handles loading user information, stores application IDs, and provides context for the rest of the app. */


import React, {useState, useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routing from './routing/Routing'
import JoblyApi from './api'
import useLocalStorage from './hooks/LocalStorage'
import {jwtDecode} from "jwt-decode"; 
import UserContext from "./auth/UserContext"


export const TOKEN_STORAGE_ID = "jobly-token";

const App = () => {

  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID)
  const [currentUser, setCurrentUser] = useState(null)
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [infoLoaded, setInfoLoaded] = useState(false)


  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwtDecode(token);
          // put the token on the Api class so it can use it to call the API
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    // set infoLoaded to false while async getCurrentUser runs
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);


  const signup = async (signupData) => {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  }

  const hasApplied = (id) => {
    return applicationIds.has(id);
  }

  const apply = (id) => {
    if(hasApplied(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]))
  }


  return (
    <>
      <BrowserRouter>
        <UserContext.Provider 
          value = {{currentUser, setCurrentUser, hasApplied, apply}}>
            <div className="App">
              <Routing signup={signup} login={login} logout={logout} />
            </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
