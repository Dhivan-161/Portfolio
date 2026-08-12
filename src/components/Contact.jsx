import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { thunderReveal, sectionFlash } from '../utils/animations';

const Contact = () => {
  const { email, phone, linkedin, linkedinUrl } = portfolioData.personalInfo;
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'animating', 'sent'

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('animating');
    
    // Extract form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const userEmail = formData.get('email');
    const message = formData.get('message');

    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${userEmail}\n\nMessage:\n${message}`);
    
    // Open mailto link (this opens Gmail/Outlook)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    // Simulate sword slash / send animation
    setTimeout(() => {
      setFormStatus('sent');
    }, 1500); // 1.5s animation duration
  };

  return (
    <motion.section id="contact" style={{ position: 'relative', overflow: 'hidden' }} initial="hidden" whileInView="visible" variants={sectionFlash} viewport={{ once: true, margin: "-100px" }}>
      
      {/* Dynamic Background Effect */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vw', background: 'radial-gradient(circle, rgba(160, 16, 21, 0.05) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <h2 className="section-title">FINAL FORM</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '64px' }} className="contact-grid">
          
          <motion.div
            variants={thunderReveal}
          >
            <h3 style={{ color: 'var(--white)', fontSize: '40px', marginBottom: '16px', lineHeight: 1.2 }}>
              READY FOR THE NEXT MISSION?
            </h3>
            <p style={{ color: 'var(--gray)', fontSize: '18px', marginBottom: '40px' }}>
              Let's create something meaningful together.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <a href={`mailto:${email}`} className="interactive" style={linkStyle}>
                <span style={{ color: 'var(--gold-dark)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '4px' }}>Email</span>
                {email}
              </a>
              
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="interactive" style={linkStyle}>
                <span style={{ color: 'var(--gold-dark)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '4px' }}>LinkedIn</span>
                {linkedin}
              </a>

              <a href={`tel:${phone.replace(/-/g, '')}`} className="interactive" style={linkStyle}>
                <span style={{ color: 'var(--gold-dark)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '4px' }}>Transmission</span>
                {phone}
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={thunderReveal}
            transition={{ delay: 0.1 }}
            className="glass-card"
            style={{ padding: '40px' }}
          >
            <AnimatePresence mode="wait">
              {formStatus === 'idle' && (
                <motion.form 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                >
                  <input type="text" name="name" placeholder="Your Name" required className="contact-input interactive" />
                  <input type="email" name="email" placeholder="Your Email" required className="contact-input interactive" />
                  <textarea name="message" placeholder="Your Message" required rows={4} className="contact-input interactive" style={{ resize: 'vertical' }} />
                  <button type="submit" className="btn btn-primary interactive" style={{ alignSelf: 'flex-start', marginTop: '16px' }}>
                    SEND MESSAGE
                  </button>
                </motion.form>
              )}

              {formStatus === 'animating' && (
                <motion.div 
                  key="animating"
                  style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
                >
                  {/* Internal Slash Effect */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 1 }}
                    animate={{ scaleX: 1, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ position: 'absolute', width: '150%', height: '2px', background: 'var(--white)', boxShadow: '0 0 20px var(--crimson-light)', transform: 'rotate(-15deg)', transformOrigin: 'center' }}
                  />
                </motion.div>
              )}

              {formStatus === 'sent' && (
                <motion.div 
                  key="sent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
                >
                  <h4 style={{ color: 'var(--white)', fontSize: '32px', marginBottom: '16px', letterSpacing: '4px' }}>MESSAGE SENT</h4>
                  <p style={{ color: 'var(--gray)' }}>Your transmission has been received. I will reply shortly.</p>
                  <button onClick={() => setFormStatus('idle')} className="btn btn-outline interactive" style={{ marginTop: '32px' }}>
                    SEND ANOTHER
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
      <style>{`
        .contact-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          color: var(--white);
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          padding: 12px 0;
          transition: border-color 0.3s;
          outline: none;
          cursor: none;
        }
        .contact-input:focus {
          border-bottom-color: var(--crimson-light);
        }
        .contact-input::placeholder {
          color: var(--gray);
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </motion.section>
  );
};

const linkStyle = {
  fontSize: '18px', color: 'var(--paper)', transition: 'color 0.3s', textDecoration: 'none'
};

export default Contact;
