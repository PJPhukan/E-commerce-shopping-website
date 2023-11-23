import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin
} from 'react-icons/fa'

import "./Newsletter.scss";

const Newsletter = () => {
    return <div className='newsLetter-section'>
        <div className="newLetter-content">
            <span className="small-text">
                Newsletter
            </span>
            <span className="big-text">
                Sign up for latest updates and offers
            </span>
            <div className="form">
                <input type="email" placeholder='Email Address' />
                <button>Subscribe</button>
            </div>
            <div className="text">Will be used in accordance with our Privacy Policy</div>
            <div className="social-icon">
                <div className="icon">
                    <FaFacebookF size={15} />
                </div>
                <div className="icon">
                    <FaInstagram size={15} />
                </div>
                <div className="icon">
                    <FaLinkedin size={15} />
                </div>
                <div className="icon">
                    <FaTwitter size={15} />
                </div>

            </div>
        </div>
    </div>;
};

export default Newsletter;
