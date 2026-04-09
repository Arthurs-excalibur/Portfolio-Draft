'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import VinylRecord from './VinylRecord';

interface Props {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Stutter effect
        const bump = Math.random() > 0.8 ? Math.random() * 20 : Math.random() * 5;
        return Math.min(p + bump, 100);
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setGlitch(true);
        setTimeout(() => {
          setVisible(false);
          onComplete();
        }, 600);
      }, 400);
    }
  }, [progress, onComplete]);

  // Occasional glitch flicker
  useEffect(() => {
    const t = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 120);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-[var(--ink)] overflow-hidden"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          {/* Halftone bg */}
          <div className="absolute inset-0 halftone-bg" />
          <div className="absolute inset-0 scanlines" />

          {/* Glitch flash */}
          {glitch && (
            <div className="absolute inset-0 bg-[var(--sunflower)] opacity-5 mix-blend-screen pointer-events-none" />
          )}

          {/* Vinyl */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 15, stiffness: 120, delay: 0.1 }}
          >
            <VinylRecord size={160} spin />
          </motion.div>

          {/* Title */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1
              className="font-display text-[var(--sunflower)] text-4xl tracking-widest glitch"
              data-text="CHAMPLOO"
            >
              CHAMPLOO
            </h1>
            <p className="font-mono text-[var(--steel)] text-xs mt-2 tracking-[0.4em] uppercase">
              Lo-Fi Hip-Hop Fusion
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-10 w-64 relative">
            <div className="h-px bg-[var(--ink-light)] w-full" />
            <motion.div
              className="absolute top-0 left-0 h-px bg-[var(--sunflower)]"
              style={{ boxShadow: '0 0 8px var(--sunflower)', width: `${progress}%` }}
            />
            <p className="font-mono text-[var(--steel)] text-xs mt-3 text-right">
              {Math.round(progress).toString().padStart(3, '0')}%
            </p>
          </div>

          {/* Kanji deco */}
          <motion.span
            className="absolute bottom-8 left-8 font-display text-[var(--sunflower)] text-6xl opacity-10"
            animate={{ opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            刀
          </motion.span>
          <motion.span
            className="absolute top-12 right-12 font-display text-[var(--spray-red)] text-5xl opacity-10"
            animate={{ opacity: [0.04, 0.1, 0.04] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            侍
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
