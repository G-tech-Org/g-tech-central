// ─── G-Tech Design System Tokens ──────────────────────────────────────────────
// Sourced from the Stitch project: "G-Tech Digital Studio Platform"

export const colors = {
  // Primary – Deep Navy
  primary: '#00081e',
  primaryContainer: '#0a1f44',
  onPrimary: '#ffffff',
  onPrimaryContainer: '#7687b2',
  inversePrimary: '#b4c6f4',

  // Secondary – Teal
  secondary: '#006b5c',
  secondaryContainer: '#65fade',
  onSecondary: '#ffffff',
  onSecondaryContainer: '#007262',

  // Tertiary – Coral
  tertiary: '#1c0100',
  tertiaryContainer: '#460800',
  onTertiary: '#ffffff',
  onTertiaryContainer: '#e75a3a',

  // Surface
  surface: '#f8f9ff',
  surfaceDim: '#cedbf0',
  surfaceBright: '#f8f9ff',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#eff4ff',
  surfaceContainer: '#e6eeff',
  surfaceContainerHigh: '#dce9ff',
  surfaceContainerHighest: '#d7e3f9',
  onSurface: '#101c2c',
  onSurfaceVariant: '#44464e',

  // Background
  background: '#f8f9ff',
  onBackground: '#101c2c',

  // Outline
  outline: '#75777f',
  outlineVariant: '#c5c6cf',

  // Error
  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onError: '#ffffff',
  onErrorContainer: '#93000a',

  // Brand accent overrides
  accent: {
    coral: '#ff6b4a',   // CTAs / "Get a Quote"
    teal: '#00c2a8',    // Secondary actions, links
    navy: '#0a1f44',    // Navigation background, footer
  },
} as const;

export const typography = {
  fontFamily: {
    headline: 'Inter',
    body: 'Inter',
    label: 'Inter',
  },
  fontSize: {
    displayLg: '48px',
    displayLgMobile: '36px',
    headlineMd: '32px',
    headlineSm: '24px',
    bodyLg: '18px',
    bodyMd: '16px',
    labelMd: '14px',
  },
  fontWeight: {
    regular: '400',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
  },
  lineHeight: {
    displayLg: '56px',
    headlineMd: '40px',
    headlineSm: '32px',
    bodyLg: '28px',
    bodyMd: '24px',
    labelMd: '20px',
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.05em',
  },
} as const;

export const spacing = {
  containerMax: '1280px',
  gutter: '24px',
  marginMobile: '16px',
  marginDesktop: '48px',
  stackSm: '8px',
  stackMd: '16px',
  stackLg: '32px',
  sectionPadding: '80px',
} as const;

export const borderRadius = {
  sm: '0.25rem',   // 4px
  DEFAULT: '0.5rem', // 8px
  md: '0.75rem',   // 12px
  lg: '1rem',      // 16px
  xl: '1.5rem',    // 24px
  full: '9999px',
} as const;
