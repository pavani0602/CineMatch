import './MovieCard.css';
import FavoriteButton from '../FavriteButton/FavoriteButton.jsx';
function MovieCard(props) {
  const {  movie, onAddToFavorites, onRemoveFromFavorites, isFavorite } = props;

  return (
    <article>
      <div className="movie-card">
        <img 
          className="movie-poster"
          src={movie.poster} 
          alt={movie.title} 
        />
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>Year: {movie.year}  ⭐Rating: {movie.rating}</p>
        <FavoriteButton 
          movie={movie}
          onAddToFavorites={onAddToFavorites}
          onRemoveFromFavorites={onRemoveFromFavorites}
          isFavorite={isFavorite}
        />
      </div>
    </article>
  );
}

export default MovieCard;