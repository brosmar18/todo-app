import useForm from "../../../hooks/form";
import { v4 as uuid } from 'uuid';
import { useTasks } from "../../../context/TaskContext";
import { useState } from "react";
import { Modal } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconCheck } from '@tabler/icons-react';

const AddTask = () => {
    const { addTask } = useTasks();
    const [defaultValues] = useState({ difficulty: 'Medium' });
    const { handleChange, handleSubmit: handleFormSubmit } = useForm(submitForm, defaultValues);
    const [openModal, setOpenModal] = useState(false);

    function submitForm(values) {
        addTask({
            ...values,
            id: uuid(),
            complete: false,
        });
        setOpenModal(true);
    }

    return (
        <div data-testid='add-task-container' className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center space-y-4 row-start-5 md:row-start-3 md:col-start-1 md:col-span2 lg:row-start-1 lg:col-start-4 lg:col-span-2">
            <Modal
                opened={openModal}
                onClose={() => setOpenModal(false)}
                title="Success!"
                centered
                data-testid="success-modal"
            >
                <div className="flex flex-col items-center space-y-4">
                    <IconCheck size={50} strokeWidth={2} color={'#1C7C54'} data-testid="success-icon" />
                    <p className="text-lg font-semibold">Task has been successfully added!</p>
                    <Link to='/tasks' className="text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out" data-testid="see-all-tasks-link">See All Tasks</Link>
                </div>
            </Modal>
            <div className="px-6 py-4">
                <p className="font-bold text-2xl mb-2" data-testid="add-task-title">Add Task</p>
                <div className="border-b-2 border-gray-100 mb-2" />
            </div>
            <form className="w-full" onSubmit={(e) => handleFormSubmit(e)} data-testid="add-task-form">
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Task Name</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="name"
                        type="text"
                        required
                        placeholder="Task Name"
                        onChange={handleChange}
                        data-testid="task-name-input"
                    />
                </fieldset>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Task Description</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="description"
                        placeholder="Task Description"
                        required
                        rows="3"
                        onChange={handleChange}
                        data-testid="task-description-input"
                    ></textarea>
                </fieldset>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Assigned to:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="assignee"
                        type="text"
                        placeholder="Assignee Name"
                        required
                        onChange={handleChange}
                        data-testid="assignee-input"
                    />
                </fieldset>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Difficulty</label>
                    <select
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="difficulty"
                        required
                        onChange={handleChange}
                        defaultValue={defaultValues.difficulty}
                        data-testid="difficulty-select"
                    >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </fieldset>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" data-testid="add-task-submit">Add Task</button>
            </form>
        </div>
    );
}

export default AddTask;
