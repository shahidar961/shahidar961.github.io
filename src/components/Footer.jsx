import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} Shahid Majeed Dar</p>
                <p className="developer-credit">Developed by Asif Nazir Bhat</p>
            </div>
        </footer>
    );
};

export default Footer;
