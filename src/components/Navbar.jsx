import React, { useState, useEffect } from 'react';

const Navbar = ({ onSlashTransition }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
    padding: scrolled ? '14px 0' : '20px 0',
    background: scrolled ? 'var(--glass-bg)' : 'transparent',
    borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'all 0.4s ease'
  };

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const targetId = link.toLowerCase();
    
    if (onSlashTransition) {
      onSlashTransition(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Profile Image Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'Home')}
          className="interactive" 
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <img 
            src="/profile.jpg" 
            alt="Dhivan S" 
            style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              objectPosition: 'top center',
              border: '2px solid var(--gold)',
              boxShadow: '0 0 10px rgba(212, 175, 55, 0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }} 
            className="nav-profile-img"
          />
          <span style={{ fontFamily: 'Cinzel, serif', fontSize: '18px', fontWeight: 800, color: 'var(--white)', letterSpacing: '2px' }}>
            DHIVAN
          </span>
        </a>

        {/* Links */}
        <div className="nav-links" style={{ display: 'flex', gap: '32px' }}>
          {navLinks.map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link)}
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
