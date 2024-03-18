import React from "react";
import { Card, Title, Text, Group } from "@mantine/core";

const TaskList = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card shadow="lg" p="lg" className="bg-white rounded-lg">
        <Title order={2} className="mb-6">
          Task List
        </Title>
        <ul className="space-y-6">
          {/* Example Task */}
          <Card shadow="md" p="md" className="bg-gray-100 rounded-lg">
            <Title order={3} className="mb-2">
              Task Name
            </Title>
            <Text color="gray" className="mb-2">
              Description of the task.
            </Text>
            <Group position="apart">
              <Text size="sm">
                Assignee: <span className="text-gray-800">John Doe</span>
              </Text>
              <Text size="sm">
                Difficulty: <span className="text-gray-800">Medium</span>
              </Text>
            </Group>
          </Card>
          {/* Additional tasks will be listed here */}
        </ul>
      </Card>
    </div>
  );
};

export default TaskList;
