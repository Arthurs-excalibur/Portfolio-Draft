'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/Animations';
import VinylRecord from '@/components/VinylRecord';
import { CodeXml, X, Link, Mail, PlayCircle } from 'lucide-react';

// Champloo character card data
const fighters = [
  {
    name: 'MUGEN',
    role: 'Full Stack Dev',
    desc: 'Chaotic, freestyle, always improvising. Backend and frontend in a single fluid motion.',
    kanji: '無限',
    color: 'var(--spray-red)',
    social: { icon: CodeXml, href: 'https://github.com', label: 'github' },
  },
  {
    name: 'JIN',
    role: 'System Architect',
    desc: 'Disciplined. Precise. Every line of code written with calculated intent.',
    kanji: '仁',
    color: 'var(--steel-light)',
    social: { icon: Link, href: 'https://linkedin.com', label: 'linkedin' },
  },
  {
    name: 'FUU',
    role: 'UI/UX Designer',
    desc: 'The compass. Sharp instincts for what looks good and what guides the user forward.',
    kanji: '風',
    color: 'var(--sunflower)',
    social: { icon: X, href: 'https://twitter.com', label: 'twitter' },
  },
];

const socialLinks = [
  { icon: CodeXml,     href: '#', label: 'GitHub',   handle: '@mugen-dev' },
  { icon: X,           href: '#', label: 'Twitter',  handle: '@champloo' },
  { icon: Link,        href: '#', label: 'LinkedIn', handle: 'in/mugendev' },
  { icon: PlayCircle,  href: '#', label: 'YouTube',  handle: 'Champloo Codes' },
  { icon: Mail,        href: '#', label: 'Email',    handle: 'mugen@champloo.dev' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 halftone-bg pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--sunflower)]/20 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <SectionReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-display text-6xl text-[var(--sunflower)] opacity-20">縁</span>
            <div>
              <p className="font-mono text-[var(--spray-red)] text-xs tracking-[0.4em] uppercase mb-1">— Chapter 04</p>
              <h2 className="font-heading text-5xl md:text-6xl text-[var(--cream)] tracking-widest">CONTACT</h2>
            </div>
          </div>
        </SectionReveal>

        {/* Combatant selection */}
        <SectionReveal delay={0.1}>
          <p className="font-mono text-[var(--steel)] text-sm mb-8 tracking-wider">
            — SELECT YOUR FIGHTER / PLATFORM
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {fighters.map((f, i) => (
            <motion.a
              key={f.name}
              href={f.social.href}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="group relative border border-[var(--steel)]/20 bg-[var(--ink-mid)] p-6 overflow-hidden block cursor-none"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 w-full h-0.5 opacity-60"
                style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }}
              />

              {/* Kanji watermark */}
              <span
                className="absolute bottom-2 right-4 font-display text-8xl opacity-10 select-none"
                style={{ color: f.color }}
              >
                {f.kanji}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-[var(--steel)]">0{i + 1}</span>
                  <span className="h-px flex-1 bg-[var(--steel)]/20" />
                </div>
                <h3 className="font-heading text-3xl tracking-widest mb-1" style={{ color: f.color }}>
                  {f.name}
                </h3>
                <p className="font-mono text-xs text-[var(--steel)] tracking-wider uppercase mb-3">
                  {f.role}
                </p>
                <p className="text-[var(--steel-light)] text-sm leading-relaxed">
                  {f.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 font-mono text-xs" style={{ color: f.color }}>
                  <f.social.icon size={14} />
                  <span>{f.social.label}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="slash-divider mb-16" />

        {/* Social links row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-20 px-2 md:px-0">
          {socialLinks.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              data-hover
              className="group flex flex-col items-center gap-2 p-4 border border-[var(--steel)]/20 bg-[var(--ink-mid)]/20
                         hover:border-[var(--sunflower)]/40 transition-colors cursor-auto md:cursor-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <s.icon size={20} className="text-[var(--steel)] group-hover:text-[var(--sunflower)] transition-colors" />
              <span className="font-mono text-xs text-[var(--cream)] group-hover:text-[var(--sunflower)] transition-colors">
                {s.label}
              </span>
              <span className="font-mono text-[10px] text-[var(--steel)] text-center">{s.handle}</span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--steel)]/10">
          <div className="flex items-center gap-3">
            <VinylRecord size={32} spin />
            <span className="font-display text-[var(--sunflower)] text-lg">CHAMPLOO</span>
          </div>
          <p className="font-mono text-[var(--steel)] text-xs tracking-wider">
            © 2024 · Built with Next.js &amp; Framer Motion · Inspired by Nujabes
          </p>
          <p className="font-display text-[var(--sunflower)] text-sm opacity-40">
            無限
          </p>
        </div>
      </div>
    </section>
  );
}
