import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css'
import { MovieContext } from '../contexts/movieContext';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { movies } = useContext(MovieContext);

  const selectedMovie = movies.find(movie => movie.id === movieId )

  if(!selectedMovie) {
    return <p> Film Bulunamadı </p>
  }

  return (
    <div id='movie-details'>
        <div className="details-top">
            <h3>{selectedMovie.title}</h3>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7lwJOxN_gXc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
        <div className="details-bottom">
            <div className="bottom-left">
                <img src={selectedMovie.image} alt={selectedMovie.title} />
            </div>
            <div className="bottom-right">
                <h3> {selectedMovie.title}</h3>
                <div className="description">
                    <p> <span>Description: </span> {selectedMovie.description} </p>
                </div>
                <div className="movie-date">
                    <p><span>Release Year: </span>({selectedMovie.year})</p>
                </div>
                <div className="movie-genre">
                    <p>
                        <span>Genre : </span>
                        {selectedMovie.genre.join(', ')}
                    </p>
                </div>
                <div className='details-imdb-rating'>
                    <p>
                        <span>IMDB Raiting: </span> 
                        {selectedMovie.rating}
                    </p>
                </div>
                <div className="imdb-button">
                    <a href={selectedMovie.imdb_link} target='_blank' rel="noreferrer">
                        Go to IMDB
                    </a>
                </div>
            </div>
        </div>

    </div>
  );
};

export default MovieDetails;