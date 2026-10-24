import Image from 'next/image';
import { Eye, ShieldCheck, Thermometer } from 'lucide-react';

export default function EditorialShowcase() {
  return (
    <section className="py-24 sm:py-32 bg-brand-ivory/40 border-b border-brand-champagne/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-brand-taupe" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-charcoal/80">
                Editorial Discipline
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-charcoal leading-[1.15]">
              The Standard of <br />
              <span className="italic font-normal">Pristine White Eggs.</span>
            </h2>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
              Unlike ordinary wholesale distributors that warehouse supplies for days, Star Eggs coordinates daily collections, precise weight calibration, and immediate temperature-controlled dispatch across Telangana and Maharashtra. Every white egg preserves its natural protective bloom, clean shell, and peak culinary freshness.
            </p>

            <blockquote className="border-l-2 border-brand-taupe pl-5 py-1">
              <p className="font-serif italic text-lg sm:text-xl text-brand-charcoal leading-snug">
                &ldquo;True freshness is not a promise—it is a daily discipline measured in hours, not days.&rdquo;
              </p>
              <cite className="block text-[11px] uppercase tracking-[0.2em] text-brand-muted font-sans font-medium mt-2 not-italic">
                — Star Eggs Quality Manifesto
              </cite>
            </blockquote>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-brand-champagne/40">
              <div className="space-y-1">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
                  <Eye className="w-3.5 h-3.5 text-brand-taupe" />
                  Visual Candling
                </span>
                <p className="text-xs text-brand-muted">
                  Acoustic & optical inspection for zero micro-fractures.
                </p>
              </div>
              <div className="space-y-1">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
                  <Thermometer className="w-3.5 h-3.5 text-brand-taupe" />
                  Cool Stabilization
                </span>
                <p className="text-xs text-brand-muted">
                  Moisture-retaining crating preventing premature aging.
                </p>
              </div>
            </div>
          </div>

          {/* Right Dual-Image Composition */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-brand-champagne/70 shadow-elevated bg-brand-ivory group">
              <Image
                src="/images/white-egg-culinary.jpg"
                alt="Pristine Grade-A white eggs in an elegant ceramic saucer"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-brand-cream">
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-ivory">
                  Shell Uniformity
                </p>
                <p className="font-serif text-lg font-normal mt-0.5">
                  Flawless White Calcium Finish
                </p>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-brand-champagne/70 shadow-elevated bg-brand-ivory group sm:translate-y-8">
              <Image
                src="/images/white-egg-tray.jpg"
                alt="Fresh white eggs placed in molded fiber packaging tray"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-brand-cream">
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-ivory">
                  Packaging Hygiene
                </p>
                <p className="font-serif text-lg font-normal mt-0.5">
                  Shock-Dampened Fiber Trays
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
