'use client';

import { motion } from 'framer-motion';
import MangaPanel from '../components/MangaPanel';
import { SectionReveal } from '../components/Animations';

const stats = [
  { value: '3+', label: 'Years Experience', kanji: '年' },
  { value: '40+', label: 'Projects Shipped', kanji: '案' },
  { value: '12', label: 'Open Source Libs', kanji: '源' },
  { value: '∞', label: 'Cups of lo-fi', kanji: '飲' },
];

const timeline = [
  { year: '2021', title: 'FIRST BLADE', desc: 'Wrote my first hello-world. Began the journey.', kanji: '始' },
  { year: '2022', title: 'DOJO TRAINING', desc: 'Mastered React and built 10+ client projects in the wild.', kanji: '訓' },
  { year: '2023', title: 'WANDERING PATH', desc: 'Joined a startup. Shipped a real-time collab platform scaling to 50k users.', kanji: '旅' },
  { year: '2024', title: 'CHAMPLOO STYLE', desc: 'Freelancing. Blending technical precision with creative animation mastery.', kanji: '道' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="section-container">
        {/* Header */}
        <SectionReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-display text-6xl text-[var(--sunflower)] opacity-20">起</span>
            <div>
              <p className="font-mono text-[var(--spray-red)] text-xs tracking-[0.4em] uppercase mb-1">— Chapter 01</p>
              <h2 className="font-heading text-5xl md:text-6xl text-[var(--cream)] tracking-widest">ORIGIN</h2>
            </div>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left biography */}
          <div className="md:col-span-3">
            <SectionReveal delay={0.1}>
              <MangaPanel className="p-6 md:p-8 mb-8">
                <p className="font-mono text-[var(--steel)] text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4">// BIO.txt</p>

                <p className="text-[var(--cream-dim)] text-sm md:text-base leading-relaxed mb-4">
                  I'm a <span className="text-[var(--sunflower)] font-semibold">full-stack developer</span> and digital craftsman who approaches
                  code the same way Mugen approaches a fight — with{' '}
                  <span className="text-[var(--spray-red)] font-semibold">breakdance flair</span> and unstoppable momentum.
                </p>
                <p className="text-[var(--cream-dim)] text-sm md:text-base leading-relaxed mb-4">
                  My work lives at the intersection of{' '}
                  <span className="text-[var(--sunflower)]">precision engineering</span> (Jin) and{' '}
                  <span className="text-[var(--spray-red)]">creative chaos</span> (Mugen).
                  I build things that are fast, beautiful, and alive.
                </p>
                <p className="text-[var(--cream-dim)] text-sm md:text-base leading-relaxed">
                  Currently: <span className="text-[var(--sunflower)]">Available for freelance work</span>
                </p>
              </MangaPanel>
            </SectionReveal>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="relative text-center p-4 border border-[var(--steel)]/20 bg-[var(--ink-mid)]/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, type: 'spring', damping: 15 }}
                >
                  <span className="absolute top-1 right-2 font-display text-xl md:text-2xl text-[var(--sunflower)] opacity-15">
                    {s.kanji}
                  </span>
                  <p className="font-heading text-2xl md:text-3xl text-[var(--sunflower)]">{s.value}</p>
                  <p className="font-mono text-[9px] md:text-[10px] text-[var(--steel)] tracking-wider mt-1 uppercase whitespace-nowrap">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right timeline */}
          <div className="md:col-span-2 mt-8 md:mt-0">
            <SectionReveal delay={0.2}>
              <p className="font-mono text-[var(--steel)] text-xs tracking-[0.3em] uppercase mb-8 md:mb-6 pl-4 md:pl-0">// TIMELINE</p>
              <div className="relative pl-4 md:pl-0">
                {/* Vertical line */}
                <div className="absolute left-[30px] md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--sunflower)] via-[var(--spray-red)] to-transparent" />
                <div className="space-y-12 md:space-y-8">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={item.year}
                      className="pl-16 relative"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.12 }}
                    >
                      {/* Node */}
                      <div className="absolute left-[30px] top-1.5 w-4 h-4 -translate-x-1/2 bg-[var(--ink)] border-2 border-[var(--sunflower)] flex items-center justify-center z-10">
                        <div className="w-1.5 h-1.5 bg-[var(--sunflower)]" />
                      </div>

                      <span className="font-mono text-[var(--sunflower)] text-xs block mb-1">{item.year}</span>
                      <h4 className="font-heading text-xl text-[var(--cream)] tracking-wider mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[var(--steel)] text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
