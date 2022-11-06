import React from 'react';
import {Movies} from '../components/Movies';
import {Search} from '../components/Search';
import {Preloader} from '../components/Preloader';

// const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=e6cf2e1d&s=transformers`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}));
  }

  searchMovies = (string, type = 'all') => {
    this.setState({loading: true});
    fetch(`http://www.omdbapi.com/?apikey=e6cf2e1d&s=${string}${type !== 'all' ? `&type=${type}` : ''}`)
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search, loading: false}));
  }

  render() {
    const {movies = [], loading} = this.state;

    return <main className="container mx-auto px-5 main-content py-10">
        <Search searchMovies={this.searchMovies}/>
        {
          loading ? (
            <Preloader />
          ) : (
            <Movies movies={movies}/>
        )}
      </main>
  }
}

export {Main}