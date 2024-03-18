import React, { useState } from "react";
import testUsers from "./lib/users";
import { jwtDecode } from "jwt-decode";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  };

  const _validateToken = (token) => {
    try {
      let validUser = jwtDecode(token); 
      console.log("validUser", validUser);
      if (validUser) {
        setUser(validUser);
        setIsLoggedIn(true);
        console.log("I am logged in!");
      }
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };

  const login = (username, password) => {
    let user = testUsers[username];
    if (user && user.password === password) {
      try {
        _validateToken(user.token);
      } catch (e) {
        setError(e);
        console.log(e);
      }
    }
  };

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    console.log("I am logged out!");
  };

  const values = {
    isLoggedIn,
    user,
    error,
    login,
    logout,
    can,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
