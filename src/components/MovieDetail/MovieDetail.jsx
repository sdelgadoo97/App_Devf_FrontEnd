// 4. Usar el contexto de Movies
// Recuperar las películas del contexto
import { MoviesContext } from "../../contexts/MoviesContext";
import { useContext } from "react";

const MovieDetail = () => {
  const { selectedMovie } = useContext(MoviesContext);

  return (
    <section style={{width: "65%"}}>
      <h3>Detalle de Películas</h3>
      {
        selectedMovie ? // si es null, esta condición serpa false
          (<div className="movie-detail-container">
            <figure>
              <img src={selectedMovie.poster_path} alt={selectedMovie.title} />
            </figure>
            <h5>{selectedMovie.title}</h5>
            <p>{selectedMovie.overview}</p>
          </div>)
          :
          <h5 className="no-movie-selected">Selecciona alguna película</h5>
      }
    </section>
  );
};

export default MovieDetail;
