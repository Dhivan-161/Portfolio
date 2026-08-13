import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { thunderReveal, sectionFlash } from '../utils/animations';

const Skills = () => {
  return (
    <motion.section id="skills" initial="hidden" whileInView="visible" variants={sectionFlash} viewport={{ once: true, margin: "-100px" }} style={{ background: 'var(--charcoal-light)' }}>
      <div className="container">
        <h2 className="section-title">BREATHING TECHNIQUES</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {portfolioData.skillsForms.map((form, index) => (
            <motion.div
              key={form.title}
              variants={thunderReveal}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
              style={{ padding: '32px' }}
            >
              <h3 style={{ color: 'var(--crimson-light)', fontSize: '18px', letterSpacing: '2px', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
                {form.title}
              </h3>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {form.skills.map(skill => (
                  <li key={skill} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--gold)', transform: 'rotate(45deg)' }} />
                    <span style={{ color: 'var(--paper)', fontSize: '16px' }}>{skill}</span>
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
