import React, { useContext, useEffect, useState } from 'react';
import './AllMoviesList.css';
import { MovieContext } from '../contexts/movieContext';
import PageChanger from './PageChanger';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import Loading from './Pieces/Loading';
import Error from './Pieces/Error';

const AllMoviesList = () => {
    const { movies, error } = useContext(MovieContext);
    const [loading, setLoading] = useState(true)
    console.log(error)

    useEffect(() => {
        if (movies) {
            setLoading(false)
        }
    },[movies])

    const [currentPage, setCurrentPage] = useState(1);
    const [filmsPerPage] = useState(20);

    // Get current films
    const indexOfLastFilm = currentPage * filmsPerPage;
    const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
    const currentFilms = movies ? movies.slice(indexOfFirstFilm, indexOfLastFilm) : [];

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        })
    }

    return (
        <div id='all-movies-list'>
            <div className="movies-title">
                <h2>Movies</h2>
                <hr />
            </div>
            { error ? (
                <Error />
            ) :  loading ? (<Loading />) : (
            <div className="movies-card-list">
                {currentFilms.map(movie => (
                    <div className="movies-card" key={movie.imdbid}>
                        <Link to={`/movies/${movie.id}`} onClick={toTop}>
                            <MovieCard  movie={movie} />
                        </Link>
                    </div>
                ))}
                <div className="page-changer">
                    <PageChanger filmsPerPage={filmsPerPage} totalFilms={movies.length} paginate={paginate} />
                </div>
            </div>
            )}
        </div>
    );
};

export default AllMoviesList;