import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-title"
        >
          CERTIFICATIONS
        </motion.h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }} className="cert-grid">
          {portfolioData.certifications.map(cert => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card"
            >
              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--white)' }}>{cert.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {cert.topics.map(topic => (
                  <li key={topic} style={{ color: 'var(--gray)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                    <Check size={16} color="var(--cyan)" />
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
