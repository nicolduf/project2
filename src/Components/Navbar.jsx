import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file
import audioFragment from "../assets/song.mp3"
import video from "../assets/Stars.mp4"

function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(audioFragment));

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, audio]);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className="navbar">
      <div className='navBarLinks'>
        <Link to="/">Home</Link>
        <Link to="/AllMoviesPage">Unreleased Harry Potter Movies</Link>
        <Link to="/CreateYourOwnMoviePage">Create Your Own Movie!</Link>
        <button onClick={toggleAudio} className="music-button">
          {isPlaying ? 'Pause Harry Potter Music' : 'Play Me Some Harry Potter Music Please!'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;