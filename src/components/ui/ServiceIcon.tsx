import type { ReactElement } from 'react';
import type { ServiceId } from '@app-types/index';

interface ServiceIconProps {
  name: ServiceId;
  className?: string;
}

export default function ServiceIcon({ name, className }: ServiceIconProps) {
  const icons: Record<ServiceId, ReactElement> = {
    'graphic-design': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5v2M12 17v2M5 12h2M17 12h2M7.2 7.2l1.4 1.4M15.4 15.4l1.4 1.4M7.2 16.8l1.4-1.4M15.4 8.6l1.4-1.4" strokeLinecap="round" />
      </svg>
    ),
    networking: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="M6 18V9.5M12 18V6M18 18v-9" strokeLinecap="round" />
        <path d="M4 18h16" strokeLinecap="round" />
      </svg>
    ),
    videography: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="M16 10l5-3v10l-5-3" strokeLinejoin="round" />
      </svg>
    ),
    cinematography: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 9h5v6H7zm7 0h5v6h-5z" strokeLinejoin="round" />
      </svg>
    ),
    'ads-campaigns': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="M5 18V7M12 18V5M19 18v-9" strokeLinecap="round" />
        <path d="M3 18h18" strokeLinecap="round" />
      </svg>
    ),
    'social-media-growth': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="M4 16c2.4-4 4.3-6 7.6-6 2.7 0 4.7 1.6 8.4 5.7" strokeLinecap="round" />
        <path d="M6 20h12" strokeLinecap="round" />
        <circle cx="7" cy="9" r="2.2" />
      </svg>
    ),
    'frontend-development': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <rect x="3" y="5" width="18" height="13" rx="2" />
        <path d="M3 16h18M8 21h8" strokeLinecap="round" />
      </svg>
    ),
    'mobile-app-development': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" strokeLinecap="round" />
      </svg>
    ),
    'backend-development': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    ),
    gadgets: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <rect x="3" y="5" width="18" height="11" rx="2" />
        <path d="M8 19h8M12 16v3" strokeLinecap="round" />
      </svg>
    ),
  };

  return icons[name];
}
