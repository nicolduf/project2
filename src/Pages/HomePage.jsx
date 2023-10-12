import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
    return (
        <div className="home-page">
            <div className="text-background">
            <h1>A POTTER FAN? ARE WE?</h1>
                <h2>Welcome to the world of the Harry Potter movies that just didn't quite make it!</h2>

            <div className="movie-links">
                    <h2>Click here and behold:<br></br>
                        <Link to="/AllMoviesPage">The top Unreleased Harry Potter movies you never knew you needed in your life!</Link> </h2>
            </div>

                <h2>Anyway, while you're here, why not create your own???<br></br>
                    <Link to="/CreateYourOwnMoviePage">Get started on your magical movie adventure!</Link></h2>
            </div>
        </div>
  );
}

export default HomePage;
