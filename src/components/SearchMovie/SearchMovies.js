import React from 'react';

const SearchMovies = () => {
  const procurarLivros = async (e) => {
    e.preventDefault();
    const query = 'Avengers';
    const url = `https://api.themoviedb.org/3/movie/550?api_key=9adfe29ab2c581d7d5fae07da955d98d&language=en-US${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
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
        />
        <button className="form--button" type="submit">
          Procurar
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
