import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Movie from "./pages/Movie";
import Serie from "./pages/Serie";
import Search from "./pages/Search";
import TopTenMovies from "./pages/TopTenMovies";
import TopTenSeries from "./pages/TopTenSeries";


// LAYOUTS
import MainLayout from "./layouts/MainLayout";


// CONTEXT
import MovieContextProvider from "./contexts/movieContext";
import SeriesContextProvider from "./contexts/seriesContext";
import Login from "./pages/Login";




function App() {

    return (
        <MovieContextProvider>
            <SeriesContextProvider>
                <Router>
                    <Routes>
                        <Route 
                            path="/"
                            element={<MainLayout />}>
                            <Route path="/" element={<Home/>} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/top-10-movies" element={<TopTenMovies />}/>
                            <Route path="/top-10-series" element={<TopTenSeries />}/>
                            <Route path="/movies" element={<Movies />} />
                            <Route path="/login" element={<Login />}/>
                            <Route path="/movies/:movieId" element= {<Movie />} />
                            <Route path="/series" element={<Series />} />
                            <Route path="/series/:serieId" element= {<Serie />} />
                            <Route path="/search" element={<Search />} />
                        </Route>
                    </Routes>
                </Router>
            </SeriesContextProvider>
        </MovieContextProvider>
    );
}

export default App;
