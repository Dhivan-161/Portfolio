import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OnePieceCinematic = ({ onClose }) => {
  const canvasRef = useRef(null);
  const [currentShot, setCurrentShot] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isImpact, setIsImpact] = useState(false);

  // Shot Timings in ms
  // Shot 1: 0-4000ms (Ocean Horizon & Flying Camera)
  // Shot 2: 4000-8000ms (Deck Character Orbit)
  // Shot 3: 8000-12000ms (Conqueror Haki Energy Gathering)
  // Shot 4: 12000-13500ms (Speed Ramp & Impact Frame Flash)
  // Shot 5: 13500-19000ms (Ocean Shockwave & Sunset Slow-Mo)

  useEffect(() => {
    let animId;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let startTime = Date.now();

    // Particle pool for embers, shockwaves, water spray
    const particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 4,
      speedY: -Math.random() * 3 - 1,
      alpha: Math.random(),
      color: Math.random() > 0.5 ? '#ff4500' : '#ffd700'
    }));

    // Lightning arcs
    const generateLightning = (x1, y1, x2, y2, segments = 5) => {
      const pts = [{ x: x1, y: y1 }];
      for (let i = 1; i < segments; i++) {
        const t = i / segments;
        pts.push({
          x: x1 + (x2 - x1) * t + (Math.random() - 0.5) * 60,
          y: y1 + (y2 - y1) * t + (Math.random() - 0.5) * 60
        });
      }
      pts.push({ x: x2, y: y2 });
      return pts;
    };

    const render = () => {
      const elapsed = Date.now() - startTime;
      const w = canvas.width;
      const h = canvas.height;

      // Update shot state
      if (elapsed < 4000) {
        if (currentShot !== 1) setCurrentShot(1);
      } else if (elapsed < 8000) {
        if (currentShot !== 2) setCurrentShot(2);
      } else if (elapsed < 12000) {
        if (currentShot !== 3) setCurrentShot(3);
      } else if (elapsed < 13500) {
        if (currentShot !== 4) {
          setCurrentShot(4);
          setIsImpact(true);
        }
      } else if (elapsed < 20000) {
        if (currentShot !== 5) {
          setCurrentShot(5);
          setIsImpact(false);
        }
      } else {
        // Loop sequence
        startTime = Date.now();
      }

      ctx.clearRect(0, 0, w, h);

      // SHOT 1: OCEAN FLYOVER
      if (elapsed < 4000) {
        const progress = elapsed / 4000;
        
        // Sky Gradient (Golden Dramatic Sunset)
        const skyGrd = ctx.createLinearGradient(0, 0, 0, h * 0.6);
        skyGrd.addColorStop(0, '#2b0b00');
        skyGrd.addColorStop(0.5, '#ff4500');
        skyGrd.addColorStop(1, '#ffaa00');
        ctx.fillStyle = skyGrd;
        ctx.fillRect(0, 0, w, h * 0.6);

        // Sun Glow
        const sunGrd = ctx.createRadialGradient(w * 0.5, h * 0.45, 10, w * 0.5, h * 0.45, 200);
        sunGrd.addColorStop(0, '#ffffff');
        sunGrd.addColorStop(0.3, '#ffd700');
        sunGrd.addColorStop(1, 'transparent');
        ctx.fillStyle = sunGrd;
        ctx.beginPath();
        ctx.arc(w * 0.5, h * 0.45, 200, 0, Math.PI * 2);
        ctx.fill();

        // Dynamic Waves
        const waveY = h * 0.55 + Math.sin(progress * 8) * 15;
        const oceanGrd = ctx.createLinearGradient(0, waveY, 0, h);
        oceanGrd.addColorStop(0, '#0a2342');
        oceanGrd.addColorStop(1, '#020b14');
        ctx.fillStyle = oceanGrd;
        ctx.beginPath();
        ctx.moveTo(0, waveY);
        for (let x = 0; x <= w; x += 30) {
          ctx.lineTo(x, waveY + Math.sin(x * 0.01 + progress * 10) * 20);
        }
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fill();

        // Flying Camera Horizon Line (Speed lines)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 20; i++) {
          const lx = Math.random() * w;
          const ly = waveY + Math.random() * (h - waveY);
          ctx.beginPath();
          ctx.moveTo(lx, ly);
          ctx.lineTo(lx - 100 * progress, ly);
          ctx.stroke();
        }

        // Pirate Ship Silhouette (approaching camera)
        const shipScale = 0.5 + progress * 0.8;
        const shipX = w * 0.5;
        const shipY = waveY - 20 * shipScale;
        ctx.save();
        ctx.translate(shipX, shipY);
        ctx.scale(shipScale, shipScale);
        ctx.fillStyle = '#09080d';
        ctx.beginPath();
        ctx.moveTo(-60, 0);
        ctx.lineTo(-90, -30);
        ctx.lineTo(90, -30);
        ctx.lineTo(60, 0);
        ctx.fill();
        // Masts & Sails
        ctx.fillRect(-5, -120, 10, 120);
        ctx.beginPath();
        ctx.arc(0, -70, 45, 0, Math.PI, true);
        ctx.fillStyle = '#1a1016';
        ctx.fill();
        ctx.restore();
      }

      // SHOT 2: DECK CAMERA ORBIT
      else if (elapsed < 8000) {
        const progress = (elapsed - 4000) / 4000;
        const angle = progress * Math.PI * 0.5;

        // Dark Atmospheric Deck
        const bgGrd = ctx.createRadialGradient(w * 0.5, h * 0.5, 50, w * 0.5, h * 0.5, w * 0.8);
        bgGrd.addColorStop(0, '#151520');
        bgGrd.addColorStop(1, '#050508');
        ctx.fillStyle = bgGrd;
        ctx.fillRect(0, 0, w, h);

        // Deck Wooden Floor Perspective Lines
        ctx.strokeStyle = 'rgba(214, 32, 39, 0.2)';
        ctx.lineWidth = 2;
        for (let i = -5; i <= 5; i++) {
          ctx.beginPath();
          ctx.moveTo(w * 0.5 + i * 40, h * 0.6);
          ctx.lineTo(w * 0.5 + i * 200 + Math.cos(angle) * 100, h);
          ctx.stroke();
        }

        // Hero Rim Light Aura & Straw Hat Pirate Silhouette
        const heroX = w * 0.5 + Math.sin(angle) * 30;
        const heroY = h * 0.5;

        // Red Rim Glow
        const heroGlow = ctx.createRadialGradient(heroX, heroY - 40, 10, heroX, heroY - 40, 160);
        heroGlow.addColorStop(0, 'rgba(255, 69, 0, 0.4)');
        heroGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = heroGlow;
        ctx.beginPath();
        ctx.arc(heroX, heroY - 40, 160, 0, Math.PI * 2);
        ctx.fill();

        // Hero Outline
        ctx.fillStyle = '#0c0a10';
        ctx.beginPath();
        // Straw Hat
        ctx.ellipse(heroX, heroY - 140, 50, 14, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(heroX, heroY - 148, 25, Math.PI, 0);
        ctx.fill();
        // Body / Coat flowing
        ctx.moveTo(heroX - 30, heroY - 110);
        ctx.lineTo(heroX + 30, heroY - 110);
        ctx.lineTo(heroX + 70 + Math.sin(progress * 10) * 15, heroY + 80);
        ctx.lineTo(heroX - 70 - Math.sin(progress * 10) * 15, heroY + 80);
        ctx.closePath();
        ctx.fill();
      }

      // SHOT 3: CONQUEROR'S HAKI ENERGY GATHERING
      else if (elapsed < 12000) {
        const progress = (elapsed - 8000) / 4000;

        // Storm Sky & Spiraling Energy Vortex
        ctx.fillStyle = '#030205';
        ctx.fillRect(0, 0, w, h);

        // Energy Vortex Rings
        ctx.save();
        ctx.translate(w * 0.5, h * 0.5);
        ctx.rotate(progress * Math.PI * 4);
        for (let r = 50; r < 500; r += 60) {
          ctx.strokeStyle = `rgba(255, 0, 50, ${0.8 - r / 600})`;
          ctx.lineWidth = 4 + (1 - r / 500) * 8;
          ctx.beginPath();
          ctx.arc(0, 0, r * (1 - progress * 0.3), 0, Math.PI * 1.5);
          ctx.stroke();
        }
        ctx.restore();

        // Black & Red Lightning Arcs (Conqueror's Haki Effect)
        if (Math.random() > 0.2) {
          const lPoints = generateLightning(w * 0.5, h * 0.5, Math.random() * w, Math.random() * h);
          ctx.strokeStyle = '#ff0033';
          ctx.lineWidth = 5;
          ctx.shadowColor = '#ff0000';
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.moveTo(lPoints[0].x, lPoints[0].y);
          lPoints.forEach(p => ctx.lineTo(p.x, p.y));
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        // Hero Charging Stance Glow
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(w * 0.5, h * 0.5, 40 + Math.random() * 15, 0, Math.PI * 2);
        ctx.fill();
      }

      // SHOT 4: IMPACT FRAME FLASH & LAUNCH SPEED RAMP
      else if (elapsed < 13500) {
        const flashToggle = Math.floor(elapsed / 80) % 2 === 0;
        ctx.fillStyle = flashToggle ? '#ffffff' : '#000000';
        ctx.fillRect(0, 0, w, h);

        // Dynamic Speed Lines
        ctx.strokeStyle = flashToggle ? '#ff0000' : '#ffffff';
        ctx.lineWidth = 6;
        for (let i = 0; i < 40; i++) {
          const angle = (i / 40) * Math.PI * 2;
          ctx.beginPath();
          ctx.moveTo(w * 0.5 + Math.cos(angle) * 80, h * 0.5 + Math.sin(angle) * 80);
          ctx.lineTo(w * 0.5 + Math.cos(angle) * w, h * 0.5 + Math.sin(angle) * h);
          ctx.stroke();
        }

        // Impact Slash Kanji Symbol / Energy Burst
        ctx.fillStyle = flashToggle ? '#000' : '#ff0033';
        ctx.font = '900 120px Cinzel, serif';
        ctx.textAlign = 'center';
        ctx.fillText('覇王色', w * 0.5, h * 0.55);
      }

      // SHOT 5: HUGE OCEAN SHOCKWAVE & SUNSET HERO PUSH-IN
      else if (elapsed < 20000) {
        const progress = (elapsed - 13500) / 6500;

        // Cinematic Sunset Background
        const sunSky = ctx.createLinearGradient(0, 0, 0, h);
        sunSky.addColorStop(0, '#1a0005');
        sunSky.addColorStop(0.4, '#800c0c');
        sunSky.addColorStop(0.7, '#ff4500');
        sunSky.addColorStop(1, '#ffaa00');
        ctx.fillStyle = sunSky;
        ctx.fillRect(0, 0, w, h);

        // Giant Expanding Shockwave Ring across ocean
        const shockRadius = progress * w * 1.2;
        ctx.strokeStyle = `rgba(255, 215, 0, ${Math.max(0, 1 - progress)})`;
        ctx.lineWidth = 12 * (1 - progress);
        ctx.beginPath();
        ctx.ellipse(w * 0.5, h * 0.7, shockRadius, shockRadius * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Floating Embers
        particles.forEach(p => {
          p.y += p.speedY;
          p.x += p.speedX;
          if (p.y < 0) p.y = h;
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.globalAlpha = 1.0;

        // Hero Push-in Silhouette
        const heroZoom = 1 + progress * 0.4;
        ctx.save();
        ctx.translate(w * 0.5, h * 0.5);
        ctx.scale(heroZoom, heroZoom);

        // Golden Rim Light
        ctx.fillStyle = '#0a0a0f';
        ctx.beginPath();
        ctx.ellipse(0, -60, 45, 12, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(-20, -50, 40, 120);

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        zIndex: 100000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justify: 'center',
        fontFamily: "'Cinzel', serif"
      }}
    >
      {/* Canvas Video Animation Rendering Engine */}
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />

      {/* Cinematic Letterbox Bars */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '8vh', background: '#000', zIndex: 10 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '8vh', background: '#000', zIndex: 10 }} />

      {/* Shot Info Overlay */}
      <div style={{ position: 'absolute', top: '10vh', left: '40px', zIndex: 20, color: 'rgba(255,255,255,0.85)' }}>
        <div style={{ fontSize: '12px', letterSpacing: '4px', color: '#ff4500', fontWeight: 800 }}>ONE PIECE THEATRICAL MOVIE SEQUENCE</div>
        <div style={{ fontSize: '20px', fontWeight: 700, marginTop: '4px' }}>
          {currentShot === 1 && 'SHOT 1: OCEAN HORIZON & FLYING CAMERA'}
          {currentShot === 2 && 'SHOT 2: DECK ORBIT & HERO SILHOUETTE'}
          {currentShot === 3 && "SHOT 3: CONQUEROR'S HAKI ENERGY VORTEX"}
          {currentShot === 4 && 'SHOT 4: IMPACT FRAME LAUNCH & SPEED RAMP'}
          {currentShot === 5 && 'SHOT 5: OCEAN SHOCKWAVE & SUNSET SLOW-MO'}
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="interactive"
        style={{
          position: 'absolute',
          top: '10vh',
          right: '40px',
          zIndex: 20,
          background: 'rgba(255, 69, 0, 0.2)',
          border: '1px solid #ff4500',
          color: '#fff',
          padding: '10px 24px',
          fontSize: '13px',
          letterSpacing: '2px',
          cursor: 'pointer',
          borderRadius: '4px',
          backdropFilter: 'blur(10px)'
        }}
      >
        ✕ EXIT CINEMATIC
      </button>

      {/* Timeline Controls */}
      <div style={{ position: 'absolute', bottom: '10vh', width: '80%', zIndex: 20, display: 'flex', gap: '8px' }}>
        {[1, 2, 3, 4, 5].map((shot) => (
          <div
            key={shot}
            style={{
              flex: 1,
              height: '4px',
              borderRadius: '2px',
              background: currentShot >= shot ? '#ff4500' : 'rgba(255,255,255,0.2)',
              boxShadow: currentShot === shot ? '0 0 10px #ff4500' : 'none',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default OnePieceCinematic;
