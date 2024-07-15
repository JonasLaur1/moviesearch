// src/App.js
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FavoritesPage from './pages/FavoritesPages';
import Header from './components/Header';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    const uniqueFavoriteList = Array.from(new Set(newFavoriteList));
    setFavorites(uniqueFavoriteList);
    saveToLocalStorage(uniqueFavoriteList);
  }

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorites) => favorites.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('react-movie-app-favorites')
    ) || [];
    setFavorites(movieFavorites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
  }

  return (
    <div className='container-fluid movie-app'>
      <BrowserRouter>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes>
          <Route path='/' element={<Home movies={movies} searchValue={searchValue} setSearchValue={setSearchValue} addFavoriteMovie={addFavoriteMovie} />} />
          <Route path='/favorites' element={<FavoritesPage favorites={favorites} removeFavoriteMovie={removeFavoriteMovie} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
