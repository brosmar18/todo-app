import {
  ProgressCard,
  CalendarCard,
  LiveTaskCard,
  UpcomingCard,
  TaskPlanner
} from '../../Components/Home';

const Home = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[1fr,repeat(2,_2fr)] md:grid-rows-[repeat(2,_1fr)] md:gap-4 w-full p-4 bg-yellow-100">
      {/* Progress Card */}
      <div className="bg-green-300 flex items-center justify-center md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 py-10 px-5">
        <ProgressCard />
      </div>
      {/* Upcoming Events, Tasks Card */}
      <div className="bg-blue-300 flex items-center justify-center md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 py-10 px-5">
        <UpcomingCard />
      </div>
      {/* Live Task Card */}
      <div className="bg-yellow-300 flex items-center justify-center md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 py-10 px-5">
        <TaskPlanner />
      </div>
      {/* Task List Card */}
      <div className="bg-purple-300 flex items-center justify-center md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 py-10 px-5">
        <LiveTaskCard />
      </div>
      {/* Calendar Card */}
      <div className="bg-pink-300 flex items-center justify-center md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 py-10 px-5">
        <CalendarCard />
      </div>
    </div>
  );
};

export default Home;
