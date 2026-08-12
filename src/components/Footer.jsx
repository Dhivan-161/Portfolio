import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { thunderReveal } from '../utils/animations';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '64px 0 40px', background: 'var(--charcoal)', color: 'var(--gray)', fontSize: '14px', textAlign: 'center' }}>
      <motion.div 
        className="container"
        initial="hidden"
        whileInView="visible"
        variants={thunderReveal}
        viewport={{ once: true }}
      >
        
        <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', color: 'var(--white)', letterSpacing: '4px', marginBottom: '8px' }}>
          {portfolioData.personalInfo.name}
        </h4>
        
        <p style={{ color: 'var(--gold-dark)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px', marginBottom: '24px' }}>
          UI/UX Designer
        </p>
        
        <p style={{ marginBottom: '48px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
          "Designed with purpose. Built with passion."
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '48px' }}>
          <a href={portfolioData.personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="interactive footer-link">LINKEDIN</a>
          <a href={`mailto:${portfolioData.personalInfo.email}`} className="interactive footer-link">EMAIL</a>
          <a href={portfolioData.googleDriveLinks.resumePdf} target="_blank" rel="noreferrer" className="interactive footer-link">RESUME</a>
        </div>
        
        <div style={{ fontSize: '12px', opacity: 0.5 }}>
          © {new Date().getFullYear()} Dhivan S. All rights reserved.
        </div>
        
      </motion.div>
      <style>{`
        .footer-link {
          color: var(--paper);
          text-decoration: none;
          letter-spacing: 2px;
          font-size: 13px;
          transition: 0.3s;
        }
        .footer-link:hover {
          color: var(--crimson-light);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
