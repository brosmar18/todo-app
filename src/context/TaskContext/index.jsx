import React, { createContext, useState, useContext } from 'react';

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
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
        <TasksContext.Provider value={{ tasks, addTask, deleteTask, toggleTaskCompletion }}>
            {children}
        </TasksContext.Provider>
    );
};
