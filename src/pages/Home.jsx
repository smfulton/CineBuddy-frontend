import Slideshow from '../components/Slideshow';
const Home = () => {
  const mockMovies = [
    { id: 1, title: "Shawshank Redemption" },
    { id: 2, title: "Idiocracy" },
    { id: 3, title: "Batman" },
    { id: 4, title: "Cars" },
    { id: 5, title: "Cars 2" },
    { id: 6, title: "Cars 3" },
  ];
  return (
    <div className="text-center mt-20 text-white">
      <h1 className="text-5xl font-extrabold mb-6">
        Welcome to <span className="text-rose-500">Cinebuddy</span>
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Plan unforgettable <span className="text-yellow-400 font-semibold">movie nights</span> with friends.
        Host watch parties, vote on movies, and share your reviews.
      </p>

      <div className="mt-10">
        <a
          href="/register"
          className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded shadow-lg transition duration-300"
        >
          Get Started
        </a>
      </div>

      {/* 🔥 Slideshow Component */}
      <Slideshow movies={mockMovies} />
    </div>
  );
};

export default Home;
