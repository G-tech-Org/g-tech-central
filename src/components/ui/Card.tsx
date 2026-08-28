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
        'bg-white rounded-2xl p-6 shadow-sm border border-outline-variant/30',
        hoverable && 'transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-teal/40',
        className,
      )}
    >
      {children}
    </div>
  );
}
