import React from 'react';

const TaskCard = ({ id, name, description, difficulty, assignee, toggleTaskCompletion }) => {
    return (
        <div className='max-w-sm rounded-lg overflow-hidden shadow-2xl bg-gradient-to-r from-blue-200 to-blue-400 p-6 text-gray-800 w-[500px]'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>{difficulty}</span>
            </div>
            <p className='text-sm text-gray-700 truncate'>{description}</p>
            <div className='flex items-center justify-between mt-4 mb-6'>
                <div className='flex items-center'>
                    <img className='w-12 h-12 rounded-full border-2 border-blue-300 mr-3' src="https://via.placeholder.com/150" alt="Assignee Avatar" />
                    <div>
                        <p className='font-semibold'>{assignee}</p>
                        <p className='text-sm text-blue-800'>Software Developer</p>
                    </div>
                </div>
                <button
                    className='py-2 px-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700'
                    onClick={() => toggleTaskCompletion(id)}
                >
                    Completed
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <p className='inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-800'>In Progress</p>
                <button className='py-2 px-4 bg-white text-blue-800 font-semibold rounded-lg shadow-md hover:bg-blue-50'>View Task</button>
            </div>
        </div>
    );
}

export default TaskCard;
