
import MovieGrid from '../../Components/MovieGrid/MovieGrid.jsx';
import './Discover.css';

function Discover(props) {
  const {
    movies,
    favorites,
    onAddToFavorites,
    onRemoveFromFavorites,
  } = props;

  return (
    <main className="discover-page">
      <section className="discover-heading">
        <p className="discover-eyebrow">YOUR MOVIE UNIVERSE</p>
        <h1>Discover Movies</h1>
        <p>
          Explore your next obsession, one movie at a time.
        </p>
      </section>

      <section className="discover-controls">
        <input
          className="movie-search"
          type="search"
          placeholder="Search movies by title..."
          aria-label="Search movies by title"
        />

        <select className="movie-sort" defaultValue="default" aria-label="Sort movies">
          <option value="default">Sort by</option>
          <option value="rating">Highest rated</option>
          <option value="year">Newest first</option>
          <option value="title">Title A–Z</option>
        </select>
      </section>

      <section className="discover-results">
        <div className="discover-results-heading">
          <h2>All Movies</h2>
          <span>{movies.length} movies</span>
        </div>

        <MovieGrid
          movies={movies}
          favorites={favorites}
          onAddToFavorites={onAddToFavorites}
          onRemoveFromFavorites={onRemoveFromFavorites}
        />
      </section>
    </main>
  );
}

export default Discover;
