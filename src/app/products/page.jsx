import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Box, Layers, ShieldCheck, Check, Sparkles, Sliders, Truck } from 'lucide-react';
import { PRODUCTS, BRAND } from '@/lib/constants';

export const metadata = {
  title: 'Commercial Product Catalogue & Supply Packaging | Star Eggs',
  description:
    'Explore Star Eggs commercial fresh white egg catalogue: Standard 30-egg pulp trays, 210-egg wholesale master crates, and calibrated 50-55g Grade-A white table eggs.',
};

export default function ProductsPage() {
  return (
    <div className="py-12 sm:py-20 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-[1px] bg-brand-taupe" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-charcoal/80">
              Grade-A White Portfolio
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-charcoal">
            Commercial Product Catalogue.
          </h1>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Hygienically candled, acoustic-resonance tested, and weight-calibrated fresh white eggs engineered for supermarket shelves, commercial bakeries, and wholesale stockists across Telangana and Maharashtra (Nagpur, Akola, Yavatmal, Arni, Vani).
          </p>
        </div>

        {/* Detailed Product Showcase Grid */}
        <div className="space-y-16">
          {PRODUCTS.map((product, index) => (
            <article
              key={product.id}
              className="luxury-card rounded-sm overflow-hidden p-6 sm:p-10 border border-brand-champagne/80"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Product Image (5 cols) */}
                <div className="lg:col-span-5 relative aspect-[4/3] rounded-sm overflow-hidden bg-brand-ivory border border-brand-champagne/60 group">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-brand-cream/90 backdrop-blur-md px-3 py-1 border border-brand-champagne text-[10px] uppercase tracking-[0.18em] font-semibold text-brand-charcoal">
                    {product.badge}
                  </div>
                </div>

                {/* Product Details & Specs (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-brand-taupe block">
                      {product.category}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-charcoal">
                      {product.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal pt-1">
                      {product.description}
                    </p>
                  </div>

                  {/* Highlights Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-brand-champagne/40">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-brand-charcoal/90">
                        <Check className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Specifications Matrix */}
                  <div className="p-4 bg-brand-ivory/40 rounded-sm border border-brand-champagne/50 space-y-2 text-xs">
                    <span className="font-semibold text-brand-charcoal block uppercase tracking-wider text-[10px]">
                      Packaging &amp; Technical Attributes
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-brand-muted">
                      {Object.entries(product.technical).map(([key, val]) => (
                        <div key={key} className="space-y-0.5">
                          <span className="text-[10px] uppercase text-brand-taupe block font-medium">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </span>
                          <span className="text-brand-charcoal font-medium">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & MOQ */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                    <div className="text-xs">
                      <span className="text-brand-muted uppercase text-[10px] tracking-wider block">Minimum Order:</span>
                      <span className="font-semibold text-brand-charcoal">{product.moq}</span>
                    </div>

                    <Link
                      href={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.18em] font-semibold text-brand-cream bg-brand-navy hover:bg-brand-charcoal transition-all shadow-sm"
                    >
                      <span>Inquire Bulk Supply</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 bg-brand-navy text-brand-cream rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-brand-ivory font-semibold block">
              Dedicated Contract Logistics
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-medium">
              Need Daily Custom Crate Allocations?
            </h3>
            <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed">
              We structure custom morning drop schedules for supermarket chains and institutional buyers across Adilabad, Hyderabad, Warangal, Nagpur, Akola, Yavatmal, Arni, and Vani.
            </p>
          </div>

          <Link
            href="/wholesale"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-cream text-brand-navy hover:bg-white text-xs uppercase tracking-[0.2em] font-semibold shrink-0 shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <span>Explore Wholesale Tiers</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
