'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

function SunflowerSVG({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Petals */}
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="20" cy="9"
          rx="3" ry="6"
          fill="var(--sunflower)"
          opacity="0.8"
          transform={`rotate(${i * 45} 20 20)`}
        />
      ))}
      {/* Center */}
      <circle cx="20" cy="20" r="7" fill="#7A3E00" />
      <circle cx="20" cy="20" r="5" fill="#5C2E00" />
    </svg>
  );
}

export default function SunflowerParticles() {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(12);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setCount(6);
    }
  }, []);

  if (!mounted) return null;

  const petals: Petal[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: 12 + Math.random() * 20,
    duration: 6 + Math.random() * 8,
    delay: Math.random() * 5,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-0"
          style={{ left: `${p.x}%` }}
          initial={{ y: 0, rotate: p.rotation, opacity: 0.7 }}
          animate={{
            y: '-120vh',
            rotate: p.rotation + 720,
            opacity: [0.7, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 3,
            ease: 'linear',
          }}
        >
          <SunflowerSVG size={p.size} />
        </motion.div>
      ))}
    </div>
  );
}
