import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TransitionManager = ({ isAnimating, onComplete }) => {
  
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1200); // Complete animation in 1.2s
      return () => clearTimeout(timer);
    }
  }, [isAnimating, onComplete]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            pointerEvents: 'all', 
            zIndex: 99999, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Black Screen Background */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ 
              position: 'absolute', 
              width: '100%', 
              height: '100%', 
              background: '#040406'
            }}
          />

          {/* Electric Blue Background Pulse */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 0.6, times: [0, 0.4, 1] }}
            style={{ 
              position: 'absolute', 
              width: '100%', 
              height: '100%', 
              background: 'radial-gradient(circle at center, rgba(135, 206, 250, 0.4) 0%, rgba(160, 16, 21, 0.3) 50%, transparent 80%)'
            }}
          />

          {/* Vertical Thunder Strike */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.6, times: [0, 0.2, 0.7, 1] }}
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              width: '6px',
              height: '100%',
              background: '#ffffff',
              boxShadow: '0 0 40px #87cefa, 0 0 80px #ffffff, 0 0 120px #87cefa',
              transform: 'translateX(-50%)',
              zIndex: 10
            }}
          />

          {/* Diagonal Thunder Strike Slash */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.7, delay: 0.1, times: [0, 0.3, 0.8, 1] }}
            style={{
              position: 'absolute',
              width: '160vw',
              height: '4px',
              background: '#ffffff',
              boxShadow: '0 0 50px #87cefa, 0 0 100px #ffffff',
              transform: 'rotate(-25deg)',
              zIndex: 12
            }}
          />

          {/* Thunder Impact Shockwave Ring */}
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3.5, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '4px solid #87cefa',
              boxShadow: '0 0 50px #87cefa, inset 0 0 50px #ffffff',
              zIndex: 15
            }}
          />

          {/* Thunder Flash Text Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.1, 1.3] }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              zIndex: 20,
              textAlign: 'center',
              color: '#ffffff',
              fontFamily: "'Cinzel', serif",
              letterSpacing: '8px',
              textShadow: '0 0 20px #87cefa, 0 0 40px #ffffff'
            }}
          >
            <div style={{ fontSize: '14px', color: '#87cefa', fontWeight: 800, marginBottom: '8px' }}>
              ⚡ FIRST FORM
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800 }}>
              THUNDER FLASH
            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};

export default TransitionManager;
