import { useContext, useState, useEffect } from 'react';
import { Tooltip, Pagination, Table, Modal, Button } from '@mantine/core';
import { SettingsContext } from '../../context/Settings';
import { useTasks } from '../../context/TaskContext';
import { IconTrash, IconCheck } from '@tabler/icons-react';

const List = () => {
    const { displayLimit, hideCompleted } = useContext(SettingsContext);
    const { sortedTasks, completeTask } = useTasks();
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedTasks, setPaginatedTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTaskId, setCurrentTaskId] = useState(null);

    const handleCompleteTask = (taskId) => {
        setCurrentTaskId(taskId);
        setIsModalOpen(true);
    }

    const confirmCompleteTask = () => {
        completeTask(currentTaskId);
        setIsModalOpen(false);
    };

    // Calculate the total number of pages based on sortedTasks now
    const totalPages = Math.ceil(sortedTasks.length / displayLimit);

    useEffect(() => {
        // Calculate the tasks to be displayed on the current page
        const start = (currentPage - 1) * displayLimit;
        const end = start + displayLimit;
        setPaginatedTasks(sortedTasks.slice(start, end)); // Use sortedTasks for pagination
    }, [sortedTasks, currentPage, displayLimit]); // Dependency array updated to sortedTasks

    // Update current page
    const handlePageChange = (page) => setCurrentPage(page);

    // Defines Table Rows
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
                    >
                        <IconCheck size={18} className="cursor-pointer text-blue-500 hover:text-blue-600" />
                    </button>
                </Tooltip>
                <span>/</span>
                <Tooltip label="Delete" position="top" withArrow>
                    <button className="p-1 rounded hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out">
                        <IconTrash size={18} className="cursor-pointer text-red-500 hover:text-red-600" />
                    </button>
                </Tooltip>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <div className="flex flex-col items-center w-full h-full py-10 px-10">
            <Modal
                opened={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title='Task Completion'
            >
                <p className='text-2xl font-semibold text-center mb-5'>Mark this task as completed?</p>
                <div className='flex w-full items-center justify-center gap-10'>
                    <button className='bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" onClick={confirmCompleteTask}>Yes</button>
                    <button className='bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" onClick={() => setIsModalOpen(false)}>No</button>
                </div>
            </Modal>
            <div className='h-full w-full'>
                <Table>
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
                />
            </div>
        </div>
    );
};

export default List;
