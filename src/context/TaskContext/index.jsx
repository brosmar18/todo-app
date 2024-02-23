import { createContext, useState, useContext } from "react";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks((currentTasks) => [...currentTasks, task]);
    };

    const deleteTask = (id) => {
        setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
    };

    const toggleTaskCompletion = (id) => {
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.id === id ? { ...task, complete: !task.complete } : task
            )
        );
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTaskCompletion }}>
            {children}
        </TaskContext.Provider>
    )
}