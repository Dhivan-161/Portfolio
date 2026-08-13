import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { thunderReveal, sectionFlash } from '../utils/animations';

const About = () => {
  const { aboutHeading, about } = portfolioData.personalInfo;
  
  const timelineSteps = [
    "Discover", "Define", "Design", "Prototype", "Develop", "Deliver"
  ];

  return (
    <motion.section id="about" initial="hidden" whileInView="visible" variants={sectionFlash} viewport={{ once: true, margin: "-100px" }}>
      <div className="container">
        <h2 className="section-title">THE JOURNEY</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', alignItems: 'center' }} className="about-grid">
          
          {/* Storytelling & Profile Side */}
          <motion.div variants={thunderReveal}>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '24px' }}>
              <div style={{ position: 'relative' }}>
                <img 
                  src="/profile.jpg" 
                  alt="Dhivan S" 
                  style={{ 
                    width: '140px', 
                    height: '170px', 
                    borderRadius: '8px', 
                    objectFit: 'cover', 
                    objectPosition: 'top center',
                    border: '2px solid var(--gold)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(212, 175, 55, 0.3)'
                  }} 
                />
              </div>
              <div style={{ flex: 1, minWidth: '220px' }}>
                <h3 style={{ color: 'var(--white)', fontSize: '28px', marginBottom: '12px' }}>
                  {aboutHeading}
                </h3>
                <span style={{ color: 'var(--crimson-light)', fontSize: '14px', letterSpacing: '2px', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
                  DHIVAN S — UI/UX DESIGNER
                </span>
              </div>
            </div>

            {about.split('\n\n').map((paragraph, index) => (
              <p key={index} style={{ fontSize: '16px', color: 'var(--paper)', lineHeight: 1.8 }}>
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Sword Path Timeline */}
          <div style={{ position: 'relative', paddingLeft: '40px' }}>
            <div style={{ 
              position: 'absolute', top: 0, left: '10px', width: '2px', height: '100%', 
              background: 'linear-gradient(to bottom, var(--crimson), var(--gold-dark), transparent)' 
            }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step}
                  variants={thunderReveal}
                  transition={{ delay: index * 0.1 }}
                  style={{ position: 'relative' }}
                >
                  <div style={{
                    position: 'absolute', left: '-35px', top: '50%', transform: 'translateY(-50%)',
                    width: '12px', height: '12px', background: 'var(--charcoal)', border: '2px solid var(--gold)',
                    borderRadius: '50%'
                  }} />
                  <div className="glass-card" style={{ padding: '14px 20px' }}>
                    <h4 style={{ margin: 0, color: 'var(--white)', letterSpacing: '2px', fontSize: '15px' }}>{step}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </motion.section>
  );
};

export default About;
