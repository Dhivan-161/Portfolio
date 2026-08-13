import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
    padding: scrolled ? '16px 0' : '24px 0',
    background: scrolled ? 'var(--glass-bg)' : 'transparent',
    borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    transition: 'all 0.4s ease'
  };

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Monogram Logo */}
        <a href="#home" className="interactive" style={{ 
          fontFamily: 'Cinzel, serif', fontSize: '24px', fontWeight: 800, color: 'var(--white)',
          border: '1px solid var(--gold-dark)', padding: '4px 8px', letterSpacing: '2px'
        }}>
          [DS]
        </a>

        {/* Links */}
        <div className="nav-links" style={{ display: 'flex', gap: '32px' }}>
          {navLinks.map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="interactive nav-link"
              style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gray)', transition: '0.3s' }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <style>{`
        .nav-link:hover {
          color: var(--crimson-light) !important;
          text-shadow: 0 0 10px rgba(214, 32, 39, 0.4);
        }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
