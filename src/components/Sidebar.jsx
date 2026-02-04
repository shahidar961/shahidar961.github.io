import { useState } from 'react';
import Photo from '../assets/Photo.png';
import './Sidebar.css';

const Sidebar = () => {
    const [isConnectOpen, setIsConnectOpen] = useState(false);

    const toggleConnect = () => {
        setIsConnectOpen(!isConnectOpen);
    };

    return (
        <div className="sidebar">
            <div className="profile-container">
                <div className="profile-img-container">
                    <img src={Photo} alt="Shahid Majeed Dar" className="profile-img" />
                </div>
                <h2 className="profile-name">Shahid Majeed Dar</h2>
                <p className="profile-title">Assistant Professor</p>
                <div className="profile-contact">
                    <p><i className="fas fa-envelope"></i> shahid.dar@ddn.upes.ac.in</p>
                    <p><i className="fas fa-map-marker-alt"></i> Dehradun, India</p>
                </div>
            </div>

            <div className="sidebar-social">
                <button
                    className={`connect-toggle ${isConnectOpen ? 'open' : ''}`}
                    onClick={toggleConnect}
                    aria-expanded={isConnectOpen}
                >
                    Connect
                    <span className="toggle-icon">▼</span>
                </button>
                <div className={`social-links ${isConnectOpen ? 'show' : ''}`}>
                    <a href="https://github.com/shahidar961" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/shahid-majeed-1641731b2/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-x-twitter"></i> Twitter
                    </a>
                    <a href="https://scholar.google.com/citations?user=mi0nnGsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-graduation-cap"></i> Google Scholar
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

