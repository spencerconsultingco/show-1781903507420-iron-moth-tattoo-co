'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Brush, Paintbrush, Sparkles, Scissors, TreePine, Heart } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Custom Tattoo Design',
    description:
      'Every design begins with a conversation. Marcus and the team sketch your vision from scratch, no templates, no shortcuts, just original art built around you.',
  },
  {
    icon: Brush,
    title: 'Black and Grey Realism',
    description:
      'Portraits, botanicals, and narrative scenes rendered with the depth and shadow of fine art photography. Built to age gracefully on the skin.',
  },
  {
    icon: Sparkles,
    title: 'Neo-Traditional Color',
    description:
      'Bold, saturated palettes with illustrative linework and ornate detail. Where classic tattooing meets contemporary fine art sensibility.',
  },
  {
    icon: Scissors,
    title: 'Cover-Up and Rework',
    description:
      'Old piece lost its meaning? We specialize in transforming unwanted ink into something you will actually be proud to show off. Honest assessments, creative solutions.',
  },
  {
    icon: TreePine,
    title: 'Botanical and Illustrative',
    description:
      'Magnolias, moth wings, trailing vines, and detailed fauna rooted in the botanical illustration tradition. A specialty of the Iron Moth studio.',
  },
  {
    icon: Heart,
    title: 'Fine Line and Minimalist',
    description:
      'Precision linework and delicate compositions for clients who want quiet, intentional pieces. Small in scale, never small in craft.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="bg-brand-primary py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-body text-brand-accent text-xs uppercase tracking-[0.4em] mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-4xl md:text-6xl font-light italic text-brand-background"
          >
            Every Style. One Standard.
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 mx-auto w-24 h-px bg-brand-accent origin-left"
          />
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-secondary/40">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ServiceCard key={service.title} service={service} Icon={Icon} index={i} />
            );
          })}
        </div>

        {/* Gallery Strip */}
        <GalleryStrip />
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  Icon,
  index,
}: {
  service: { title: string; description: string };
  Icon: React.ElementType;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="bg-brand-primary p-8 md:p-10 group hover:bg-brand-secondary transition-colors duration-400"
    >
      <div className="w-10 h-10 border border-brand-accent/40 flex items-center justify-center mb-6 rotate-45 group-hover:border-brand-accent transition-colors duration-300">
        <Icon className="w-4 h-4 text-brand-accent -rotate-45" />
      </div>
      <h3 className="font-heading text-xl md:text-2xl font-semibold text-brand-background mb-4">
        {service.title}
      </h3>
      <p className="font-body text-brand-background/55 text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}

function GalleryStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-72"
    >
      <div className="relative overflow-hidden h-64 md:h-full">
        <Image
          src="/images/gallery-1.jpg"
          alt="Custom botanical tattoo by Iron Moth Tattoo Co."
          fill
          className="object-cover object-center hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-brand-primary/30" />
      </div>
      <div className="relative overflow-hidden h-64 md:h-full">
        <Image
          src="/images/gallery-2.jpg"
          alt="Fine line illustrative tattoo by Iron Moth Tattoo Co."
          fill
          className="object-cover object-center hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-brand-primary/30" />
      </div>
    </motion.div>
  );
}
