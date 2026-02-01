import React from 'react';
import './pages.css';

const CV = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">CV</h1>

            <div className="cv-button-container">
                <a
                    href="/My_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cv-button"
                >
                    CV
                </a>
            </div>
        </div>
    );
};

export default CV;
