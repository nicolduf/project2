import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function MoviesDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isEditing, setIsEditing] = useState(false); // Toggle edit mode
    const apiUrl = `${import.meta.env.VITE_API_URL}/Movies/${movieId}`;
    const navigate = useNavigate();

    const editMovie = () => {
        setIsEditing(true);
    };

    const updateMovie = (e) => {
        e.preventDefault();
        fetch(apiUrl, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                setIsEditing(false);
            })
            .catch((error) => {
                console.error("Error updating movie:", error);
            });
    };

    const deleteMovie = () => {
        fetch(apiUrl, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json(); // Parse the response to JSON
            })
            .then(() => {
                setMovie(null);
                navigate('/AllMoviesPage');
            })
            .catch((error) => {
                console.error("Error deleting movie:", error);
            });
    };

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((movieData) => {
                setMovie(movieData);
            })
            .catch((error) => {
                console.error("Error fetching movie data:", error);
            });
    }, [apiUrl]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-details">
            {isEditing ? (
                <form onSubmit={updateMovie}>
                    <label>Title: </label>
                    <input type="text" value={movie.title} onChange={(e) => setMovie({ ...movie, title: e.target.value })} />
                    <label>Year: </label>
                    <input type="number" value={movie.year} onChange={(e) => setMovie({ ...movie, year: e.target.value })} />
                    <label>Rating: </label>
                    <input type="number" value={movie.rating} onChange={(e) => setMovie({ ...movie, rating: e.target.value })} />
                    <label>Description: </label>
                    <textarea value={movie.description} onChange={(e) => setMovie({ ...movie, description: e.target.value })} />
                    <button type="submit">Update Movie</button>
                </form>
            ) : (
                <>
                    <h1>{movie.title}</h1>
                    <p>{movie.year}</p>
                    <p>{movie.rating} Stars</p>
                    <p>{movie.description}</p>
                    <img src={movie.imageUrl} alt={movie.title} className="moviesDetailsPageImages" />
                    <br></br>
                    <button onClick={editMovie}>Edit Movie</button>
                    <button onClick={deleteMovie}>Delete Movie</button>
                </>
            )}
        </div>
    );
}

export default MoviesDetailsPage;
