'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { NavigationLink } from '@/lib/types';
import { handleAnchorClick } from '@/lib/utils';
import Button from '@/components/ui/Button';

export interface HeaderProps {
  logo: string;
  siteName: string;
  navigation: NavigationLink[];
}

/**
 * Floating menu design with separated logo and navigation
 * Modern, premium look with glass-morphism effects
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
    <header>
      {/* Floating Logo - Left Side (Free-floating, no container) */}
      <Link 
        href="/" 
        className="fixed top-6 left-8 md:left-10 z-50 transition-all duration-300 hover:opacity-80"
      >
        <Image
          src={logo}
          alt={`${siteName} logo`}
          width={120}
          height={40}
          className="h-15 w-auto drop-shadow-lg"
          priority
        />
      </Link>

      {/* Floating Navigation Menu - Right Side (Desktop) */}
      <nav className="fixed top-6 right-6 md:right-8 z-50 hidden md:block">
        <div className="flex items-center gap-1 px-3 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
          {navigation.map((link, index) => (
            <Link
              key={`nav-${index}-${link.label}`}
              href={link.href}
              onClick={handleAnchorClick}
              className="px-4 py-2 text-sm font-medium text-white/90 transition-all hover:text-white hover:bg-white/20 rounded-full"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button - Right Side */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <Button
          variant="ghost"
          size="sm"
          className="px-4 py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-black/50 transition-all duration-300 shadow-lg"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed top-20 right-6 z-50 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2 p-3 bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl min-w-[200px]">
            {navigation.map((link, index) => (
              <Link
                key={`mobile-nav-${index}-${link.label}`}
                href={link.href}
                onClick={(e) => {
                  handleAnchorClick(e);
                  closeMobileMenu();
                }}
                className="px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

