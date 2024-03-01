import { useContext, useState, useEffect } from 'react';
import { Tooltip, Pagination, Table, Modal } from '@mantine/core';
import { SettingsContext } from '../../context/Settings';
import { useTasks } from '../../context/TaskContext';
import { IconTrash, IconCheck } from '@tabler/icons-react';

const List = () => {
    const { settings, setSettings } = useContext(SettingsContext);
    const { displayLimit, hideCompleted } = settings || {};
    const { sortedTasks, completeTask, deleteTask } = useTasks();
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedTasks, setPaginatedTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentTaskId, setCurrentTaskId] = useState(null);
    const [totalPages, setTotalPages] = useState(1);

    const handleDeleteTask = (taskId) => {
        setCurrentTaskId(taskId);
        setIsDeleteModalOpen(true);
    };

    const confirmDeleteTask = () => {
        deleteTask(currentTaskId);
        setIsDeleteModalOpen(false);
    };


    const handleCompleteTask = (taskId) => {
        setCurrentTaskId(taskId);
        setIsModalOpen(true);
    };

    const confirmCompleteTask = () => {
        completeTask(currentTaskId);
        setIsModalOpen(false);
        // Recalculate pagination and possibly adjust current page after task completion
        const updatedFilteredTasks = hideCompleted ? sortedTasks.filter(task => task.status !== 'Completed' && task.status !== 'Deleted') : sortedTasks;
        const updatedTotalPages = Math.ceil(updatedFilteredTasks.length / displayLimit);
        if (currentPage > updatedTotalPages) {
            setCurrentPage(updatedTotalPages || 1); // Ensure we don't set currentPage to 0
        }
    };

    useEffect(() => {
        // Filter tasks based on `hideCompleted` and exclude 'Deleted' tasks.
        const filteredTasks = sortedTasks.filter(task => task.status !== 'Deleted' && (!hideCompleted || task.status !== 'Completed'));

        // Update total pages
        const newTotalPages = Math.ceil(filteredTasks.length / displayLimit);
        setTotalPages(newTotalPages);

        // Ensure current page is within the new total pages
        setCurrentPage(current => Math.min(current, newTotalPages));

        // Calculate tasks for the current page
        const startIdx = (currentPage - 1) * displayLimit;
        const paginated = filteredTasks.slice(startIdx, startIdx + displayLimit);
        setPaginatedTasks(paginated);
    }, [sortedTasks, currentPage, displayLimit, hideCompleted]);

    // Handle pagination change
    const handlePageChange = (page) => setCurrentPage(page);

    const rows = paginatedTasks.map((task) => (
        <Table.Tr key={task.id}>
            <Table.Td>{task.name}</Table.Td>
            <Table.Td>{task.description}</Table.Td>
            <Table.Td>{task.assignee}</Table.Td>
            <Table.Td>{task.difficulty}</Table.Td>
            <Table.Td>{task.status}</Table.Td>
            <Table.Td className="flex items-center gap-2">
                <Tooltip label="Mark as Completed" position="top" withArrow>
                    <button
                        className="p-1 rounded hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out"
                        onClick={() => handleCompleteTask(task.id)}
                        data-testid={`complete-task-${task.id}`}
                    >
                        <IconCheck size={18} className="cursor-pointer text-blue-500 hover:text-blue-600" />
                    </button>
                </Tooltip>
                <span>/</span>
                <Tooltip label="Delete" position="top" withArrow>
                    <button
                        className="p-1 rounded hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out"
                        onClick={() => handleDeleteTask(task.id)}
                        data-testid={`delete-task-${task.id}`}
                    >
                        <IconTrash size={18} className="cursor-pointer text-red-500 hover:text-red-600" />
                    </button>
                </Tooltip>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <div data-testid='task-list' className="flex flex-col items-center w-full h-full py-10 px-10">
            <Modal
                opened={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                title="Delete Task"
                data-testid="delete-task-modal"
            >
                <p className="text-center mb-4">Are you sure you want to delete this task?</p>
                <div className='flex w-full items-center justify-center gap-10'>
                    <button className='bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" onClick={confirmDeleteTask}>Yes</button>
                    <button className='bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" onClick={() => setIsDeleteModalOpen(false)}>No</button>
                </div>
            </Modal>
            <Modal
                opened={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title='Task Completion'
                data-testid="complete-task-modal"
            >
                <p className='text-2xl font-semibold text-center mb-5'>Mark this task as completed?</p>
                <div className='flex w-full items-center justify-center gap-10'>
                    <button className='bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" onClick={confirmCompleteTask}>Yes</button>
                    <button className='bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" onClick={() => setIsModalOpen(false)}>No</button>
                </div>
            </Modal>
            <div className='h-full w-full'>
            <Table data-testid="task-table">
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Task</Table.Th>
                            <Table.Th>Description</Table.Th>
                            <Table.Th>Assignee</Table.Th>
                            <Table.Th>Difficulty</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Actions</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </div>
            <div className='h-full w-full flex items-end justify-center'>
                <Pagination
                    page={currentPage}
                    onChange={handlePageChange}
                    total={totalPages}
                    className="mt-8"
                    data-testid="pagination"
                />
            </div>
        </div>
    );
};

export default List;
