import React from "react";

const TaskList = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="font-bold text-lg">Task Name</h3>
      <p>Description of Task</p>
      <p className="mt-2">
        <strong>Assignee:</strong> Person Name
      </p>
      <p>
        <strong>Difficulty:</strong> Medium
      </p>
    </div>
  );
};

export default TaskList;
