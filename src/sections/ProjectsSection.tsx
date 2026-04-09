'use client';

import { motion } from 'framer-motion';
import { SectionReveal, SliceReveal } from '../components/Animations';
import { ExternalLink, CodeXml } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'CHAMPLOO UI',
    subtitle: 'Design System',
    desc: 'A premium component library inspired by Edo-period art and hip-hop aesthetics. Features 60+ components with dark-mode support and Framer Motion animations.',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Storybook'],
    accent: 'var(--sunflower)',
    kanji: '美',
    featured: true,
  },
  {
    id: '02',
    title: 'RONIN BEATS',
    subtitle: 'Music Platform',
    desc: 'A lo-fi music streaming platform with real-time playlist generation, audio visualizers, and Nujabes-inspired UI.',
    tags: ['Next.js', 'Web Audio API', 'PostgreSQL'],
    accent: 'var(--spray-red)',
    kanji: '音',
    featured: false,
  },
  {
    id: '03',
    title: 'INK WASH CMS',
    subtitle: 'Content Platform',
    desc: 'A headless CMS with a sumi-e influenced editor. Block-based editing with custom brush-stroke separators and manga panel layouts.',
    tags: ['Node.js', 'GraphQL', 'Slate.js'],
    accent: 'var(--steel-light)',
    kanji: '記',
    featured: false,
  },
  {
    id: '04',
    title: 'KATANA ORM',
    subtitle: 'Developer Tool',
    desc: 'A TypeScript-first database ORM with "slash query" syntax. Zero-config setup with automatic migration generation.',
    tags: ['TypeScript', 'SQLite', 'Node.js', 'PostgreSQL'],
    accent: 'var(--sunflower)',
    kanji: '刀',
    featured: false,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="section-container">
        {/* Header */}
        <SectionReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-display text-6xl text-[var(--sunflower)] opacity-20">業</span>
            <div>
              <p className="font-mono text-[var(--spray-red)] text-xs tracking-[0.4em] uppercase mb-1">— Chapter 03</p>
              <h2 className="font-heading text-5xl md:text-6xl text-[var(--cream)] tracking-widest">PROJECTS</h2>
            </div>
          </div>
        </SectionReveal>

        {/* Featured project */}
        <SliceReveal delay={0.1}>
          <div
            className="group relative mb-8 border border-[var(--sunflower)]/20 bg-[var(--ink-mid)] overflow-hidden
                        hover:border-[var(--sunflower)]/60 transition-colors duration-300 cursor-none"
          >
            {/* Featured badge */}
            <div className="absolute top-4 right-4 font-mono text-xs text-[var(--ink)] bg-[var(--sunflower)] px-2 py-0.5">
              FEATURED
            </div>

            {/* Accent diagonal */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--sunflower)] opacity-5 rounded-full blur-3xl transform translate-x-20 -translate-y-20" />
            </div>

            <div className="p-6 md:p-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-[var(--steel)] text-sm">
                      {projects[0].id}
                    </span>
                    <span className="font-display text-3xl md:text-4xl text-[var(--sunflower)] opacity-20">
                      {projects[0].kanji}
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl sm:text-4xl md:text-6xl text-[var(--cream)] tracking-widest mb-2 leading-tight">
                    {projects[0].title}
                  </h3>
                  <p className="font-mono text-[var(--spray-red)] text-xs md:text-sm tracking-wider mb-4 uppercase">
                    {projects[0].subtitle}
                  </p>
                  <p className="text-[var(--steel-light)] text-sm md:text-base leading-relaxed max-w-xl mb-6">
                    {projects[0].desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8 md:mb-6">
                    {projects[0].tags.map(t => (
                      <span key={t} className="font-mono text-[10px] md:text-xs text-[var(--sunflower)] border border-[var(--sunflower)]/30 px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <a href="#" className="btn-spray text-sm w-full sm:w-auto justify-center" data-hover>VIEW PROJECT</a>
                  <a href="#" data-hover
                    className="p-3 border border-[var(--steel)]/40 text-[var(--steel)] hover:border-[var(--sunflower)] hover:text-[var(--sunflower)] transition-colors">
                    <CodeXml size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SliceReveal>

        {/* Project grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.id}
              className="group relative border border-[var(--steel)]/20 bg-[var(--ink-mid)] p-6 overflow-hidden
                          hover:border-[var(--sunflower)]/40 transition-colors duration-300 cursor-none"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              {/* Hover accent line */}
              <div
                className="absolute top-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
              />

              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[var(--steel)] text-xs">{project.id}</span>
                <span className="font-display text-3xl opacity-15" style={{ color: project.accent }}>{project.kanji}</span>
              </div>

              <h3 className="font-heading text-2xl text-[var(--cream)] tracking-wider mb-1">{project.title}</h3>
              <p className="font-mono text-xs mb-3" style={{ color: project.accent }}>{project.subtitle}</p>
              <p className="text-[var(--steel)] text-sm leading-relaxed mb-4">{project.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map(t => (
                  <span key={t} className="font-mono text-xs text-[var(--steel)] border border-[var(--steel)]/20 px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <a href="#" className="flex items-center gap-1 font-mono text-xs text-[var(--sunflower)] hover:gap-2 transition-all" data-hover>
                  <ExternalLink size={12} /> View
                </a>
                <span className="text-[var(--steel)]/30">|</span>
                <a href="#" className="flex items-center gap-1 font-mono text-xs text-[var(--steel)] hover:text-[var(--sunflower)] transition-colors" data-hover>
                  <CodeXml size={12} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
