import React, { useState } from 'react';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const procurarLivros = async (e) => {
    e.preventDefault();

    const api_key = '9adfe29ab2c581d7d5fae07da955d98d';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="search-bar">
        <form onSubmit={procurarLivros} action="" className="form">
          <label className="form--label" htmlFor="query">
            Nome do livro
          </label>
          <input
            className="form--input"
            name="query"
            placeholder="Procure por um livro"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="form--button" type="submit">
            Procurar
          </button>
        </form>
      </div>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div key={movie.id} className="card">
              <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + 'poster'}
              />
              <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p>
                  <small>LANÇAMENTO: {movie.release_date}</small>
                </p>
                <p>
                  <small>NOTA: {movie.vote_average}</small>
                </p>
                <p className="card--desc">{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SearchMovies;
