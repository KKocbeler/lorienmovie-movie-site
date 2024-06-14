import React from 'react';
import './SeriesCard.css'
import { Link } from 'react-router-dom';

const SeriesCard = ({ serie }) => {
  return (
    <>
        <div className="card-main">
            <img src={serie.image} alt={serie.title} />
            <div className="card-content">
                <h4>{serie.title}</h4>
                <p>
                    {
                        serie.genre.map((gen,index) => (
                            <Link key={index} to={`/genres/${gen}`}>
                                <span>{gen}</span>
                            </Link>
                        ))
                    }
                </p>
                <div className='imdb-point'>
                    <p>IMDB</p>
                    <div>
                        <i className='fa-solid fa-star'></i>
                        <span>{serie.rating}</span>
                    </div>
                </div>
            </div>
        </div>
        <p className='special-title'>{serie.title}</p>
    </>
  )
}

export default SeriesCard