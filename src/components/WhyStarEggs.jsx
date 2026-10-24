import { ShieldCheck, Feather, Layers, Store } from 'lucide-react';
import { BENEFITS } from '@/lib/constants';

const BENEFIT_ICONS = [
  ShieldCheck, // Quality-focused sourcing
  Feather,     // Fresh and carefully handled
  Layers,      // Reliable bulk supply
  Store,       // Wholesale and retail availability
];

export default function WhyStarEggs() {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-brand-cream border-b border-brand-champagne/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-brand-taupe" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-charcoal/80">
              The Star Eggs Advantage
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-charcoal">
            Why Star Eggs.
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
            Built on integrity, precision grading, and dependable supply chains tailored for Telangana’s commercial food industry.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => {
            const Icon = BENEFIT_ICONS[index % BENEFIT_ICONS.length];
            return (
              <div
                key={benefit.title}
                className="luxury-card p-8 rounded-sm flex flex-col justify-between space-y-8 group"
              >
                <div className="space-y-6">
                  {/* Clean line icon inside warm badge */}
                  <div className="w-12 h-12 rounded-full bg-brand-ivory/80 border border-brand-champagne/80 flex items-center justify-center text-brand-charcoal group-hover:bg-brand-navy group-hover:text-brand-cream group-hover:border-brand-navy transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-taupe block">
                      0{index + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-brand-charcoal leading-snug">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-champagne/30 flex items-center justify-between text-[11px] uppercase tracking-wider text-brand-charcoal/60 font-medium">
                  <span>Standard of Care</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-taupe" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
