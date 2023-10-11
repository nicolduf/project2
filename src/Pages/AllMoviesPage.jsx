import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllMoviesPage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAllMovies = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/Movies`);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const moviesData = await response.json();
            setMovies(moviesData);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching movie data:", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAllMovies();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {movies.map((movie) => (
                <div key={movie.id} className="movie-item">
                    <Link to={`/MoviesDetailsPage/${movie.id}`}>
                        <div className="movie-item-wrapper">
                            <img src={movie.imageUrl} alt={movie.title} className="allMoviesPageImages" />
                            <h1 className="allMoviesPageTitlesOnImage">
                                {movie.title}
                            </h1>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default AllMoviesPage;