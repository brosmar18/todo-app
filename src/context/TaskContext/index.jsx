import { createContext, useState, useContext } from 'react';

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [sortedTasks, setSortedTasks] = useState([]);

    const addTask = (task) => {
        const newTask = { ...task, status: 'Not Started' };
        setTasks((currentTasks) => [...currentTasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
    };

    // Updated to change task status to "Completed"
    const completeTask = (id) => {
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.id === id ? { ...task, status: 'Completed' } : task
            )
        );
    };

    return (
        <TasksContext.Provider
            value={{
                tasks,
                sortedTasks,
                setSortedTasks,
                addTask,
                deleteTask,
                completeTask,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};
