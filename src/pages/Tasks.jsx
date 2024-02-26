import { AddTask } from '../Components/HomeComponents';
import List from '../Components/List';

const Tasks = () => {
  return (
    <div className='w-full h-full bg-blue-300 p-4'>
      <AddTask />
      <List />
    </div>
  )
}

export default Tasks