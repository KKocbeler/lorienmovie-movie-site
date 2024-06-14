import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [change, setChange] = useState(false);
    const [hidePassword, setHidePassword] = useState(false);

    const handleChange = () => {
        setChange(!change)
    }

    const handleHidePassword = () => {
        setHidePassword(!hidePassword)
    }
    return (
        <div id='login-signup'>
            <div className={`wrapper ${change ? 'active' : ''}`}>
                <form className={`login-acc ${change ? 'active' : ''}`}>
                    <h2>Login</h2>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="input-box">
                        <input type={`${hidePassword ?  'text' : 'password'}`} placeholder='Password' required />
                        <i className="fa-solid fa-lock"></i>
                        <div className="see-password" onClick={handleHidePassword}>
                            {
                                hidePassword ? (
                                    <i className="fa-solid fa-eye"></i>
                                ) : (
                                    <i className="fa-solid fa-eye-slash"></i>
                                )
                            }
                            
                        </div>
                    </div>
                    <div className='password-forgot'>
                        <div className="chechbox-password">
                            <input type="checkbox" id='remember-me'/>
                            <label htmlFor='remember-me'>Remember me</label>
                        </div>
                        <Link>Forgot Password?</Link> 
                    </div>
                    <button type='submit' className="button btn-login">
                        Login
                    </button>
                    <div className="new-account">
                        <Link onClick={handleChange}>Don't have an account? Sign up</Link>
                    </div>
                </form>
                <form className={`create-acc ${change ? 'active' : ''}`}>
                    <h2>Sing up</h2>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Email' required />
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="input-box">
                        <input type={`${hidePassword ?  'text' : 'password'}`} placeholder='Password' required />
                        <i className="fa-solid fa-lock"></i>
                        <div className="see-password" onClick={handleHidePassword}>
                            {
                                hidePassword ? (
                                    <i className="fa-solid fa-eye"></i>
                                ) : (
                                    <i className="fa-solid fa-eye-slash"></i>
                                )
                            }
                            
                        </div>
                    </div>
                    <div className='password-forgot'>
                        <div className="chechbox-password">
                            <input type="checkbox" id='terms'/> 
                            <label htmlFor='terms'>I agree to the <Link> terms & conditions</Link></label>
                        </div> 
                    </div>
                    <button type='submit' className="button btn-signup">
                        Sign up
                    </button>
                    <div className="already-account">
                        <Link onClick={handleChange}>Already have an account? Login</Link>
                    </div>
                </form>        
            </div>
        </div>
    )
}

export default LoginPage