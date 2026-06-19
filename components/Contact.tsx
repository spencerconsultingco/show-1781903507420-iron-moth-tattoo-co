'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' });

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: '-60px' });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brand-background py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-body text-brand-accent text-xs uppercase tracking-[0.4em] mb-4"
          >
            Book a Consultation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-4xl md:text-6xl font-light italic text-brand-primary"
          >
            Let us Talk
            <br />
            <span className="font-semibold not-italic">About Your Next Piece</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headingInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 mx-auto w-24 h-px bg-brand-accent origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="bg-brand-primary p-8">
              <h3 className="font-heading text-2xl font-semibold text-brand-background mb-8">
                Studio Info
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 border border-brand-accent/40 flex items-center justify-center rotate-45">
                    <Phone className="w-4 h-4 text-brand-accent -rotate-45" />
                  </div>
                  <div>
                    <p className="font-body text-brand-background/40 text-xs uppercase tracking-widest mb-1">Phone</p>
                    <a
                      href="tel:5552536742"
                      className="font-body text-brand-background text-base hover:text-brand-accent transition-colors duration-300"
                    >
                      (555) 253-6742
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 border border-brand-accent/40 flex items-center justify-center rotate-45">
                    <Mail className="w-4 h-4 text-brand-accent -rotate-45" />
                  </div>
                  <div>
                    <p className="font-body text-brand-background/40 text-xs uppercase tracking-widest mb-1">Email</p>
                    <a
                      href="mailto:todd@thesitesmith.co"
                      className="font-body text-brand-background text-base hover:text-brand-accent transition-colors duration-300 break-all"
                    >
                      todd@thesitesmith.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 border border-brand-accent/40 flex items-center justify-center rotate-45">
                    <Clock className="w-4 h-4 text-brand-accent -rotate-45" />
                  </div>
                  <div>
                    <p className="font-body text-brand-background/40 text-xs uppercase tracking-widest mb-1">Hours</p>
                    <p className="font-body text-brand-background text-base">Tue to Sat, 11am to 8pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-brand-primary/10 p-8">
              <p className="font-heading text-lg italic text-brand-primary/70 leading-relaxed">
                &ldquo;Serving Savannah, Hilton Head Island, Brunswick, and the Georgia and South Carolina Lowcountry.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 border border-brand-accent/30 bg-brand-primary">
                <div className="w-16 h-16 border border-brand-accent/60 flex items-center justify-center rotate-45 mb-8">
                  <Send className="w-6 h-6 text-brand-accent -rotate-45" />
                </div>
                <h3 className="font-heading text-3xl font-semibold text-brand-background mb-4">
                  Message Received
                </h3>
                <p className="font-body text-brand-background/60 text-base max-w-sm">
                  We will review your inquiry and reach out within one business day to set up your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-body text-xs uppercase tracking-widest text-brand-text/50">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="bg-white border border-brand-primary/15 px-4 py-3 font-body text-sm text-brand-text placeholder-brand-text/30 focus:outline-none focus:border-brand-accent transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-body text-xs uppercase tracking-widest text-brand-text/50">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="bg-white border border-brand-primary/15 px-4 py-3 font-body text-sm text-brand-text placeholder-brand-text/30 focus:outline-none focus:border-brand-accent transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-body text-xs uppercase tracking-widest text-brand-text/50">
                      Phone (Optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      className="bg-white border border-brand-primary/15 px-4 py-3 font-body text-sm text-brand-text placeholder-brand-text/30 focus:outline-none focus:border-brand-accent transition-colors duration-300"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="font-body text-xs uppercase tracking-widest text-brand-text/50">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="bg-white border border-brand-primary/15 px-4 py-3 font-body text-sm text-brand-text focus:outline-none focus:border-brand-accent transition-colors duration-300 appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="custom">Custom Tattoo Design</option>
                      <option value="blackgrey">Black and Grey Realism</option>
                      <option value="neotraditional">Neo-Traditional Color</option>
                      <option value="coverup">Cover-Up and Rework</option>
                      <option value="botanical">Botanical and Illustrative</option>
                      <option value="fineline">Fine Line and Minimalist</option>
                      <option value="touchup">Touch-Up Session</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-body text-xs uppercase tracking-widest text-brand-text/50">
                    Tell Us About Your Idea
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="bg-white border border-brand-primary/15 px-4 py-3 font-body text-sm text-brand-text placeholder-brand-text/30 focus:outline-none focus:border-brand-accent transition-colors duration-300 resize-none"
                    placeholder="Describe your concept, placement, size, and any reference imagery you have in mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 flex items-center justify-center gap-3 px-10 py-4 bg-brand-accent text-brand-primary font-body font-semibold text-sm tracking-widest uppercase hover:bg-brand-accent/85 transition-colors duration-300 self-start"
                >
                  <Send className="w-4 h-4" />
                  Contact Us
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
