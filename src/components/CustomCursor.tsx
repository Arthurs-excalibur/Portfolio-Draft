'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { damping: 30, stiffness: 500 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 500 });

  const trailX = useSpring(cursorX, { damping: 20, stiffness: 150 });
  const trailY = useSpring(cursorY, { damping: 20, stiffness: 150 });

  const isHoveringRef = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleEnter = () => { isHoveringRef.current = true; };
    const handleLeave = () => { isHoveringRef.current = false; };

    window.addEventListener('mousemove', move);

    const interactives = document.querySelectorAll('a, button, .btn-spray, [data-hover]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="cursor-trail"
        style={{ x: trailX, y: trailY }}
      />
    </>
  );
}
