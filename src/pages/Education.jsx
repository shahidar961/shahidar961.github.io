import React from 'react';
import './pages.css';

const Education = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">Education</h1>
            <div className="content-section">
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
        </div>
    );
};

export default Education;
