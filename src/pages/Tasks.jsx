import React from 'react';
import List from '../Components/List';
import { AddTask } from '../Components/HomeComponents';
const Tasks = () => {


  return (
    <div className='w-full h-full p-4 flex justify-center gap-64'>
      <List />
      <AddTask />
    </div>
  );
};

export default Tasks;
