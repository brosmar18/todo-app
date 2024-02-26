import React, { useState } from 'react';
import List from '../Components/List';
import { Modal, Button } from '@mantine/core';
import { AddTask } from '../Components/HomeComponents';
const Tasks = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='w-full h-full p-4 flex flex-col'>
      <List />
      <div>
        {/* Modal component controlled by opened state and handlers */}
        <Modal
          opened={openModal} // Open state for the Modal
          onClose={() => setOpenModal(false)} // Handler to close the Modal
          centered
        >
          <AddTask />
        </Modal>
        {/* Button component to trigger opening the Modal */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={() => setOpenModal(true)}>Add Task</button>
      </div>
    </div>
  );
};

export default Tasks;
