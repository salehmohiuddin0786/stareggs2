'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, MessageSquare, Phone, Mail, MapPin, CheckCircle, Clock } from 'lucide-react';
import { BRAND, REQUIREMENT_TYPES } from '@/lib/constants';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const preProduct = searchParams.get('product') || 'Grade-A Fresh White Table Eggs';
  const preTier = searchParams.get('tier') || 'wholesale';

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    location: '',
    requirementType: preTier,
    productInterest: preProduct,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (preProduct) {
      setFormData((prev) => ({ ...prev, productInterest: preProduct }));
    }
  }, [preProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Star Eggs, I would like to inquire about wholesale fresh white egg supply:\n\n` +
      `• Name: ${formData.name || 'Interested Buyer'}\n` +
      `• Business: ${formData.businessName || 'N/A'}\n` +
      `• Phone: ${formData.phone || 'N/A'}\n` +
      `• Location: ${formData.location || 'Telangana / Nagpur / Akola / Yavatmal / Arni / Vani'}\n` +
      `• Requirement: ${formData.requirementType}\n` +
      `• Product: ${formData.productInterest}\n` +
      `• Notes: ${formData.message || 'Looking for regular wholesale supply'}`
    );
    return `https://wa.me/${BRAND.whatsappNumber}?text=${text}`;
  };

  const quickWhatsAppUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    'Hello Star Eggs, I am looking for wholesale fresh white egg supply for my business (Telangana / Nagpur / Akola / Yavatmal / Arni / Vani). Please share today’s rate chart.'
  )}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      
      {/* Form Column (7 cols) */}
      <div className="lg:col-span-7 bg-brand-cream border-2 border-brand-champagne p-8 sm:p-12 rounded-sm shadow-card">
        {submitted ? (
          <div className="py-12 space-y-6 text-center animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-brand-ivory text-brand-charcoal mx-auto flex items-center justify-center border border-brand-champagne">
              <CheckCircle className="w-8 h-8 text-brand-navy" />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-medium text-brand-charcoal">
                Enquiry Successfully Logged
              </h2>
              <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Our commercial dispatch desk for {formData.location || 'your area'} will review your requirements and reach out promptly.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-brand-cream bg-brand-navy hover:bg-brand-charcoal transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Forward via WhatsApp</span>
              </a>

              <button
                onClick={() => setSubmitted(false)}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-brand-charcoal border border-brand-taupe hover:bg-brand-ivory transition-colors"
              >
                <span>Submit Another Request</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Requirement Selector */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal">
                Procurement Tier
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {REQUIREMENT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, requirementType: type.id }))}
                    className={`px-3 py-2.5 text-xs text-center border rounded-none transition-all duration-200 font-medium ${
                      formData.requirementType === type.id
                        ? 'bg-brand-navy text-brand-cream border-brand-navy font-semibold shadow-sm'
                        : 'bg-brand-ivory/50 text-brand-charcoal border-brand-champagne hover:bg-brand-ivory'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Business */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal">
                  Your Full Name <span className="text-red-700">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Patel"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-cream border border-brand-champagne focus:border-brand-navy focus:ring-1 focus:ring-brand-navy text-sm text-brand-charcoal transition-colors rounded-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="businessName" className="block text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal">
                  Business / Store Name
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  placeholder="e.g. Supermarket / Bakery"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-cream border border-brand-champagne focus:border-brand-navy focus:ring-1 focus:ring-brand-navy text-sm text-brand-charcoal transition-colors rounded-none"
                />
              </div>
            </div>

            {/* Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal">
                  Contact Phone Number <span className="text-red-700">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-cream border border-brand-champagne focus:border-brand-navy focus:ring-1 focus:ring-brand-navy text-sm text-brand-charcoal transition-colors rounded-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="block text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal">
                  City / Supply Destination <span className="text-red-700">*</span>
                </label>
                <select
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-cream border border-brand-champagne focus:border-brand-navy focus:ring-1 focus:ring-brand-navy text-sm text-brand-charcoal transition-colors rounded-none cursor-pointer"
                >
                  <option value="">Select Delivery Location</option>
                  <optgroup label="Maharashtra Corridors">
                    <option value="Nagpur">Nagpur</option>
                    <option value="Akola">Akola</option>
                    <option value="Yavatmal">Yavatmal</option>
                    <option value="Arni">Arni</option>
                    <option value="Vani (Wani)">Vani (Wani)</option>
                  </optgroup>
                  <optgroup label="Telangana Network">
                    <option value="Adilabad (HQ)">Adilabad (Headquarters)</option>
                    <option value="Hyderabad & Secunderabad">Hyderabad & Secunderabad</option>
                    <option value="Warangal">Warangal</option>
                    <option value="Nizamabad">Nizamabad</option>
                    <option value="Karimnagar">Karimnagar</option>
                    <option value="Khammam">Khammam</option>
                    <option value="Mahbubnagar">Mahbubnagar</option>
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Product Interest */}
            <div className="space-y-2">
              <label htmlFor="productInterest" className="block text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal">
                Primary Product Requirement
              </label>
              <select
                id="productInterest"
                name="productInterest"
                value={formData.productInterest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-cream border border-brand-champagne focus:border-brand-navy focus:ring-1 focus:ring-brand-navy text-sm text-brand-charcoal transition-colors rounded-none cursor-pointer"
              >
                <option value="Grade-A Fresh White Table Eggs">Grade-A Fresh White Table Eggs</option>
                <option value="Commercial 30-Egg Molded Trays">Commercial 30-Egg Molded Trays</option>
                <option value="Wholesale Master Crates (180 / 210 Count)">Wholesale Master Crates (180 / 210 Count)</option>
                <option value="Institutional & Bakery Standing Supply">Institutional & Bakery Standing Supply</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal">
                Estimated Volume &amp; Delivery Cadence
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Share your estimated daily/weekly crate volume or any specific packaging needs..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-cream border border-brand-champagne focus:border-brand-navy focus:ring-1 focus:ring-brand-navy text-sm text-brand-charcoal transition-colors rounded-none resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 bg-brand-navy hover:bg-brand-charcoal text-brand-cream text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md cursor-pointer disabled:opacity-70"
            >
              <span>{submitting ? 'Submitting Details...' : 'Submit Wholesale Enquiry'}</span>
              <Send className="w-4 h-4" />
            </button>

          </form>
        )}
      </div>

      {/* Info & WhatsApp Direct Column (5 cols) */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
        <div className="space-y-6">
          
          <div className="p-8 bg-brand-ivory/50 border-2 border-brand-champagne rounded-sm space-y-6 shadow-subtle">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-taupe block">
              Priority Communication
            </span>
            <h3 className="font-serif text-3xl font-medium text-brand-charcoal">
              Instant WhatsApp Supply Desk
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              For real-time egg rate updates, daily batch booking, or immediate fleet dispatch to Nagpur, Akola, Yavatmal, Arni, Vani, or Telangana, chat directly with our coordinators.
            </p>

            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>

          <div className="p-8 bg-brand-cream border border-brand-champagne rounded-sm space-y-5 shadow-card">
            <h4 className="font-serif text-2xl font-medium text-brand-charcoal">
              Headquarters &amp; Dispatch Terminal
            </h4>

            <div className="space-y-4 text-xs sm:text-sm text-brand-charcoal/90">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-taupe shrink-0 mt-0.5" />
                <span>
                  <strong>Star Eggs</strong><br />
                  Gunj Road, Near Collectorate, Adilabad, Telangana – 504001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-taupe shrink-0" />
                <span>{BRAND.phoneDisplay} (Wholesale Hotline)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-taupe shrink-0" />
                <span>{BRAND.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand-taupe shrink-0" />
                <span>04:00 AM – 09:00 PM (Daily Dispatch)</span>
              </div>
            </div>
          </div>

        </div>

        <div className="p-4 bg-brand-ivory/30 border-l-2 border-brand-taupe text-xs text-brand-muted leading-relaxed">
          <span className="font-semibold text-brand-charcoal block mb-0.5">
            Commercial Supply Notice
          </span>
          All wholesale orders are accompanied by candling inspection batch certificates and tamper-evident crating seals.
        </div>
      </div>

    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-[1px] bg-brand-taupe" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-charcoal/80">
              Procurement &amp; Inquiries
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-charcoal">
            Let&apos;s Talk Egg Supply.
          </h1>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Looking for a dependable fresh white egg supplier? Tell us what your business needs in Telangana or Maharashtra (Nagpur, Akola, Yavatmal, Arni, Vani).
          </p>
        </div>

        <Suspense fallback={<div className="p-12 text-center text-brand-muted">Loading Procurement Desk...</div>}>
          <ContactFormContent />
        </Suspense>

      </div>
    </div>
  );
}
