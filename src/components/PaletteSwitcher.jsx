'use client';

import { useState, useEffect } from 'react';
import { Palette, Check, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import { COLOR_PALETTES } from '@/lib/constants';

export default function PaletteSwitcher() {
  const [activePalette, setActivePalette] = useState(COLOR_PALETTES[0].id);
  const [isExpanded, setIsExpanded] = useState(true);

  const applyPalette = (palette) => {
    if (!palette) return;
    setActivePalette(palette.id);

    // 1. Update CSS custom properties on documentElement
    const root = document.documentElement;
    Object.entries(palette.variables).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });

    // 2. Inject or update dynamic style tag for bulletproof instant override
    let styleTag = document.getElementById('stareggs-dynamic-theme');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'stareggs-dynamic-theme';
      document.head.appendChild(styleTag);
    }

    const v = palette.variables;
    styleTag.innerHTML = `
      :root {
        --color-cream-rgb: ${v['--color-cream-rgb']} !important;
        --color-ivory-rgb: ${v['--color-ivory-rgb']} !important;
        --color-beige-rgb: ${v['--color-beige-rgb']} !important;
        --color-champagne-rgb: ${v['--color-champagne-rgb']} !important;
        --color-taupe-rgb: ${v['--color-taupe-rgb']} !important;
        --color-navy-rgb: ${v['--color-navy-rgb']} !important;
        --color-charcoal-rgb: ${v['--color-charcoal-rgb']} !important;
        --color-muted-rgb: ${v['--color-muted-rgb']} !important;

        --color-cream: ${v['--color-cream']} !important;
        --color-ivory: ${v['--color-ivory']} !important;
        --color-beige: ${v['--color-beige']} !important;
        --color-champagne: ${v['--color-champagne']} !important;
        --color-taupe: ${v['--color-taupe']} !important;
        --color-navy: ${v['--color-navy']} !important;
        --color-charcoal: ${v['--color-charcoal']} !important;
        --color-muted: ${v['--color-muted']} !important;
      }
      body {
        background-color: ${v['--color-cream']} !important;
        color: ${v['--color-charcoal']} !important;
      }
      .bg-brand-cream {
        background-color: ${v['--color-cream']} !important;
      }
      .bg-brand-ivory {
        background-color: ${v['--color-ivory']} !important;
      }
      .bg-brand-beige {
        background-color: ${v['--color-beige']} !important;
      }
      .bg-brand-navy {
        background-color: ${v['--color-navy']} !important;
      }
      .bg-brand-charcoal {
        background-color: ${v['--color-charcoal']} !important;
      }
      .text-brand-charcoal {
        color: ${v['--color-charcoal']} !important;
      }
      .text-brand-navy {
        color: ${v['--color-navy']} !important;
      }
      .text-brand-muted {
        color: ${v['--color-muted']} !important;
      }
      .text-brand-cream {
        color: ${v['--color-cream']} !important;
      }
      .border-brand-champagne {
        border-color: ${v['--color-champagne']} !important;
      }
      .border-brand-taupe {
        border-color: ${v['--color-taupe']} !important;
      }
      .border-brand-navy {
        border-color: ${v['--color-navy']} !important;
      }
      .luxury-card {
        background-color: ${v['--color-cream']} !important;
        border-color: ${v['--color-champagne']} !important;
      }
    `;

    // 3. Dispatch custom event for 3D canvases & listeners
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('stareggs-palette-changed', { detail: palette }));
    }

    try {
      localStorage.setItem('stareggs_palette', palette.id);
    } catch (e) {}
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem('stareggs_palette');
      if (saved) {
        const found = COLOR_PALETTES.find((p) => p.id === saved);
        if (found) {
          applyPalette(found);
          return;
        }
      }
    } catch (e) {}
    // Default palette on initial load
    applyPalette(COLOR_PALETTES[0]);
  }, []);

  const currentObj = COLOR_PALETTES.find((p) => p.id === activePalette) || COLOR_PALETTES[0];

  return (
    <aside 
      aria-label="Color Palette Selector"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl"
    >
      <div 
        style={{ 
          backgroundColor: currentObj.variables['--color-cream'], 
          borderColor: currentObj.variables['--color-champagne'] 
        }}
        className="backdrop-blur-xl border-2 shadow-2xl rounded-sm p-3 sm:p-4 transition-all duration-300"
      >
        
        {/* Header bar of Palette Dock */}
        <div 
          style={{ borderColor: currentObj.variables['--color-champagne'] }}
          className="flex items-center justify-between pb-2.5 border-b"
        >
          <div className="flex items-center gap-2">
            <div 
              style={{ 
                backgroundColor: currentObj.variables['--color-navy'], 
                color: currentObj.variables['--color-cream'] 
              }}
              className="w-6 h-6 rounded-full flex items-center justify-center shadow-sm"
            >
              <Palette className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-2">
              <span 
                style={{ color: currentObj.variables['--color-charcoal'] }}
                className="text-xs uppercase tracking-[0.18em] font-semibold"
              >
                Live Color Palette Previewer
              </span>
              <span 
                style={{ 
                  backgroundColor: currentObj.variables['--color-ivory'],
                  color: currentObj.variables['--color-charcoal'],
                  borderColor: currentObj.variables['--color-champagne']
                }}
                className="hidden sm:inline-block text-[10px] px-2 py-0.5 font-mono border"
              >
                Click Swatch to Change
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span 
              style={{ color: currentObj.variables['--color-muted'] }}
              className="text-[11px] hidden md:inline"
            >
              Active: <strong style={{ color: currentObj.variables['--color-charcoal'] }}>{currentObj.name}</strong>
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ color: currentObj.variables['--color-charcoal'] }}
              className="p-1 hover:opacity-75 transition-opacity focus:outline-none"
              title={isExpanded ? 'Collapse Dock' : 'Expand Dock'}
              aria-label={isExpanded ? 'Collapse Dock' : 'Expand Dock'}
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* 4 Interactive Palette Buttons Strip */}
        {isExpanded && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 animate-in fade-in duration-200">
            {COLOR_PALETTES.map((palette) => {
              const isSelected = activePalette === palette.id;
              return (
                <button
                  key={palette.id}
                  onClick={() => applyPalette(palette)}
                  type="button"
                  style={{
                    backgroundColor: isSelected ? palette.variables['--color-ivory'] : palette.variables['--color-cream'],
                    borderColor: isSelected ? palette.variables['--color-navy'] : palette.variables['--color-champagne'],
                  }}
                  className={`p-2.5 text-left rounded-sm border-2 transition-all duration-200 flex flex-col justify-between gap-2 cursor-pointer ${
                    isSelected ? 'shadow-md scale-[1.02]' : 'hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span 
                      style={{ color: isSelected ? palette.variables['--color-navy'] : palette.variables['--color-muted'] }}
                      className="text-[9px] uppercase tracking-wider font-semibold truncate"
                    >
                      {palette.tag}
                    </span>
                    {isSelected && (
                      <span 
                        style={{ 
                          backgroundColor: palette.variables['--color-navy'],
                          color: palette.variables['--color-cream']
                        }}
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      >
                        <Check className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>

                  <span 
                    style={{ color: palette.variables['--color-charcoal'] }}
                    className="text-xs font-semibold leading-tight line-clamp-1"
                  >
                    {palette.name}
                  </span>

                  {/* 4 Color Swatch Strips */}
                  <div className="flex items-center gap-1 w-full pt-1">
                    {palette.swatches.map((swatch, idx) => (
                      <span
                        key={idx}
                        className="h-3.5 flex-1 rounded-sm border border-black/15 shadow-sm"
                        style={{ backgroundColor: swatch }}
                        title={swatch}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        )}

      </div>
    </aside>
  );
}
