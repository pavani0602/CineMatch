function WatchlistButton(props) {
  const {
    movie,
    onAddToWatchlist,
    onRemoveFromWatchlist,
    isInWatchlist
  } = props;

  function handleClick() {
    if (isInWatchlist) {
      onRemoveFromWatchlist(movie.id);
    } else {
      onAddToWatchlist(movie);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={
        isInWatchlist
          ? 'Remove from watchlist'
          : 'Add to watchlist'
      }
      title={
        isInWatchlist
          ? 'Remove from watchlist'
          : 'Add to watchlist'
      }
    >
      {isInWatchlist ? '🔖' : '♧'}
    </button>
  );
}

export default WatchlistButton;
