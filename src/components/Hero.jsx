import Image from 'next/image';
import { ArrowUpRight, ArrowDown, Award, Sparkles, ShieldCheck } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 lg:pt-48 lg:pb-36 overflow-hidden bg-brand-cream border-b border-brand-champagne/40"
    >
      {/* Editorial architectural guidelines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 border-x border-brand-champagne/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: High-Fashion Luxury Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10">
            {/* Minimal Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="w-10 h-[1px] bg-brand-taupe" />
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-brand-charcoal/80">
                {BRAND.eyebrow}
              </span>
            </div>

            {/* Expressive Editorial Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-medium tracking-tight text-brand-charcoal leading-[1.03]">
                Freshness, <br />
                <span className="italic font-normal text-brand-charcoal/90">Delivered.</span>
              </h1>
              <p className="max-w-xl text-base sm:text-lg text-brand-muted leading-relaxed font-normal pt-2">
                Premium fresh white egg supply and bulk distribution serving supermarkets, commercial bakeries, and food businesses across Telangana and Maharashtra (Nagpur, Akola, Yavatmal, Arni, Vani).
              </p>
            </div>

            {/* Premium Refined CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-9 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-brand-cream bg-brand-navy hover:bg-brand-charcoal border border-brand-navy transition-all duration-300 hover:shadow-card hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get Wholesale Pricing</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-brand-charcoal bg-transparent hover:bg-brand-beige/25 border border-brand-taupe transition-all duration-300"
              >
                <span>Explore White Eggs</span>
                <ArrowDown className="w-3.5 h-3.5 text-brand-charcoal/70" />
              </a>
            </div>

            {/* Editorial Benchmark Pillars */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-brand-champagne/40 max-w-lg">
              <div className="space-y-1.5">
                <p className="font-serif text-3xl font-semibold text-brand-charcoal leading-none">100%</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted font-medium">
                  Grade-A White
                </p>
              </div>
              <div className="space-y-1.5 border-l border-brand-champagne/40 pl-6">
                <p className="font-serif text-3xl font-semibold text-brand-charcoal leading-none">Daily</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted font-medium">
                  Farm Pickup
                </p>
              </div>
              <div className="space-y-1.5 border-l border-brand-champagne/40 pl-6">
                <p className="font-serif text-3xl font-semibold text-brand-charcoal leading-none">Direct</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted font-medium">
                  Highway Fleet
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pristine Editorial Photography Composition (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Subtle warm architectural shadow frame */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-brand-beige/30 via-brand-ivory/40 to-transparent rounded-sm transform rotate-1 scale-98 pointer-events-none -z-10" />

            {/* Main Editorial Image Frame */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] max-w-md lg:max-w-none overflow-hidden rounded-sm border border-brand-champagne/80 shadow-elevated bg-brand-ivory group">
              <Image
                src="/images/white-eggs.jpg"
                alt="Pristine Grade-A fresh white eggs presented on an elegant warm ceramic tray"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
              />

              {/* Editorial warm shadow vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 via-transparent to-transparent pointer-events-none" />

              {/* Floating Luxury Editorial Information Label */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-brand-cream/95 backdrop-blur-md p-4 sm:p-5 border border-brand-champagne shadow-card">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-brand-charcoal block">
                      Wholesale & Retail Supply
                    </span>
                    <p className="text-xs text-brand-muted font-normal leading-relaxed">
                      Uniform 50–55g weight class with intact natural cuticle crated daily for Telangana & Maharashtra.
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-brand-charcoal text-brand-cream flex items-center justify-center shrink-0 ml-4 shadow-sm">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
