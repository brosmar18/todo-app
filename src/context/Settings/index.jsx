import React, { createContext, useContext, useState } from "react";
export const SettingsContext = createContext();

// Custom hook to easily access the SettingsContext value
export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

// SettingsProvider component that provides the settings-related functionality
export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    displayLimit: 3,
    hideCompleted: true,
    sortField: "difficulty",
  });

  // Function to update the display limit
  const setDisplayLimit = (limit) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      displayLimit: limit,
    }));
  };

  // Function to toggle the hideCompleted setting
  const toggleHideCompleted = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      hideCompleted: !prevSettings.hideCompleted,
    }));
  };

  // Function to update the sort field
  const setSortField = (field) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      sortField: field,
    }));
  };

  // Object with the settings state and settings-related functions
  const value = {
    settings,
    setDisplayLimit,
    toggleHideCompleted,
    setSortField,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
