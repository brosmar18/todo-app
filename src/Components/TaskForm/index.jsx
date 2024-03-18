import React from "react";
import {
  Card,
  Title,
  TextInput,
  Textarea,
  Select,
  Group,
  Button,
} from "@mantine/core";

const TaskForm = ({ toggleModal }) => {
  return (
    <Card shadow="md" p="lg" className="w-full max-w-md mx-auto">
      <Title order={2} className="mb-4">
        Add a Task
      </Title>
      <form>
        <TextInput
          label="Task Name"
          placeholder="Task Name"
          required
          className="mb-4"
        />
        <Textarea
          label="Description"
          placeholder="Description"
          required
          className="mb-4"
        />
        <TextInput
          label="Assignee"
          placeholder="Assignee"
          required
          className="mb-4"
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
        />
        <Group position="right" mt="md">
          <Button variant="outline" onClick={toggleModal}>
            Cancel
          </Button>
          <Button type="submit">Add Task</Button>
        </Group>
      </form>
    </Card>
  );
};

export default TaskForm;
