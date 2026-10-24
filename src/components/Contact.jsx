'use client';

import { useState } from 'react';
import { Send, MessageSquare, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { BRAND, REQUIREMENT_TYPES } from '@/lib/constants';

export default function Contact({ preselectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    location: '',
    requirementType: 'wholesale',
    productInterest: preselectedProduct || 'Grade-A Fresh White Table Eggs',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequirementSelect = (id) => {
    setFormData((prev) => ({ ...prev, requirementType: id }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  // Build prefilled WhatsApp message
  const getWhatsAppUrl = () => {
    const typeObj = REQUIREMENT_TYPES.find((r) => r.id === formData.requirementType);
    const reqText = typeObj ? typeObj.label : formData.requirementType;
    const text = encodeURIComponent(
      `Hello Star Eggs, I would like to inquire about fresh white egg supply:\n\n` +
      `• Name: ${formData.name || 'Interested Buyer'}\n` +
      `• Business: ${formData.businessName || 'N/A'}\n` +
      `• Phone: ${formData.phone || 'N/A'}\n` +
      `• Location: ${formData.location || 'Telangana / Nagpur / Akola / Yavatmal / Arni / Vani'}\n` +
      `• Requirement: ${reqText}\n` +
      `• Product: ${formData.productInterest}\n` +
      `• Details: ${formData.message || 'Looking for regular wholesale supply'}`
    );
    return `https://wa.me/${BRAND.whatsappNumber}?text=${text}`;
  };

  const quickWhatsAppUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    'Hello Star Eggs, I am interested in wholesale white egg supply for my business (Telangana / Nagpur / Akola / Yavatmal / Arni / Vani). Please share current pricing and delivery schedules.'
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-brand-cream border-b border-brand-champagne/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-brand-taupe" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-charcoal/80">
              Direct Procurement Desk
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-charcoal">
            Let&apos;s Talk Egg Supply.
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
            Looking for a dependable fresh white egg supplier? Tell us what your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-brand-cream border border-brand-champagne/80 p-8 sm:p-12 rounded-sm shadow-subtle">
            {submitted ? (
              <div className="py-12 space-y-6 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-brand-ivory text-brand-charcoal mx-auto flex items-center justify-center border border-brand-champagne">
                  <CheckCircle className="w-8 h-8 text-brand-navy" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-medium text-brand-charcoal">
                    Enquiry Recorded
                  </h3>
                  <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our supply desk will review your requirements for {formData.location || 'your area'} and connect with you shortly.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-brand-cream bg-brand-navy hover:bg-brand-charcoal transition-all shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Forward Details via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        businessName: '',
                        phone: '',
                        location: '',
                        requirementType: 'wholesale',
                        productInterest: 'Grade-A Fresh White Table Eggs',
                        message: '',
                      });
                    }}
                    type="button"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-brand-charcoal border border-brand-taupe hover:bg-brand-ivory/50 transition-colors"
                  >
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Requirement Type Selector */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal">
                    Requirement Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {REQUIREMENT_TYPES.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => handleRequirementSelect(type.id)}
                        className={`px-3 py-2.5 text-xs text-center border rounded-none transition-all duration-200 font-medium ${
                          formData.requirementType === type.id
                            ? 'bg-brand-navy text-brand-cream border-brand-navy font-semibold shadow-sm'
                            : 'bg-brand-ivory/40 text-brand-charcoal/80 border-brand-champagne/80 hover:bg-brand-ivory'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal"
                    >
                      Your Name <span className="text-red-800">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-cream border border-brand-champagne focus:border-brand-navy focus:ring-1 focus:ring-brand-navy text-sm text-brand-charcoal placeholder:text-brand-muted/60 transition-colors rounded-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="businessName"
                      className="block text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal"
                    >
                      Business / Store Name <span className="text-brand-muted text-[10px] font-normal tracking-normal">(Optional)</span>
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      placeholder="e.g. Supermarket / Bakery"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-cream border border-brand-champagne focus:border-brand-navy focus:ring-1 focus:ring-brand-navy text-sm text-brand-charcoal placeholder:text-brand-muted/60 transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Phone & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal"
                    >
                      Phone Number <span className="text-red-800">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-cream border border-brand-champagne focus:border-brand-navy focus:ring-1 focus:ring-brand-navy text-sm text-brand-charcoal placeholder:text-brand-muted/60 transition-colors rounded-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="location"
                      className="block text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal"
                    >
                      City / Area <span className="text-red-800">*</span>
                    </label>
                    <select
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-cream border border-brand-champagne focus:border-brand-navy focus:ring-1 focus:ring-brand-navy text-sm text-brand-charcoal transition-colors rounded-none cursor-pointer"
                    >
                      <option value="">Select your city / corridor</option>
                      <optgroup label="Maharashtra Corridors">
                        <option value="Nagpur">Nagpur</option>
                        <option value="Akola">Akola</option>
                        <option value="Yavatmal">Yavatmal</option>
                        <option value="Arni">Arni</option>
                        <option value="Vani (Wani)">Vani (Wani)</option>
                      </optgroup>
                      <optgroup label="Telangana Hubs">
                        <option value="Hyderabad & Secunderabad">Hyderabad & Secunderabad</option>
                        <option value="Warangal">Warangal</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Karimnagar">Karimnagar</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Khammam">Khammam</option>
                        <option value="Mahbubnagar">Mahbubnagar</option>
                        <option value="Other Telangana District">Other Telangana District</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Product Interest */}
                <div className="space-y-2">
                  <label
                    htmlFor="productInterest"
                    className="block text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal"
                  >
                    Product Category
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
                    <option value="Institutional & HoReCa Daily Batch">Institutional & HoReCa Daily Batch</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-[0.18em] font-semibold text-brand-charcoal"
                  >
                    Estimated Volume & Supply Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us your approximate daily/weekly crate requirement, preferred delivery time, or any specific packaging needs..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-cream border border-brand-champagne focus:border-brand-navy focus:ring-1 focus:ring-brand-navy text-sm text-brand-charcoal placeholder:text-brand-muted/60 transition-colors rounded-none resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-brand-cream bg-brand-navy hover:bg-brand-charcoal border border-brand-navy transition-all duration-300 disabled:opacity-70 cursor-pointer shadow-sm hover:shadow-card hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>{submitting ? 'Recording Requirement...' : 'Submit Enquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Direct Inquiries & WhatsApp Fallback (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="p-8 bg-brand-ivory/40 border border-brand-champagne/80 space-y-6 rounded-sm">
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-taupe block">
                  Fast-Track Commercial Desk
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-brand-charcoal">
                  Direct WhatsApp Procurement
                </h3>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  For daily wholesale egg rate quotes, crate batch availability, and express dispatch to Nagpur, Akola, Yavatmal, Arni, Vani, or Telangana, chat directly with our coordinators.
                </p>

                <a
                  href={quickWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs uppercase tracking-[0.18em] font-semibold text-brand-cream bg-[#128C7E] hover:bg-[#075E54] border border-[#128C7E] transition-all duration-300 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Direct Details Box */}
              <div className="p-8 bg-brand-cream border border-brand-champagne/60 space-y-5 rounded-sm">
                <h4 className="font-serif text-xl font-medium text-brand-charcoal">
                  Supply Coordination
                </h4>

                <div className="space-y-4 text-xs sm:text-sm text-brand-charcoal/90">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-taupe shrink-0 mt-0.5" />
                    <span>Serving Telangana + Nagpur, Akola, Yavatmal, Arni, Vani</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-taupe shrink-0" />
                    <span>{BRAND.phoneDisplay} (Wholesale Hotline)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-taupe shrink-0" />
                    <span>{BRAND.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on Transparency */}
            <div className="p-4 bg-brand-ivory/25 border-l-2 border-brand-taupe text-xs text-brand-muted leading-relaxed">
              <span className="font-semibold text-brand-charcoal block mb-0.5">
                Bulk Wholesale Policy
              </span>
              Strict weight adherence, shock-cushioned crating, and reliable morning delivery timelines for institutional food buyers.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
