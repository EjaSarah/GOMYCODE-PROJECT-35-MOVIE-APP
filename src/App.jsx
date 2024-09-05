import './App.css'
import { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller', posterURL: 'https://via.placeholder.com/150', rating: 9 },
    { title: 'The Matrix', description: 'A hacker discovers reality', posterURL: 'https://via.placeholder.com/150', rating: 8 },
  ]);

  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const handleFilter = (title, rating) => {
    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
    );
    setMovies(filteredMovies);
  };

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
  };

  return (
    <div>
      <h1>My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: parseInt(e.target.value) })}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
