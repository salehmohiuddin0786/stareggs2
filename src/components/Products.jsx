'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';

export default function Products({ onSelectProduct }) {
  const handleEnquire = (productName) => {
    if (onSelectProduct) {
      onSelectProduct(productName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-24 sm:py-32 bg-brand-cream border-b border-brand-champagne/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-brand-champagne/50">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-brand-taupe" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-charcoal/80">
                Fresh White Portfolio
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-charcoal">
              Quality for Every Need.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-brand-muted max-w-sm leading-relaxed">
            Standardized weight grading, intact cuticle preservation, and pristine shell integrity crated for retail shelves and commercial bulk operations.
          </p>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="luxury-card rounded-sm overflow-hidden flex flex-col group h-full"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-ivory">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-brand-cream/90 backdrop-blur-md px-3 py-1 border border-brand-champagne/60 text-[10px] uppercase tracking-[0.18em] font-semibold text-brand-charcoal">
                  {product.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-brand-charcoal group-hover:text-brand-navy transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
                    {product.description}
                  </p>
                </div>

                {/* Key Spec bullets */}
                <div className="space-y-2 pt-2 border-t border-brand-champagne/40">
                  {product.specs.slice(0, 3).map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-brand-charcoal/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-taupe shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => handleEnquire(product.name)}
                    type="button"
                    className="w-full inline-flex items-center justify-between px-5 py-3 text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal bg-brand-ivory/50 hover:bg-brand-navy hover:text-brand-cream border border-brand-champagne transition-all duration-300 group/btn cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
