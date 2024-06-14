import React from 'react';
import './PageChangerSeries.css'

const PageChangerSeries = ({ seriesPerPage, totalSeries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSeries / seriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const toTop = () => {
    window.scrollTo ({
      top: 850,
      behavior: 'smooth'
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

export default PageChangerSeries;
