import './Form.scss';
import useForm from '../../hooks/form';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';


const Form = ({ addTask }) => {
    const [defaultValues] = useState({ difficulty: 4 });

    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

    function addItem(item) {
        item.id = uuid();
        item.complete = false;
        console.log(item);
        setList([...list, item]);
    }

    function deleteItem(id) {
        const items = list.filter(item => item.id !== id);
        setList(items);
    }

    function toggleComplete(id) {

        const items = list.map(item => {
            if (item.id === id) {
                item.complete = !item.complete;
            }
            return item;
        });

        setList(items);

    }

    useEffect(() => {
        let incompleteCount = list.filter(item => !item.complete).length;
        setIncomplete(incompleteCount);
        document.title = `To Do List: ${incomplete}`;
        // linter will want 'incomplete' added to dependency array unnecessarily. 
        // disable code used to avoid linter warning 
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [list]);


    return (
        <div className='form__container'>
            <h2 className='form__title'>Add Task</h2>
            <form onSubmit={handleSubmit}>
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
                    <input onChange={handleChange} defaultValue={defaultValues.difficulty} name="difficulty" type="range" min={1} max={5} placeholder="Assignee Name" />
                </div>
                <button type="submit">Add Item</button>
            </form>
            {list.map(item => (
                <div key={item.id}>
                    <p>{item.text}</p>
                    <p>
                        <small>
                            Assigned to: {item.assignee}
                        </small>
                    </p>
                    <p>
                        <small>
                            Difficulty: {item.difficulty}
                        </small>
                    </p>
                    <div>
                        Complete: {item.complete.toString()}
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
}
    ;
export default Form