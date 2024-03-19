import React, { useContext } from "react";
import { useTasks } from "../../context/TaskContext";
import { AuthContext } from "../../context/AuthContext";
import { Card, Title, Text, Group, Checkbox, ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

const TaskList = () => {
  const { tasks, updateTask, deleteTask } = useTasks();
  const { can } = useContext(AuthContext);

  const handleTaskCompletion = (taskId, completed) => {
    const updatedTask = tasks.find((task) => task.id === taskId);
    if (updatedTask) {
      updateTask({ ...updatedTask, completed });
    }
  };

  const handleTaskDeletion = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card shadow="lg" p="lg" className="bg-white rounded-lg">
        <Title order={2} className="mb-6">
          Task List
        </Title>
        <ul className="space-y-6">
          {tasks.map((task) => (
            <Card
              key={task.id}
              shadow="md"
              p="md"
              className="bg-gray-100 rounded-lg"
            >
              <Group position="apart" align="center">
                <div>
                  <Title order={3} className="mb-2">
                    {task.name}
                  </Title>
                  <Text color="gray" className="mb-2">
                    {task.description}
                  </Text>
                  <Group>
                    <Text size="sm">
                      Assignee:{" "}
                      <span className="text-gray-800">{task.assignee}</span>
                    </Text>
                    <Text size="sm">
                      Difficulty:{" "}
                      <span className="text-gray-800">{task.difficulty}</span>
                    </Text>
                  </Group>
                </div>
                <Group>
                  {can("update") && (
                    <Checkbox
                      checked={task.completed}
                      onChange={(event) =>
                        handleTaskCompletion(task.id, event.target.checked)
                      }
                    />
                  )}
                  {can("delete") && (
                    <ActionIcon
                      color="red"
                      onClick={() => handleTaskDeletion(task.id)}
                    >
                      <IconTrash size={16} color="black" />
                    </ActionIcon>
                  )}
                </Group>
              </Group>
            </Card>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default TaskList;
