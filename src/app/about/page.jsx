import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Eye, Sparkles, Truck, Check, ArrowUpRight, Award, Layers } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export const metadata = {
  title: 'About Star Eggs | Heritage & Quality Standards',
  description:
    'Learn about Star Eggs: Our Adilabad headquarters, multi-stage optical candling, and daily fresh white egg distribution network across Telangana and Maharashtra.',
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-[1px] bg-brand-taupe" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-charcoal/80">
              Our Heritage &amp; Manifesto
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-charcoal">
            The Standard of Freshness.
          </h1>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Star Eggs was founded in Adilabad with a singular objective: to bring disciplined, hotel-grade egg selection and reliable highway logistics to commercial kitchens, supermarkets, and distributors across Telangana and Maharashtra.
          </p>
        </div>

        {/* Story & Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-charcoal">
              Bridging Production Integrity with Commercial Demand
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
              In traditional supply channels, eggs sit in holding godowns for days before reaching retail shelves, leading to watery albumen, flattened yolks, and micro-fractures from crude transport.
            </p>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
              Star Eggs replaced that paradigm. By coordinating direct morning farm collections, multi-stage cold spectrum candling, and early morning transit runs to <span className="font-semibold text-brand-charcoal">Nagpur, Akola, Yavatmal, Arni, Vani, and all Telangana districts</span>, our consignments arrive with their natural protective bloom completely intact.
            </p>

            <blockquote className="border-l-2 border-brand-taupe pl-5 py-2">
              <p className="font-serif italic text-lg sm:text-xl text-brand-charcoal leading-snug">
                &ldquo;True freshness is not a promise—it is a daily discipline measured in hours, not days.&rdquo;
              </p>
              <cite className="block text-[11px] uppercase tracking-[0.2em] text-brand-taupe font-sans font-medium mt-2 not-italic">
                — Star Eggs Quality Manifesto
              </cite>
            </blockquote>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-brand-ivory border border-brand-champagne shadow-elevated">
              <Image
                src="/images/white-egg-culinary.jpg"
                alt="Pristine fresh white eggs"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-brand-ivory border border-brand-champagne shadow-elevated translate-y-6">
              <Image
                src="/images/white-egg-tray.jpg"
                alt="Hygienic molded pulp trays"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>

        {/* 4-Step Quality Cycle */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-taupe block">
              Discipline in Every Batch
            </span>
            <h3 className="font-serif text-3xl font-medium text-brand-charcoal">
              Our 4-Stage Quality Assurance Cycle
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="luxury-card p-6 rounded-sm border border-brand-champagne/80 space-y-3">
              <span className="font-serif text-2xl font-bold text-brand-taupe">01</span>
              <h4 className="font-serif text-xl font-medium text-brand-charcoal">Morning Harvest</h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Direct collection from biosecure partner farms within hours of lay, keeping natural moisture locked in.
              </p>
            </div>

            <div className="luxury-card p-6 rounded-sm border border-brand-champagne/80 space-y-3">
              <span className="font-serif text-2xl font-bold text-brand-taupe">02</span>
              <h4 className="font-serif text-xl font-medium text-brand-charcoal">Optical Candling</h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Cold-spectrum lighting and acoustic testing detect internal defects and hairline fissures without heat buildup.
              </p>
            </div>

            <div className="luxury-card p-6 rounded-sm border border-brand-champagne/80 space-y-3">
              <span className="font-serif text-2xl font-bold text-brand-taupe">03</span>
              <h4 className="font-serif text-xl font-medium text-brand-charcoal">50-55g Calibration</h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Automated electronic scales verify weight uniformity to guarantee reliable recipe yields for bakeries and kitchens.
              </p>
            </div>

            <div className="luxury-card p-6 rounded-sm border border-brand-champagne/80 space-y-3">
              <span className="font-serif text-2xl font-bold text-brand-taupe">04</span>
              <h4 className="font-serif text-xl font-medium text-brand-charcoal">Pre-Dawn Dispatch</h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Shock-dampened crating departed at 04:00 AM on dedicated routes across Telangana and Maharashtra.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 bg-brand-navy text-brand-cream rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="font-serif text-3xl sm:text-4xl font-medium">
              Experience the Star Eggs Quality Difference
            </h3>
            <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed">
              Contact our supply desk to schedule a sample delivery or set up a recurring contract for your business.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-cream text-brand-navy hover:bg-white text-xs uppercase tracking-[0.2em] font-semibold shrink-0 shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <span>Connect With Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
