// List/index.jsx
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
    const [selectedRows, setSelectedRows] = useState([]);

    const totalPages = Math.ceil(tasks.length / displayLimit);

    useEffect(() => {
        const visibleTasks = hideCompleted ? tasks.filter(task => !task.complete) : [...tasks];
        const sortedTasks = visibleTasks.sort((a, b) => a[sortField] - b[sortField]);
        const start = (currentPage - 1) * displayLimit;
        const end = start + displayLimit;
        setPaginatedTasks(sortedTasks.slice(start, end));
    }, [tasks, currentPage, displayLimit, sortField, hideCompleted]);

    const rows = paginatedTasks.map((task, index) => (
        <Table.Tr key={`paginatedTasks-list-${index}`}>
            <Table.Td>
                <Checkbox
                    aria-label='Select row'
                    checked={selectedRows.includes(task.id)} // Changed to task.id for uniqueness
                    onChange={(event) => (
                        setSelectedRows(
                            event.currentTarget.checked
                                ? [...selectedRows, task.id] // Changed to task.id
                                : selectedRows.filter((id) => id !== task.id) // Changed to task.id
                        )
                    )}
                />
            </Table.Td>
            <Table.Td>{task.name}</Table.Td>
            <Table.Td>{task.description}</Table.Td>
            <Table.Td>{task.assignee}</Table.Td>
            <Table.Td>{task.difficulty}</Table.Td>
        </Table.Tr>
    ))

    return (
        <div data-testid="list" className="flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold mb-4">All Tasks</h2>
            <div className="flex flex-wrap gap-4 justify-start">
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th></Table.Th> {/* For Checkbox */}
                            <Table.Th>Task</Table.Th>
                            <Table.Th>Description</Table.Th>
                            <Table.Th>Assignee</Table.Th>
                            <Table.Th>Difficulty</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </div>
            <div className="flex justify-center mt-6">
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
