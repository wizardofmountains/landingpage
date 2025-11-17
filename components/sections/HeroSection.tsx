'use client';

import React from 'react';
import Link from 'next/link';
import { HeroConfig } from '@/lib/types';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { handleAnchorClick } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

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
      
      <Container maxWidth="xl" className="py-20 px-6 md:px-8 lg:px-5">
          <div className="flex flex-col items-start text-left md:-ml-20">
          <h1 
            className={`font-bold tracking-tight max-w-6xl mb-8 leading-tight ${backgroundImage ? 'text-white drop-shadow-lg' : ''}`}
            style={{ fontSize: '80px' }}
          >
            {parseHeadline(headline)}
          </h1>
          
          {subheadline && (
            <p className={`text-xl md:text-2xl lg:text-3xl max-w-3xl mb-10 ${backgroundImage ? 'text-white/90 drop-shadow-md' : 'text-muted-foreground'}`}>
              {subheadline}
            </p>
          )}
          
          <Link href={ctaLink} onClick={handleAnchorClick}>
            <Button
              variant="primary"
              size="lg"
              className="hero-cta group gap-3 px-8 md:px-10 shadow-lg hover:shadow-xl transition-all"
            >
              <span className="font-semibold">{cta}</span>
              <ArrowRight className="hero-cta__icon h-5 w-5" strokeWidth={2.25} />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

