import React, { useContext, useEffect, useState } from 'react'
import { SeriesContext } from '../contexts/seriesContext'
import TopTenComp from './TopTenComp';
import Loading from './Pieces/Loading';
import Error from './Pieces/Error';
import './TopTenSer.css'

const TopTenSer = () => {
    const {error} = useContext(SeriesContext);
    const {series} = useContext(SeriesContext);
    const [topSeries, setTopSeries] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSeries(series)
        if(series) {
            setLoading(false)
        }
    }, [series])

    const getSeries = (series) => {
        const topSeries = series ? (series.filter(serie => serie.rank <= 10)) : ([]);
        setTopSeries(topSeries)
    }

return (
    <div id='topten-ser'>
        {
        error ? (<Error />):
        loading ?
            (<Loading />) :
            (
                topSeries.map(topSerie => (
                    <TopTenComp key={topSerie.id} topSerie={topSerie}/>
                ))
            )
        }
    </div>
)
}

export default TopTenSer