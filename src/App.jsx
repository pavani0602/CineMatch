import { useState } from 'react';
import Header from './components/Header/Header.jsx'
import MovieGrid from './components/MovieGrid/MovieGrid.jsx'
import {Routes, Route} from 'react-router-dom';
import Discover from './Pages/Discover/Discover.jsx';
import Home from './Pages/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
// import './App.css'

function App() {
  const linksHome = ["Home", "Discover", "Watchlist", "Favorites"];
  const linksDiscover = ["Home","Movies", "TV Shows", "Anime"]
  const [favorites, setFavorites] = useState([]);
  
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
      genre: "Romance"
    },
    {
      id:2,
      title: "The Great Adventure",
      description: "An epic journey across uncharted lands.",
      year: 2021,
      rating: 7.8,
      poster: "/public/the-great-adventure.png",
      genre: "Romance"
    },
    {
      id:3,
      title: "Mystery of the Night",
      description: "A thrilling mystery that keeps you on the edge.",
      year: 2023,
      rating: 9.0,
      poster: "/public/mystery-of-the-night.png",
      genre:"Thriller"
    },
    {
      id:4,
      title: "My name is Nobody",
      description: "A hilarious comedy that will leave you in stitches.",
      year: 2020,
      rating: 7.2,
      poster: "/public/my-name-is-nobody.png",
      genre:"Comedy"
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
              onAddToFavorites={handleAddToFavorites}
              onRemoveFromFavorites={handleRemoveFromFavorites}
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
          />
          }
        />
        <Route
          path="/favorites" 
          element={
            <MovieGrid 
              movies={favorites}
              onAddToFavorites={handleAddToFavorites}
              onRemoveFromFavorites={handleRemoveFromFavorites}
              favorites={favorites}
            />
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
              />
            </>
          }
        />
        {/* <Route
          path="/watchlist" 
          element={

          } 
          /> */}
        </Routes>
        
    </>
  )
}

export default App
