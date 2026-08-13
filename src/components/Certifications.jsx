import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { sectionFlash, thunderReveal } from '../utils/animations';

const Certifications = () => {
  return (
    <motion.section id="certifications" initial="hidden" whileInView="visible" variants={sectionFlash} viewport={{ once: true, margin: "-100px" }}>
      <div className="container">
        <h2 className="section-title">CERTIFICATIONS</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {portfolioData.certifications.map((cert, index) => (
            <motion.div 
              key={cert.id}
              variants={thunderReveal}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
              style={{ borderLeft: '3px solid var(--gold)', padding: '24px' }}
            >
              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--white)', letterSpacing: '1px' }}>
                📜 {cert.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {cert.topics.map(topic => (
                  <li key={topic} style={{ color: 'var(--paper)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px' }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 800 }}>✓</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
