import React, { useState } from 'react';
import useForm from '../../hooks/form';
import { v4 as uuid } from 'uuid';
import { useTasks } from '../../context/TaskContext';

const Form = () => {
    const { addTask } = useTasks();
    const [defaultValues] = useState({ difficulty: 4 });
    const { handleChange, handleSubmit: handleFormSubmit } = useForm(submitForm, defaultValues);

    function submitForm(values) {
        addTask({
            ...values,
            id: uuid(),
            complete: false,
        });
    }

    return (
        <div data-testid="form-container">
            <h2 data-testid="form-title">Add Task</h2>
            <form onSubmit={(e) => handleFormSubmit(e)} data-testid="task-form">
                <div>
                    <label>Task</label>
                    <input onChange={handleChange} name="text" type="text" placeholder="Item Details" data-testid="task-input" />
                </div>
                <div>
                    <label>Assigned to</label>
                    <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" data-testid="assignee-input" />
                </div>
                <div>
                    <label>Difficulty</label>
                    <input onChange={handleChange} defaultValue={defaultValues.difficulty} name="difficulty" type="range" min={1} max={5} data-testid="difficulty-range" />
                </div>
                <button type="submit" data-testid="submit-button">Add Item</button>
            </form>
        </div>
    );
};

export default Form;
