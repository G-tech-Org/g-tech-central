import { type InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@utils/index';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-on-surface-variant tracking-wide">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-xl border border-white/10 bg-surface-container-low text-on-surface text-base',
            'placeholder:text-outline outline-none transition-all duration-200',
            'focus:border-teal focus:shadow-[0_0_0_3px_rgba(214,255,63,0.12)]',
            error && 'border-error focus:border-error focus:shadow-[0_0_0_3px_rgba(255,107,107,0.15)]',
            className,
          )}
          {...props}
        />
        {error && <p className="text-sm text-error">{error}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';
export default Input;
