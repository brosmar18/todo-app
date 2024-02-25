import { Pagination } from '@mantine/core';
import { SettingsContext } from '../../context/Settings';
import { useTasks } from '../../context/TaskContext';
import { useContext, useState, useEffect } from 'react';

const List = () => {
    const { displayLimit, sortField, hideCompleted } = useContext(SettingsContext);
    const { tasks, toggleTaskCompletion } = useTasks();
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedTasks, setPaginatedTasks] = useState([]);

    const totalPages = Math.ceil(tasks.length / displayLimit);

    useEffect(() => {
        // Filter tasks based on hideCompleted setting
        const visibleTasks = hideCompleted ? tasks.filter(task => !task.complete) : [...tasks];

        // Sort tasks based on sortField
        const sortedTasks = visibleTasks.sort((a, b) => a[sortField] - b[sortField]);

        // Paginate sorted tasks
        const start = (currentPage - 1) * displayLimit;
        const end = start + displayLimit;
        setPaginatedTasks(sortedTasks.slice(start, end));
    }, [tasks, currentPage, displayLimit, sortField, hideCompleted]);
    return (
        <div data-testid="list">
            <h2>All Tasks</h2>
            {paginatedTasks.map((task, index) => (
                <div key={task.id} data-testid={`task-${index}`}>
                    <p>Task: {task.text}</p>
                    <p>Assigned to: {task.assignee}</p>
                    <p>Difficulty: {task.difficulty}</p>
                    <p>Complete: {task.complete.toString()}</p>
                    <button onClick={() => toggleTaskCompletion(task.id)}>Toggle Complete</button>
                </div>
            ))}
            <Pagination total={totalPages} page={currentPage} onChange={setCurrentPage} data-testid="pagination" />
        </div>
    );
};

export default List;
