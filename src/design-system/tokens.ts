/**
 * DIWALI CINEMATIC DESI MAXIMALIST DESIGN SYSTEM TOKENS
 * Cultural, aesthetic, and visual tokens for "Happy Diwali"
 */

export const DIWALI_PALETTE = {
  // Nocturnal Base Canvas (Velvet & Royalty)
  nocturnal: {
    burgundyDark: '#120208',
    burgundyBase: '#1F0510',
    burgundyRich: '#2A0817',
    royalPurpleDark: '#170424',
    royalPurpleBase: '#260938',
    royalPurpleRich: '#380E52',
    deepCrimsonDark: '#3A030C',
    deepCrimsonBase: '#580614',
    deepCrimsonRich: '#7A0A1D',
  },
  // Sacred & Festive Vibrants
  festive: {
    saffronCore: '#FF7700',
    saffronGlow: '#FFA033',
    marigoldOrange: '#E85D04',
    marigoldYellow: '#FFB703',
    gendaDeep: '#D44000',
    raniPinkDark: '#A60840',
    raniPinkBase: '#DE1360',
    raniPinkBright: '#FF2A7A',
    emeraldDeep: '#083D2B',
    emeraldAccent: '#0E5C41',
  },
  // Imperial Metallics & Chandan Lights
  metallics: {
    antiqueGoldDeep: '#876512',
    antiqueGoldBase: '#B8860B',
    kundanGold: '#D4AF37',
    radiantGold: '#F3CE5A',
    shimmerLight: '#FFF4B8',
    burnishedBrass: '#9E721D',
    warmIvory: '#FFF9ED',
    chandanSilk: '#FAF2DE',
    kumkumRed: '#C21020',
  },
  // Flame Architecture
  flame: {
    coreWhite: '#FFFFFF',
    coreCyanGold: '#FFFEE0',
    innerAmber: '#FFC043',
    midSaffron: '#FF7B00',
    outerCrimson: '#E01E37',
    coronaHalo: 'rgba(255, 120, 0, 0.45)',
  }
} as const;

export const GRADIENTS = {
  royalDusk: 'linear-gradient(135deg, #120208 0%, #260938 48%, #1F0510 100%)',
  saffronRadiance: 'radial-gradient(circle, rgba(255,140,0,0.5) 0%, rgba(222,19,96,0.25) 45%, transparent 75%)',
  kundanGoldFoil: 'linear-gradient(105deg, #9E721D 0%, #D4AF37 25%, #FFF4B8 50%, #D4AF37 75%, #876512 100%)',
  velvetCrimsonCard: 'linear-gradient(180deg, rgba(88, 6, 20, 0.85) 0%, rgba(38, 9, 56, 0.95) 100%)',
  marigoldGarland: 'linear-gradient(90deg, #FFB703 0%, #E85D04 50%, #FFB703 100%)',
  jaaliBorder: 'linear-gradient(90deg, transparent 0%, #D4AF37 20%, #FFF4B8 50%, #D4AF37 80%, transparent 100%)',
} as const;

export const GLOWS = {
  diyaFlame: '0 0 20px 4px rgba(255, 183, 3, 0.8), 0 0 50px 15px rgba(232, 93, 4, 0.45), 0 0 100px 30px rgba(224, 30, 55, 0.25)',
  diyaAuraLg: '0 0 140px 60px rgba(255, 140, 0, 0.35)',
  goldTextGlow: '0 0 25px rgba(254, 225, 128, 0.5), 0 2px 10px rgba(0,0,0,0.9)',
  cardRoyalGlow: '0 15px 40px -10px rgba(0, 0, 0, 0.9), 0 0 30px 2px rgba(212, 175, 55, 0.22)',
  raniAccentGlow: '0 0 30px 6px rgba(222, 19, 96, 0.4)',
} as const;

export const Z_INDEX = {
  nebulaBackground: 0,
  archSilhouette: 10,
  ambientStardustParticles: 20,
  interactiveDiyaRangoliPlane: 30,
  typographyAndCards: 40,
  foregroundPetalsAndToran: 50,
  overlayModalAndCursorSpark: 60,
} as const;

export const TYPOGRAPHY = {
  displayFamily: '"Cinzel Decorative", "Rozha One", "Cinzel", "Playfair Display", Georgia, serif',
  devanagariFamily: '"Rozha One", "Yatra One", "Noto Serif Devanagari", serif',
  bodyFamily: '"Outfit", "Plus Jakarta Sans", system-ui, sans-serif',
  poeticFamily: '"Cormorant Garamond", "Cinzel", Georgia, serif',
  tracking: {
    regalTight: '0.04em',
    regalWide: '0.18em',
    regalEpic: '0.32em',
  }
} as const;
