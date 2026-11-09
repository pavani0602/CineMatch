import { Bookmark } from 'lucide-react';
import './WatchlistButton.css';

function WatchlistButton(props) {
  const {movie,onAddToWatchlist,onRemoveFromWatchlist,isInWatchlist} = props;

  function handleClick() {
    if (isInWatchlist) {
      onRemoveFromWatchlist(movie.id);
    } else {
      onAddToWatchlist(movie);
    }
  }

  return (
    <button
      className={`watchlist-button ${isInWatchlist ? 'active' : ''}`}
      onClick={handleClick}
      title={isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
      aria-label={isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
    >
      <Bookmark
        size={21}
        fill={isInWatchlist ? 'currentColor' : 'none'}
      />
    </button>
  );
}

export default WatchlistButton;