import React from 'react'
import "./Footer.scss";
import { FaMobileAlt, FaLocationArrow, FaEnvelope } from "react-icons/fa"
import Payment from '../../assets/payments.png'
const Footer = () => {
    return <footer className='footer'>
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem, amet nisi ratione accusamus quam ad! veniam animi!</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-content">
                    <FaLocationArrow />
                    <div className="text">
                        Kamakya , Maligoan ,Gwahati,Assam ,7002020
                    </div>
                </div>
                <div className="c-content">
                    <FaMobileAlt />
                    <div className="text">
                        Phone:+91 2839 2390 12
                    </div>
                </div>
                <div className="c-content">
                    <FaEnvelope />
                    <div className="text">
                        Email:xyz2001@gmail.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terns & Conditions</span>
                <span className="text">Contact Us</span>

            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus .</div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </div>
    </footer>;
};

export default Footer;
