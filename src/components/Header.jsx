import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="site-nav">
            <button
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={isMenuOpen ? 'nav-open' : ''}>
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
                <li><Link to="/education" className={location.pathname === '/education' ? 'active' : ''} onClick={closeMenu}>Education</Link></li>
                <li><Link to="/research" className={location.pathname === '/research' ? 'active' : ''} onClick={closeMenu}>Research</Link></li>
                <li><Link to="/conferences" className={location.pathname === '/conferences' ? 'active' : ''} onClick={closeMenu}>Conferences</Link></li>
                <li><Link to="/teaching" className={location.pathname === '/teaching' ? 'active' : ''} onClick={closeMenu}>Teaching</Link></li>
                <li><Link to="/cv" className={location.pathname === '/cv' ? 'active' : ''} onClick={closeMenu}>CV</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
