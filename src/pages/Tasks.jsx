import React from 'react';
import List from '../Components/List';
import Form from '../Components/Form';
const Tasks = () => {


  return (
    <div className='w-full h-full p-4 flex flex-col md:flex-row justify-center gap-64 bg-blue-300'>
      <List />
      <Form />
    </div>
  );
};

export default Tasks;
