import React from "react";
import { Table, Pagination, Group, Text } from "@mantine/core";
import { useSettings } from "../../context/Settings";

const TaskTable = ({ tasks, activePage, setPage }) => {
  const { settings } = useSettings();
  const { displayLimit, sortField } = settings;

  // Sort tasks based on the sortField value
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortField === "taskName" || sortField === "description") {
      return a[sortField].localeCompare(b[sortField]);
    } else if (sortField === "assignee") {
      const assigneeA = `${a.assignee.firstName} ${a.assignee.lastName}`;
      const assigneeB = `${b.assignee.firstName} ${b.assignee.lastName}`;
      return assigneeA.localeCompare(assigneeB);
    } else if (sortField === "difficulty") {
      const difficultyOrder = ["easy", "medium", "hard"];
      return (
        difficultyOrder.indexOf(a.difficulty) -
        difficultyOrder.indexOf(b.difficulty)
      );
    }
    return 0;
  });

  const startIndex = (activePage - 1) * displayLimit;
  const endIndex = startIndex + displayLimit;
  const displayedTasks = sortedTasks.slice(startIndex, endIndex);

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
          total={Math.ceil(tasks.length / displayLimit)}
          value={activePage}
          onChange={setPage}
          size="sm"
        />
      </Group>
    </>
  );
};

export default TaskTable;
