import React, { useContext, useState } from 'react';
import './SeriesList.css';
import { SeriesContext } from '../contexts/seriesContext';
import { Link } from 'react-router-dom';
import SeriesCard from './SeriesCard';
import Loading from './Pieces/Loading';
import PageChangerSeries from './PageChangerSeries';
import Error from './Pieces/Error';

const SeriesList = () => {
    const {series} = useContext(SeriesContext);
    const {error} = useContext(SeriesContext);
    const [loading, setLoading] = useState(true);

    useState(() => {
        if(series) {
            setLoading(false)
        }
    }, [series])

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        })
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [seriesPerPage] = useState(20);

    const indexOfLastSerie = currentPage * seriesPerPage;
    const indexOfFirstSerie = indexOfLastSerie -seriesPerPage;
    const currentSerie = series ? series.slice(indexOfFirstSerie, indexOfLastSerie) : ([])

    const paginate = pageNumber => setCurrentPage(pageNumber)
return (
        <div id='series-list'>
            <div className='series-title'>
                <h2>Series</h2>
                <hr />
            </div>
            {
            error ? (<Error /> ) :
            loading ? 
                (<Loading />) : 
                (
                <div className='list-series'>
                    {
                        currentSerie.map(serie => (
                            <div className="series-cards" key={serie.imdbid}>
                                <Link to={`/series/${serie.id}`} onClick={toTop}>
                                    <SeriesCard serie={serie} />
                                </Link>
                            </div>
                        ))
                    }
                    <div className="page-changer">
                        <PageChangerSeries seriesPerPage={seriesPerPage} totalSeries={series.length} paginate={paginate} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default SeriesList