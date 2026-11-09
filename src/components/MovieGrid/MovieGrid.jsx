import MovieCard from '../MovieCard/MovieCard.jsx';
import './MovieGrid.css';
function MovieGrid(props) {
  const { movies , onAddToFavorites, onRemoveFromFavorites, favorites, watchlist, onAddToWatchlist, onRemoveFromWatchlist } = props;
  console.log("Favorites:", favorites);
  console.log("Watchlist:", watchlist);
  return (
    <div className="movie-grid">
      {movies.length === 0 && (
        <div className="no-movies-found">
          <p>No movies found matching your criteria.</p>
        </div>
      )}

      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie} // Pass the movie object directly to match the expected prop structure
          onAddToFavorites={onAddToFavorites}
          onRemoveFromFavorites={onRemoveFromFavorites}
          isFavorite={favorites.some((item) => item.id === movie.id)}
          isInWatchlist={watchlist.some((item) => item.id === movie.id)}
          onAddToWatchlist={onAddToWatchlist}
          onRemoveFromWatchlist={onRemoveFromWatchlist}
        />
        ))}
    </div>
  );
}   
export default MovieGrid;