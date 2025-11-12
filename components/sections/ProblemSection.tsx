import React from 'react';
import { ProblemConfig } from '@/lib/types';
import { cn } from '@/lib/utils';
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
    <section id={id} style={{ backgroundColor: 'var(--problem-bg)' }}>
      <Container maxWidth="xl">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-[#FF9F1C] transition-colors duration-300 hover:text-primary">
            {title}
          </h2>
          
          {intro && (
            <p className="text-white opacity-90 text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto">
              {intro}
            </p>
          )}
          
          {/* Examples - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {examples.map((example, index) => (
              <div
                key={index}
                className={cn(
                  "bg-[#080b0c] backdrop-blur-sm rounded-2xl p-8 md:p-10 border-2 border-white/10 transition-all duration-300 min-h-[200px] flex items-start hover:bg-[#080b0c]",
                  index % 2 === 0 ? "hover:border-[#FF9F1C]/80" : "hover:border-[#2EC4B6]/80"
                )}
              >
                <p className="text-white opacity-90 text-base md:text-lg leading-relaxed">
                  {example.text}
                </p>
              </div>
            ))}
          </div>
          
          {/* Closing text - Full width below */}
          {closingText && (
            <div className="mt-12 p-10 md:p-14 rounded-2xl bg-[#080b0c] border border-white/10 text-center">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-primary transition-colors duration-300 hover:text-[#FF9F1C]">
                  This isn&apos;t convenience.
                </span>
                <br />
                <span className="text-white">It&apos;s control.</span>
              </h3>
              <p className="text-white opacity-90 text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                And it&apos;s creeping into every part of our digital lives, one &quot;update&quot; at a time. If we don&apos;t act now, we risk locking future generations into a world where everything is leased, nothing is owned, and the power lies in the hands of companies, not consumers.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProblemSection;

