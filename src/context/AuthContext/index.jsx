import React, { useState, useEffect } from "react";
import testUsers from "./lib/users";
import { jwtDecode } from "jwt-decode";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  // Check if user has a specific capability
  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  };

  // Validate JWT token
  const _validateToken = (token) => {
    try {
      let validUser = jwtDecode(token);
      console.log("validUser", validUser);
      if (validUser) {
        setUser(validUser);
        setIsLoggedIn(true);
        localStorage.setItem("auth", JSON.stringify({ token }));
        console.log("I am logged in!");
      }
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };

  // Login function
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

  // Logout function
  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    localStorage.removeItem("auth");
    console.log("I am logged out!");
  };

  // Check if user is already logged in on component mount
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const { token } = JSON.parse(storedAuth);
      _validateToken(token);
    }
  }, []);

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
