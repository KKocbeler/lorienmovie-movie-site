import React from 'react'
import './MovieCard.css'


const MovieCard = ({movie}) => {

    return (
        <>
                <div className='card-main'>   
                    <img src= {movie.image} alt={movie.title}/>
                    <div className="card-content">
                        <h4>{movie.title}</h4>
                        <p>
                            {
                                movie.genre.map((gen,index) => (
                                  <span key={index}>{gen}</span>
                                ))
                            }
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
        </>
    )
}
export default MovieCard

