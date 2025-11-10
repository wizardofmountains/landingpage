import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
}

/**
 * Responsive container component with max-width constraints
 * 
 * @example
 * <Container maxWidth="lg" padding>
 *   <h1>Page content</h1>
 * </Container>
 */
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, maxWidth = 'xl', padding = true, ...props }, ref) => {
    const maxWidths = {
      sm: 'max-w-screen-sm',    // 640px
      md: 'max-w-screen-md',    // 768px
      lg: 'max-w-screen-lg',    // 1024px
      xl: 'max-w-screen-xl',    // 1280px
      '2xl': 'max-w-screen-2xl', // 1536px
      full: 'max-w-full',
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto w-full',
          maxWidths[maxWidth],
          padding && 'px-4 sm:px-6 lg:px-8',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;

