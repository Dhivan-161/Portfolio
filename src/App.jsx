import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import TransitionManager from './components/TransitionManager';

// Pages
import CaseStudy from './pages/CaseStudy';

function MainLayout() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionCallback, setTransitionCallback] = useState(null);

  const handleSlashTransition = (callback) => {
    setTransitionCallback(() => callback);
    setIsTransitioning(true);
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
    if (transitionCallback) {
      transitionCallback();
      setTransitionCallback(null);
    }
  };

  return (
    <>
      <Cursor />
      <TransitionManager isAnimating={isTransitioning} onComplete={handleTransitionComplete} />
      
      <Routes>
        <Route path="/" element={
          <main>
            <Navbar />
            <Hero onSlashTransition={handleSlashTransition} />
            <About />
            <Skills />
            <Projects onSlashTransition={handleSlashTransition} />
            <Experience />
            <Certifications />
            <Contact />
            <Footer />
          </main>
        } />
        <Route path="/project/:id" element={<CaseStudy />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
