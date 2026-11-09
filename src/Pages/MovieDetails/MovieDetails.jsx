import { useParams, useNavigate } from 'react-router-dom';
import FavoriteButton from '../../components/FavriteButton/FavoriteButton.jsx';
import './MovieDetails.css';

function MovieDetails({
  movies,
  onAddToFavorites,
  onRemoveFromFavorites,
  favorites
}) {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === Number(id));
  const navigate = useNavigate();

  if (!movie) {
    return <div className="error-screen"><h1>Movie not found!</h1></div>;
  }

  const isFavorite = favorites.some(
    (favorite) => favorite.id === movie.id
  );

  return (
    <div className="movie-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <main className="movie-container">
        <section className="trailer-player">
          <iframe
            src={`${movie.trailerUrl}?autoplay=0&controls=1&rel=0`}
            title={`${movie.title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </section>

        <div className="movie-info">
          <h1 className="movie-main-title">{movie.title}</h1>

          <div className="movie-quick-tags">
            <span className="meta-tag">{movie.year}</span>
            <span className="meta-tag">{movie.genre}</span>
            <span className="meta-tag rating">⭐ {movie.rating}</span>
          </div>

          <p className="movie-main-description">
            {movie.description}
          </p>

          <div className="movie-actions-row">
            <FavoriteButton
              movie={movie}
              onAddToFavorites={onAddToFavorites}
              onRemoveFromFavorites={onRemoveFromFavorites}
              isFavorite={isFavorite}
            />

            <button className="btn-secondary">
              ＋ Add to Watchlist
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MovieDetails;