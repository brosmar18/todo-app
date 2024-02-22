import './Form.scss';


const Form = () => {
    return (
        <div className='form__container'>
            <h2 className='form__title'>Add Task</h2>
            <form>
                <div className="form__section">
                    <label>Task</label>
                    <input name="text" type="text" placeholder="Item Details" />
                </div>
                <div className="form__section">
                    <label>Assigned to</label>
                    <input name="assignee" type="text" placeholder="Assignee Name" />
                </div>
                <div className="form__section">
                    <label>Difficulty</label>
                    <input name="difficulty" type="range" min={1} max={5} placeholder="Assignee Name" />
                </div>
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
}
    ;
export default Form