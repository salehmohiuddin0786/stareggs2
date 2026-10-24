import { ArrowUp } from 'lucide-react';
import { BRAND, NAV_LINKS } from '@/lib/constants';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-cream border-t border-brand-champagne text-brand-charcoal pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-brand-champagne/40">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <Logo size="lg" />

            <p className="text-xs sm:text-sm text-brand-muted max-w-sm leading-relaxed font-normal">
              {BRAND.description}
            </p>

            <div className="text-[11px] uppercase tracking-[0.2em] text-brand-taupe font-semibold">
              Quality • Freshness • Trust
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-brand-charcoal">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs text-brand-muted font-normal">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-brand-charcoal transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Distribution Hubs (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-brand-charcoal">
              Active Supply Corridors
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-brand-muted">
              <div>
                <span className="font-semibold text-brand-charcoal block mb-1.5 uppercase text-[10px] tracking-wider">
                  Maharashtra Hubs
                </span>
                <p className="leading-relaxed">
                  • Nagpur (Logistics Hub)<br />
                  • Akola (Wholesale Depot)<br />
                  • Yavatmal (Regional Market)<br />
                  • Arni (Transit Corridor)<br />
                  • Vani / Wani (Bulk Depot)
                </p>
              </div>

              <div>
                <span className="font-semibold text-brand-charcoal block mb-1.5 uppercase text-[10px] tracking-wider">
                  Telangana Corridors
                </span>
                <p className="leading-relaxed">
                  • Adilabad (Border Gateway)<br />
                  • Hyderabad & Secunderabad<br />
                  • Warangal & Hanamkonda<br />
                  • Nizamabad & Karimnagar<br />
                  • Khammam & Mahbubnagar
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs text-brand-charcoal/80">
              <span className="font-medium">Direct Wholesale Desk:</span> {BRAND.phoneDisplay}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <p>© {new Date().getFullYear()} Star Eggs. All rights reserved. Wholesale &amp; Retail • Telangana &amp; Maharashtra.</p>

          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 uppercase tracking-widest text-[10px] text-brand-charcoal hover:text-brand-navy font-semibold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>

      </div>
    </footer>
  );
}
