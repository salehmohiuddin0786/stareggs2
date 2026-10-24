'use client';

import { Zap, ShieldCheck, Sparkles, Sliders, Check, Eye } from 'lucide-react';
import CrazyEgg3D from './CrazyEgg3D';

export default function Interactive3DShowcase() {
  return (
    <section id="3d-experience" className="py-24 sm:py-32 bg-brand-ivory/30 border-b border-brand-champagne/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-brand-taupe" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-charcoal/80">
              Interactive 3D Candling Lab
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-charcoal">
            Inspect Purity in Real-Time 3D.
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
            Take control of our real-time 3D simulation. Run optical laser candling scans, separate the calcium shell to examine internal yolk centering, and test structural acoustic resonance.
          </p>
        </div>

        {/* 3D Showcase Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main 3D Canvas Interactive Box (8 cols) */}
          <div className="lg:col-span-8 bg-brand-cream border border-brand-champagne/90 rounded-sm shadow-card p-3 sm:p-5 relative overflow-hidden">
            <div className="h-[480px] sm:h-[580px] w-full relative">
              <CrazyEgg3D />
            </div>
          </div>

          {/* Telemetry & Quality Standards (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-brand-cream border border-brand-champagne/80 rounded-sm space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-brand-champagne/50">
                <div className="w-8 h-8 rounded-full bg-brand-navy text-brand-cream flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-brand-charcoal leading-none">
                    Multi-Spectrum Laser Candling
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-brand-muted">
                    Pre-Dispatch Quality Audit
                  </span>
                </div>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Cold-spectrum optical wavelengths penetrate the shell without raising core temperature, verifying that air cell depth remains under 3.2mm and yolk remains firmly centered.
              </p>
            </div>

            <div className="p-6 bg-brand-cream border border-brand-champagne/80 rounded-sm space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-brand-champagne/50">
                <div className="w-8 h-8 rounded-full bg-brand-navy text-brand-cream flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-brand-charcoal leading-none">
                    Acoustic Structural Integrity
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-brand-muted">
                    Zero Hairline Cracks
                  </span>
                </div>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Acoustic resonance sweeps every batch destined for Nagpur, Akola, Yavatmal, Arni, Vani, and Telangana to ensure zero hairline transit fractures.
              </p>
            </div>

            <div className="p-6 bg-brand-ivory/50 border border-brand-champagne/80 rounded-sm space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-taupe block">
                Wholesale Assurance
              </span>
              <p className="font-serif text-lg text-brand-charcoal">
                Pure Calcium Grade-A White Shells
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.18em] font-semibold text-brand-cream bg-brand-navy hover:bg-brand-charcoal transition-all shadow-sm"
                >
                  <span>Book Daily Supply Route</span>
                  <Check className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
