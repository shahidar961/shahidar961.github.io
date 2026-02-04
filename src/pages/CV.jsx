import React from 'react';
import './pages.css';

const CV = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">CV</h1>

            <div className="cv-container" style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}>
                <iframe
                    src="/Shahid_CV.pdf"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    title="Curriculum Vitae"
                >
                    <p>
                        Your browser does not support PDFs.
                        <a href="/Shahid_CV.pdf">Download the PDF</a>.
                    </p>
                </iframe>
            </div>
        </div>
    );
};

export default CV;
