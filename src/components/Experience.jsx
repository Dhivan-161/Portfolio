import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { thunderReveal, sectionFlash } from '../utils/animations';

const Experience = () => {
  return (
    <motion.section id="mastery" initial="hidden" whileInView="visible" variants={sectionFlash} viewport={{ once: true, margin: "-100px" }} style={{ background: 'var(--charcoal-light)' }}>
      <div className="container">
        <h2 className="section-title">MASTERY</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          
          <motion.div
            variants={thunderReveal}
            className="glass-card mastery-pillar"
          >
            <h3 style={{ color: 'var(--white)', fontSize: '24px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ color: 'var(--crimson-light)' }}>/</span> UI DESIGN
            </h3>
            <p style={{ color: 'var(--gray)', fontSize: '14px' }}>
              Crafting visually stunning, highly usable interfaces that blend aesthetics with functionality. 
              Strong focus on typography, color theory, and responsive layouts.
            </p>
          </motion.div>

          <motion.div
            variants={thunderReveal}
            transition={{ delay: 0.1 }}
            className="glass-card mastery-pillar"
          >
            <h3 style={{ color: 'var(--white)', fontSize: '24px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ color: 'var(--gold)' }}>/</span> UX RESEARCH
            </h3>
            <p style={{ color: 'var(--gray)', fontSize: '14px' }}>
              Understanding the core problem before jumping to solutions. Emphasizing user interviews, wireframing, and iterative testing.
            </p>
          </motion.div>

          <motion.div
            variants={thunderReveal}
            transition={{ delay: 0.2 }}
            className="glass-card mastery-pillar"
          >
            <h3 style={{ color: 'var(--white)', fontSize: '24px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ color: 'var(--white)' }}>/</span> FRONT-END
            </h3>
            <p style={{ color: 'var(--gray)', fontSize: '14px' }}>
              Translating high-fidelity designs into pixel-perfect React JS components. Building smooth interactions and animations.
            </p>
          </motion.div>
          
        </div>

        {/* The Scroll Section combined here for layout flow */}
        <div style={{ marginTop: 'var(--sp-16)' }}>
          <h2 className="section-title">THE SCROLL</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }} className="scroll-grid">
            
            <div>
              <h3 style={{ color: 'var(--gold)', marginBottom: '32px', letterSpacing: '4px' }}>EXPERIENCE</h3>
              {portfolioData.experience.map((exp, index) => (
                <motion.div 
                  key={exp.id} 
                  variants={thunderReveal}
                  transition={{ delay: index * 0.1 }}
                  style={{ marginBottom: '32px', borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '24px' }}
                >
                  <h4 style={{ color: 'var(--white)', fontSize: '20px', marginBottom: '8px' }}>{exp.role}</h4>
                  <div style={{ color: 'var(--crimson-light)', fontSize: '14px', marginBottom: '16px', letterSpacing: '1px' }}>
                    {exp.company} • {exp.duration}
                  </div>
                  <ul style={{ color: 'var(--gray)', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'disc', paddingLeft: '16px' }}>
                    {exp.responsibilities.map((req, i) => <li key={i}>{req}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 style={{ color: 'var(--gold)', marginBottom: '32px', letterSpacing: '4px' }}>EDUCATION</h3>
              {portfolioData.education.map((edu, index) => (
                <motion.div 
                  key={edu.id} 
                  variants={thunderReveal}
                  transition={{ delay: index * 0.1 }}
                  style={{ marginBottom: '32px', borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '24px' }}
                >
                  <h4 style={{ color: 'var(--white)', fontSize: '18px', marginBottom: '8px' }}>{edu.degree}</h4>
                  <div style={{ color: 'var(--crimson-light)', fontSize: '14px', marginBottom: '8px', letterSpacing: '1px' }}>
                    {edu.institution}
                  </div>
                  <div style={{ color: 'var(--gray)', fontSize: '14px' }}>{edu.period} • {edu.result}</div>
                </motion.div>
              ))}
            </div>

          </div>
          
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
             <a href={portfolioData.googleDriveLinks.resumePdf} target="_blank" rel="noreferrer" className="btn btn-primary interactive">
                DOWNLOAD FULL SCROLL (RESUME)
             </a>
          </div>

        </div>

      </div>
      <style>{`
        .mastery-pillar {
          min-height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .scroll-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </motion.section>
  );
};

export default Experience;
