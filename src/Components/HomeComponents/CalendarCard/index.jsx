import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarCard = () => {
  const [value, onChange] = useState(new Date());

  // Example events data
  const events = [
    { time: '08:30 AM - 10:00 AM', title: 'New project Discussion', color: 'bg-purple-500' },
    { time: '10:00 AM - 11:00 AM', title: 'New Branding Work', color: 'bg-yellow-500' },
    { time: '11:00 AM - 12:00 PM', title: 'Development Discussion', color: 'bg-red-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-around space-y-4 row-start-5 row-span-2 md:col-start-1 md:col-span-2 md:row-start-3 md:row-span-2 lg:row-start-1 lg:row-span-2 lg:col-start-4 lg:col-span-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Jan 10, Tuesday</div>
        <div className="border-b-2 border-gray-100 mb-2"></div>

        {/* React Calendar Component */}
        <Calendar
          onChange={onChange}
          value={value}
          className="react-calendar"
        />
      </div>
      {/* Event List */}
      <div className="space-y-2 mt-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-center">
            <span className={`h-2 w-2 rounded-full ${event.color} mr-2`}></span>
            <span className="text-sm text-gray-700">{event.title}</span>
            <span className="text-xs text-gray-500 ml-auto">{event.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarCard;
