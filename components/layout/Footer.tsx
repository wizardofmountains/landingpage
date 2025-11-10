'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterLinkSection } from '@/lib/types';
import Container from '@/components/ui/Container';
import { handleAnchorClick } from '@/lib/utils';

export interface FooterProps {
  logo: string;
  siteName: string;
  sections: FooterLinkSection[];
  copyright: string;
}

/**
 * Footer component with multiple link sections
 */
const Footer: React.FC<FooterProps> = ({ logo, siteName, sections, copyright }) => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <Container maxWidth="2xl" padding>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo section */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src={logo}
                  alt={`${siteName} logo`}
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            
            {/* Link sections */}
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="flex flex-col space-y-3">
                {section.title && (
                  <h3 className="font-semibold text-sm text-foreground mb-1">
                    {section.title}
                  </h3>
                )}
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={`${sectionIndex}-${linkIndex}-${link.label}`}
                    href={link.href}
                    onClick={handleAnchorClick}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              {copyright}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

