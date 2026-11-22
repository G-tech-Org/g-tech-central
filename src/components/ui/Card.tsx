import { type ReactNode } from 'react';
import { cn } from '@utils/index';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className, hoverable = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface-container-lowest rounded-3xl p-7 border border-white/8',
        hoverable && 'transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-surface-container-low',
        className,
      )}
    >
      {children}
    </div>
  );
}
