import React, { useContext, useState, useEffect } from 'react';
import { MovieContext } from '../contexts/movieContext';
import MovieCard from './MovieCard';
import './HomeMovieList.css';
import PageChanger from './PageChanger';
import { Link } from 'react-router-dom';
import Loading from './Pieces/Loading';
import Error from './Pieces/Error';

const HomeMovieList = () => {
  const { movies, error } = useContext(MovieContext);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(20);

  useEffect(() => {
    if (movies) {
      setLoading(false);
    }
  }, [movies]);

  // Get current films
  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = movies ? movies.slice(indexOfFirstFilm, indexOfLastFilm) : [];

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const toTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  return (
    <div id='home-movie-list'>
      <div className="movies-title">
        <h2>Movies</h2>
        <hr />
      </div>
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <div className="home-card-list">
          {currentFilms.map((movie) => (
            <div className="home-card" key={movie.imdbid}>
              <Link to={`movies/${movie.id}`} onClick={toTop}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))}
          <div className='page-changer'>
            <PageChanger filmsPerPage={filmsPerPage} totalFilms={movies ? movies.length : []} paginate={paginate}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeMovieList;
