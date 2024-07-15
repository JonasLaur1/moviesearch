// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import AddFavorites from '../components/AddFavorites';

const Home = ({ movies, searchValue, setSearchValue, addFavoriteMovie }) => {
  return (
    <div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies' />
      </div>

      <div className='row'>
        <MovieList movies={movies} addFavoriteMovie={addFavoriteMovie} favoriteComponent={AddFavorites} />
      </div>
    </div>
  );
}

export default Home;
