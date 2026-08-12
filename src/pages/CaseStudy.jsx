import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = portfolioData.projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project || !project.caseStudy) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: 'var(--white)' }}>Project not found</h2>
        <button onClick={() => navigate('/')} className="btn btn-outline interactive" style={{ marginLeft: '24px' }}>Back Home</button>
      </div>
    );
  }

  const { caseStudy } = project;

  const sections = [
    { num: '01', title: 'The Problem', content: caseStudy.problem },
    { num: '02', title: 'Research', content: caseStudy.research },
    { num: '03', title: 'User Flow', content: caseStudy.userFlow },
    { num: '04', title: 'Wireframes', content: caseStudy.wireframes },
    { num: '05', title: 'Visual Design', content: caseStudy.visualDesign },
    { num: '06', title: 'Prototype', content: caseStudy.prototype },
    { num: '07', title: 'Result', content: caseStudy.result },
  ];

  return (
    <div style={{ background: 'var(--charcoal)', minHeight: '100vh', paddingBottom: '128px' }}>
      
      {/* Navbar for Case Study */}
      <nav style={{ padding: '32px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => navigate('/')} className="interactive" style={{ background: 'none', border: 'none', color: 'var(--gray)', fontSize: '14px', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ← BACK TO ARCHIVE
          </button>
          <span style={{ fontFamily: 'Cinzel, serif', fontSize: '20px', color: 'var(--white)', fontWeight: 800 }}>[DS]</span>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ color: 'var(--crimson-light)', fontFamily: 'Cinzel, serif', fontSize: '24px', fontWeight: 800, marginBottom: '24px' }}>
            MISSION {project.num}
          </div>
          <h1 style={{ marginBottom: '32px' }}>{project.title}</h1>
          <p style={{ fontSize: '20px', color: 'var(--paper)', maxWidth: '800px', marginBottom: '48px', lineHeight: 1.6 }}>
            {project.description}
          </p>
          
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '24px 0' }}>
            <div>
              <div style={{ color: 'var(--gold-dark)', fontSize: '12px', letterSpacing: '2px', marginBottom: '8px' }}>ROLE</div>
              <div style={{ color: 'var(--white)' }}>{project.role}</div>
            </div>
            <div>
              <div style={{ color: 'var(--gold-dark)', fontSize: '12px', letterSpacing: '2px', marginBottom: '8px' }}>TOOLS</div>
              <div style={{ color: 'var(--white)' }}>{project.tool}</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container"
        style={{ marginBottom: '128px' }}
      >
        <div style={{ width: '100%', aspectRatio: '21/9', background: `url(${project.image}) center/cover`, borderRadius: '4px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
      </motion.div>

      {/* Storytelling Sections */}
      <div className="container" style={{ maxWidth: '800px' }}>
        {sections.map((section, index) => {
          if (!section.content) return null;
          return (
            <motion.div
              key={section.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ marginBottom: '96px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <span style={{ color: 'var(--crimson-light)', fontFamily: 'Cinzel, serif', fontSize: '24px', fontWeight: 800 }}>{section.num}</span>
                <span style={{ height: '1px', width: '40px', background: 'var(--gold-dark)' }} />
                <h3 style={{ margin: 0, color: 'var(--white)', letterSpacing: '2px', fontSize: '24px' }}>{section.title}</h3>
              </div>
              <p style={{ color: 'var(--paper)', fontSize: '18px', lineHeight: 1.8 }}>
                {section.content}
              </p>
              
              {/* Optional Placeholder for Case Study Images */}
              {index % 2 !== 0 && (
                <div style={{ width: '100%', height: '300px', background: 'var(--charcoal-light)', marginTop: '48px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--gray)', fontSize: '12px', letterSpacing: '2px' }}>[ PROJECT IMAGE ASSET ]</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

    </div>
  );
};

export default CaseStudy;
