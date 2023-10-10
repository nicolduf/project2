// Inside MoviesDetailsPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MoviesDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // Fetch movie details based on movieId from your db.json
        fetch(`https://backendharrypottermovies.adaptable.app/Movies/${movieId}`)
            .then((response) => response.json())
            .then((movieData) => {
                setMovie(movieData);
            });
    }, [movieId]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
            <img src={movie.imageUrl} alt={movie.title} />
            {/* Add other movie details as needed */}
        </div>
    );
}

export default MoviesDetailsPage;