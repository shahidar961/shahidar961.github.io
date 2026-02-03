import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();

    return (
        <nav className="site-nav">
            <ul>
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to="/research" className={location.pathname === '/research' ? 'active' : ''}>Research</Link></li>
                <li><Link to="/teaching" className={location.pathname === '/teaching' ? 'active' : ''}>Teaching</Link></li>
                <li><Link to="/conferences" className={location.pathname === '/conferences' ? 'active' : ''}>Conferences</Link></li>
                <li><Link to="/cv" className={location.pathname === '/cv' ? 'active' : ''}>CV</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
