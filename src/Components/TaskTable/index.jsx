import React from "react";
import { Table, Pagination, Group, Text } from "@mantine/core";

const TaskTable = ({ tasks, activePage, setPage }) => {
  const itemsPerPage = 5;
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedTasks = tasks.slice(startIndex, endIndex);

  const rows = displayedTasks.map((task) => (
    <Table.Tr key={task._id}>
      <Table.Td>{task.taskName}</Table.Td>
      <Table.Td>{task.description}</Table.Td>
      <Table.Td>
        {task.assignee.firstName} {task.assignee.lastName}
      </Table.Td>
      <Table.Td>{task.difficulty}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table.ScrollContainer>
        <Table verticalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Task Name</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>Assignee</Table.Th>
              <Table.Th>Difficulty</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      <Group position="apart" mt="md">
        <Text size="sm" color="dimmed">
          Showing {startIndex + 1} to {Math.min(endIndex, tasks.length)} of{" "}
          {tasks.length} tasks
        </Text>
        <Pagination
          total={Math.ceil(tasks.length / itemsPerPage)}
          value={activePage}
          onChange={setPage}
          size="sm"
        />
      </Group>
    </>
  );
};

export default TaskTable;
