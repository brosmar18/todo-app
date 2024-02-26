import useForm from "../../../hooks/form";
import { v4 as uuid } from 'uuid';
import { useTasks } from "../../../context/TaskContext";
import { useState } from "react";

const AddTask = () => {
    const { addTask } = useTasks();
    const { defaultValues } = useState({ difficulty: 4 });
    const { handleChange, handleSubmit: handleFormSumbmit } = useForm(submitForm, defaultValues);

    function submitForm(values) {
        addTask({
            ...values,
            id: uuid(),
            complete: false,
        });
    }


    return (
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center space-y-4 row-start-5 md:row-start-3 md:col-start-1 md:col-span-2 lg:row-start-1 lg:col-start-4 lg:col-span-2">
            <div className="px-6 py-4">
                <p className="font-bold text-2xl mb-2">Add Task</p>
                <div className="border-b-2 border-gray-100 mb-2" />
            </div>
            <form className="w-full">
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Task</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="text" type="text" placeholder="Item Details" />
                </fieldset>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Assigned to:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="assignee" type="text" placeholder="Assignee Name" />
                </fieldset>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Difficulty</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="difficulty" type="range" min="1" max="5" />
                </fieldset>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Add Item</button>
            </form>
        </div>
    )
}

export default AddTask;