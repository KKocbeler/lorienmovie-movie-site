import React from 'react'
import HomeMovieList from '../components/HomeMovieList';
import Carousel from '../components/Carousel';

const Home = () => {
    
return (
    <>
    <div className='container'>
        <Carousel />
        <HomeMovieList/> 
    </div> 
    </>
)
}

export default Home