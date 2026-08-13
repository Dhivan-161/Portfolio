import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { thunderReveal, sectionFlash } from '../utils/animations';

const Projects = ({ onSlashTransition }) => {
  return (
    <motion.section id="projects" initial="hidden" whileInView="visible" variants={sectionFlash} viewport={{ once: true, margin: "-100px" }}>
      <div className="container">
        <h2 className="section-title">MISSION ARCHIVE</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={thunderReveal}
              className="project-card interactive glass-card"
              style={{ cursor: 'none' }}
            >
              <div className="project-card-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
                
                {/* Image Side */}
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', aspectRatio: '16/9' }} className="project-image-container">
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `url(${project.image}) center/cover`, transition: 'transform 0.6s ease' }} className="project-img" />
                  <div className="project-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', transition: 'background 0.4s ease' }} />
                </div>

                {/* Content Side */}
                <div style={{ padding: '16px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <span style={{ color: 'var(--crimson-light)', fontFamily: 'Cinzel, serif', fontSize: '24px', fontWeight: 800 }}>{project.num}</span>
                    <span style={{ height: '1px', width: '40px', background: 'var(--gold-dark)' }} />
                    <span style={{ color: 'var(--gray)', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>MISSION</span>
                  </div>

                  <h3 style={{ fontSize: '32px', color: 'var(--white)', marginBottom: '16px' }}>{project.title}</h3>
                  
                  <p style={{ color: 'var(--gray)', marginBottom: '24px' }}>
                    <strong>Role:</strong> {project.role} <br/>
                    <strong>Tools:</strong> {project.tool}
                  </p>

                  <p style={{ color: 'var(--paper)', marginBottom: '32px' }}>{project.description}</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .project-card:hover .project-img { transform: scale(1.05); }
        .project-card:hover .project-overlay { background: rgba(0,0,0,0.1); }
        .project-card:hover .arrow { transform: translateX(8px); }
        
        @media (max-width: 992px) {
          .project-card-inner { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </motion.section>
  );
};

export default Projects;
