import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { thunderReveal, sectionFlash } from '../utils/animations';

const Skills = () => {
  return (
    <motion.section id="skills" initial="hidden" whileInView="visible" variants={sectionFlash} viewport={{ once: true, margin: "-100px" }} style={{ background: 'var(--charcoal-light)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>BREATHING TECHNIQUES</h2>
          <span className="hot-badge"><span>🔥</span> HOT SKILL MATRIX</span>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {portfolioData.skillsForms.map((form, index) => (
            <motion.div
              key={form.title}
              variants={thunderReveal}
              transition={{ delay: index * 0.1 }}
              className={`glass-card ${index === 0 ? 'hot-effect' : ''}`}
              style={{ padding: '32px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
                <h3 style={{ color: 'var(--crimson-light)', fontSize: '18px', letterSpacing: '2px', margin: 0 }}>
                  {form.title}
                </h3>
                {index === 0 && <span className="hot-badge" style={{ fontSize: '9px', padding: '2px 8px' }}><span>🔥</span> TOP FORM</span>}
              </div>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {form.skills.map((skill, sIndex) => (
                  <li key={skill} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ 
                      width: '6px', 
                      height: '6px', 
                      background: (index === 0 && sIndex < 2) ? '#ff4500' : 'var(--gold)', 
                      transform: 'rotate(45deg)',
                      boxShadow: (index === 0 && sIndex < 2) ? '0 0 8px #ff4500' : 'none'
                    }} />
                    <span style={{ 
                      color: (index === 0 && sIndex < 2) ? '#ff8c00' : 'var(--paper)', 
                      fontSize: '16px',
                      fontWeight: (index === 0 && sIndex < 2) ? 700 : 400 
                    }}>
                      {skill}
                    </span>
                    {(index === 0 && sIndex < 2) && (
                      <span style={{ marginLeft: 'auto', fontSize: '12px' }}>🔥</span>
                    )}
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

export default Skills;
