"use client";

import React, { useState } from "react";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { SERVICES_DATA } from "@/data/services";
import confetti from "canvas-confetti";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  Send,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  User,
  Wrench,
  FileText
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: SERVICES_DATA[0].title,
    description: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submittedWhatsApp, setSubmittedWhatsApp] = useState(false);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = "Please enter your full name";
    if (!formData.phone.trim()) {
      errors.phone = "Please enter your contact phone number";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!formData.description.trim()) {
      errors.description = "Please describe what work or dimensions you need";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    // Construct formatted WhatsApp message
    const formattedMessage = [
      `*NEW FABRICATION ENQUIRY*`,
      `---------------------------------`,
      `*Customer Name:* ${formData.name}`,
      `*Customer Phone:* ${formData.phone}`,
      `*Service Required:* ${formData.service}`,
      `*Project Details:* ${formData.description}`,
      `---------------------------------`,
      `_Sent via Logeshwaran Welding & Fabrication Website_`
    ].join("\n");

    // Launch WhatsApp
    const whatsappUrl = getWhatsAppUrl(formattedMessage);
    window.open(whatsappUrl, "_blank");

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#FF7628", "#FFB86C", "#FFFFFF"]
      });
    } catch {
      // safe fallback
    }

    setSubmittedWhatsApp(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#080B0F] border-t border-[#29333D]/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#FF7628]/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
            <Sparkles className="h-3 w-3" />
            <span>Direct Client Consultation</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            LET&apos;S DISCUSS <br />
            <span className="welding-gradient-text">YOUR PROJECT</span>
          </h2>

          <p className="text-base text-[#A8B0B9] leading-relaxed">
            Reach out directly to Logeshwaran for site inspections, quotation estimates, or
            custom stainless steel fabrication consultations in Thuraiyur & Tiruchirappalli.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Verified Business Information & Phone Numbers */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Business Card */}
            <div className="metallic-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7628] font-semibold block">
                  Proprietor & Master Fabricator
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  {SITE_DATA.owner}
                </h3>
                <p className="text-xs text-[#A8B0B9] mt-0.5 font-medium">
                  {SITE_DATA.name}
                </p>
              </div>

              {/* Direct Phone Numbers (Click to Call) */}
              <div className="space-y-3 pt-4 border-t border-[#29333D]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#C5CCD3]">
                  Direct Contact Numbers (Click to Call)
                </h4>
                {SITE_DATA.phones.map((phone) => (
                  <a
                    key={phone.primary}
                    href={`tel:${phone.primary}`}
                    className="flex items-center justify-between p-3 rounded-xl border border-[#29333D] bg-[#111820] hover:border-[#FF7628]/60 hover:bg-[#161E27] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#080B0F] border border-[#29333D] text-[#FF7628] group-hover:scale-105 transition-transform">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-mono text-sm font-bold text-white group-hover:text-[#FFB86C] transition-colors block">
                          {phone.display}
                        </span>
                        <span className="text-[11px] text-[#A8B0B9]">
                          {phone.label || "Available for Inquiries"}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-[#FF7628] font-semibold group-hover:translate-x-1 transition-transform">
                      Call Now &rarr;
                    </span>
                  </a>
                ))}
              </div>

              {/* Location Card */}
              <div className="space-y-2 pt-4 border-t border-[#29333D]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#C5CCD3]">
                  Workshop Location
                </h4>
                <div className="flex items-start gap-3 p-3 rounded-xl border border-[#29333D] bg-[#111820]">
                  <MapPin className="h-5 w-5 text-[#FF7628] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#A8B0B9] leading-relaxed flex-1">
                    <p className="font-semibold text-white">
                      {SITE_DATA.location.city}, {SITE_DATA.location.district}
                    </p>
                    <p>{SITE_DATA.location.state}, India</p>
                    <a
                      href={SITE_DATA.location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#FF8F3D] font-semibold hover:underline mt-2"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3 p-3 rounded-xl border border-[#29333D] bg-[#111820] text-xs text-[#A8B0B9]">
                <Clock className="h-4 w-4 text-[#FF7628] shrink-0" />
                <span>{SITE_DATA.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Quote & Enquiry Form (Browser-Validated) */}
          <div className="lg:col-span-7">
            <div className="metallic-card rounded-2xl p-6 sm:p-8 relative">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF7628] font-bold">
                  Instant Quote Estimator
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  Send Your Project Details
                </h3>
                <p className="text-xs text-[#A8B0B9]">
                  Fill out the form below. On submission, WhatsApp will open with your prefilled
                  project specifications directly to Logeshwaran.
                </p>
              </div>

              {submittedWhatsApp && (
                <div className="mb-6 p-4 rounded-xl border border-[#FF7628]/40 bg-[#FF7628]/10 text-white flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#FF7628] shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <p className="font-bold text-[#FF8F3D]">WhatsApp Message Generated!</p>
                    <p className="text-[#C5CCD3]">
                      WhatsApp has been launched with your enquiry. If your browser blocked the
                      popup,{" "}
                      <a
                        href={getWhatsAppUrl(`*New Enquiry from ${formData.name}:* ${formData.description}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-white font-bold"
                      >
                        click here to open WhatsApp directly
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#C5CCD3] uppercase tracking-wider mb-2">
                    Customer Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#718096]">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full rounded-xl border bg-[#111820] pl-10 pr-4 py-3 text-sm text-white placeholder-[#718096] focus:outline-none focus:ring-1 focus:ring-[#FF7628] ${
                        formErrors.name ? "border-red-500" : "border-[#29333D] focus:border-[#FF7628]"
                      }`}
                    />
                  </div>
                  {formErrors.name && (
                    <p className="text-[11px] text-red-400 mt-1">{formErrors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-[#C5CCD3] uppercase tracking-wider mb-2">
                    Contact Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#718096]">
                      <Phone className="h-4 w-4" />
                    </div>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full rounded-xl border bg-[#111820] pl-10 pr-4 py-3 text-sm text-white placeholder-[#718096] focus:outline-none focus:ring-1 focus:ring-[#FF7628] ${
                        formErrors.phone ? "border-red-500" : "border-[#29333D] focus:border-[#FF7628]"
                      }`}
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-[11px] text-red-400 mt-1">{formErrors.phone}</p>
                  )}
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-[#C5CCD3] uppercase tracking-wider mb-2">
                    Service Required *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#718096]">
                      <Wrench className="h-4 w-4" />
                    </div>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-[#29333D] bg-[#111820] pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF7628] focus:ring-1 focus:ring-[#FF7628]"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title} className="bg-[#111820] text-white">
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-semibold text-[#C5CCD3] uppercase tracking-wider mb-2">
                    Project Requirements / Dimensions / Location *
                  </label>
                  <div className="relative">
                    <textarea
                      rows={4}
                      placeholder="e.g. Need stainless steel 304 staircase railing for a duplex home in Thuraiyur, approx 45 running feet with wood pillar..."
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      className={`w-full rounded-xl border bg-[#111820] p-4 text-sm text-white placeholder-[#718096] focus:outline-none focus:ring-1 focus:ring-[#FF7628] ${
                        formErrors.description
                          ? "border-red-500"
                          : "border-[#29333D] focus:border-[#FF7628]"
                      }`}
                    />
                  </div>
                  {formErrors.description && (
                    <p className="text-[11px] text-red-400 mt-1">{formErrors.description}</p>
                  )}
                </div>

                {/* Privacy & Direct WhatsApp notice */}
                <p className="text-[11px] text-[#A8B0B9]">
                  🔒 Direct client communication. No data is stored on external servers; clicking submit
                  formats your inquiry and opens WhatsApp directly to Logeshwaran.
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF7628] to-[#FF5400] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-[#FF7628]/30 hover:shadow-[#FF7628]/50 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Send Enquiry via WhatsApp to Logeshwaran</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
