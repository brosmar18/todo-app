import { Pagination } from '@mantine/core';
import { SettingsContext } from '../../context/Settings';
import { useTasks } from '../../context/TaskContext';
import { useContext, useState, useEffect } from 'react';
import { Table, Checkbox } from '@mantine/core';

const List = () => {
    const { displayLimit, sortField, hideCompleted } = useContext(SettingsContext);
    const { tasks, toggleTaskCompletion } = useTasks();
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedTasks, setPaginatedTasks] = useState([]);
    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
        const visibleTasks = hideCompleted ? tasks.filter(task => !task.complete) : [...tasks];
        // Update totalPages based on the visibleTasks
        setTotalPages(Math.ceil(visibleTasks.length / displayLimit));

        const sortedTasks = visibleTasks.sort((a, b) => a[sortField] - b[sortField]);
        const start = (currentPage - 1) * displayLimit;
        const end = start + displayLimit;
        setPaginatedTasks(sortedTasks.slice(start, end));

        // Resets to  page if the current page is graeter than new total pages
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }

    }, [tasks, currentPage, displayLimit, sortField, hideCompleted]);


    // Toggles Task as Complete
    const handleCheckboxChange = (id) => {
        toggleTaskCompletion(id);
    };

    // Defines Table Rows
    const rows = paginatedTasks.map((task, index) => (
        <Table.Tr key={`paginatedTasks-list-${index}`}>
            <Table.Td>
                <Checkbox
                    aria-label='Select row'
                    onChange={() => handleCheckboxChange(task.id)}
                />
            </Table.Td>
            <Table.Td>{task.name}</Table.Td>
            <Table.Td>{task.description}</Table.Td>
            <Table.Td>{task.assignee}</Table.Td>
            <Table.Td>{task.difficulty}</Table.Td>
        </Table.Tr>
    ));

    return (
        <div data-testid="list" className="flex flex-col items-center w-full h-full space-y-8">
            <h2 className="text-2xl font-semibold mb-4">All Tasks</h2>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Mark as Complete</Table.Th>
                        <Table.Th>Task</Table.Th>
                        <Table.Th>Description</Table.Th>
                        <Table.Th>Assignee</Table.Th>
                        <Table.Th>Difficulty</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
            <div className="mt-8">
                <Pagination
                    total={totalPages}
                    page={currentPage}
                    onChange={setCurrentPage}
                    data-testid="pagination"
                />
            </div>
        </div>
    );
};

export default List;
