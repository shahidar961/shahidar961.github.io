import React from 'react';
import './pages.css';

const Research = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">Research</h1>

            <div className="content-section">
                <h2>Publications:</h2>

                <div className="paper-item">
                    <p>
                        1. Usage and Impact of Toilets: Evidence from Swachh Bharat Mission in India (with Sukumar Vellakkal) <em>Economic Analysis and Policy</em> (Elsevier, Scopus Q1, ABDC A). [<a href="#" target="_blank" rel="noopener noreferrer">Link to PDF</a>]
                    </p>
                </div>
            </div>

            <div className="content-section">
                <h2>Working Papers:</h2>

                <div className="paper-item">
                    <p>
                        1. Ban and Benefit: Effects of Alcohol Ban on Child Nutrition (with Sukumar Vellakkal) <em>(Under Review, The BE Journal of Economic Analysis and Policy</em> [ABDC Journal Ranking: A]. [<a href="#" target="_blank" rel="noopener noreferrer">Link to PDF</a>]
                    </p>
                </div>

                <div className="paper-item">
                    <p>
                        2. Low fertility Incentives and Child Mortality in Low-Resource Settings (with Sukumar Vellakkal) <em>(Under Review, Economic Modelling</em> [ABDC Journal Ranking: A]. [<a href="#" target="_blank" rel="noopener noreferrer">Link to PDF</a>]
                    </p>
                </div>

                <div className="paper-item">
                    <p>
                        3. Impact of Tap Water Access on Water Sufficiency, Affordability, and Health in India (with Sukumar Vellakkal and Abhishek Kumar) <em>(Under Review, Journal of Quantitative Economics)</em>. [ABDC Journal Ranking: B]
                    </p>
                </div>

                <div className="paper-item">
                    <p>
                        4. Dry State and Fertility: Unintended Effects of Alcohol Ban in Bihar (with Sukumar Vellakkal). <em>(Under Review, Journal of Population Economics</em> [ABDC Journal Ranking: A*]. [<a href="#" target="_blank" rel="noopener noreferrer">Link to PDF</a>]
                    </p>
                </div>
            </div>

            <div className="content-section">
                <h2>Work in Progress:</h2>

                <div className="paper-item">
                    <p>
                        1. Credit Constraints and Child Growth: Evidence from Microfinance Ban in India (with Vinayak Krishnatri & Sukumar Vellakkal) [Draft coming soon].
                    </p>
                </div>

                <div className="paper-item">
                    <p>
                        2. From Revenue to Risk: The Reproductive costs of Alcohol Expansion [Draft coming soon].
                    </p>
                </div>

                <div className="paper-item">
                    <p>
                        3. When Programs Work Together: Evidence on the Joint Effects of Two Interventions [Draft coming soon].
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Research;
