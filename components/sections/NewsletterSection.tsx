'use client';

import React, { useEffect, useState } from 'react';
import { NewsletterConfig } from '@/lib/types';
import Container from '@/components/ui/Container';

export interface NewsletterSectionProps extends NewsletterConfig {
  id?: string;
  klaviyoFormId?: string; // Optional: Klaviyo form ID (e.g., "WRssM3")
}

/**
 * Newsletter signup section with Klaviyo embedded form
 * The Klaviyo SDK automatically populates the form based on the form ID
 * 
 * To customize the form:
 * 1. Go to Klaviyo Dashboard → Sign-up Forms
 * 2. Edit your form design, fields, and settings
 * 3. Changes appear automatically (no code changes needed)
 */
const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  id = 'join-movement',
  title,
  description,
  klaviyoFormId = 'WRssM3', // Default form ID
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Klaviyo mutates the embedded form node before hydration completes.
    // We defer rendering on the client to avoid hydration mismatches.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  return (
    <section id={id} style={{ backgroundColor: 'var(--newsletter-bg)' }}>
      <Container maxWidth="lg">
        <div className="max-w-2xl mx-auto text-center">
          {/* Optional: Add title and description above the form */}
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {title}
            </h2>
          )}
          
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              {description}
            </p>
          )}

          {isMounted && (
            <>
              {/* Klaviyo Embedded Form - rendered on client only */}
              {/* The Klaviyo SDK will automatically populate this div with your form */}
              <div className={`klaviyo-form-${klaviyoFormId}`}></div>

              {/* Required field notice */}
              <p className="mt-4 text-sm text-gray-400">
                <span className="text-red-500">*</span>Please complete this field to proceed.
              </p>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default NewsletterSection;

