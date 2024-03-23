import React from "react";

const TaskForm = () => {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Task Name
        </label>
        <input
          className="shadow appearance-none border rounded w-ful py-2 px-3 text-gray-700 leading-tight"
          type="text"
          placeholder="Task Name"
        />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            placeholder="description"
          />
        </div>
        <div class="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Assignee
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="assignee"
            type="text"
            placeholder="Assignee"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="difficulty"
          >
            Difficulty
          </label>
          <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="difficulty"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
