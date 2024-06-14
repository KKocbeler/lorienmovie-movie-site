import React, { useContext, useEffect, useState } from 'react';
import './SeriesDetails.css'
import { useParams } from 'react-router-dom';
import '../contexts/seriesContext'
import { SeriesContext } from '../contexts/seriesContext';
import Loading from './Pieces/Loading';
import Error from './Pieces/Error';

const SeriesDetails = () => {
    const {serieId} = useParams()
    const { series } = useContext(SeriesContext)
    const {error} = useContext(SeriesContext)
    const [loading, setLoading] = useState(true);
 
    const selectedSerie = series && series.find(serie => serie.id === serieId)

    useEffect(() => {
        if(selectedSerie) {
            setLoading(false)
        }
    }, [selectedSerie])

  return (
    <>
    {
        error ? ( <Error /> ) :

        loading ? (<Loading />) :
        
        (
            <div id='series-details'>
                <div className="details-top">
                    <h3>{selectedSerie.title}</h3>
                    <video controls>
                        <source src="video.mp4" type="video/mp4"/>
                        <source src="video.webm" type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="details-bottom">
                    <div className="bottom-left">
                        <img src={selectedSerie.image} alt={selectedSerie.title} />
                    </div>
                    <div className="bottom-right">
                        <h3> {selectedSerie.title}</h3>
                        <div className="description">
                            <p> <span>Description: </span> {selectedSerie.description} </p>
                        </div>
                        <div className="movie-date">
                            <p><span>Release Year: </span>({selectedSerie.year})</p>
                        </div>
                        <div className="movie-genre">
                            <p>
                                <span>Genre : </span>
                                {selectedSerie.genre.join(', ')}
                            </p>
                        </div>
                        <div className='details-imdb-rating'>
                            <p>
                                <span>IMDB Raiting: </span> 
                                {selectedSerie.rating}
                            </p>
                        </div>
                        <div className='imdb-button'>
                                <a href={selectedSerie.imdb_link} target='_blank' rel="noreferrer">
                                    Go to IMDB
                                </a>
                        </div>
                    </div>
                </div>
        
            </div>
        )
    }

    </>
  )
}

export default SeriesDetails