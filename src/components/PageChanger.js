import React from 'react';
import './PageChanger.css'

const PageChanger = ({ filmsPerPage, totalFilms, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
    pageNumbers.push(i);
  }

  const toTop = () => {
    window.scrollTo ({
      top: 600,
      behavior: 'instant'
    })
  }

  return (
    <div className="pagination-body">
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} onClick={toTop}>
            <a href='!#' onClick={(e) => { e.preventDefault(); paginate(number); }}>{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageChanger;
