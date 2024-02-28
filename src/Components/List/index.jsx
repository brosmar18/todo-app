import { useContext, useState, useEffect } from 'react';
import { Pagination, Table } from '@mantine/core';
import { SettingsContext } from '../../context/Settings';
import { useTasks } from '../../context/TaskContext';

const List = () => {
    const { displayLimit } = useContext(SettingsContext);
    const { sortedTasks } = useTasks(); // Utilize sortedTasks
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedTasks, setPaginatedTasks] = useState([]);

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
