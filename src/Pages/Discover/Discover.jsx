import './Discover.css';
import {useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
function Discover(props) {
  const {movies, favorites, onAddToFavorites, onRemoveFromFavorites} = props;
  const [searchParams,setSearchParams]=useSearchParams();
  // const genreFromUrl=searchParams.get('genre');
  const[searchText,setSearchText]=useState('');
  const[selectedGenre,setSelectedGenre]=useState(()=>{
    const genre=searchParams.get('genre');
    if(genre===null) return 'All genres';
    return genre.charAt(0).toUpperCase()+genre.slice(1);
  });
  const[selectedYear,setSelectedYear]=useState('Any year');
  const[selectedRating,setSelectedRating]=useState('Any rating');
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesGenre = 
      selectedGenre === 'All genres' || 
      movie.genre.toLowerCase() === selectedGenre.toLowerCase();
    let matchesYear = false;
    if(selectedYear === 'Any year') {
      matchesYear = true;
    } 
    else if(selectedYear === '2020s') {
      matchesYear = movie.year >= 2020 && movie.year <= 2029;
    }
    else if(selectedYear === '2000s') {
      matchesYear = movie.year >= 2000 && movie.year <= 2009;
    }
    else if(selectedYear === 'Earlier') {
      matchesYear = movie.year < 2000;
    }
    let matchesRating = false;
    if(selectedRating==='Any rating') {
      matchesRating=true;
    }
    else if(selectedRating==='8+'){
      matchesRating = movie.rating>=8 && movie.rating<=10;
    }
    else if(selectedRating==='6.5+') {
      matchesRating = movie.rating>=6.5;
    }
    return matchesSearch && matchesGenre && matchesYear && matchesRating;
  });
  
  return (
    <main className="discover-page">
      <section className="discover-intro">
        <h1>Find your next Obsession</h1>
        <p>Search stories from across decades, countries, and points of view.</p>
      </section>
      <section className="discover-controls-container">
        <div className="discover-search-wrapper">
          {/* SVG search magnifying glass icon */}
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Search by title..." 
            value={searchText}
            onChange={(event)=>setSearchText(event.target.value)}
          />
        </div>
        <div className="discover-filter-grid">
          <div className="filter-group">
            <span className="filter-label">GENRE</span>
            <select
              name="genre"
              value={selectedGenre}
              onChange={(event)=>{
                const genre=event.target.value;
                setSelectedGenre(genre);
                if(genre==='All genres'){
                  searchParams.delete('genre');
                }
                else {
                  searchParams.set('genre',genre.toLowerCase());
                }
                setSearchParams(searchParams);
              }}
            >
              <option>All genres</option>
              <option>Action</option>
              <option>Drama</option>
              <option>Romance</option>
              <option>Thriller</option>
              <option>Comedy</option>
            </select>
          </div>
          <div className="filter-group">
            <span className="filter-label">RELEASE</span>
            <select 
              name="release-time"
              value={selectedYear}
              onChange={(event)=>setSelectedYear(event.target.value)}
            >
              <option>Any year</option>
              <option>2020s</option>
              <option>2000s</option>
              <option>Earlier</option>
            </select>
          </div>
          <div className="filter-group">
            <span className="filter-label">RATING</span>
            <select 
              name="rating"
              value={selectedRating}
              onChange={(event)=>setSelectedRating(event.target.value)}>
              <option>Any rating</option>
              <option>8+</option>
              <option>6.5+</option>
            </select>
          </div>
        </div>
      </section>
      <section>
        <div className="discover-movies">
          <MovieGrid 
            movies={filteredMovies}
            onAddToFavorites={onAddToFavorites}
            onRemoveFromFavorites={onRemoveFromFavorites}
            favorites={favorites}
          />
        </div>
      </section>
    </main>
  );
}

export default Discover;
