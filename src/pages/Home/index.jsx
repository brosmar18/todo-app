import {
  ProgressCard,
  CalendarCard,
  LiveTaskCard,
  UpcomingCard,
  TaskPlanner
} from '../../Components/HomeComponents';

const Home = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[1fr,repeat(2, 2fr)] md:grid-rows-[repeat(2,_1fr)] gap-4 w-full p-4 bg-yellow-100 min-h-screen">
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
