import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = ({ onSlashTransition }) => {
  const [started, setStarted] = useState(false);
  const [sequencePhase, setSequencePhase] = useState(0); 
  
  const { name, roles } = portfolioData.personalInfo;

  const handleStart = () => {
    setStarted(true);
    setSequencePhase(1); // 0.00s: Silence
    
    setTimeout(() => setSequencePhase(2), 800);  // 0.80s: First Breath
    setTimeout(() => setSequencePhase(3), 1500); // 1.50s: Energy Gathering
    setTimeout(() => setSequencePhase(4), 2500); // 2.50s: Thunder Strike
    setTimeout(() => setSequencePhase(5), 3200); // 3.20s: Thunder Breathing (Flowing arcs)
    setTimeout(() => setSequencePhase(6), 4200); // 4.20s: Text 1 (Designed with purpose)
    setTimeout(() => setSequencePhase(7), 5000); // 5.00s: Second Strike Horizontal
    setTimeout(() => setSequencePhase(8), 5800); // 5.80s: Text 2 (Built with passion)
    setTimeout(() => setSequencePhase(9), 7000); // 7.00s: Final Thunder Boom
    setTimeout(() => setSequencePhase(10), 8000); // 8.00s: Portfolio Reveal
  };

  const skipSequence = () => {
    setStarted(true);
    setSequencePhase(10);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    if (onSlashTransition) {
      onSlashTransition(() => {
        document.getElementById('projects')?.scrollIntoView();
      });
    } else {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cinematic Sequence
  if (!started || sequencePhase < 10) {
    return (
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020202', position: 'relative', overflow: 'hidden' }}>
        
        {/* Skip Button */}
        {sequencePhase > 0 && sequencePhase < 9 && (
          <button 
            onClick={skipSequence} 
            className="interactive" 
            style={{ position: 'absolute', bottom: '40px', right: '40px', background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--gray)', padding: '8px 24px', fontSize: '12px', letterSpacing: '2px', zIndex: 100 }}
          >
            SKIP INTRO
          </button>
        )}

        {/* Deep Atmospheric Background */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: 'url(/thunder-bg.png)', backgroundSize: 'cover', opacity: 0.8, animation: 'subtleAtmospherePulse 4s infinite' }} />

        {/* Phase 0: The Button */}
        {sequencePhase === 0 && (
          <button 
            onClick={handleStart}
            className="btn hot-glow-btn interactive"
            style={{ 
              padding: '16px 40px', fontSize: '18px', letterSpacing: '4px', zIndex: 10
            }}
          >
            🔥 BEGIN JOURNEY
          </button>
        )}
        {sequencePhase === 1 && (
          <div style={{ 
            color: 'var(--white)', border: '1px solid var(--crimson-light)',
            padding: '16px 40px', fontSize: '18px', letterSpacing: '4px', zIndex: 10,
            animation: 'buttonShatter 0.5s forwards'
          }}>
            BEGIN JOURNEY
          </div>
        )}

        <AnimatePresence mode="wait">

          {/* Phase 2: First Breath */}
          {sequencePhase === 2 && (
            <motion.div key="first_breath" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <div style={{ width: '2px', height: '100px', background: '#fff', boxShadow: '0 0 20px #87cefa', animation: 'subtleAtmospherePulse 0.2s infinite' }} />
              <div style={{ color: 'var(--gray)', fontSize: '12px', letterSpacing: '8px', marginTop: '20px' }}>FIRST BREATH</div>
            </motion.div>
          )}

          {/* Phase 3: Energy Gathering */}
          {sequencePhase === 3 && (
            <motion.div key="gathering" style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '400px', height: '400px', border: '2px dashed rgba(135,206,250,0.5)', borderRadius: '50%', animation: 'particleSuction 1s ease-in forwards' }} />
              <div style={{ position: 'absolute', width: '600px', height: '600px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', animation: 'particleSuction 1s ease-in 0.2s forwards' }} />
            </motion.div>
          )}

          {/* Phase 4: Thunder Strike Vertical */}
          {sequencePhase === 4 && (
            <div key="strike1" style={{ position: 'absolute', top: 0, left: '50%', width: '10px', height: '100%', animation: 'lightningStrikeVertical 0.5s forwards', zIndex: 50 }} />
          )}

          {/* Phase 5: Thunder Breathing Arcs */}
          {sequencePhase === 5 && (
            <div key="arcs" style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="100%" height="100%">
                <path d="M 0 500 Q 400 200, 960 500 T 1920 500" fill="transparent" stroke="#fff" strokeWidth="2" strokeDasharray="1000" style={{ animation: 'electricArcFlow 0.5s infinite linear' }} />
                <path d="M 0 200 Q 500 800, 960 500 T 1920 200" fill="transparent" stroke="#87cefa" strokeWidth="4" strokeDasharray="1000" style={{ animation: 'electricArcFlow 0.3s infinite reverse' }} />
              </svg>
            </div>
          )}

          {/* Phase 6: Text Formation 1 */}
          {sequencePhase === 6 && (
            <motion.div key="text1" style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h1 style={{ color: 'var(--white)', fontFamily: 'Inter, sans-serif', fontSize: '64px', fontWeight: 300, letterSpacing: '4px', animation: 'electricTextReveal 0.8s forwards' }}>
                Designed with purpose.
              </h1>
            </motion.div>
          )}

          {/* Phase 7: Second Thunder Strike Horizontal */}
          {sequencePhase === 7 && (
            <div key="strike2" style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '10px', animation: 'lightningStrikeHorizontal 0.5s forwards', zIndex: 50 }}>
               <div style={{ position: 'absolute', width: '100%', textAlign: 'center', top: '-60px', color: '#fff', fontSize: '40px', letterSpacing: '10px', fontWeight: 'bold' }}>THUNDER IMPACT</div>
            </div>
          )}

          {/* Phase 8: Text Formation 2 */}
          {sequencePhase === 8 && (
            <motion.div key="text2" style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h1 style={{ color: 'var(--white)', fontFamily: 'Inter, sans-serif', fontSize: '80px', fontWeight: 700, letterSpacing: '2px', animation: 'electricTextReveal 1.2s forwards' }}>
                Built with passion.
              </h1>
            </motion.div>
          )}

          {/* Phase 9: Final Thunder Boom & Shatter */}
          {sequencePhase === 9 && (
            <motion.div key="final_boom" style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h1 style={{ color: 'var(--white)', fontFamily: 'Inter, sans-serif', fontSize: '80px', fontWeight: 700, letterSpacing: '2px', zIndex: 10 }}>
                Built with passion.
              </h1>
              <div style={{ position: 'absolute', width: '100px', height: '100px', borderRadius: '50%', animation: 'thunderShockwave 0.8s forwards', zIndex: 5 }} />
            </motion.div>
          )}

        </AnimatePresence>
      </section>
    );
  }

  // Phase 10: Final Hero Content (Portfolio Reveal)
  return (
    <section id="home" className="hero" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: 'var(--charcoal)' }}>
      
      {/* Background particles */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: 'url(/thunder-bg.png)', backgroundSize: 'cover', opacity: 0.3, mixBlendMode: 'screen' }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span className="hot-badge"><span>🔥</span> SUN BREATHING MODE</span>
          </div>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{ color: 'var(--gray)', letterSpacing: '6px', fontSize: '14px', marginBottom: '24px', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}
          >
            Designed with purpose.<br/>Built with passion.
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="hot-text"
            style={{ textTransform: 'uppercase', marginBottom: '8px', fontSize: '64px' }}
          >
            {name}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            style={{ color: 'var(--crimson-light)', fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: 600, letterSpacing: '8px', marginBottom: '8px' }}
          >
            {roles[0]}
          </motion.h2>

          <motion.h3 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
            style={{ color: 'var(--gray)', fontFamily: 'Inter, sans-serif', fontSize: '16px', letterSpacing: '2px', marginBottom: '32px' }}
          >
            FRONT-END DEVELOPER
          </motion.h3>
          
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.8, duration: 1 }} style={{ transformOrigin: 'left' }} className="katana-divider" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 }}
            style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '48px' }}
          >
            <a href="#projects" onClick={handleScrollToProjects} className="btn hot-glow-btn interactive">
              🔥 EXPLORE MY WORK
            </a>
            <a href={portfolioData.googleDriveLinks.resumePdf} target="_blank" rel="noreferrer" className="btn btn-outline interactive">
              VIEW RESUME
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
