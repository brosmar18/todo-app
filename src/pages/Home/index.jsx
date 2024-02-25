const Home = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-[1fr,2fr,2fr] grid-rows-[repeat(3,minmax(0,1fr))] gap-5 bg-gray-200 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20">
      <div className="bg-red-500 h-32 row-start-1 col-span-2 md:col-span-1 md:h-auto"> Div 1</div>
      <div className="bg-green-500 h-32 row-start-2 col-span-2 md:col-span-1 md:h-auto"> Div 2</div>
      <div className="bg-blue-500 h-32 row-start-3 col-span-2 md:col-start-1 md:col-end-3 md:h-auto"> Div 3</div>
      <div className="bg-yellow-500 h-32 row-start-4 col-span-2 md:row-start-1 md:col-start-2 md:col-end-3 md:h-auto"> Div 4</div>
      <div className="bg-purple-500 h-32 row-start-5 col-span-2 md:row-start-2 md:col-start-2 md:col-end-3 md:h-auto"> Div 5</div>
      <div className="bg-orange-500 h-[96px] md:h-auto row-start-6 col-span-2 md:row-start-1 md:col-start-3 md:row-span-3"> Div 7</div>
    </div>
  );
};

export default Home;
