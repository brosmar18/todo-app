import React, { useState } from 'react';
import useForm from '../../hooks/form';
import { v4 as uuid } from 'uuid';
import { useTasks } from '../../context/TaskContext';

const Form = () => {
    const { addTask } = useTasks();
    const [defaultValues] = useState({ difficulty: 'Medium' });
    const { handleChange, handleSubmit: handleFormSubmit } = useForm(submitForm, defaultValues);

    function submitForm(values) {
        addTask({
            ...values,
            id: uuid(),
            complete: false,
        });
    }

    return (
        <div data-testid="form-container" className='w-full h-full flex flex-col items-center space-y-4'>
            <h2 data-testid="form-title" className='text-2xl font-semibold'>Add Task</h2>
            <form onSubmit={(e) => handleFormSubmit(e)} data-testid="task-form" className='w-[80%]'>
                <fieldset className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-4'>Task Name</label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
                        onChange={handleChange}
                        name="name"
                        type="text"
                        placeholder="Task Name"
                        data-testid="task-input" />
                </fieldset>
                <fieldset className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Task Description</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        name="description"
                        placeholder="Task Description"
                        rows="3"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Assigned to:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        name="assignee"
                        type="text"
                        placeholder="Assignee Name"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Difficulty</label>
                    <select
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="difficulty"
                        onChange={handleChange}
                        defaultValue={defaultValues.difficulty}
                    >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </fieldset>
                <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" data-testid="submit-button">Add Item</button>
            </form>
        </div>
    );
};

export default Form;
