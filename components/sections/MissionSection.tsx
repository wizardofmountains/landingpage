'use client';

import React from 'react';
import Link from 'next/link';
import { MissionConfig } from '@/lib/types';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import IconWrapper from '@/components/ui/IconWrapper';
import Button from '@/components/ui/Button';
import { handleAnchorClick } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export interface MissionSectionProps extends MissionConfig {
  id?: string;
}

/**
 * Mission/Pillars section
 * Displays organization's approach with customizable pillars
 */
const MissionSection: React.FC<MissionSectionProps> = ({
  id = 'mission',
  title,
  intro,
  pillars,
}) => {
  return (
    <section id={id} className="relative py-20 md:py-28 bg-background">
      <Container maxWidth="xl">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          
          {intro && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {intro}
            </p>
          )}
        </div>
        
        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              variant="bordered"
              padding="lg"
              className="hover:shadow-lg hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-start">
                {/* Icon */}
                <div className="mb-4 p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <IconWrapper
                    name={pillar.icon}
                    size={32}
                    className="text-accent"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="#contact" onClick={handleAnchorClick}>
            <Button
              variant="primary"
              size="lg"
              className="hero-cta group gap-3 px-8 md:px-10 shadow-lg hover:shadow-xl transition-all"
            >
              <span className="font-semibold">Book Demo</span>
              <ArrowRight className="hero-cta__icon h-5 w-5" strokeWidth={2.25} />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default MissionSection;

