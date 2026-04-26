// frontend/src/pages/HomePage.jsx
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import Footer from '../components/Footer';
import api from '../api/client';

const HomePage = () => {
  const [movies, setMovies] = useState({
    trending: [],
    popular: [],
    netflixOriginals: [],
    myList: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get('/api/public/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-2xl animate-pulse">NETFLIX</div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <div className="mt-[-30px] md:mt-[-70px] relative z-20">
        <MovieRow title="Trending Now" movies={movies.trending} />
        <MovieRow title="Popular on Netflix" movies={movies.popular} />
        <MovieRow title="Netflix Originals" movies={movies.netflixOriginals} />
        <MovieRow title="My List" movies={movies.myList} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;