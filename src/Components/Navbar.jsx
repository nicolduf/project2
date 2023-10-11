import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/src/assets/song.mp3'));

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className="navbar">
      <button onClick={toggleAudio}>
        {isPlaying ? 'Pause Harry Potter Music' : 'Play Me Some Harry Potter Music Please!'}
      </button>
      <div className='navBarLinks'>
        <Link to="/">Home</Link>
        <Link to="/CreateYourOwnMoviePage">Create Your Own Movie!</Link>


      </div>

    </nav>
  );
}

export default Navbar;
