import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare, FaTwitter, FaVimeoV } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark text-light pt-5 mt-5">
            <div className="d-flex justify-content-evenly text-start">
                <div>
                    <p>About BikeBD</p>
                    <p>Contact Us</p>
                    <p>BikeBD Store</p>
                </div>
                <div>
                    <p>Feedback</p>
                    <p>Our Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <div className="footer-container">
            <p>Follow us in our social sites:</p>
            <div className="font-container">
                <p><FaFacebookSquare /></p>
                <p><FaLinkedin /></p>
                <p><FaWhatsappSquare /></p>
                <p><FaTwitter /></p>
                <p><FaVimeoV /></p>
            </div>
            <div>
                    <p><small>© BikeBD Ltd. All rights reserved 2021</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;