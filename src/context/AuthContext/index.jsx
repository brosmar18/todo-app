// AuthContext/index.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Set the base URL for the backend server
const BASE_URL = "http://localhost:3001";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect hook to check for stored token and fetch user data on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
      fetchUserData(storedToken);
    }
  }, []);

  // Function to fetch user data using the token
  const fetchUserData = async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
    } catch (error) {
      setError("Failed to fetch user data");
    }
  };

  // Function to register a new user
  const register = async (userData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/register`, userData);
      setUser(response.data);
      setToken(response.data.token);
      setIsLoggedIn(true);
      localStorage.setItem("token", response.data.token);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
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
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  // Function to log out a user
  const logout = () => {
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
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
