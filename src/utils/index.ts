// ─── Utility / Helper Functions ───────────────────────────────────────────────

/**
 * Joins class names, filtering out falsy values.
 * Usage: cn('base-class', isActive && 'active', 'other-class')
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Truncates a string to a given length and appends an ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}…`;
}

/**
 * Formats a date string to a human-readable format.
 * e.g. "2026-08-28" → "August 28, 2026"
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Scrolls smoothly to the element with the given ID.
 */
export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Returns true if the value is not null/undefined.
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
