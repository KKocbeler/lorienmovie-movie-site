import React from 'react';
import './TopTenComp.css';
import { Link } from 'react-router-dom';

const TopTenComp = ({topMovie, topSerie}) => {
    const item = topSerie || topMovie

return (
    <div className="topten-comp">
            <div className='topten-card__left'>
                <img src= {item.big_image} alt={item.title} />
            </div>
            <div className='topten-card__right'>
                <h4><span>{item.rank}- </span>{item.title}</h4>
                <p>
                    <span> Description :</span> {item.description}
                </p>
                <p>
                    <span> Rating :</span> {item.rating}
                </p>
                <p>
                    <span> Release Year :</span> {item.year}
                </p>
                {item.type === topMovie ? (
                    <button>
                        <Link to={`/series/${item.id}`}>Go to the serie</Link>
                    </button>
                ) : (
                    <button>
                        <Link to={`/movies/${item.id}`}>Go to the movie</Link>
                    </button>
                )

                }

            </div>
    </div>
)
}

export default TopTenComp