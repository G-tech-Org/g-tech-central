import { Link } from 'react-router-dom';
import { type ButtonHTMLAttributes } from 'react';
import { cn } from '@utils/index';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  to,
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed',
    variant === 'primary' && 'bg-coral text-on-secondary hover:brightness-110 focus-visible:ring-coral',
    variant === 'secondary' && 'bg-on-background text-background hover:bg-white focus-visible:ring-on-background',
    variant === 'ghost' && 'border border-white/15 text-on-background hover:border-teal hover:text-teal focus-visible:ring-teal',
    size === 'sm' && 'px-4 py-2 text-sm',
    size === 'md' && 'px-6 py-3 text-base',
    size === 'lg' && 'px-8 py-4 text-lg',
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
