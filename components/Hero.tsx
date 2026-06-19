'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Image with Ken Burns + Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full scale-110"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 10, ease: 'linear' }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Iron Moth Tattoo Co. studio in Savannah, GA"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.60) 100%)',
        }}
      />

      {/* Decorative border */}
      <div className="absolute inset-6 border border-brand-accent/20 pointer-events-none hidden md:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-body text-brand-accent text-xs md:text-sm uppercase tracking-[0.4em] mb-6"
        >
          Savannah, Georgia &nbsp;|&nbsp; Est. 2014
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light italic text-brand-background leading-tight mb-6"
        >
          Art Worn
          <br />
          <span className="font-semibold not-italic">For a Lifetime</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-body text-brand-background/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
        >
          Custom tattoo design rooted in fine art tradition. Every piece drawn from scratch, every client treated like a collector.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="px-10 py-4 bg-brand-accent text-brand-primary font-body font-semibold text-sm tracking-widest uppercase hover:bg-brand-accent/85 transition-colors duration-300"
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="px-10 py-4 border border-brand-background/50 text-brand-background font-body font-medium text-sm tracking-widest uppercase hover:border-brand-accent hover:text-brand-accent transition-colors duration-300"
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDownCircle className="w-7 h-7 text-brand-accent/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
