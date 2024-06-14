import React, { useEffect, useState } from "react";

export const SeriesContext = React.createContext();

const SeriesContextProvider = (props) => {
    const [series, setSeries] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://imdb-top-100-movies.p.rapidapi.com/series/';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`HTTP hatası! Durum ${response.status}`)
                }
                const result = await response.json();
                setSeries(result);
            } catch (error) {
                setError(error)
                console.log(error)
            }
        };

        fetchData(); 
    }, []); 

    return (
        <SeriesContext.Provider value={{ series, error }}>
            {props.children}
        </SeriesContext.Provider>
    );
};

export default SeriesContextProvider;
