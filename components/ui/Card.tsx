import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Generic Card component for content grouping
 * 
 * @example
 * <Card variant="elevated" padding="lg">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = 'default', padding = 'md', ...props }, ref) => {
    const variants = {
      default: 'bg-background',
      bordered: 'bg-background border border-border',
      elevated: 'bg-background shadow-lg border border-border/50',
    };
    
    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl transition-all duration-200',
          variants[variant],
          paddings[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;

