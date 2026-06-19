import { Sparkles, Phone, Mail, Clock } from 'lucide-react';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Studio', href: '#feature' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-primary border-t border-brand-accent/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-brand-accent/60 flex items-center justify-center rotate-45">
                <Sparkles className="w-3.5 h-3.5 text-brand-accent -rotate-45" />
              </div>
              <span className="font-heading text-lg font-semibold tracking-widest text-brand-background uppercase">
                Iron Moth Tattoo Co.
              </span>
            </div>
            <p className="font-body text-brand-background/45 text-sm leading-relaxed max-w-xs">
              Custom skin art in the heart of Savannah&apos;s Victorian District. Fine art sensibility. Old-world tattooing technique. Since 2014.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-brand-background/40 text-xs uppercase tracking-[0.3em] mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-brand-background/60 text-sm hover:text-brand-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body text-brand-background/40 text-xs uppercase tracking-[0.3em] mb-6">
              Studio
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:5552536742"
                className="flex items-center gap-3 font-body text-brand-background/60 text-sm hover:text-brand-accent transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                (555) 253-6742
              </a>
              <a
                href="mailto:todd@thesitesmith.co"
                className="flex items-center gap-3 font-body text-brand-background/60 text-sm hover:text-brand-accent transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                todd@thesitesmith.co
              </a>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span className="font-body text-brand-background/60 text-sm">Tue to Sat, 11am to 8pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-accent/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-brand-background/30 text-xs">
            &copy; {new Date().getFullYear()} Iron Moth Tattoo Co. All rights reserved. Savannah, GA.
          </p>
          <p className="font-body text-brand-background/30 text-xs">
            Website by{' '}
            <a
              href="https://thesitesmith.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent/70 hover:text-brand-accent transition-colors duration-300"
            >
              The Sitesmith
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
