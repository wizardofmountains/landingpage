'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

export interface IconWrapperProps {
  name: string;
  className?: string;
  size?: number;
}

/**
 * Dynamic icon loader for Lucide React icons
 * 
 * @example
 * <IconWrapper name="Search" size={24} />
 * <IconWrapper name="Heart" className="text-red-500" />
 */
const IconWrapper: React.FC<IconWrapperProps> = ({ name, className, size = 24 }) => {
  // Get the icon component from lucide-react
  const IconComponent = (LucideIcons as any)[name];
  
  // Fallback to a default icon if not found
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react. Using default CircleHelp icon.`);
    return <LucideIcons.CircleHelp size={size} className={cn('text-muted-foreground', className)} />;
  }
  
  return <IconComponent size={size} className={className} />;
};

export default IconWrapper;

