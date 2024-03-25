import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import axios from "axios";

const BASE_URL = "https://todo-app-server-vxwh.onrender.com";

export const TaskContext = createContext();

// Custom hook to easily access the TaskContext value
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

  // Access the user object and token from the AuthContext
  const { user, token } = useContext(AuthContext);

  // Function to fetch all tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/tasks`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async (task) => {
    if (user && user.capabilities.includes("create")) {
      try {
        const response = await axios.post(`${BASE_URL}/api/task`, task, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks([...tasks, response.data]);
        fetchTasks(); // Fetch tasks after adding a new task
      } catch (error) {
        console.error("Error adding task:", error);
        throw error; // Throw the error to be caught in the component
      }
    } else {
      console.log("User does not have permission to create tasks");
    }
  };
  // Function to update an existing task
  const updateTask = async (updatedTask) => {
    if (user && user.capabilities.includes("update")) {
      try {
        const response = await axios.put(
          `${BASE_URL}/api/task/${updatedTask._id}`,
          updatedTask,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const updatedTasks = tasks.map((task) =>
          task._id === response.data._id ? response.data : task
        );
        setTasks(updatedTasks);
      } catch (error) {
        console.error("Error updating task:", error);
      }
    } else {
      console.log("User does not have permission to update tasks");
    }
  };

  // Function to delete a task
  const deleteTask = async (taskId) => {
    if (user && user.capabilities.includes("delete")) {
      try {
        await axios.delete(`${BASE_URL}/api/task/${taskId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const updatedTasks = tasks.filter((task) => task._id !== taskId);
        setTasks(updatedTasks);
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    } else {
      console.log("User does not have permission to delete tasks");
    }
  };

  // Fetch tasks when the component mounts or when the token changes
  useEffect(() => {
    if (token) {
      fetchTasks();
    }
  }, [token]);

  // Object with the tasks state and task-related functions
  const value = {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
