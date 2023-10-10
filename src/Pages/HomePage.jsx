import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllMovies = async () => {
    const response = await fetch(
      "https://backendharrypottermovies.adaptable.app/Movies"
    );

    if (response) {
      const moviesData = await response.json();
      console.log(moviesData);
      setMovies(moviesData);
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
              <img src={movie.imageUrl} alt={movie.title} className="homePageImages" />
              <h1 className="homePageTitlesOnImage">
                {movie.title}
              </h1>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default HomePage;