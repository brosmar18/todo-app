import { Pagination } from '@mantine/core';
import { SettingsContext } from '../../context/Settings';
import { useTasks } from '../../context/TaskContext';
import { useContext, useState, useEffect } from 'react';
import TaskCard from '../TaskCard';

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
                <TaskCard
                    key={`task-card-${index}`}
                    id={task.id}
                    name={task.name}
                    description={task.description}
                    difficulty={task.difficulty}
                    assignee={task.assignee}
                    toggleTaskCompletion={toggleTaskCompletion}
                />
            ))}
            <Pagination total={totalPages} page={currentPage} onChange={setCurrentPage} data-testid="pagination" />
        </div>
    );
};

export default List;
