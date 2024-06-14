import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css';

const Error = () => {
  return (
    <div id='error'>
        <div className="error-icon">
        <i className="fa-regular fa-face-frown"></i>
        </div>
        <div className="error-message">
            <p>We couldn’t find any movies matching your search</p>
        </div>
        <div className="error-back-to-home">
            <button>
                <Link to={'/'}>
                    Back Home
                </Link>
            </button>
        </div>
    </div>
  )
}

export default Error