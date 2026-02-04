import React from 'react';
import './pages.css';

const Home = () => {
    return (
        <div className="page-container">
            <div className="home-content">
                <h1 className="welcome-title">Welcome</h1>
                <p>
                    I am an Assistant Professor in the Department of Liberal Studies & Media at <a href="https://www.upes.ac.in/" target="_blank" rel="noopener noreferrer">UPES Dehradun</a>. I completed my Ph.D. in Economics from the Department of Economic Sciences, <a href="https://www.iitk.ac.in/" target="_blank" rel="noopener noreferrer">Indian Institute of Technology Kanpur</a>.
                </p>
                <p>
                    My research lies at the intersection of development economics and health economics, leveraging public policy and regulatory interventions as empirical settings. I study how targeted public policies shape individual behaviour and household decisions, with a particular focus on strengthening human capital and improving overall well-being in developing countries.
                </p>
                <p>
                    Methodologically, my work relies on large-scale micro-level data, including nationally representative and longitudinal surveys. I employ modern causal inference techniques to identify policy impacts and uncover mechanisms through which public interventions influence health, fertility, and socioeconomic outcomes.
                </p>
                <p>
                    You can reach me at <a href="mailto:shahid.dar@ddn.upes.ac.in">shahid.dar@ddn.upes.ac.in</a> and <a href="mailto:shahidar961@gmail.com">shahidar961@gmail.com</a>
                </p>

                <div className="content-section" style={{ marginTop: '40px' }}>
                    <h2>Education</h2>
                    <table className="teaching-table">
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Ph.D. Economics</strong><br />
                                    Department of Economic Sciences, Indian Institute of Technology Kanpur<br />
                                    <em>Thesis Title:</em> Essays in Public Economics: Impact of Public Policies on Health Outcomes<br />
                                    <em>Thesis Supervisor:</em> Dr. Sukumar Vellakkal
                                </td>
                                <td>
                                    2020 - 2025<br />
                                    Kanpur, Uttar Pradesh
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>M.A. Economics</strong><br />
                                    Department of Economics, Jamia Millia Islamia
                                </td>
                                <td>
                                    2017 - 2019<br />
                                    Jamia Nagar, Delhi
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>B.A. (Hons.) Economics</strong><br />
                                    Department of Economics, Aligarh Muslim University
                                </td>
                                <td>
                                    2014 - 2017<br />
                                    Aligarh, Uttar Pradesh
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="content-section">
                    <h2>Awards and Grants</h2>
                    <ul>
                        <li>National Eligibility Test (NET) 2018.</li>
                        <li>Travel grant award for 15th annual Congress by International Health Economics Association (IHEA).</li>
                        <li>Travel grant award for the 7th Annual CECFEE research and policy workshop (ISI).</li>
                        <li>Travel grant award for 2nd Meeting of Young Minds in Frontiers of Economics (IITB).</li>
                        <li>Institute fellowship for Ph.D. 2020-2024 (IIT, Kanpur).</li>
                    </ul>
                </div>

                <div className="content-section">
                    <h2>Area of Interest</h2>
                    <p>
                        <strong>Primary:</strong> Applied Microeconomics, Health, and Family Economics<br />
                        <strong>Secondary:</strong> Impact Evaluation of Public Policies, Gender, and Sanitation Economics
                    </p>
                </div>

                <div className="content-section">
                    <h2>Empirical Skills</h2>
                    <p>Stata, R studio, Microsoft, Latex.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
