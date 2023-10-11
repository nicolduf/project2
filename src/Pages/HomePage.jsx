import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
    return (
        <div className="home-page">
            <h1>A POTTER FAN? ARE WE?</h1>
            <p>Welcome to the world of the Harry Potter movies that just didn't quite make it!</p>

            <div className="movie-links">
                <p>Click here and behold:</p>
                <Link to="/AllMoviesPage">The top 12 Unreleased Harry Potter movies you never knew you needed in your life!</Link>
            </div>

            <p>Anyway, while you're here, why not create your own???</p>
            <Link to="/CreateYourOwnMoviePage">Get started on your magical movie adventure!</Link>
        </div>
  );
}

export default HomePage;
