import React from "react";

const MovieList = ( props ) => {
    const FavoriteComponent = props.favoriteComponent;
    return(
        <div className="d-flex flex-row flex-nowrap overflow-auto">
            {props.movies.map((movie, index) => 
			    <div className='image-container d-flex justify-content-start m-4'>
                    <img src={movie.Poster} alt={movie.Title} />
                    <div onClick={() => props.addFavoriteMovie(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <FavoriteComponent/>
                    </div>
                </div>
                )}
        </div>
    )
}

export default MovieList;