import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate()

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search/?q=${keyword}`);

    }

    return (
        <>
            <nav className='navbar'>
                <div id="navbar-container">
                    <div className="navbar-logo">
                        <Link to={'/'}>
                            <img src="./images/logo/logo-img.png" alt="" />
                        </Link>
                    </div>
                    <div className={`navbar-list ${showNav ? 'show' : ''}`}>
                        <div className={`navbar-header ${showNav ? 'active' : ''}`} onClick={toggleNav}>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <div className={`footer-mobile ${showNav ? 'active' : ''}`}>
                            <ul className='nav-menu'>

                                <li className='nav-item'>
                                    <NavLink to={'/'} className='nav-link' onClick={toggleNav}>
                                        <i className="fa-solid fa-house"></i>
                                        Home
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to={'/movies'} className='nav-link' onClick={toggleNav}>
                                        <i className="fa-solid fa-film"></i>
                                        Movies
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to={'/series'} className='nav-link' onClick={toggleNav}>
                                        <i className="fa-solid fa-tv"></i>
                                        Series
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to={'/contact'} className='nav-link' onClick={toggleNav}>
                                        <i className="fa-solid fa-paper-plane"></i>
                                        Contact
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to={'/login'} className='nav-link' onClick={toggleNav}>
                                        <i className="fa-solid fa-right-to-bracket"></i>
                                        Login
                                    </NavLink>
                                </li>
                            </ul>
                            <form className='navbar-form' onSubmit={handleSubmit}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder='Search for a Movie' onChange={(e) => setKeyword(e.target.value)}/>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="navbar-movie">
                    <ul>
                        <li className='ranking-li'>
                            <Link>
                                IMDB Ranking
                                <i className="fa-solid fa-sort-down"></i>
                            </Link>
                            <ul className='dropdown'>
                                <li><Link to={'/movies'}>Movies</Link></li>
                                <li><Link to={'/series'}>Series</Link></li>
                            </ul>
                        </li>
                        <li><Link to={'/top-10-movies'}>Top 10 Movies</Link></li>
                        <li><Link to={'/top-10-series'}>Top 10 Series</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
