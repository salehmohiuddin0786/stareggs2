'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Building2, Store, Truck, ShieldCheck, MessageSquare, Send } from 'lucide-react';
import { BRAND, REQUIREMENT_TYPES } from '@/lib/constants';

export default function WholesalePage() {
  const [trayCount, setTrayCount] = useState(50);
  const [selectedCity, setSelectedCity] = useState('Adilabad');
  const [buyerType, setBuyerType] = useState('supermarket');

  const cities = [
    'Adilabad',
    'Nagpur',
    'Akola',
    'Yavatmal',
    'Arni',
    'Vani (Wani)',
    'Hyderabad & Secunderabad',
    'Warangal',
    'Nizamabad',
    'Karimnagar',
    'Khammam',
    'Mahbubnagar',
  ];

  const totalEggs = trayCount * 30;

  const quickWhatsAppUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    `Hello Star Eggs, I would like to inquire about wholesale egg contract for ${trayCount} Trays (${totalEggs} Eggs) daily in ${selectedCity}. Please share contract rate quote.`
  )}`;

  return (
    <div className="py-12 sm:py-20 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-[1px] bg-brand-taupe" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-charcoal/80">
              Commercial Procurement
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-charcoal">
            Wholesale Egg Supply &amp; Contracts.
          </h1>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Reliable volume agreements, standing pre-dawn dispatch schedules, and price-hedged contracts for retailers, bakeries, cloud kitchens, and institutional buyers in Telangana and Maharashtra (Nagpur, Akola, Yavatmal, Arni, Vani).
          </p>
        </div>

        {/* 3 Commercial Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="luxury-card p-8 rounded-sm flex flex-col justify-between space-y-8 border border-brand-champagne/80">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand-ivory text-brand-charcoal flex items-center justify-center">
                <Store className="w-5 h-5 text-brand-navy" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-taupe block">
                Tier 01 &bull; Retail &amp; Supermarkets
              </span>
              <h2 className="font-serif text-2xl font-medium text-brand-charcoal">
                Daily Store Supply
              </h2>
              <p className="text-xs text-brand-muted leading-relaxed">
                Tailored for kirana stores, independent supermarkets, and grocery chains needing 10 to 50 trays daily.
              </p>
              <div className="pt-2 space-y-2 border-t border-brand-champagne/40 text-xs">
                <div className="flex items-center gap-2 text-brand-charcoal">
                  <Check className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
                  <span>30-Egg Molded Pulp Trays</span>
                </div>
                <div className="flex items-center gap-2 text-brand-charcoal">
                  <Check className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
                  <span>Early morning shelf replenishment</span>
                </div>
                <div className="flex items-center gap-2 text-brand-charcoal">
                  <Check className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
                  <span>Transparent weekly billing</span>
                </div>
              </div>
            </div>
            <Link
              href="/contact?tier=retail"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-brand-ivory text-brand-charcoal hover:bg-brand-navy hover:text-brand-cream border border-brand-champagne text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              <span>Setup Retail Account</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="luxury-card p-8 rounded-sm flex flex-col justify-between space-y-8 border-2 border-brand-navy shadow-elevated relative">
            <div className="absolute top-4 right-4 bg-brand-navy text-brand-cream text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1">
              Most Popular
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand-navy text-brand-cream flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-taupe block">
                Tier 02 &bull; Commercial Bakeries
              </span>
              <h2 className="font-serif text-2xl font-medium text-brand-charcoal">
                High-Volume Kitchens
              </h2>
              <p className="text-xs text-brand-muted leading-relaxed">
                Designed for high-output patisseries, cloud kitchens, and bakery chains needing 50 to 200 trays per daily batch.
              </p>
              <div className="pt-2 space-y-2 border-t border-brand-champagne/40 text-xs">
                <div className="flex items-center gap-2 text-brand-charcoal">
                  <Check className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
                  <span>Calibrated 50-55g uniform weight</span>
                </div>
                <div className="flex items-center gap-2 text-brand-charcoal">
                  <Check className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
                  <span>Guaranteed high yolk firmness</span>
                </div>
                <div className="flex items-center gap-2 text-brand-charcoal">
                  <Check className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
                  <span>Buffer stock reservation</span>
                </div>
              </div>
            </div>
            <Link
              href="/contact?tier=bakery"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-brand-navy text-brand-cream hover:bg-brand-charcoal text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
            >
              <span>Setup Bakery Contract</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="luxury-card p-8 rounded-sm flex flex-col justify-between space-y-8 border border-brand-champagne/80">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand-ivory text-brand-charcoal flex items-center justify-center">
                <Truck className="w-5 h-5 text-brand-navy" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-taupe block">
                Tier 03 &bull; Distributors &amp; Caterers
              </span>
              <h2 className="font-serif text-2xl font-medium text-brand-charcoal">
                Master Crate Fleet
              </h2>
              <p className="text-xs text-brand-muted leading-relaxed">
                Full highway logistics for wholesale traders, regional stockists, and institutional catering partners (200+ Trays).
              </p>
              <div className="pt-2 space-y-2 border-t border-brand-champagne/40 text-xs">
                <div className="flex items-center gap-2 text-brand-charcoal">
                  <Check className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
                  <span>180/210-Egg Corrugated Master Boxes</span>
                </div>
                <div className="flex items-center gap-2 text-brand-charcoal">
                  <Check className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
                  <span>Direct inter-state highway transit</span>
                </div>
                <div className="flex items-center gap-2 text-brand-charcoal">
                  <Check className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
                  <span>Contract volume price lock</span>
                </div>
              </div>
            </div>
            <Link
              href="/contact?tier=institutional"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-brand-ivory text-brand-charcoal hover:bg-brand-navy hover:text-brand-cream border border-brand-champagne text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              <span>Inquire Fleet Logistics</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* Interactive Volume Estimator Box */}
        <div className="p-8 sm:p-12 bg-brand-cream border-2 border-brand-champagne rounded-sm shadow-card mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-taupe block">
                  Quick Volume Calculator
                </span>
                <h3 className="font-serif text-3xl font-medium text-brand-charcoal">
                  Estimate Your Daily Supply Route
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Adjust your approximate daily tray requirements to see the batch volume and generate a priority WhatsApp quote for your city.
                </p>
              </div>

              {/* Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-brand-charcoal font-semibold uppercase tracking-wider">
                    Daily Trays Requirement:
                  </span>
                  <span className="font-serif text-2xl font-bold text-brand-navy">
                    {trayCount} Trays
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={trayCount}
                  onChange={(e) => setTrayCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-brand-champagne rounded-none accent-brand-navy cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-brand-muted uppercase tracking-wider">
                  <span>10 Trays (300 Eggs)</span>
                  <span>150 Trays</span>
                  <span>300+ Trays (9,000 Eggs)</span>
                </div>
              </div>

              {/* City Selection */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal block">
                  Delivery Destination:
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 bg-brand-cream border border-brand-champagne rounded-none text-sm text-brand-charcoal focus:border-brand-navy focus:ring-1 focus:ring-brand-navy cursor-pointer"
                >
                  {cities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Estimation Summary Box */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-brand-ivory/50 border border-brand-champagne/80 rounded-sm space-y-6">
              <h4 className="font-serif text-2xl font-medium text-brand-charcoal">
                Consignment Overview
              </h4>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-brand-cream border border-brand-champagne/60 rounded-sm space-y-1">
                  <span className="text-brand-muted block text-[10px] uppercase">Daily Egg Count</span>
                  <span className="font-serif text-2xl font-bold text-brand-charcoal">{totalEggs.toLocaleString()}</span>
                </div>
                <div className="p-3 bg-brand-cream border border-brand-champagne/60 rounded-sm space-y-1">
                  <span className="text-brand-muted block text-[10px] uppercase">Packaging Format</span>
                  <span className="font-semibold text-brand-charcoal">
                    {trayCount >= 70 ? 'Master Boxes (210 Count)' : 'Molded Pulp (30 Trays)'}
                  </span>
                </div>
                <div className="p-3 bg-brand-cream border border-brand-champagne/60 rounded-sm space-y-1">
                  <span className="text-brand-muted block text-[10px] uppercase">Transit Route</span>
                  <span className="font-semibold text-brand-charcoal">{selectedCity} Hub</span>
                </div>
                <div className="p-3 bg-brand-cream border border-brand-champagne/60 rounded-sm space-y-1">
                  <span className="text-brand-muted block text-[10px] uppercase">Dispatch Timing</span>
                  <span className="font-semibold text-brand-charcoal">04:30 AM Pre-Dawn</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={quickWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Instant WhatsApp Quote for {selectedCity}</span>
                </a>
                <p className="text-[11px] text-center text-brand-muted">
                  Lock in volume pricing with transparent daily market rate indexes.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
