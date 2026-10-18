import {useState} from 'react'
function WatchlistMessage() {
    const[count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Add to Watchlist
            </button>
            <p>{count > 0 ? `Items in Watchlist: ${count}` : 'Watchlist is empty'}</p>
        </div>
    );
}
export default WatchlistMessage;