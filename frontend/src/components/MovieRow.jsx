// frontend/src/components/MovieRow.jsx
import { useState, useRef } from 'react';

const MovieRow = ({ title, movies }) => {
  const rowRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (!movies || movies.length === 0) return null;

  return (
    <div className="relative group mb-8 md:mb-12">
      <h2 className="text-xl md:text-2xl font-bold px-6 md:px-12 mb-3">{title}</h2>
      
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Movies Container - Horizontal Scroll */}
        <div
          ref={rowRef}
          className="flex overflow-x-auto scrollbar-hide gap-2 px-6 md:px-12 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img 
                src={movie.poster} 
                alt={movie.title}
                className="movie-poster rounded-md"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x450/1a1a1a/red?text=NETFLIX';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-xs font-semibold">{movie.title}</p>
                <p className="text-xs text-gray-300">{movie.year} • {movie.rating}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieRow;