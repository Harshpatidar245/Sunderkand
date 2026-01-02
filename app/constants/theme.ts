// Color palette for the religious theme
export const colors = {
  // Primary colors
  maroon: '#800020',
  crimson: '#C41E3A',
  saffron: '#FF9933',
  gold: '#D4AF37',
  brightGold: '#FFD700',
  
  // Background colors
  cream: '#FFFDD0',
  lightCream: '#FFF8F0',
  bisque: '#FFE4C4',
  
  // Text colors
  darkBrown: '#2D1810',
  brown: '#5D4037',
  
  // Accent colors
  accent: '#FF6B35',
  primaryLight: '#E85A4F',
} as const;

// Gradient presets
export const gradients = {
  header: 'from-[#800020] via-[#C41E3A] to-[#FF9933]',
  dohaHeader: 'from-[#800020] to-[#C41E3A]',
  footer: 'from-[#C41E3A] to-[#800020]',
  dohaContent: 'from-[#FFFDD0] to-[#FFF8F0]',
  introCard1: 'from-[#FF9933] to-[#C41E3A]',
  introCard2: 'from-[#D4AF37] to-[#FF9933]',
  introCard3: 'from-[#C41E3A] to-[#800020]',
} as const;

// Animation durations
export const durations = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

// Max heights for accordion animations
export const maxHeights = {
  arth: 'max-h-96',
  chaupaisList: 'max-h-[5000px]',
} as const;
