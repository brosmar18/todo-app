import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Set the base URL for the backend server
const BASE_URL = "https://todo-app-server-vxwh.onrender.com";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect hook to check for stored token and user data on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  // Function to register a new user
  const register = async (userData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/register`, userData);
      setUser(response.data);
      setToken(response.data.token);
      setIsLoggedIn(true);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data));
      setLoading(false);
      console.log("User registered:", response.data);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      console.error("Registration failed:", error);
    }
  };

  // Function to log in a user
  const login = async (userData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/login`, userData);
      setUser(response.data.user);
      setToken(response.data.token);
      setIsLoggedIn(true);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setLoading(false);
      console.log("User logged in:", response.data.user);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      console.error("Login failed:", error);
    }
  };

  // Function to log out a user
  const logout = () => {
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    console.log("User logged out");
  };

  const values = {
    user,
    token,
    isLoggedIn,
    error,
    loading,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
