import { Cinzel_Decorative, Cormorant_Garamond, Rozha_One, Outfit } from 'next/font/google';

/**
 * Next.js Google Fonts configuration for Diwali Cinematic Desi Maximalist Experience
 */

export const cinzelDecorative = Cinzel_Decorative({
  weight: ['700', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel-decorative',
  display: 'swap',
});

export const rozhaOne = Rozha_One({
  weight: ['400'],
  subsets: ['latin', 'devanagari'],
  variable: '--font-rozha-one',
  display: 'swap',
});

export const cormorantGaramond = Cormorant_Garamond({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});
