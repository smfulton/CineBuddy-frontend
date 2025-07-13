const PopularSlideshow = ({ movies = [] }) => {
  return (
    <section className="mt-20 text-left">
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">Popular Picks</h2>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide pb-2">
        <div className="flex gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="w-40 flex-shrink-0 bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="h-56 bg-slate-700 flex items-center justify-center text-gray-500 text-sm">
                <span>Poster</span>
              </div>
              <div className="p-2">
                <h3 className="text-sm font-semibold text-white truncate">{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSlideshow;
