import { MapPin, Navigation, Truck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { DISTRIBUTION_REGIONS } from '@/lib/constants';

export default function Distribution() {
  return (
    <section id="distribution" className="py-24 sm:py-32 bg-brand-cream border-b border-brand-champagne/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-brand-taupe" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-charcoal/80">
              Inter-State Network
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-charcoal">
            From Our Supply to Your Business.
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
            Reliable egg supply for retailers, restaurants, bakeries, and bulk distributors across <span className="font-semibold text-brand-charcoal">Telangana</span> and key Maharashtra corridors including <span className="font-semibold text-brand-charcoal">Nagpur, Akola, Yavatmal, Arni, and Vani</span>.
          </p>
        </div>

        {/* 2-Column Grid: Graphic Map/Hub Visual + Distribution Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left: Regional Network Visual (7 cols) */}
          <div className="lg:col-span-7 bg-brand-cream border border-brand-champagne/80 p-6 sm:p-10 rounded-sm shadow-subtle relative overflow-hidden space-y-8">
            {/* Subtle background geographic coordinate grid */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(183,176,158,0.18)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="flex items-center justify-between pb-6 border-b border-brand-champagne/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-charcoal text-brand-ivory flex items-center justify-center">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-brand-charcoal">
                      Commercial Distribution Corridors
                    </h3>
                    <p className="text-xs text-brand-muted">
                      Direct daily supply routes linking production farms to wholesale markets
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 bg-brand-ivory text-[10px] uppercase tracking-widest font-semibold text-brand-charcoal border border-brand-champagne">
                  Active Routes
                </span>
              </div>

              {/* Regional Tabs/Sections */}
              <div className="space-y-6">
                {DISTRIBUTION_REGIONS.map((reg) => (
                  <div key={reg.region} className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-navy" />
                      <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-charcoal">
                        {reg.region}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {reg.hubs.map((hub) => (
                        <div
                          key={hub.name}
                          className="p-3.5 bg-brand-ivory/40 hover:bg-brand-ivory/80 border border-brand-champagne/50 rounded-sm transition-all duration-200 flex items-start gap-3 group"
                        >
                          <div className="w-6 h-6 rounded-full bg-brand-taupe/30 text-brand-charcoal flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-navy group-hover:text-brand-cream transition-colors">
                            <MapPin className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm text-brand-charcoal leading-snug">
                              {hub.name}
                            </h5>
                            <p className="text-[11px] text-brand-muted font-normal mt-0.5">
                              {hub.type}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Transit Reassurance Note */}
              <div className="p-4 bg-brand-beige/25 border-l-2 border-brand-charcoal text-xs text-brand-charcoal/90 leading-relaxed">
                <span className="font-semibold block uppercase tracking-wider text-[10px] text-brand-charcoal mb-0.5">
                  Inter-State Supply Reliability
                </span>
                Direct scheduled deliveries connect North Telangana directly with Nagpur, Akola, Yavatmal, Arni, and Vani, ensuring fresh arrival before local market hours.
              </div>
            </div>
          </div>

          {/* Right: Operational Pillars & Action (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-brand-navy text-brand-cream flex items-center justify-center shrink-0 mt-1">
                  <Truck className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-xl font-medium text-brand-charcoal">
                    Early Morning Dispatch Fleet
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    Vehicles depart during early morning hours to preserve egg temperature and guarantee on-time morning shelf replenishment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-brand-navy text-brand-cream flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-xl font-medium text-brand-charcoal">
                    Shock-Dampened Molded Crating
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    Custom molded pulp trays dampen road vibrations along highway routes, reducing transit breakage to near zero.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-brand-ivory/50 border border-brand-champagne/80 rounded-sm space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-taupe block">
                  Dedicated Institutional Accounts
                </span>
                <p className="font-serif text-xl text-brand-charcoal">
                  Direct Bulk Supply For Supermarkets & Food Chains
                </p>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Tailored contract pricing and fixed delivery cadences for institutional kitchens, bakeries, and wholesale stockists in Nagpur, Akola, Yavatmal, Arni, Vani, and all Telangana districts.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-brand-cream bg-brand-navy hover:bg-brand-charcoal border border-brand-navy transition-all duration-300 hover:shadow-card"
              >
                <span>Discuss Your Supply Requirements</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
