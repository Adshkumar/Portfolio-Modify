import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/home';
import Navigation from './components/Navigation';
import About from './about/about';
import WorkExperiences from './components/experiences/WorkExperiences';
import Contact from './components/contact/contact';
import Projects from './components/project/projects';
import Education from './education/education';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experiences" element={<WorkExperiences />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
            <ToastContainer
                position="top-right"
                className="portfolio-toast-container"
                autoClose={4000}
                closeOnClick
                pauseOnHover
                newestOnTop
                toastClassName="portfolio-toast"
                bodyClassName="portfolio-toast-body"
                progressClassName="portfolio-toast-progress"
            />
        </BrowserRouter>
    );
};

export default App;