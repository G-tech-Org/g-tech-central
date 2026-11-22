// ─── G-Tech Design System Tokens ──────────────────────────────────────────────
// Version 1.1 — dark editorial studio

export const colors = {
  primary: '#08080a',
  primaryContainer: '#101014',
  onPrimary: '#f3f0e8',
  onPrimaryContainer: '#7fc6a4',
  inversePrimary: '#7fc6a4',

  secondary: '#7fc6a4',
  secondaryContainer: '#7fc6a4',
  onSecondary: '#0d1712',
  onSecondaryContainer: '#0d1712',

  tertiary: '#f3f0e8',
  tertiaryContainer: '#1a1a1f',
  onTertiary: '#08080a',
  onTertiaryContainer: '#f3f0e8',

  surface: '#08080a',
  surfaceDim: '#050506',
  surfaceBright: '#1a1a1f',
  surfaceContainerLowest: '#101014',
  surfaceContainerLow: '#141418',
  surfaceContainer: '#1a1a1f',
  surfaceContainerHigh: '#222228',
  surfaceContainerHighest: '#2c2c34',
  onSurface: '#f3f0e8',
  onSurfaceVariant: '#a8a29c',

  background: '#08080a',
  onBackground: '#f3f0e8',

  outline: '#3f3f46',
  outlineVariant: '#27272a',

  error: '#ff6b6b',
  errorContainer: '#3a1212',
  onError: '#1a0606',
  onErrorContainer: '#ffb4b4',

  accent: {
    coral: '#7fc6a4',
    teal: '#7fc6a4',
    navy: '#101014',
  },
} as const;

export const typography = {
  fontFamily: {
    headline: 'Instrument Serif',
    body: 'Outfit',
    label: 'Outfit',
  },
  fontSize: {
    displayLg: '72px',
    displayLgMobile: '42px',
    headlineMd: '40px',
    headlineSm: '24px',
    bodyLg: '18px',
    bodyMd: '16px',
    labelMd: '12px',
  },
  fontWeight: {
    regular: '400',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
  },
  lineHeight: {
    displayLg: '76px',
    headlineMd: '46px',
    headlineSm: '32px',
    bodyLg: '28px',
    bodyMd: '24px',
    labelMd: '16px',
  },
  letterSpacing: {
    tight: '-0.04em',
    normal: '0',
    wide: '0.16em',
  },
} as const;

export const spacing = {
  containerMax: '1280px',
  gutter: '24px',
  marginMobile: '20px',
  marginDesktop: '48px',
  stackSm: '8px',
  stackMd: '16px',
  stackLg: '32px',
  sectionPadding: '96px',
} as const;

export const borderRadius = {
  sm: '0.25rem',
  DEFAULT: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px',
} as const;
