import React from 'react';
import './pages.css';

const Teaching = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">Teaching Experience</h1>

            <div className="content-section">
                <h2>Instructor</h2>
                <table className="teaching-table">
                    <tbody>
                        <tr>
                            <td>Basic Econometrics, UPES Dehradun</td>
                            <td>Spring 2026</td>
                        </tr>
                        <tr>
                            <td>Macroeconomics, UPES Dehradun</td>
                            <td>Spring 2026</td>
                        </tr>
                        <tr>
                            <td>Development Economics, UPES Dehradun</td>
                            <td>Fall 2025</td>
                        </tr>
                        <tr>
                            <td>Basic Statistics, UPES Dehradun</td>
                            <td>Fall 2025</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="content-section">
                <h2>Tutor</h2>
                <table className="teaching-table">
                    <tbody>
                        <tr>
                            <td>Economics of Banking and Financial Markets (NPTEL)</td>
                            <td>2022, 2023, 2024</td>
                        </tr>
                        <tr>
                            <td>Intermediate Macroeconomics, IIT Kanpur</td>
                            <td>Fall 2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="content-section">
                <h2>Teaching Assistant</h2>
                <table className="teaching-table">
                    <tbody>
                        <tr>
                            <td>Empirical Methods in Health Economics and Public Policy, IIT Kanpur</td>
                            <td>Fall 2024</td>
                        </tr>
                        <tr>
                            <td>Money and Banking, IIT Kanpur</td>
                            <td>Fall 2023</td>
                        </tr>
                        <tr>
                            <td>Macroeconomics-I, IIT Kanpur</td>
                            <td>Spring 2023</td>
                        </tr>
                        <tr>
                            <td>Intermediate Microeconomics, IIT Kanpur</td>
                            <td>Spring 2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Teaching;
