import React from 'react';
import List from '../Components/List';
import { AddTask } from '../Components/HomeComponents';
import Form from '../Components/Form';
const Tasks = () => {


  return (
    <div className='w-full h-full p-4 flex justify-center gap-64'>
      <List />
      <Form />
    </div>
  );
};

export default Tasks;
