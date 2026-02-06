import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CV from './pages/CV';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Conferences from './pages/Conferences';
import Education from './pages/Education';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/education" element={<Education />} />
          <Route path="/research" element={<Research />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/conferences" element={<Conferences />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
