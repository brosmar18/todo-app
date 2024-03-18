import { createContext, useContext, useState } from "react";
import { AuthContext } from "../AuthContext";

export const TaskContext = createContext();

// custom hook to easily access the TaskContext value
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

// TaskProvider component that provides the task-related functionality
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Access the user object from the AuthContext
  const { user } = useContext(AuthContext);

  // Function to add a new task
  const addTask = (task) => {
    if (user && user.capabilities.includes("create")) {
      setTasks([...tasks, task]);
    } else {
      console.log("User does not have permission to create tasks");
    }
  };

  // Function to update an existing task
  const updateTask = (updatedTask) => {
    if (user && user.capabilities.includes("update")) {
      const updatedTasks = tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setTasks(updatedTasks);
    } else {
      console.log("User does not have permission to update tasks");
    }
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    if (user && user.capabilities.includes("delete")) {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } else {
      console.log("User does not have permission to delete tasks");
    }
  };

  // Object with the tasks state and task-related functions
  const value = {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
