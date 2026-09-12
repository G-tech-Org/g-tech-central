// ─── G-Tech Runtime Theme ─────────────────────────────────────────────────────
// Exports a theme object for use with Tailwind CSS variables or any CSS-in-JS solution.

import { colors, typography, spacing, borderRadius } from './tokens';

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
} as const;

export type Theme = typeof theme;
export default theme;
