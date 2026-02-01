import React from 'react';
import photo from '../assets/Photo.png';
import './pages.css';

const Home = () => {
    return (
        <div className="page-container">
            <div className="home-hero">
                <h1 className="home-hero-title">Shahid Majeed Dar</h1>
            </div>

            <div className="home-layout">
                <div className="profile-image-container">
                    <img src={photo} alt="Shahid Majeed Dar" className="profile-image" />
                </div>

                <div className="home-content">
                    <h2 className="welcome-title">Welcome to my website!</h2>

                    <p>
                        I'm an Assistant Professor in the Department of Liberal Studies & Media at <a href="https://www.upes.ac.in/" target="_blank" rel="noopener noreferrer">UPES Dehradun</a>.
                    </p>

                    <p>
                        I completed my Ph.D. in Economics from the Department of Economic Sciences, <a href="https://www.iitk.ac.in/" target="_blank" rel="noopener noreferrer">Indian Institute of Technology Kanpur</a>.
                    </p>

                    <p>
                        My research interest lies in the intersection of development economics, health economics, and public policy.
                    </p>

                    <p>
                        I'm particularly interested to understand how individual behaviour responds to targeted policies to improve well-being—in the context of developing countries.
                    </p>

                    <p>
                        Using large-scale micro-level datasets, including longitudinal surveys, I employ causal inference methods to uncover meaningful insights.
                    </p>

                    <p>
                        You can reach me at <a href="mailto:shahid.dar@ddn.upes.ac.in">shahid.dar@ddn.upes.ac.in</a> and <a href="mailto:shahidar961@gmail.com">shahidar961@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
