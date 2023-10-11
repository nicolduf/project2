import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function MoviesDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const apiUrl = `${import.meta.env.VITE_API_URL}/Movies/${movieId}`;
    const navigate = useNavigate(); // Initialize useNavigate from react-router-dom

    const deleteMovie = () => {
        fetch(apiUrl, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                setMovie(null);
                navigate('/'); // Redirect to the home page
            })
            .catch((error) => {
                console.error("Error deleting movie:", error);
            });
    }

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
            <h1>{movie.title}</h1>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
            <img src={movie.imageUrl} alt={movie.title} />
            <button onClick={deleteMovie}>Delete Movie</button>
        </div>
    );
}

export default MoviesDetailsPage;





// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// function MoviesDetailsPage() {
//     const { movieId } = useParams();
//     const [movie, setMovie] = useState(null);
//     const apiUrl = `${import.meta.env.VITE_API_URL}/Movies/${movieId}`;
//     const deleteMovie = () => {
//         fetch(apiUrl, {
//             method: "DELETE",
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 setMovie(null);
//             })
//             .catch((error) => {
//                 console.error("Error deleting movie:", error);
//             });
//     }
//     useEffect(() => {
//         fetch(apiUrl)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return response.json();
//             })
//             .then((movieData) => {
//                 setMovie(movieData);
//             })
//             .catch((error) => {
//                 console.error("Error fetching movie data:", error);
//             });
//     }, [apiUrl]);
//     if (!movie) {
//         return <div>Loading...</div>;
//     }
//     return (
//         <div className="movie-details">
//             <h1>{movie.title}</h1>
//             <p>Year: {movie.year}</p>
//             <p>Rating: {movie.rating}</p>
//             <img src={movie.imageUrl} alt={movie.title} />
//             <button onClick={deleteMovie}>Delete Movie</button>
//         </div>
//     );
// }
// export default MoviesDetailsPage;