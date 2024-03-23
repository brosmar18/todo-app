import React from "react";
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";

const TasksPage = () => {
  return (
    <div className="flex flex-wrap p-5 bg-gray-100 min-h-screen w-full">
      <div className="w-full lg:w-1/3 p-4 bg-white rounded-lg shadow-md">
        <h2 className="font-bold text-xl mb-4">Add Task</h2>
        <TaskForm />
      </div>
      <div className="w-full lg:w-2/3 p-4">
        <h2 className="font-bold text-xl mb-4">Tasks</h2>
        <TaskList />
      </div>
    </div>
  );
};

export default TasksPage;
