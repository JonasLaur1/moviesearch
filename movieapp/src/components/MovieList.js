import React from "react";

const MovieList = ({ movies }) => {
    return(
        <>
            {movies.map((movie, index) => 
            <div className="d-flex justify-content-start n-3">
                <img src={movie.Poster} alt={movie.Title} />
            </div>)}
        </>
    )
}

export default MovieList;