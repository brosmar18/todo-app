import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useTasks } from "../../context/TaskContext";
import {
  Card,
  Title,
  TextInput,
  Textarea,
  Select,
  Group,
  Button,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const TaskForm = ({ toggleModal }) => {
  const { addTask } = useTasks();
  const { can } = useContext(AuthContext);

  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      assignee: "",
      difficulty: "",
    },
  });

  const handleSubmit = (values) => {
    addTask(values);
    form.reset();
    toggleModal();
  };

  if (!can("create")) {
    return (
      <Card shadow="md" p="lg" className="w-full max-w-md mx-auto">
        <Title order={2} className="mb-4">
          Add a Task
        </Title>
        <Text>You do not have permission to create tasks.</Text>
        <Group position="right" mt="md">
          <Button variant="outline" onClick={toggleModal}>
            Close
          </Button>
        </Group>
      </Card>
    );
  }

  return (
    <Card shadow="md" p="lg" className="w-full max-w-md mx-auto">
      <Title order={2} className="mb-4">
        Add a Task
      </Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Task Name"
          placeholder="Task Name"
          required
          className="mb-4"
          {...form.getInputProps("name")}
        />
        <Textarea
          label="Description"
          placeholder="Description"
          required
          className="mb-4"
          {...form.getInputProps("description")}
        />
        <TextInput
          label="Assignee"
          placeholder="Assignee"
          required
          className="mb-4"
          {...form.getInputProps("assignee")}
        />
        <Select
          label="Difficulty"
          placeholder="Pick one"
          data={[
            { value: "easy", label: "Easy" },
            { value: "medium", label: "Medium" },
            { value: "hard", label: "Hard" },
          ]}
          required
          className="mb-4"
          {...form.getInputProps("difficulty")}
        />
        <Group position="right" mt="md">
          <Button variant="outline" onClick={toggleModal}>
            Cancel
          </Button>
          <Button variant="outline" type="submit">
            Add Task
          </Button>
        </Group>
      </form>
    </Card>
  );
};

export default TaskForm;
