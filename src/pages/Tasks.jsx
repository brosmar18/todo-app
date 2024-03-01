import React from 'react';
import Form from '../Components/Form';
import TabViews from '../Components/TabViews';
const Tasks = () => {


  return (
    <div className='w-full h-full p-4 flex flex-col md:flex-row justify-center gap-64 bg-blue-300'>
      <TabViews />
      <Form />
    </div>
  );
};

export default Tasks;
