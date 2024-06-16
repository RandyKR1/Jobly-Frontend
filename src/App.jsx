import React, {useState, useEffect} from 'react'
import './App.css'
import Routing from './Routing'
import JoblyApi from './api'




function App() {

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

 return (
    <>
      <Routing signup={signup} login={login} />
    </>
  )
}

export default App
