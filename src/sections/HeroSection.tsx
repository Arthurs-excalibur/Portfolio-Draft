'use client';

import { motion } from 'framer-motion';
import VinylRecord from '@/components/VinylRecord';
import { CodeXml, X, ArrowDown } from 'lucide-react';

const tagLine = ['Wandering', 'Developer.', 'Digital', 'Ronin.'];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Background kanji watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.span
          className="font-display text-[30vw] text-[var(--sunflower)] opacity-[0.03] leading-none"
          animate={{ opacity: [0.025, 0.05, 0.025] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          侍
        </motion.span>
      </div>

      {/* Diagonal slashes deco */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[var(--sunflower)] opacity-[0.03]"
            style={{
              width: '2px',
              height: '100%',
              left: `${15 + i * 18}%`,
              transformOrigin: 'top center',
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>

      <div className="section-container w-full py-32 md:py-0">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left — text */}
          <div>
            {/* Tag */}
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <span className="h-px w-8 bg-[var(--spray-red)]" />
              <span className="font-mono text-[var(--spray-red)] text-xs tracking-[0.3em] uppercase">
                Edo × Hip-Hop
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                className="font-display text-[var(--sunflower)] text-7xl sm:text-8xl md:text-9xl leading-none"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              >
                MUGEN
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-6">
              <motion.p
                className="font-heading text-[var(--cream)] text-xl md:text-4xl tracking-widest"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                DEV PORTFOLIO
              </motion.p>
            </div>

            {/* Tag words */}
            <div className="flex flex-wrap gap-3 mb-8">
              {tagLine.map((word, i) => (
                <motion.span
                  key={i}
                  className="font-mono text-[var(--steel)] text-sm tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 + i * 0.1 }}
                >
                  {word}
                  {i < tagLine.length - 1 && (
                    <span className="ml-3 text-[var(--sunflower)]">/</span>
                  )}
                </motion.span>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <a href="#projects" className="btn-spray" data-hover>
                SEE MY WORK
              </a>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" data-hover
                  className="p-2 border border-[var(--steel)] text-[var(--steel)] hover:border-[var(--sunflower)] hover:text-[var(--sunflower)] transition-colors">
                  <CodeXml size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" data-hover
                  className="p-2 border border-[var(--steel)] text-[var(--steel)] hover:border-[var(--sunflower)] hover:text-[var(--sunflower)] transition-colors">
                  <X size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — Vinyl + decoration */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.8, type: 'spring', damping: 15 }}
          >
            {/* Glow ring */}
            <div className="absolute w-72 h-72 rounded-full bg-[var(--sunflower)] opacity-[0.08] blur-3xl animate-pulse" />

            {/* Outer orbit ring */}
            <motion.div
              className="absolute w-72 h-72 rounded-full border border-[var(--sunflower)]/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-56 h-56 rounded-full border border-[var(--spray-red)]/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />

            {/* Vinyl */}
            <div className="scale-75 md:scale-100">
              <VinylRecord size={220} spin />
            </div>

            {/* Floating tags */}
            <motion.div
              className="absolute top-4 -right-4 font-mono text-xs text-[var(--sunflower)] bg-[var(--ink-light)] border border-[var(--sunflower)]/30 px-3 py-1.5 whitespace-nowrap"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              ♪ lo-fi beats
            </motion.div>
            <motion.div
              className="absolute bottom-8 -left-8 font-display text-2xl text-[var(--spray-red)] opacity-70"
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              刀
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-mono text-[var(--steel)] text-xs tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={16} className="text-[var(--sunflower)]" />
      </motion.div>
    </section>
  );
}
