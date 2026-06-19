'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, BadgeCheck, Clock, Users } from 'lucide-react';

const pillars = [
  {
    icon: BadgeCheck,
    title: 'Drawn From Scratch. Every Time.',
    body:
      'We do not use clip art, flash sheets pulled off the internet, or designs recycled from other clients. Your consultation results in original art built specifically for your body, your story, and your vision.',
  },
  {
    icon: CheckCircle,
    title: 'Vegan-Friendly Premium Inks',
    body:
      'Iron Moth uses exclusively vegan-friendly, professional-grade inks across every style and scale. Clean color, clean conscience, and pigments that hold true for years to come.',
  },
  {
    icon: Clock,
    title: 'Appointment-Only. Never Rushed.',
    body:
      'We keep our roster intentionally small. When you sit in our chair, the session is yours. No walk-in chaos, no watching the clock, no compromises on the art.',
  },
  {
    icon: Users,
    title: 'A Decade of Savannah Roots',
    body:
      'Marcus Delacroix trained under celebrated New Orleans artists before opening Iron Moth in the Victorian District in 2014. That lineage shows in every piece that walks out the door.',
  },
];

export default function FeatureSection() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' });

  return (
    <section id="feature" className="bg-brand-background py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top label */}
        <div ref={headingRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-body text-brand-accent text-xs uppercase tracking-[0.4em] mb-4"
          >
            Why Iron Moth
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-4xl md:text-6xl font-light italic text-brand-primary"
          >
            The Consultation Is Half the Art
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 font-body text-brand-text/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Most studios rush you from the door to the chair. We spend as much time designing your piece as we do tattooing it. That is not a policy. It is the only way we know how to work.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headingInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 mx-auto w-24 h-px bg-brand-accent origin-left"
          />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <CtaBanner />
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: { icon: React.ElementType; title: string; body: string };
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = pillar.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="flex gap-6 p-8 border border-brand-primary/10 bg-white/50 hover:border-brand-accent/40 transition-colors duration-400 group"
    >
      <div className="flex-shrink-0 w-12 h-12 border border-brand-accent/50 flex items-center justify-center rotate-45 group-hover:border-brand-accent transition-colors duration-300">
        <Icon className="w-5 h-5 text-brand-accent -rotate-45" />
      </div>
      <div>
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-brand-primary mb-3">
          {pillar.title}
        </h3>
        <p className="font-body text-brand-text/60 text-sm leading-relaxed">
          {pillar.body}
        </p>
      </div>
    </motion.div>
  );
}

function CtaBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="mt-16 bg-brand-primary px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8"
    >
      <div>
        <p className="font-body text-brand-accent text-xs uppercase tracking-[0.4em] mb-3">
          Ready to Start?
        </p>
        <h3 className="font-heading text-3xl md:text-4xl font-light italic text-brand-background">
          Bring Us Your Idea.
          <br />
          <span className="font-semibold not-italic">We Will Build the Rest.</span>
        </h3>
      </div>
      <a
        href="#contact"
        className="flex-shrink-0 px-10 py-4 bg-brand-accent text-brand-primary font-body font-semibold text-sm tracking-widest uppercase hover:bg-brand-accent/85 transition-colors duration-300"
      >
        Contact Us
      </a>
    </motion.div>
  );
}
