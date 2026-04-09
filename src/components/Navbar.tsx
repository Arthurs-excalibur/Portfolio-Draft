'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VinylRecord from './VinylRecord';

const navLinks = [
  { label: 'ORIGIN',   href: '#about',     kanji: '起' },
  { label: 'STYLE',    href: '#skills',    kanji: '型' },
  { label: 'WORK',     href: '#projects',  kanji: '業' },
  { label: 'CONTACT',  href: '#contact',   kanji: '縁' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md border-b border-[var(--sunflower)]/20' : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, delay: 0.8 }}
      >
        <div className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3" data-hover>
            <div className="relative">
              <VinylRecord size={36} spin />
            </div>
            <div>
              <span className="font-display text-[var(--sunflower)] text-lg tracking-widest">CHAMPLOO</span>
              <span className="block font-mono text-[var(--steel)] text-[8px] tracking-[0.35em] uppercase">Portfolio</span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-hover
                  className="group relative font-heading text-xl tracking-widest text-[var(--cream)] hover:text-[var(--sunflower)] transition-colors"
                  onMouseEnter={() => setActiveLink(link.href)}
                  onMouseLeave={() => setActiveLink('')}
                >
                  {/* Kanji drip overlay */}
                  <span className="absolute -top-5 left-0 font-display text-xs text-[var(--sunflower)] opacity-0 group-hover:opacity-60 transition-opacity duration-200">
                    {link.kanji}
                  </span>
                  {link.label}
                  {/* Underline slash */}
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[var(--sunflower)] to-[var(--spray-red)] transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contact" className="hidden md:inline-flex btn-spray text-sm !py-2 !px-4" data-hover>
            HIRE ME
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                className="block w-6 h-0.5 bg-[var(--sunflower)]"
                animate={mobileOpen ? {
                  rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                  y: i === 0 ? 8 : i === 2 ? -8 : 0,
                  opacity: i === 1 ? 0 : 1,
                } : { rotate: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--ink)]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 halftone-bg opacity-40" />
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-heading text-6xl text-[var(--cream)] hover:text-[var(--sunflower)] tracking-widest"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
