import React from 'react';
import './pages.css';

const About = () => {
    return (
        <div className="page-container">
            <div className="about-content">

                <p>
                    Hi, I am Shahid Majeed Dar, currently working as an Assistant Professor at <a href="https://dau.ac.in/" target="_blank" rel="noopener noreferrer">Dhirubhai Ambani University (DAU) - School of Technology</a>, Gandhinagar, Gujarat, India.
                </p>
                <p>
                    Previously, I worked as an Assistant Professor in the Department of Liberal Studies & Media at <a href="https://www.upes.ac.in/" target="_blank" rel="noopener noreferrer">UPES Dehradun</a>.
                </p>
                <p>
                    I completed my Ph.D. in Economics from the Department of Economic Sciences, <a href="https://www.iitk.ac.in/" target="_blank" rel="noopener noreferrer">Indian Institute of Technology Kanpur</a>.
                </p>
                <p>
                    My research lies at the intersection of development economics and health economics, leveraging public policy and regulatory interventions as empirical settings. I study how targeted public policies shape individual behaviour and household decisions, with a particular focus on strengthening human capital and improving overall well-being in developing countries.
                </p>
                <p>
                    Methodologically, my work relies on large-scale micro-level data, including nationally representative and longitudinal surveys. I employ modern causal inference techniques to identify policy impacts and uncover mechanisms through which public interventions influence health, fertility, and socioeconomic outcomes.
                </p>
                <div className="content-section">
                    <h2>Area of Interest</h2>
                    <p>
                        <strong>Primary:</strong> Applied Microeconomics, Health, and Family Economics<br />
                        <strong>Secondary:</strong> Impact Evaluation of Public Policies, Gender, and Sanitation Economics
                    </p>
                </div>

                <p>
                    You can reach me at <a href="mailto:shahid_majeeddar@dau.ac.in">shahid_majeeddar@dau.ac.in</a> and <a href="mailto:shahidar961@gmail.com">shahidar961@gmail.com</a>
                </p>

            </div>
        </div>
    );
};

export default About;
