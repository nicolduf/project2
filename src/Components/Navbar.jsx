import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/">Home</Link>
      <Link to="/CreateYourOwnMoviePage">Create Your Own Movie!</Link>
      <button onClick={toggleAudio}>
        {isPlaying ? 'Pause Harry Potter Music' : 'Play Me Some Harry Potter Music Please!'}
      </button>
    </nav>
  );
}

export default Navbar;
