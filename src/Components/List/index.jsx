import { Pagination } from '@mantine/core';
import { SettingsContext } from '../../context/Settings';
import { useContext, useState, useEffect } from 'react';
import './List.scss';

const List = ({ tasks }) => {
    const { displayLimit, sortField } = useContext(SettingsContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedTasks, setPaginatedTasks] = useState([]);

    const totalPages = Math.ceil(tasks.length / displayLimit);

    useEffect(() => {
        const sortedTasks = [...tasks].sort((a, b) => a[sortField] - b[sortField]);
        const start = (currentPage - 1) * displayLimit;
        const end = start + displayLimit;
        setPaginatedTasks(sortedTasks.slice(start, end));
    }, [tasks, currentPage, displayLimit, sortField]);

    return (
        <div className='list' data-testid="list">
            <h2 className='list__title'>All Tasks</h2>
            {paginatedTasks.map((task, index) => (
                <div key={task.id} className='list__container' data-testid={`task-${index}`}>
                    <p>Task: {task.text}</p>
                    <p>Assigned to: {task.assignee}</p>
                    <p>Difficulty: {task.difficulty}</p>
                    <p>Complete: {task.complete.toString()}</p>
                </div>
            ))}
            <Pagination total={totalPages} page={currentPage} onChange={setCurrentPage} data-testid="pagination" />
        </div>
    );
};

export default List;