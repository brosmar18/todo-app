import { createContext, useState, useContext, useEffect } from "react";
import { useTasks } from "../TaskContext";

const defaultSettings = {
  displayLimit: 3,
  hideCompleted: true,
  sortField: "difficulty",
};

export const SettingsContext = createContext({
  settings: defaultSettings,
  setSettings: () => {},
});

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    // Try to read settings from local storage or fall back to default settings
    const localSettings = localStorage.getItem("taskAppSettings");
    return localSettings ? JSON.parse(localSettings) : defaultSettings;
  });
  const { tasks, setSortedTasks } = useTasks();

  useEffect(() => {
    // Log settings whenever they change
    // console.log('Current Settings: ', settings);

    // Save updated settings to local storage
    localStorage.setItem("taskAppSettings", JSON.stringify(settings));

    const sortTasks = () => {
      const sortOrder = {
        Easy: 1,
        Medium: 2,
        Hard: 3,
      };

      setSortedTasks(
        [...tasks].sort((a, b) => {
          if (settings.sortField === "difficulty") {
            return sortOrder[a.difficulty] - sortOrder[b.difficulty];
          }
          if (
            settings.sortField === "name" ||
            settings.sortField === "description" ||
            settings.sortField === "assignee"
          ) {
            return a[settings.sortField].localeCompare(b[settings.sortField]);
          }
          return 0;
        })
      );
    };

    sortTasks();
  }, [tasks, settings, setSortedTasks]);

  const contextValue = {
    settings,
    setSettings,
  };

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};
