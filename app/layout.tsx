import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Iron Moth Tattoo Co. | Custom Tattoo Studio in Savannah, GA',
  description:
    'Savannah\'s premier custom tattoo studio in the Victorian District. Fine art tattooing, black and grey realism, neo-traditional color, and expert cover-ups. Book your consultation today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${jost.variable}`}>
      <body className="font-body bg-brand-background text-brand-text antialiased">
        {children}
      </body>
    </html>
  );
}
