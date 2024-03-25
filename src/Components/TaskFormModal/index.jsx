import React from "react";
import { Modal } from "@mantine/core";
import TaskForm from "../TaskForm";

const TaskFormModal = ({ opened, onClose, onSubmit }) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Add Task"
      centered
      size="100%"
      className="md:hidden"
    >
      <TaskForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default TaskFormModal;
