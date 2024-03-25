import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { TextInput, Textarea, Select, Button } from "@mantine/core";
import { AuthContext } from "../../context/AuthContext";

const TaskForm = ({ onSubmit }) => {
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContext);
  const formRef = useRef(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3001/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const fetchedUsers = response.data.map((user) => ({
        value: user._id,
        label: `${user.firstName} ${user.lastName}`,
      }));
      setUsers(fetchedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskName = e.target.taskName.value;
    const description = e.target.description.value;
    const assigneeId = e.target.assignee.value;
    const difficulty = e.target.difficulty.value;

    const newTask = {
      taskName,
      description,
      createdBy: user._id,
      assignee: assigneeId,
      difficulty,
    };

    await onSubmit(newTask);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <TextInput placeholder="Task Name" name="taskName" required />
      <Textarea placeholder="Description" name="description" required />
      <Select
        placeholder="Select Assignee"
        name="assignee"
        data={users}
        searchable
        required
      />
      <Select
        placeholder="Select Difficulty"
        name="difficulty"
        data={[
          { value: "easy", label: "Easy" },
          { value: "medium", label: "Medium" },
          { value: "hard", label: "Hard" },
        ]}
        required
      />
      <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700">
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
