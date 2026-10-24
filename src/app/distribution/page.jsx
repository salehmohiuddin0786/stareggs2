import Link from 'next/link';
import { MapPin, Navigation, Truck, ShieldCheck, CheckCircle2, ArrowUpRight, Clock, Box } from 'lucide-react';
import { DISTRIBUTION_REGIONS, BRAND } from '@/lib/constants';

export const metadata = {
  title: 'Distribution Network & Logistics Corridors | Star Eggs',
  description:
    'Dedicated egg distribution routes across Telangana and Maharashtra: Daily scheduled delivery to Nagpur, Akola, Yavatmal, Arni, Vani, Adilabad, Hyderabad, and Warangal.',
};

export default function DistributionPage() {
  return (
    <div className="py-12 sm:py-20 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-[1px] bg-brand-taupe" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-charcoal/80">
              Commercial Fleet Logistics
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-charcoal">
            Distribution Across Telangana &amp; Maharashtra.
          </h1>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Headquartered in Adilabad, Star Eggs coordinates scheduled, pre-dawn wholesale routes spanning Telangana and key Maharashtra commercial corridors including <span className="font-semibold text-brand-charcoal">Nagpur, Akola, Yavatmal, Arni, and Vani</span>.
          </p>
        </div>

        {/* 2 Regional Corridor Sections */}
        <div className="space-y-12 mb-20">
          {DISTRIBUTION_REGIONS.map((regionGroup, idx) => (
            <div
              key={regionGroup.region}
              className="luxury-card p-8 sm:p-12 rounded-sm border border-brand-champagne/80 space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-champagne/50">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-taupe block">
                    Region 0{idx + 1}
                  </span>
                  <h2 className="font-serif text-3xl font-medium text-brand-charcoal">
                    {regionGroup.region}
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-ivory text-brand-charcoal border border-brand-champagne text-xs font-semibold uppercase tracking-wider">
                  <Truck className="w-3.5 h-3.5 text-brand-navy" />
                  <span>Scheduled Daily Route</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionGroup.hubs.map((hub) => (
                  <div
                    key={hub.name}
                    className="p-5 bg-brand-ivory/40 border border-brand-champagne/60 rounded-sm space-y-2 hover:bg-brand-ivory/80 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-brand-charcoal font-semibold">
                      <MapPin className="w-4 h-4 text-brand-taupe shrink-0" />
                      <h3 className="text-base font-serif">{hub.name}</h3>
                    </div>
                    <p className="text-xs text-brand-muted pl-6">
                      {hub.type}
                    </p>
                    <div className="pt-2 pl-6 flex items-center gap-2 text-[11px] text-brand-charcoal/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span>Active Daily Consignments</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-brand-ivory/40 border border-brand-champagne/80 rounded-sm space-y-4">
            <div className="w-10 h-10 rounded-full bg-brand-navy text-brand-cream flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-charcoal">
              04:00 AM Pre-Dawn Departure
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Dispatch vehicles roll out during cool pre-dawn hours to avoid thermal stress and guarantee morning shelf arrival before opening hours.
            </p>
          </div>

          <div className="p-8 bg-brand-ivory/40 border border-brand-champagne/80 rounded-sm space-y-4">
            <div className="w-10 h-10 rounded-full bg-brand-navy text-brand-cream flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-charcoal">
              Shock-Dampened Fiber Crates
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Molded pulp trays and reinforced master cartons absorb highway road vibrations, virtually eliminating transit micro-cracks.
            </p>
          </div>

          <div className="p-8 bg-brand-ivory/40 border border-brand-champagne/80 rounded-sm space-y-4">
            <div className="w-10 h-10 rounded-full bg-brand-navy text-brand-cream flex items-center justify-center">
              <Box className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-charcoal">
              Zero-Loss Guarantee
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Every crate is verified at arrival. Any transit defect is credited immediately with dedicated account desk support.
            </p>
          </div>
        </div>

        {/* Route Onboarding CTA Banner */}
        <div className="p-8 sm:p-12 bg-brand-navy text-brand-cream rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-brand-ivory font-semibold block">
              Partner With Us
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-medium">
              Open a Delivery Route For Your Area
            </h3>
            <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed">
              Operating a supermarket, bakery, or distribution outlet in Nagpur, Akola, Yavatmal, Arni, Vani, or Telangana? Join our scheduled daily replenishment network.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-cream text-brand-navy hover:bg-white text-xs uppercase tracking-[0.2em] font-semibold shrink-0 shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <span>Request Route Coverage</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
