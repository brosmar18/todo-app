import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="font-bold text-lg">{task.taskName}</h3>
      <p>{task.description}</p>
      <p className="mt-2">
        <strong>Assignee:</strong> {task.assignee}
      </p>
      <p>
        <strong>Difficulty:</strong> {task.difficulty}
      </p>
    </div>
  );
};

export default TaskCard;
