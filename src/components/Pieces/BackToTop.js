import React, { useEffect, useState } from 'react'
import './BackToTop.css'

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

return (
    <div id='back-to-top' className={isVisible ? 'visible' : 'invisible' }>
        <button onClick={scrollToTop}>
            Back to Top <i className="fa-solid fa-circle-up"></i>
        </button>
    </div>
)
}

export default BackToTop