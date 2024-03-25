import React, { useState } from "react";
import {
  Container,
  Paper,
  Title,
  NumberInput,
  Checkbox,
  Select,
  Button,
} from "@mantine/core";
import { useSettings } from "../context/Settings";

const SettingsPage = () => {
  const { settings, setDisplayLimit, toggleHideCompleted, setSortField } =
    useSettings();
  const [formValues, setFormValues] = useState(settings);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayLimit(formValues.displayLimit);
    toggleHideCompleted(formValues.hideCompleted);
    setSortField(formValues.sortField);
  };

  const handleChange = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <Container
      size="md"
      className="min-h-screen flex flex-col md:flex-row justify-center items-start md:items-center p-4 w-full"
    >
      <Paper shadow="md" p="md" className="w-full md:w-1/3">
        <Title order={2} className="mb-4">
          Settings
        </Title>
        <form id="settingsForm" onSubmit={handleSubmit} className="space-y-6">
          <div>
            <NumberInput
              id="displayLimit"
              name="setDisplayLimit"
              label="Tasks per Page"
              description="Enter the number of tasks to display per page"
              placeholder="e.g., 5"
              min={1}
              required
              value={formValues.displayLimit}
              onChange={(value) => handleChange("displayLimit", value)}
            />
          </div>
          <div>
            <Checkbox
              id="toggleHideCompleted"
              name="toggleHideCompleted"
              label="Hide Completed Tasks"
              checked={formValues.hideCompleted}
              onChange={(event) =>
                handleChange("hideCompleted", event.currentTarget.checked)
              }
            />
          </div>
          <div>
            <Select
              id="setSortField"
              name="setSortField"
              label="Sort Tasks By"
              placeholder="Select Field"
              data={[
                { value: "name", label: "Name" },
                { value: "description", label: "Description" },
                { value: "assignee", label: "Assignee" },
                { value: "difficulty", label: "Difficulty" },
              ]}
              value={formValues.sortField}
              onChange={(value) => handleChange("sortField", value)}
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="filled"
            className="bg-blue-500 hover:bg-blue-700"
          >
            Save Settings
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SettingsPage;
