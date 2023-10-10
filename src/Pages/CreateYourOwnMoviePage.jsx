// // import { useState } from "react";
// import { useNavigate } from 'react-router-dom'

// function CreateYourOwnMoviePage() {}
// const navigate = useNavigate()   

// const [title, setTitle] = useState("");
// const [year, setYear] = useState("");
// const [rating, setRating] = useState("");

// const onSubmit = async event => {
//     event.preventDefault()
//     const values = {
//         title,
//         year,
//         rating,
//     }

//   try {
//     const response = await fetch(`https://backendharrypottermovies.adaptable.app/Movies/New`, {
//         method: 'POST', 
//         body: JSON.stringify(values),
//         headers: { 'Content-type': 'application/json' },
//     })

//     if (response.ok) {
//         const newMovie = await response.json ()
//         console.log (newMovie)
//         navigate (`/MoviesDetailsPage`)
//     };
//   } 

//   return (
//     <form
//       style={{ display: 'grid', gridTemplate: 'auto / 1fr', justifyItems: 'center' }}
//       onSubmit={onSubmit}
//     >
//       <label>
//         Title
//         <input value={title} onChange={event => setTitle(event.target.value)} required />
//       </label>
//       <label>
//         Year
//         <input 
//          type='number' value={year} onChange={event => setYear(event.target.value)} required />
//       </label>
//       <label>
//         Rating
//         <textarea
//           type='number' value={rating} onChange={event => setRating(event.target.value)} required />
//       </label>
//       <button type='submit'>Create New Harry Potter Movie!</button>
//     </form>
//   )
// }
// export default CreateYourOwnMoviePage;


import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function CreateYourOwnMoviePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  const onSubmit = async event => {
    event.preventDefault()
    const values = {
      title,
      year,
      rating,
    }

    try {
      const response = await fetch(`https://backendharrypottermovies.adaptable.app/Movies/New`, {
        method: 'POST', 
        body: JSON.stringify(values),
        headers: { 'Content-type': 'application/json' },
      })

      if (response.ok) {
        const newMovie = await response.json()
        console.log(newMovie)
        navigate(`/MoviesDetailsPage`)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      style={{ display: 'grid', gridTemplate: 'auto / 1fr', justifyItems: 'center' }}
      onSubmit={onSubmit}
    >
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
        <textarea type='number' value={rating} onChange={event => setRating(event.target.value)} required />
      </label>
      <button type='submit'>Create New Harry Potter Movie!</button>
    </form>
  )
}

export default CreateYourOwnMoviePage;
