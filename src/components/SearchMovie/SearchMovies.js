import React from 'react';

const SearchMovies = () => {
  return (
    <div className="search-bar">
      <form action="" className="form">
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
