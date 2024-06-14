import React from 'react'
import './Footer.css'
import BackToTop from './Pieces/BackToTop'

const Footer = () => {

return (
    <>
        <footer> 
        <BackToTop />           
            <div className="footer-body">
                <div className="footer-logo">
                    <img src='images/logo/logo-img.png' alt="" />   
                </div>
                <div className="footer-icons">
                    <div className="icon-radius">
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div className="icon-radius">
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className="icon-radius">
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="icon-radius">
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div className="subscribe">
                    <h4>NOT QUİTE READY FOR SAVVY ?</h4>
                    <br /><br />
                    <p>Join our community for free. No spam ever.</p>
                    <br />
                    <form>
                        <input type="text" placeholder='Enter your email' required/>
                        <button type='submit' className='to-login'>Subscribe</button>
                    </form>
                </div>   
            </div>
        </footer>
    </>
)
}

export default Footer