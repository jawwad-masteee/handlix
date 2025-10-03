import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(({
  children,
  variant = 'default',
  size = 'md',
  icon,
  loading = false,
  className,
  disabled,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
}, ref) => {
  const baseClasses = "font-semibold rounded-full transition-all duration-300 focus-ring disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";
  
  const variants = {
    default: "btn-gradient text-white shadow-brand hover:shadow-brand-lg",
    outline: "border-gradient bg-background text-heading hover:bg-gradient-brand hover:text-white",
    whatsapp: "btn-whatsapp"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      aria-label={ariaLabel}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
              fill="none"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {children}
        </>
      )}
    </motion.button>
  );
});

GradientButton.displayName = 'GradientButton';

export { GradientButton };