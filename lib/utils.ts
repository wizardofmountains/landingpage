import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge to handle conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smooth scroll to element by ID
 */
export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Scroll to element when clicking anchor links
 */
export function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute('href');
  if (href?.startsWith('#')) {
    e.preventDefault();
    const elementId = href.substring(1);
    smoothScrollTo(elementId);
  }
}

