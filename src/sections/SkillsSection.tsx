'use client';

import { motion } from 'framer-motion';
import MangaPanel from '../components/MangaPanel';
import { SectionReveal } from '../components/Animations';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'], level: 92, kanji: '前' },
  { category: 'Backend',  items: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker'],             level: 78, kanji: '後' },
  { category: 'Design',   items: ['Figma', 'CSS Art', 'SVG Animation', 'Motion Design', '3D CSS'],  level: 85, kanji: '美' },
  { category: 'DevOps',   items: ['Vercel', 'AWS', 'CI/CD', 'Nginx', 'Git'],                        level: 70, kanji: '術' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* BG halftone */}
      <div className="absolute inset-0 halftone-bg pointer-events-none" />

      <div className="section-container">
        {/* Section header */}
        <SectionReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-display text-6xl text-[var(--sunflower)] opacity-20">型</span>
            <div>
              <p className="font-mono text-[var(--spray-red)] text-xs tracking-[0.4em] uppercase mb-1">— Chapter 02</p>
              <h2 className="font-heading text-5xl md:text-6xl text-[var(--cream)] tracking-widest">SKILL SET</h2>
            </div>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <MangaPanel key={skill.category} delay={i * 0.1} className="p-5 md:p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="font-display text-[var(--sunflower)] text-2xl md:text-3xl opacity-30 mr-3">
                    {skill.kanji}
                  </span>
                  <span className="font-heading text-xl md:text-2xl text-[var(--cream)] tracking-wider">
                    {skill.category}
                  </span>
                </div>
                <span className="font-mono text-[var(--steel)] text-xs md:text-sm pt-1">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-px bg-[var(--ink-light)] mb-6 md:mb-4 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--sunflower)] to-[var(--spray-red)]"
                  style={{ boxShadow: '0 0 8px var(--sunflower)' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[10px] md:text-xs text-[var(--steel-light)] border border-[var(--steel)]/30 px-2 py-1
                               hover:border-[var(--sunflower)]/50 hover:text-[var(--sunflower)] transition-colors cursor-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </MangaPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
