import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import MoviesDetailsPage from './pages/MoviesDetailsPage.jsx';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/MoviesDetailsPage/:movieId' element={<MoviesDetailsPage />} />
          <Route path='*' element={<h1>404 Page</h1>} />
        </Routes>
      </div>

    </>
  );
}

export default App;
