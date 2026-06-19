'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: 'Marcus took my rough idea of a magnolia sleeve and turned it into something I genuinely cannot stop staring at. The whole experience felt more like visiting an artist studio than getting a tattoo.',
    author: 'Jennifer R.',
  },
  {
    text: 'I came in terrified of needles and walked out a convert. The crew here is patient, funny, and wildly talented. My cover-up looks like it was always meant to be there.',
    author: 'DeShawn W.',
  },
  {
    text: 'Been to five different shops over the years and Iron Moth is on another level. The linework on my botanical piece is flawless six months later. Worth every penny.',
    author: 'Cassandra L.',
  },
];

export default function Testimonials() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' });

  return (
    <section id="testimonials" className="bg-brand-secondary py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-body text-brand-accent text-xs uppercase tracking-[0.4em] mb-4"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-4xl md:text-6xl font-light italic text-brand-background"
          >
            The Work Speaks.
            <br />
            <span className="font-semibold not-italic">So Do Our Clients.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headingInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 mx-auto w-24 h-px bg-brand-accent origin-left"
          />
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={review.author} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: { text: string; author: string };
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      className="bg-brand-primary p-8 md:p-10 border border-brand-accent/10 hover:border-brand-accent/30 transition-colors duration-400 flex flex-col justify-between"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, si) => (
          <Star key={si} className="w-4 h-4 text-brand-accent fill-brand-accent" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="font-heading text-lg md:text-xl font-light italic text-brand-background/85 leading-relaxed mb-8">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-px bg-brand-accent" />
        <span className="font-body text-brand-accent text-xs uppercase tracking-widest">
          {review.author}
        </span>
      </div>
    </motion.div>
  );
}
