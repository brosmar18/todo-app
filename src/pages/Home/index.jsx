const Home = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-[1fr,repeat(2,_2fr)] sm:grid-rows-[repeat(2,_1fr)] sm:gap-0 w-full">
      {/* Box 2 */}
      <div className="bg-green-300 flex items-center justify-center sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2">Box 2</div>
      {/* Box 3 */}
      <div className="bg-blue-300 flex items-center justify-center sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3">Box 3</div>
      {/* Box 4 */}
      <div className="bg-yellow-300 flex items-center justify-center sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2">Box 4</div>
      {/* Box 5 */}
      <div className="bg-purple-300 flex items-center justify-center sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3">Box 5</div>
      {/* Box 6 */}
      <div className="bg-pink-300 flex items-center justify-center sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-3">Box 6</div>
    </div>
  );
};

export default Home;
