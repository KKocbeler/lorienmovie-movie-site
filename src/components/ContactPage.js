import React from 'react';
import './ContactPage.css';

const ContactPage = () => {

return (
    <>
        <div id="contact-page">
            <div className="contact-form">
                <h3>Contact Us</h3>
                <form>
                    <div>
                        <input type="text" placeholder='Name' required/>
                    </div>
                    <div>
                        <input type="email" placeholder='Email' required/>   
                    </div>
                    <div>
                        <textarea name="message" placeholder='Message' required></textarea>
                    </div>
                    <div>
                        <button> Send </button>
                    </div>
                </form>
                <div className="contact-icons">
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
            </div>
            <div className="contact-links">
                <img src="images/contact/contact-img.webp" alt="" />

            </div>
        </div>
    </>
)
}

export default ContactPage