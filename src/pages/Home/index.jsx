import { useTasks } from '../../context/TaskContext';

const Home = () => {
  const { tasks, addTask } = useTasks();

  return (
    <div>
      Home
    </div>
  );
};

export default Home;
