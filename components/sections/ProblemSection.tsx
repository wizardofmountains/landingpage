import React from 'react';
import { ProblemConfig } from '@/lib/types';
import Container from '@/components/ui/Container';

export interface ProblemSectionProps extends ProblemConfig {
  id?: string;
}

/**
 * Problem/Challenge section
 * Displays the problem with examples in a dark theme
 */
const ProblemSection: React.FC<ProblemSectionProps> = ({
  id = 'problem',
  title,
  intro,
  examples,
  closingText,
}) => {
  return (
    <section style={{ backgroundColor: 'var(--problem-bg)' }}>
      <Container maxWidth="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
            {title}
          </h2>
          
          {intro && (
            <p className="text-lg md:text-xl mb-12 text-center opacity-90">
              {intro}
            </p>
          )}
          
          {/* Examples */}
          <div className="space-y-6 mb-12">
            {examples.map((example, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/20 hover:border-white/40 transition-colors"
              >
                <p className="text-base md:text-lg leading-relaxed">
                  {example.text}
                </p>
              </div>
            ))}
          </div>
          
          {/* Closing text */}
          {closingText && (
            <div className="mt-12 p-8 rounded-xl bg-white/5 border border-white/20">
              <p className="text-base md:text-lg leading-relaxed opacity-95">
                {closingText}
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProblemSection;

