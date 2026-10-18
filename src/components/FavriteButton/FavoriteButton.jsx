import './FavoriteButton.css';
function FavoriteButton(props) {
    const { movie, onAddToFavorites, onRemoveFromFavorites, isFavorite } = props;
    return (
        <div className="favorite-button" onClick={() => isFavorite ? onRemoveFromFavorites(movie.id) : onAddToFavorites(movie)}>
            { isFavorite ? (
                <span className="heart-icon">❤️Remove from Favorites</span>
            ) : (
                <span className="heart-icon">🤍Add to Favorites</span>
            )}
        </div>
    );
}
export default FavoriteButton;
    