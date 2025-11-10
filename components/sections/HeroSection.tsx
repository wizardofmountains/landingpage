'use client';

import React from 'react';
import Link from 'next/link';
import { HeroConfig } from '@/lib/types';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { handleAnchorClick } from '@/lib/utils';

export interface HeroSectionProps extends HeroConfig {
  id?: string;
}

/**
 * Hero section with bold headline and CTA
 * Supports markdown-style bold text with **text**
 */
const HeroSection: React.FC<HeroSectionProps> = ({
  id = 'hero',
  headline,
  subheadline,
  cta,
  ctaLink,
}) => {
  // Parse markdown-style bold text
  const parseHeadline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };
  
  return (
    <section id={id} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-background to-background" />
      
      <Container maxWidth="xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mb-6 leading-tight">
            {parseHeadline(headline)}
          </h1>
          
          {subheadline && (
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
              {subheadline}
            </p>
          )}
          
          <Link href={ctaLink} onClick={handleAnchorClick}>
            <Button variant="primary" size="lg" className="shadow-lg hover:shadow-xl">
              {cta}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

