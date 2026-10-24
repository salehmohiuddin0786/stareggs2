'use client';

import Link from 'next/link';

export default function Logo({ 
  className = '', 
  showSubtitle = true, 
  size = 'md', // 'sm', 'md', 'lg'
  href = '/'
}) {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy rounded-sm ${className}`}
    >
      {/* Star & Egg Geometric Emblem */}
      <div 
        className={`${iconSizes[size]} shrink-0 rounded-full bg-brand-navy border border-brand-champagne/80 p-1 flex items-center justify-center shadow-subtle group-hover:scale-105 transition-transform duration-300 relative overflow-hidden`}
      >
        <svg
          viewBox="0 0 40 40"
          className="w-full h-full relative z-10 transition-transform duration-300 group-hover:rotate-6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Symmetrical Pure White Egg Silhouette */}
          <path
            d="M20 6C14.8 6 11 14.5 11 22.8C11 28.2 15 33 20 33C25 33 29 28.2 29 22.8C29 14.5 25.2 6 20 6Z"
            fill="#FFFFFF"
            className="drop-shadow-sm"
          />

          {/* Embedded 4-Point Golden Star Symbol */}
          <path
            d="M20 12L21.8 17.8L27.5 19.5L21.8 21.2L20 27L18.2 21.2L12.5 19.5L18.2 17.8L20 12Z"
            fill="#FFA000"
          />

          {/* Sparkle Specular Highlight */}
          <circle cx="16.5" cy="13.5" r="1.3" fill="#FFFFFF" opacity="0.95" />
          <circle cx="23.5" cy="25.5" r="0.9" fill="#FFA000" opacity="0.8" />
        </svg>
      </div>

      {/* Brand Wordmark: Clean, Pure "STAR EGGS" */}
      <div className="flex flex-col">
        <span className={`font-serif ${textSizes[size]} tracking-[0.08em] font-bold text-brand-charcoal leading-none`}>
          STAR EGGS
        </span>

        {showSubtitle && (
          <span className="text-[9px] uppercase tracking-[0.26em] font-semibold text-brand-muted mt-1 leading-none">
            WHOLESALE &amp; RETAIL
          </span>
        )}
      </div>
    </Link>
  );
}
