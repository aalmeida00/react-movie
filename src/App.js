import './App.css';
import SearchMovies from './components/SearchMovie/SearchMovies';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">React Procurador de Livros</h1>
        <SearchMovies />
      </div>
    </div>
  );
}

export default App;
