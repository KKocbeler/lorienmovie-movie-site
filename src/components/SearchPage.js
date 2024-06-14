import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Loading from './Pieces/Loading';
import './SearchPage.css';
import Error from './Pieces/Error';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://imdb-top-100-movies.p.rapidapi.com/${query}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key':  `${process.env.REACT_APP_API_KEY}`,
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                }
            };
        
            try {
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status ${response.status}`);
                }

                const result = await response.json();
                setMovie(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [query]);

    return (
        <>
            <div id="search-page">
                <div className="searcing-for">
                    <h2>Results for <i className="fa-solid fa-arrow-right"></i></h2> <span>{`${query.charAt(0).toUpperCase()}${query.slice(1)}`}</span>
                </div>
                <hr />
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error />
                ) : (
                    <div className='search-page__movie'>
                        <div className="search-page__movie__card">
                            <Link to={`/movies/${movie.id}`}>
                                <div className='card-main'>   
                                    <img src={movie.image} alt={movie.title}/>
                                    <div className="card-content">
                                        <h4>{movie.title}</h4>
                                        <p>
                                            {movie.genre ? (
                                                movie.genre.map((gen, index) => (
                                                    <span key={index}>{gen}</span>
                                                ))
                                            ) : (
                                                <span> Unknown genre</span>
                                            )}
                                        </p>
                                        <div className="imdb-point">
                                            <p>IMDB</p>
                                            <div>
                                                <i className="fa-solid fa-star"></i>
                                                <span>{movie.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className='special-title'>{movie.title}</p>
                            </Link>
                        </div>
                    </div>
                )}
            </div>        
        </>
    );
};

export default SearchPage;
