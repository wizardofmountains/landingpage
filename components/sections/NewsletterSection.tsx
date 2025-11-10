'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewsletterConfig } from '@/lib/types';
import { newsletterSchema, NewsletterFormData } from '@/lib/validations';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export interface NewsletterSectionProps extends NewsletterConfig {
  id?: string;
}

/**
 * Newsletter signup section with form validation
 * Integrates with newsletter API
 */
const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  id = 'join-movement',
  title,
  description,
  buttonText,
  successMessage = 'Thank you for subscribing!',
  errorMessage = 'Something went wrong. Please try again.',
}) => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });
  
  const onSubmit = async (data: NewsletterFormData) => {
    setSubmitStatus('loading');
    
    try {
      // Call the API route
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setSubmitStatus('success');
        reset();
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };
  
  return (
    <section id={id} className="relative py-20 md:py-28 bg-muted/50">
      <Container maxWidth="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            {description}
          </p>
          
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register('email')}
                  disabled={submitStatus === 'loading' || submitStatus === 'success'}
                  className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 text-left">
                    {errors.email.message}
                  </p>
                )}
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={submitStatus === 'loading' || submitStatus === 'success'}
                className="sm:w-auto w-full h-12"
              >
                {submitStatus === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  buttonText
                )}
              </Button>
            </div>
            
            {/* Status messages */}
            {submitStatus === 'success' && (
              <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <CheckCircle2 size={20} />
                <p className="text-sm font-medium">{successMessage}</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                <AlertCircle size={20} />
                <p className="text-sm font-medium">{errorMessage}</p>
              </div>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
};

export default NewsletterSection;

