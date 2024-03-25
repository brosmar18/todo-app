import React, { useState } from "react";
import { Button } from "@mantine/core";
import { useTasks } from "../context/TaskContext";
import TaskForm from "../Components/TaskForm";
import TaskFormModal from "../Components/TaskFormModal";
import TaskTable from "../Components/TaskTable";

const TaskPage = () => {
  const [opened, setOpened] = useState(false);
  const [activePage, setPage] = useState(1);
  const { tasks, addTask } = useTasks();

  const handleSubmit = async (newTask) => {
    try {
      await addTask(newTask);
      setOpened(false);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row p-4 w-full">
      {/* Form component */}
      <div className="md:w-1/2 p-4 space-y-4">
        <h2 className="text-lg font-semibold">Add Task</h2>
        <Button
          onClick={() => setOpened(true)}
          className="w-full md:hidden bg-blue-500 hover:bg-blue-700"
        >
          Add Task
        </Button>
        <TaskFormModal
          opened={opened}
          onClose={() => setOpened(false)}
          onSubmit={handleSubmit}
        />
        <div className="hidden md:block">
          <TaskForm onSubmit={handleSubmit} />
        </div>
      </div>

      {/* Table component */}
      <div className="md:w-1/2 p-4 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Tasks</h2>
        <TaskTable tasks={tasks} activePage={activePage} setPage={setPage} />
      </div>
    </div>
  );
};

export default TaskPage;
