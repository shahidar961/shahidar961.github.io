import React from 'react';
import './pages.css';

const Teaching = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">Teaching</h1>

            <div className="content-section">
                <h2>University of Petroleum and Energy Studies, Dehradun</h2>

                <table className="teaching-table">
                    <tbody>
                        <tr>
                            <td>Microeconomics</td>
                            <td>Winter 2025</td>
                        </tr>
                        <tr>
                            <td>Macroeconomics</td>
                            <td>Autumn 2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="content-section">
                <h2>Indian Institute of Technology Kanpur (TA)</h2>

                <table className="teaching-table">
                    <tbody>
                        <tr>
                            <td>ECO261A: Health Economics (Instructor: Prof. Deep Mukherjee)</td>
                            <td>2022-23-II</td>
                        </tr>
                        <tr>
                            <td>ECO502A: Applied Econometrics (Instructor: Prof. Mahamitra Das)</td>
                            <td>2022-23-I</td>
                        </tr>
                        <tr>
                            <td>ECO311A: Development Economics (Instructor: Prof. Debayan Pakrashi)</td>
                            <td>2021-22-I</td>
                        </tr>
                        <tr>
                            <td>ECO101A: Introduction to Economics (Instructor: Prof. Praveen Kulshreshtha)</td>
                            <td>2018-19-II</td>
                        </tr>
                        <tr>
                            <td>ECO101A: Introduction to Economics (Instructor: Prof. Vimal Kumar)</td>
                            <td>2018-19-I</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Teaching;
