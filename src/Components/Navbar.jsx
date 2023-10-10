import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        const audio = new Audio('/src/assets/song.mp3');
        if (!isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
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