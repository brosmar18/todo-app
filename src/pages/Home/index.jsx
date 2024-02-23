import { useState } from 'react';
import Form from '../../Components/Form';
import List from '../../Components/List';
import './Home.scss';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className='home'>
      <Form addTask={addTask} />
      <List tasks={tasks} />
    </div>
  )
}

export default Home;