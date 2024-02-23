import React, { useState } from 'react';
import './Form.scss';
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
        <div className='form__container'>
            <h2 className='form__title'>Add Task</h2>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <div className="form__section">
                    <label>Task</label>
                    <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
                </div>
                <div className="form__section">
                    <label>Assigned to</label>
                    <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
                </div>
                <div className="form__section">
                    <label>Difficulty</label>
                    <input onChange={handleChange} defaultValue={defaultValues.difficulty} name="difficulty" type="range" min={1} max={5} />
                </div>
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default Form;
