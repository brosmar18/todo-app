import { useContext, useState, useEffect } from 'react';
import { Tooltip, Pagination, Table, Modal } from '@mantine/core';
import { SettingsContext } from '../../context/Settings';
import { useTasks } from '../../context/TaskContext';
import { IconTrash } from '@tabler/icons-react';

const CompletedTasks = () => {
    const { settings, setSettings } = useContext(SettingsContext);
    const { displayLimit } = settings || {};
    const { sortedTasks, deleteTask } = useTasks();
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedTasks, setPaginatedTasks] = useState([]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentTaskId, setCurrentTaskId] = useState(null);

    const handleDeleteTask = (taskId) => {
        setCurrentTaskId(taskId);
        setIsDeleteModalOpen(true);
    };

    const confirmDeleteTask = () => {
        deleteTask(currentTaskId);
        setIsDeleteModalOpen(false);
    };

    useEffect(() => {
        // Filter to only include completed tasks
        const completedTasks = sortedTasks.filter(task => task.status === 'Completed');

        // Adjust currentPage if it exceeds totalPages due to filtering
        const totalPages = Math.max(1, Math.ceil(completedTasks.length / displayLimit));
        if (currentPage > totalPages) {
            setCurrentPage(totalPages); // Ensure currentPage is set to at least 1
        }

        // Calculate the tasks to be displayed on the current page
        const start = (currentPage - 1) * displayLimit;
        const end = start + displayLimit;
        setPaginatedTasks(completedTasks.slice(start, end));
    }, [sortedTasks, currentPage, displayLimit]);

    // Ensure the totalPages calculation is outside the Pagination component
    const totalPagesCalculation = Math.max(1, Math.ceil(sortedTasks.filter(task => task.status === 'Completed').length / displayLimit));

    const handlePageChange = (page) => setCurrentPage(page);

    const rows = paginatedTasks.map((task) => (
        <Table.Tr key={task.id}>
            <Table.Td>{task.name}</Table.Td>
            <Table.Td>{task.description}</Table.Td>
            <Table.Td>{task.assignee}</Table.Td>
            <Table.Td>{task.difficulty}</Table.Td>
            <Table.Td>{task.status}</Table.Td>
            <Table.Td className="flex items-center justify-center gap-2">
                <Tooltip label="Delete" position="top" withArrow>
                    <button
                        className="p-1 rounded hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out"
                        onClick={() => handleDeleteTask(task.id)}
                    >
                        <IconTrash size={18} className="cursor-pointer text-red-500 hover:text-red-600" />
                    </button>
                </Tooltip>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <div className="flex flex-col items-center w-full h-full py-10 px-10">
            <Modal
                opened={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                title="Delete Task"
            >
                <p className="text-center mb-4">Are you sure you want to delete this task?</p>
                <div className='flex w-full items-center justify-center gap-10'>
                    <button className='bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" onClick={confirmDeleteTask}>Yes</button>
                    <button className='bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" onClick={() => setIsDeleteModalOpen(false)}>No</button>
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
                <div className='h-full w-full flex items-end justify-center'>
                    <Pagination
                        page={currentPage}
                        onChange={handlePageChange}
                        total={totalPagesCalculation}
                        className="mt-8"
                    />
                </div>
            </div>
        </div>
    );
};

export default CompletedTasks;
