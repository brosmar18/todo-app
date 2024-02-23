import React from 'react';
import Form from '../../Components/Form';
import List from '../../Components/List';
import { useTasks } from '../../context/TaskContext';
import './Home.scss';

const Home = () => {
  const { tasks, addTask } = useTasks();

  return (
    <div className='home'>
      <Form addTask={addTask} />
      <List tasks={tasks} />
    </div>
  );
};

export default Home;
