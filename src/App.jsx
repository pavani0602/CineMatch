import { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx'
import MovieGrid from './components/MovieGrid/MovieGrid.jsx'
import {Routes, Route} from 'react-router-dom';
import Discover from './Pages/Discover/Discover.jsx';
import Home from './Pages/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import MovieDetails from './Pages/MovieDetails/MovieDetails.jsx';
// import './App.css'

function App() {
  const linksHome = ["Home", "Discover", "Watchlist", "Favorites"];
  const linksDiscover = ["Home","Movies", "TV Shows", "Anime"];
  const [watchlist, setWatchlist] = useState(() => {
    try {
      //saving watchlist movies in localstorage
      const savedWatchlist = localStorage.getItem('watchlist');
      if (savedWatchlist === null) {
        return [];
      }   
  //restoring into a javascript object
      const parsedWatchlist = JSON.parse(savedWatchlist);
      return Array.isArray(parsedWatchlist) ? parsedWatchlist : [];
    } catch (error) {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);
  function handleAddToWatchlist(movie) {
    setWatchlist((prevWatchlist) =>
      !prevWatchlist.some((item) => item.id === movie.id)
        ? [...prevWatchlist, movie]
        : prevWatchlist
    );
  }
  function handleRemoveFromWatchlist(movieId) {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((movie) => movie.id !== movieId)
    );
  }
  const [favorites, setFavorites] = useState(() => {
    try {
      //saving favorite movies in localstorage
      const savedFavorites = localStorage.getItem('favorites');

      if (savedFavorites === null) {
        return [];
      }
      //restoring into a javascript object
      const parsedFavorites = JSON.parse(savedFavorites);

      return Array.isArray(parsedFavorites) ? parsedFavorites : [];
    } catch (error) {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  
  function handleAddToFavorites(movie) {
    setFavorites((prevFavorites) =>
      !prevFavorites.some((item) => item.id === movie.id)
        ? [...prevFavorites, movie]
        : prevFavorites
    );
  }

  function handleRemoveFromFavorites(movieId) {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie.id !== movieId) 
    );
  } 
  const movies = [
    {
      id:1, 
      title: "Sita Ramam",
      description: "A heartwarming tale of love and destiny.",
      year: 2022,
      rating: 8.5,
      poster: "/public/sita-ramam.png",
      genre: "Romance",
      trailerUrl: "https://www.youtube.com/embed/Ljk6tGZ1l3A"
    },
    {
      id:2,
      title: "The Great Adventure",
      description: "An epic journey across uncharted lands.",
      year: 2021,
      rating: 7.8,
      poster: "/public/the-great-adventure.png",
      genre: "Romance",
      trailerUrl: "https://www.youtube.com/embed/NhSz86YpihM"
    },
    {
      id:3,
      title: "Mystery of the Night",
      description: "A thrilling mystery that keeps you on the edge.",
      year: 2023,
      rating: 9.0,
      poster: "/public/mystery-of-the-night.png",
      genre:"Thriller",
      trailerUrl: "https://www.youtube.com/embed/t6_XoTqimP4"
    },
    {
      id:4,
      title: "My name is Nobody",
      description: "A hilarious comedy that will leave you in stitches.",
      year: 2020,
      rating: 7.2,
      poster: "/public/my-name-is-nobody.png",
      genre:"Comedy",
      trailerUrl: "https://www.youtube.com/embed/TMUX8y8bXWE"
    }
  ];  
  return (
    <>
      
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Header 
              title="CineMatch" 
              links={linksHome}
              isLoggedIn={false}
              userProfileImg="https://example.com/user-profile.jpg"
              variant="Home"
            />
            <Home
              movies={movies}
              favorites={favorites}
              watchlist={watchlist}
              onAddToFavorites={handleAddToFavorites}
              onRemoveFromFavorites={handleRemoveFromFavorites}
              onAddToWatchlist={handleAddToWatchlist}
              onRemoveFromWatchlist={handleRemoveFromWatchlist}
            />
            <Footer />
            </>
          }
        />
        <Route
          path="/" 
          element={
          <MovieGrid 
            movies={movies}
            onAddToFavorites={handleAddToFavorites}
            onRemoveFromFavorites={handleRemoveFromFavorites}
            favorites={favorites}
            watchlist={watchlist}
            onAddToWatchlist={handleAddToWatchlist}
            onRemoveFromWatchlist={handleRemoveFromWatchlist}
          />
          }
        />
        <Route 
          path="/watchlist"
          element={
            <>  
              <Header
                title="CineMatch" 
                links={linksHome}
                isLoggedIn={false}
                userProfileImg="https://example.com/user-profile.jpg"
                variant="Home"
              />
              <MovieGrid
                movies={watchlist}
                favorites={favorites}
                onAddToFavorites={handleAddToFavorites}
                onRemoveFromFavorites={handleRemoveFromFavorites}
                onAddToWatchlist={handleAddToWatchlist}
                onRemoveFromWatchlist={handleRemoveFromWatchlist}
                watchlist={watchlist}
              />
            </>
          }
        />
        <Route
          path="/favorites" 
          element={
            <>
            <Header 
              title="CineMatch" 
              links={linksHome}
              isLoggedIn={false}
              userProfileImg="https://example.com/user-profile.jpg"
              variant="Home"
            />
            <MovieGrid 
              movies={favorites}
              onAddToFavorites={handleAddToFavorites}
              onRemoveFromFavorites={handleRemoveFromFavorites}
              favorites={favorites}
              watchlist={watchlist}
              onAddToWatchlist={handleAddToWatchlist}
              onRemoveFromWatchlist={handleRemoveFromWatchlist} 
            />
            </>
          }
        />  
        <Route
          path="/discover"
          element={
            <>
              <Header 
                title="CineMatch" 
                links={linksDiscover}
                isLoggedIn={false}
                userProfileImg="https://example.com/user-profile.jpg"
                variant="discover"
              />
              <Discover
                movies={movies}
                favorites={favorites}
                onAddToFavorites={handleAddToFavorites}
                onRemoveFromFavorites={handleRemoveFromFavorites}
                watchlist={watchlist} 
                onAddToWatchlist={handleAddToWatchlist}
                onRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            </>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <MovieDetails
              movies={movies}
              onAddToFavorites={handleAddToFavorites}
              onRemoveFromFavorites={handleRemoveFromFavorites}
              favorites={favorites}
              watchlist={watchlist}
              onAddToWatchlist={handleAddToWatchlist}
              onRemoveFromWatchlist={handleRemoveFromWatchlist}
            />
          }
        />
        </Routes>
        
    </>
  )
}

export default App
