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
 * Full viewport "above the fold" hero section
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
    <section id={id} className="relative min-h-screen flex items-start justify-center overflow-hidden pt-32">
      {/* Background image or gradient */}
      {backgroundImage ? (
        <>
          {/* Background image */}
          <div 
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 -z-10 bg-black/70" />
        </>
      ) : (
        /* Fallback gradient if no image */
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-background to-background" />
      )}
      
      <Container maxWidth="xl" className="py-20">
        <div className="flex flex-col items-left text-left -ml-32"> {/* -ml-32 moves the text 30px to the left */}
          <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-6xl mb-8 leading-tight ${backgroundImage ? 'text-white drop-shadow-lg' : ''}`}>
            {parseHeadline(headline)}
          </h1>
          
          {subheadline && (
            <p className={`text-xl md:text-2xl lg:text-3xl max-w-3xl mb-10 ${backgroundImage ? 'text-white/90 drop-shadow-md' : 'text-muted-foreground'}`}>
              {subheadline}
            </p>
          )}
          
          <Link href={ctaLink} onClick={handleAnchorClick}>
            <Button variant="primary" size="lg" className="shadow-lg hover:shadow-xl transition-all">
              {cta}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

