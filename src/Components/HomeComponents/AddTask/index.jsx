import useForm from "../../../hooks/form";
import { v4 as uuid } from 'uuid';
import { useTasks } from "../../../context/TaskContext";
import { useState } from "react";
import { NumberInput, Modal } from "@mantine/core";

const AddTask = () => {
    const { addTask } = useTasks();
    const [defaultValues] = useState({ difficulty: 4 });
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
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center space-y-4 row-start-5 md:row-start-3 md:col-start-1 md:col-span-2 lg:row-start-1 lg:col-start-4 lg:col-span-2">
            <Modal
                opened={openModal}
                onClose={() => setOpenModal(false)}
                title="Success!"
                centered
            >
                <p>Task has been successfully added!</p>
            </Modal>
            <div className="px-6 py-4">
                <p className="font-bold text-2xl mb-2">Add Task</p>
                <div className="border-b-2 border-gray-100 mb-2" />
            </div>
            <form className="w-full" onSubmit={(e) => handleFormSubmit(e)}>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Task</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="text"
                        type="text"
                        placeholder="Item Details"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Assigned to:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="assignee"
                        type="text"
                        placeholder="Assignee Name"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Difficulty</label>
                    <NumberInput
                        name="difficulty"
                        label="Difficulty"
                        placeholder="Choose 1 - 5"
                        min={1}
                        max={5}
                        onChange={handleChange}
                        defaultValue={defaultValues.difficulty}
                    />
                </fieldset>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Add Item</button>
            </form>
        </div >
    )
}

export default AddTask;