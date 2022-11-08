import React, {useState, useEffect} from 'react';
import {Movies} from '../components/Movies';
import {Search} from '../components/Search';
import {Preloader} from '../components/Preloader';

// const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (string, type = 'all') => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=e6cf2e1d&s=${string}${type !== 'all' ? `&type=${type}` : ''}`)
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      setMovies(data.Search);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=e6cf2e1d&s=transformers`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.Search);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, []); 

  return (
    <main className="container mx-auto px-5 main-content py-10">
      <Search searchMovies={searchMovies}/>
      {
        loading ? (
          <Preloader />
        ) : (
          <Movies movies={movies}/>
      )}
    </main>
  );
}

export {Main}