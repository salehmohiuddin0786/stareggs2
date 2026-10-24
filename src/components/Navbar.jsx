'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Phone, 
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { NAV_LINKS, BRAND } from '@/lib/constants';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const quickWhatsAppUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    'Hello Star Eggs, I would like to inquire about wholesale fresh white egg supply.'
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      
      {/* Sleek Minimal Luxury Navigation Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-brand-cream/90 backdrop-blur-xl border-b border-brand-champagne/70 shadow-[0_4px_25px_rgba(7,19,27,0.04)] py-3 sm:py-3.5'
            : 'bg-brand-cream/80 backdrop-blur-md border-b border-brand-champagne/40 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Left: Star Eggs Brand Logo (Clean & Pure) */}
            <div className="shrink-0">
              <Logo size="md" href="/" />
            </div>

            {/* Center: Desktop Editorial Navigation Links with Minimal Underline */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-[11.5px] uppercase tracking-[0.2em] font-semibold transition-all duration-200 group ${
                      isActive
                        ? 'text-brand-navy font-bold'
                        : 'text-brand-charcoal/75 hover:text-brand-navy'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive ? (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-brand-navy transition-all duration-300" />
                    ) : (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[1.5px] bg-brand-navy/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Architectural Action Buttons (Refined Luxury Corners) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {/* WhatsApp Direct */}
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm flex items-center justify-center text-brand-charcoal hover:text-[#128C7E] hover:bg-brand-ivory/60 border border-brand-champagne/70 transition-all duration-200"
                title="WhatsApp Hotline"
                aria-label="Contact via WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Call Hotline */}
              <a
                href={`tel:${BRAND.phoneDisplay}`}
                className="w-9 h-9 rounded-sm flex items-center justify-center text-brand-charcoal hover:text-brand-navy hover:bg-brand-ivory/60 border border-brand-champagne/70 transition-all duration-200"
                title="Call Dispatch Desk"
                aria-label="Call Dispatch Desk"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Architectural Luxury CTA Button */}
              <Link
                href="/wholesale"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm text-xs uppercase tracking-[0.2em] font-semibold text-brand-cream bg-brand-navy hover:bg-brand-charcoal border border-brand-navy transition-all duration-300 shadow-sm hover:shadow-card hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>Wholesale Pricing</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden w-8 h-8 rounded-sm flex items-center justify-center text-brand-charcoal border border-brand-champagne/70 bg-brand-ivory/40"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#128C7E]" />
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-2 rounded-sm text-brand-charcoal hover:bg-brand-ivory/60 border border-brand-champagne/60 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Refined Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden border-b border-brand-champagne/80 bg-brand-cream/95 backdrop-blur-2xl px-6 pt-5 pb-8 space-y-5 animate-in fade-in slide-in-from-top-3 duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-1.5 pt-1">
            {NAV_LINKS.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-serif tracking-wide py-3 px-4 rounded-sm transition-all flex items-center justify-between border-b border-brand-champagne/30 ${
                    isActive
                      ? 'bg-brand-navy text-brand-cream font-medium shadow-sm'
                      : 'text-brand-charcoal hover:bg-brand-ivory/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase font-mono tracking-widest opacity-60">
                      0{idx + 1}
                    </span>
                    <span className="text-lg">{link.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}

            {/* Mobile Contact Quick Actions */}
            <div className="pt-4 grid grid-cols-2 gap-3">
              <a
                href={`tel:${BRAND.phoneDisplay}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 border border-brand-champagne/80 rounded-sm text-xs uppercase tracking-wider font-semibold text-brand-charcoal bg-brand-ivory/40 hover:bg-brand-ivory"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Desk</span>
              </a>

              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#128C7E] text-white rounded-sm text-xs uppercase tracking-wider font-semibold shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="pt-2">
              <Link
                href="/wholesale"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-brand-navy text-brand-cream rounded-sm text-xs uppercase tracking-[0.2em] font-semibold shadow-md hover:bg-brand-charcoal transition-colors"
              >
                <span>Get Wholesale Pricing</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}

    </header>
  );
}
