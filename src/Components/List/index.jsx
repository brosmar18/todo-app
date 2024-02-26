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
            {/* {paginatedTasks.map((task, index) => (
                <div key={task.id} data-testid={`task-${index}`}>
                    <p>Task: {task.text}</p>
                    <p>Assigned to: {task.assignee}</p>
                    <p>Difficulty: {task.difficulty}</p>
                    <p>Complete: {task.complete.toString()}</p>
                    <button onClick={() => toggleTaskCompletion(task.id)}>Toggle Complete</button>
                </div>
            ))}
            <Pagination total={totalPages} page={currentPage} onChange={setCurrentPage} data-testid="pagination" /> */}
            <div className='max-w-sm rounded-lg overflow-hidden shadow-2xl bg-gradient-to-r from-blue-200 to-blue-400 p-6 text-gray-800'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-2xl font-bold'>Task Name</h2>
                    <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>Medium</span>
                </div>
                <p className='text-sm text-gray-700 truncate'>This is a short description of the task that might be too long to display fully.</p>
                <div className='flex items-center mt-4 mb-6'>
                    <img className='w-12 h-12 rounded-full border-2 border-blue-300 mr-3' src="https://via.placeholder.com/150" alt="Assignee Avatar" />
                    <div>
                        <p className='font-semibold'>John Doe</p>
                        <p className='text-sm text-blue-800'>Software Developer</p>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-800'>In Progress</p>
                    <button className='py-2 px-4 bg-white text-blue-800 font-semibold rounded-lg shadow-md hover:bg-blue-50'>View Task</button>
                </div>
            </div>
        </div>
    );
};

export default List;
