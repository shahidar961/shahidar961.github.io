import React from 'react';
import './pages.css';

const Conferences = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">Conferences</h1>

            <div className="content-section">
                <div className="year-section">
                    <p className="year-title"><strong>2025:</strong></p>
                    <p>
                        6th Annual Economics Conference (Ahmedabad University), 2nd Meeting of Young Minds in Frontiers of Economics (IITB), AYEW Gender & Development Economics Workshop (Virtual).
                    </p>
                </div>

                <div className="year-section">
                    <p className="year-title"><strong>2023:</strong></p>
                    <p>
                        57th Annual Conference of The Indian Econometric Society (TIES) (University of Hyderabad), The 7th Annual CECFEE research and policy workshop (ISI), IHEA 15th Annual Congress (Cape Town), Winter School 2023 (DSE).
                    </p>
                </div>

                <div className="year-section">
                    <p className="year-title"><strong>2022:</strong></p>
                    <p>Second Biennial Conference on Development (IGIDR).</p>
                </div>
            </div>
        </div>
    );
};

export default Conferences;
