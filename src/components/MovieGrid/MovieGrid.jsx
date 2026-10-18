import MovieCard from '../MovieCard/MovieCard.jsx';
import './MovieGrid.css';
function MovieGrid(props) {
  const { movies , onAddToFavorites, onRemoveFromFavorites, favorites } = props;
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie} // Pass the movie object directly to match the expected prop structure
          onAddToFavorites={onAddToFavorites}
          onRemoveFromFavorites={onRemoveFromFavorites}
          isFavorite={favorites.some((item) => item.id === movie.id)}
        />
        ))}
    </div>
  );
}   
export default MovieGrid;