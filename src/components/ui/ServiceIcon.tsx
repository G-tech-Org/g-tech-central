import type { ReactElement } from 'react';
import type { ServiceId } from '@app-types/index';

interface ServiceIconProps {
  name: ServiceId;
  className?: string;
}

export default function ServiceIcon({ name, className }: ServiceIconProps) {
  const icons: Record<ServiceId, ReactElement> = {
    web: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <rect x="3" y="5" width="18" height="13" rx="2" />
        <path d="M3 16h18M8 21h8" strokeLinecap="round" />
      </svg>
    ),
    apps: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" strokeLinecap="round" />
      </svg>
    ),
    design: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5v2M12 17v2M5 12h2M17 12h2M7.2 7.2l1.4 1.4M15.4 15.4l1.4 1.4M7.2 16.8l1.4-1.4M15.4 8.6l1.4-1.4" strokeLinecap="round" />
      </svg>
    ),
    hardware: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <rect x="3" y="5" width="18" height="11" rx="2" />
        <path d="M8 19h8M12 16v3" strokeLinecap="round" />
      </svg>
    ),
  };

  return icons[name];
}
