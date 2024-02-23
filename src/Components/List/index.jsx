import { Pagination } from '@mantine/core';
import { SettingsContext } from '../../context/Settings';
import { useContext, useState, useEffect } from 'react';
import './List.scss';

const List = ({ tasks }) => {
    const { displayLimit } = useContext(SettingsContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedTasks, setPaginatedTasks] = useState([]);

    const totalPages = Math.ceil(tasks.length / displayLimit);


    useEffect(() => {
        const start = (currentPage - 1) * displayLimit;
        const end = start + displayLimit;
        setPaginatedTasks(tasks.slice(start, end));
    }, [tasks, currentPage, displayLimit]);

    return (
        <div className='list'>
            <h2 className='list__title'>All Tasks</h2>
            {paginatedTasks.map((task) => (
                <div key={task.id} className='list__container'>
                    <p>Task: {task.text}</p>
                    <p>Assigned to: {task.assignee}</p>
                    <p>Difficulty: {task.difficulty}</p>
                    <p>Complete: {task.complete.toString()}</p>
                </div>
            ))}
            <Pagination total={totalPages} page={currentPage} onChange={setCurrentPage} />
        </div>
    );
};

export default List;