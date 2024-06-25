// 4. Usar el contexto de Movies
// Recuperar las películas del contexto
import { MoviesContext } from "../../contexts/MoviesContext";
import { useContext } from "react";

const MoviesList = () => {
  const moviesContext = useContext(MoviesContext);
  // console.log(moviesContext);
  return (
    <section style={{width: "35%"}} id="movies-list-container">
      <h3>Lista de Películas</h3>
      <ul>
        {
          moviesContext.moviesList.map((movie) => (
            <li
              key={movie._id}
              onClick={() => moviesContext.setSelectedMovie(movie) }>
              {movie.title}
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default MoviesList;
