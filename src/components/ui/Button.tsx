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
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    variant === 'primary' && 'bg-coral text-white hover:bg-opacity-90 focus-visible:ring-coral',
    variant === 'secondary' && 'bg-teal text-white hover:bg-opacity-90 focus-visible:ring-teal',
    variant === 'ghost' && 'border-2 border-teal text-primary-container hover:bg-teal hover:text-white focus-visible:ring-teal',
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
