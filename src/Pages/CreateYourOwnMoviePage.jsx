import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function CreateYourOwnMoviePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState(""); // Add state for error message

  const onSubmit = async event => {
    event.preventDefault();
    const values = {
      title,
      year,
      rating,
    };

    // Validate inputs
    if (!values.title || !values.year || !values.rating) {
      setError("All fields are required.");
      return;
    }

    // Validate year and rating (customize these checks)
    if (isNaN(values.year) || values.year < 1900 || values.year > new Date().getFullYear()) {
      setError("Invalid year.");
      return;
    }

    if (isNaN(values.rating) || values.rating < 1 || values.rating > 10) {
      setError("Rating must be between 1 and 10.");
      return;
    }

    try {
      const response = await fetch(`https://backendharrypottermovies.adaptable.app/Movies/New`, {
        method: 'POST', 
        body: JSON.stringify(values),
        headers: { 'Content-type': 'application/json' },
      })

      if (response.ok) {
        const newMovie = await response.json();
        console.log(newMovie);
        // Redirect to the newly created movie's details page
        navigate(`/MoviesDetailsPage/${newMovie.id}`);
      } else {
        setError("An error occurred while creating the movie.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while creating the movie.");
    }
  }

  return (
    <form
      style={{ display: 'grid', gridTemplate: 'auto / 1fr', justifyItems: 'center' }}
      onSubmit={onSubmit}
    >
      {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message */}
      <label>
        Title
        <input value={title} onChange={event => setTitle(event.target.value)} required />
      </label>
      <label>
        Year
        <input type='number' value={year} onChange={event => setYear(event.target.value)} required />
      </label>
      <label>
        Rating
        <input type='number' value={rating} onChange={event => setRating(event.target.value)} required />
      </label>
      <button type='submit'>Create New Harry Potter Movie!</button>
    </form>
  );
}

export default CreateYourOwnMoviePage;

