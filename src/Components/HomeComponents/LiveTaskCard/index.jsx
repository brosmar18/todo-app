
const LiveTaskCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-around space-y-4 lg:row-start-2 lg:col-start-2 lg:col-span-2">
      <div className='flex justify-between items-center gap-2'>
        <h3 className='text-2xl font-semibold'>Task Name</h3>
        <span className='text-sm font-semibold text-white bg-red-500 px-3 py-1.5 rounded-lg'>Live</span>
      </div>
      <div className='flex items-center justify-center text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur, illum rerum voluptates quasi quam? Vitae quos deserunt, quas hic nesciunt maiores aliquid dolores? Expedita dignissimos beatae voluptatem quidem ex.</p>
      </div>
      <div className='flex items-center justify-around w-full text-gray-600'>
        <div>
          <p>
            <span className='text-sm font-semibold text-white bg-green-500 px-3 py-1.5 rounded-lg '>Assigned:</span> 02/03/2024 </p>
        </div>
        <div>
          <p>
            <span className='text-sm font-semibold text-white bg-blue-500 px-3 py-1.5 rounded-lg'>Due:</span> 02/03/2024 </p>
        </div>
      </div>
    </div>
  )
}

export default LiveTaskCard;
