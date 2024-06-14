import React, { useContext, useEffect, useState } from 'react'
import TopTenComp from './TopTenComp'
import { MovieContext } from '../contexts/movieContext'
import Loading from '../components/Pieces/Loading'
import './TopTenMov.css'
import Error from './Pieces/Error'

const TopTenMov = () => {

    const { movies } = useContext(MovieContext);
    const { error } = useContext(MovieContext);
    const [topMovies, setTopMovies] =useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
    getMovies(movies)
    if(movies) {
        setLoading(false)
    }
    }, [movies])

    const getMovies = (movies) => {
        const topMovies = movies ? (movies.filter(movie => movie.rank <= 10)) : ([]);
        setTopMovies(topMovies)
    }

return (
    <div id='topten-mov'>
        {
        error ? ( <Error /> ) :
        loading ? 
            (<Loading />) : (
                topMovies.map(topMovie => (
                    <TopTenComp key={topMovie.id} topMovie = {topMovie}/>
                ))
            )
        }
    </div>
)
}

export default TopTenMov