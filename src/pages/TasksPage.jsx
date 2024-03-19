import React, { useState } from "react";
import TaskList from "../Components/TaskList";
import TaskForm from "../Components/TaskForm";

const TasksPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>

      <div className="mb-6">
        <button
          onClick={toggleModal}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </div>

      <TaskList />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <TaskForm toggleModal={toggleModal} />
        </div>
      )}
    </div>
  );
};

export default TasksPage;
