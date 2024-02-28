import { createContext, useState, useContext, useEffect } from 'react';

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [sortedTasks, setSortedTasks] = useState([]);

    // Save tasks to localStorage whenever the tasks state changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

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
