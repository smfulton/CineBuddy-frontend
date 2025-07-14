import { useEffect, useState } from "react";
import Slideshow from "../components/Slideshow/Slideshow";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/movies/trending")
      .then((res) => {
        setMovies(res.data.results); // `results` contains the array of movies
      })
      .catch((err) => {
        console.error("Failed to fetch trending movies", err);
      })
      .finally(() => setLoading(false));
  }, []);

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
      {loading ? (
        <p className="mt-10 text-gray-400">Loading trending movies...</p>
      ) : (
        <Slideshow movies={movies} />
      )}
    </div>
  );
};

export default Home;
