'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { NavigationLink } from '@/lib/types';
import { cn, handleAnchorClick } from '@/lib/utils';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export interface HeaderProps {
  logo: string;
  siteName: string;
  navigation: NavigationLink[];
}

/**
 * Header component with responsive navigation
 * Includes mobile hamburger menu and smooth scroll behavior
 */
const Header: React.FC<HeaderProps> = ({ logo, siteName, navigation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container maxWidth="2xl">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt={`${siteName} logo`}
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((link, index) => (
              <Link
                key={`nav-${index}-${link.label}`}
                href={link.href}
                onClick={handleAnchorClick}
                className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-accent/10 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <div className="flex flex-col space-y-2">
              {navigation.map((link, index) => (
                <Link
                  key={`mobile-nav-${index}-${link.label}`}
                  href={link.href}
                  onClick={(e) => {
                    handleAnchorClick(e);
                    closeMobileMenu();
                  }}
                  className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;

