import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-title"
        >
          EDUCATION
        </motion.h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '800px', margin: '0 auto' }}>
          {portfolioData.education.map((edu, index) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="timeline-edu"
              style={{ display: 'flex', gap: '32px', alignItems: 'baseline' }}
            >
              <div style={{ minWidth: '120px', color: 'var(--cyan)', fontFamily: 'Syne, sans-serif', fontWeight: 700 }} className="timeline-edu-year">
                {edu.period}
              </div>
              
              <div style={{ borderLeft: index !== portfolioData.education.length - 1 ? '2px solid var(--glass-border)' : '2px solid transparent', paddingLeft: '24px', paddingBottom: '32px' }} className="timeline-edu-content">
                <h3 style={{ marginBottom: '8px', color: 'var(--white)' }}>{edu.degree}</h3>
                <h4 style={{ color: 'var(--gray)', marginBottom: '8px', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{edu.institution}</h4>
                <p style={{ margin: 0, color: 'var(--purple)', fontWeight: 500 }}>{edu.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .timeline-edu { flex-direction: column; gap: 8px !important; }
          .timeline-edu-year { min-width: auto !important; }
          .timeline-edu-content { border-left: none !important; padding-left: 0 !important; border-bottom: 1px solid var(--glass-border); width: 100%; margin-bottom: 24px; padding-bottom: 24px !important; }
        }
      `}</style>
    </section>
  );
};

export default Education;
