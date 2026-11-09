import './MovieCard.css';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from '../FavriteButton/FavoriteButton.jsx';
function MovieCard(props) {
  const {  movie, onAddToFavorites, onRemoveFromFavorites, isFavorite } = props;
  const navigate = useNavigate();

  return (
    <article>
      <div className="movie-card">
        <img 
          onClick={()=>navigate(`/movie/${movie.id}`)}
          className="movie-poster"
          src={movie.poster} 
          alt={movie.title} 
        />
        <h2 onClick={() => navigate(`/movie/${movie.id}`)}>{movie.title}</h2>
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