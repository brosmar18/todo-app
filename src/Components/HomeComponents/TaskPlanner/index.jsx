import { IconCalendar } from '@tabler/icons-react';

const tasks = [
  { time: '9:00 am', description: 'Do the laundry' },
  { time: '10:00 am', description: 'Vacuum the living room' },
  { time: '11:00 am', description: 'Water the plants' },
  { time: '12:00 pm', description: 'Organize the pantry' },
  { time: '2:00 pm', description: 'Clean the kitchen' },
  { time: '4:00 pm', description: 'Sort the recycling' },
  { time: '5:00 pm', description: 'Prepare dinner ingredients' },
];


const TaskPlanner = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-around space-y-4 h-full max-w-lg md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
      <div className='flex items-center gap-2'>
        <h3 className='text-2xl font-semibold'>Date</h3>
        <IconCalendar />
      </div>
      <div className='w-full'>
        {tasks.map((task, index) => (
          <div
            key={`task-list-${index}`}
            className='flex items-center justify-b mb-4 last:mb-0'
          >
            <p className='text-purple-600 font-semibold mr-2'>{task.time}</p>
            <p className='flex-1'>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskPlanner