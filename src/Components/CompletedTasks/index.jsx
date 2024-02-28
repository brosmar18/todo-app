import { useContext, useState, useEffect } from 'react';
import { Tooltip, Pagination, Table, Modal } from '@mantine/core';
import { SettingsContext } from '../../context/Settings';
import { useTasks } from '../../context/TaskContext';
import { IconTrash, IconCheck } from '@tabler/icons-react';

const CompletedTasks = () => {
    const { displayLimit } = useContext(SettingsContext);
    const { sortedTasks } = useTasks(); // Assuming useTasks provides both completed and uncompleted tasks
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedTasks, setPaginatedTasks] = useState([]);

    useEffect(() => {
        // Filter to only include completed tasks
        const completedTasks = sortedTasks.filter(task => task.status === 'Completed');

        // Adjust currentPage if it exceeds totalPages due to filtering
        const totalPages = Math.ceil(completedTasks.length / displayLimit);
        if (currentPage > totalPages) {
            setCurrentPage(Math.max(1, totalPages)); // Ensure currentPage is set to at least 1
        }

        // Calculate the tasks to be displayed on the current page
        const start = (currentPage - 1) * displayLimit;
        const end = start + displayLimit;
        setPaginatedTasks(completedTasks.slice(start, end));
    }, [sortedTasks, currentPage, displayLimit]);

    // Calculate the total number of pages based on filtered completed tasks
    const totalPages = Math.ceil(sortedTasks.filter(task => task.status === 'Completed').length / displayLimit);

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
                    <button className="p-1 rounded hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out">
                        <IconTrash size={18} className="cursor-pointer text-red-500 hover:text-red-600" />
                    </button>
                </Tooltip>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <div className="flex flex-col items-center w-full h-full py-10 px-10">
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
                        total={totalPages}
                        className="mt-8"
                    />
                </div>
            </div>
        </div>
    );
};

export default CompletedTasks;
