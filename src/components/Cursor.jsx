import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState('normal'); // 'normal', 'hovering', 'viewing'

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.interactive')) {
        setCursorState('hovering');
      } else if (e.target.closest('.project-card')) {
        setCursorState('viewing');
      } else {
        setCursorState('normal');
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <div 
      className={`custom-cursor ${cursorState}`}
      style={{ left: position.x, top: position.y }}
    >
      {cursorState === 'viewing' && 'VIEW'}
    </div>
  );
};

export default Cursor;
