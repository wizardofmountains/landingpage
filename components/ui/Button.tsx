import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

/**
 * Reusable Button component with multiple variants
 * 
 * @example
 * <Button variant="primary">Click me</Button>
 * <Button variant="outline" size="lg">Learn More</Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
      ghost: 'hover:bg-accent/10 text-foreground',
    };
    
    const sizes = {
      sm: 'h-9 px-4 text-sm rounded-full',      // Pillow shape
      md: 'h-11 px-6 text-base rounded-full',   // Pillow shape
      lg: 'h-14 px-8 text-lg rounded-full',     // Pillow shape
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

