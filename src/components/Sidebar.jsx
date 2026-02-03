import Photo from '../assets/Photo.png';
import './Sidebar.css';

const Sidebar = () => {
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
                <h3>Connect</h3>
                <div className="social-links">
                    <a href="https://github.com/shahidar961" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Google Scholar</a>
                </div>
            </div>

            <div className="sidebar-footer">
                <p>&copy; {new Date().getFullYear()} Shahid Majeed Dar.</p>
            </div>
        </div>
    );
};

export default Sidebar;
