'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

export default function MangaPanel({ children, delay = 0, className = '', direction = 'up' }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
      y: direction === 'up' ? 40 : 0,
      clipPath: 'inset(0 100% 0 0)',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      clipPath: 'inset(0 0% 0 0)',
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`manga-panel ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
