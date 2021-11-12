import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare, FaTwitter, FaVimeoV } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
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
                <p><small>© Tourism Park Ltd. All rights reserved 2021</small></p>
            </div>
        </div>
    );
};

export default Footer;