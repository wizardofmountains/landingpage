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
  backgroundImage,
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
      {/* Background image or gradient */}
      {backgroundImage ? (
        <>
          {/* Background image */}
          <div 
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 -z-10 bg-black/50" />
        </>
      ) : (
        /* Fallback gradient if no image */
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-background to-background" />
      )}
      
      <Container maxWidth="xl">
        <div className="flex flex-col items-center text-center">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mb-6 leading-tight ${backgroundImage ? 'text-white drop-shadow-lg' : ''}`}>
            {parseHeadline(headline)}
          </h1>
          
          {subheadline && (
            <p className={`text-xl md:text-2xl max-w-3xl mb-8 ${backgroundImage ? 'text-white/90 drop-shadow-md' : 'text-muted-foreground'}`}>
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

