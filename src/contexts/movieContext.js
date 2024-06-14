import React, { useEffect, useState } from "react";

export const MovieContext = React.createContext();

const MovieContextProvider = (props) => {
    const [movies, setMovies]  = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
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
                    throw new Error(`HTTP error! Status ${response.status}`)
                }
                const result = await response.json();
                setMovies(result);
            } catch (err) {
                setError("hata");
                console.log(err.message)
            }
        };

        fetchData();
    }, []);

    console.log(movies)

    return (
        <MovieContext.Provider value={{movies,error}}>
            { props.children }
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;
