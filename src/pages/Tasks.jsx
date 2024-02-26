import React from 'react'

const Tasks = () => {
  return (
    <div className='bg-blue h-full w-full p-4 grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-5 lg:grid-rows-2'>
      <div className='rounded bg-blue-200 p-4 w-full h-full lg:col-start-1'>Box 1</div>
      <div className='rounded bg-green-200 p-4 w-full h-full lg:row-start-2'>Box 2</div>
      <div className='rounded bg-purple-200 p-4 w-full h-full lg:row-start-1 lg:col-start-2 lg:col-span-3'>Box 3</div>
      <div className='rounded bg-orange-200 p-4 w-full h-full lg:row-start-2 lg:col-start-2 lg:col-span-3'>Box 4</div>
      <div className='rounded bg-red-200 p-4 w-full h-full row-start-5 row-span-6 md:col-start-1 md:col-span-2 md:row-start-3 md:row-span-4 lg:col-start-4 lg:col-span-5 lg:row-start-1'>Box 5</div>
    </div>
  )
}

export default Tasks