'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Studio', href: '#feature' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-primary/95 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-brand-accent/60 flex items-center justify-center rotate-45 group-hover:border-brand-accent transition-colors duration-300">
              <Sparkles className="w-4 h-4 text-brand-accent -rotate-45" />
            </div>
            <span className="font-heading text-xl font-semibold tracking-widest text-brand-background uppercase">
              Iron Moth Tattoo Co.
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm tracking-widest uppercase text-brand-background/75 hover:text-brand-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-brand-accent text-brand-primary font-body text-sm font-semibold tracking-widest uppercase hover:bg-brand-accent/85 transition-colors duration-300"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-brand-background p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-primary/98 backdrop-blur-md border-t border-brand-accent/20">
          <nav className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm tracking-widest uppercase text-brand-background/75 hover:text-brand-accent transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-6 py-3 bg-brand-accent text-brand-primary font-body text-sm font-semibold tracking-widest uppercase text-center hover:bg-brand-accent/85 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
