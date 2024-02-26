import {
  ProgressCard,
  CalendarCard,
  LiveTaskCard,
  UpcomingCard,
  TaskPlanner
} from '../../Components/HomeComponents';

const Home = () => {
  return (
    <div className="bg-blue-300 h-full w-full p-4 grid gap-4 grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-5 lg:grid-rows-2">
      {/* Progress Card */}
      <ProgressCard />
      {/* Upcoming Events, Tasks Card */}
      <UpcomingCard />
      {/* Task Planner */}
      <TaskPlanner />
      {/* Live Task Card */}
      <LiveTaskCard />
      {/* Calendar Card */}
      <CalendarCard />
    </div>
  );
};

export default Home;
