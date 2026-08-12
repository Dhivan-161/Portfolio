import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TransitionManager = ({ isAnimating, onComplete }) => {
  
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, onComplete]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <div className="slash-overlay">
          {/* Background flashes dark */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="slash-bg"
          />
          
          {/* Sword slash line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="slash-line"
          />
          
          {/* Blood/Ink splatter effect overlay could go here */}
        </div>
      )}
    </AnimatePresence>
  );
};

export default TransitionManager;
