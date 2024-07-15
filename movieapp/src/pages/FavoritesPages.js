// src/pages/FavoritesPage.js
import React from 'react';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import RemoveFavorites from '../components/RemoveFavorites';

const FavoritesPage = ({ favorites, removeFavoriteMovie }) => {
  return (
    <div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Favorites' />
      </div>
      <div className='row'>
        <MovieList movies={favorites} addFavoriteMovie={removeFavoriteMovie} favoriteComponent={RemoveFavorites} />
      </div>
    </div>
  );
}

export default FavoritesPage;
