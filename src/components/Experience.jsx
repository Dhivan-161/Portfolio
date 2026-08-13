import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { thunderReveal, sectionFlash } from '../utils/animations';

const Experience = () => {
  return (
    <motion.section id="experience" initial="hidden" whileInView="visible" variants={sectionFlash} viewport={{ once: true, margin: "-100px" }} style={{ background: 'var(--charcoal-light)' }}>
      <div className="container">
        <h2 className="section-title">WORK EXPERIENCE & EDUCATION</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }} className="scroll-grid">
          
          {/* Work Experience */}
          <div>
            <h3 style={{ color: 'var(--gold)', marginBottom: '32px', letterSpacing: '4px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
              EXPERIENCE
            </h3>
            {portfolioData.experience.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                variants={thunderReveal}
                transition={{ delay: index * 0.1 }}
                className="glass-card"
                style={{ marginBottom: '32px', borderLeft: '3px solid var(--crimson-light)', padding: '24px' }}
              >
                <h4 style={{ color: 'var(--white)', fontSize: '20px', marginBottom: '8px' }}>{exp.role}</h4>
                <div style={{ color: 'var(--crimson-light)', fontSize: '14px', marginBottom: '16px', letterSpacing: '1px', fontWeight: 600 }}>
                  {exp.company} • {exp.duration}
                </div>
                <ul style={{ color: 'var(--gray)', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'disc', paddingLeft: '16px' }}>
                  {exp.responsibilities.map((req, i) => <li key={i}>{req}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 style={{ color: 'var(--gold)', marginBottom: '32px', letterSpacing: '4px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
              EDUCATION
            </h3>
            {portfolioData.education.map((edu, index) => (
              <motion.div 
                key={edu.id} 
                variants={thunderReveal}
                transition={{ delay: index * 0.1 }}
                className="glass-card"
                style={{ marginBottom: '24px', borderLeft: '3px solid var(--gold)', padding: '20px 24px' }}
              >
                <h4 style={{ color: 'var(--white)', fontSize: '18px', marginBottom: '8px' }}>{edu.degree}</h4>
                <div style={{ color: 'var(--crimson-light)', fontSize: '14px', marginBottom: '8px', letterSpacing: '1px', fontWeight: 600 }}>
                  {edu.institution}
                </div>
                <div style={{ color: 'var(--gray)', fontSize: '14px' }}>{edu.period} • <span style={{ color: 'var(--paper)', fontWeight: 600 }}>{edu.result}</span></div>
              </motion.div>
            ))}
          </div>

        </div>
        
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
           <a href={portfolioData.googleDriveLinks.resumePdf} target="_blank" rel="noreferrer" className="btn btn-primary interactive">
              DOWNLOAD RESUME
           </a>
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .scroll-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </motion.section>
  );
};

export default Experience;
