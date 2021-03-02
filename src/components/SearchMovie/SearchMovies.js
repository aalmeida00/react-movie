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

      console.log(movies);
    } catch (err) {
      console.log(err);
    }
  };
  return (
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
  );
};

export default SearchMovies;
