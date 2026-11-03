"use client";

import React from "react";
import Image from "next/image";
import { SERVICES_DATA, ServiceItem } from "@/data/services";
import { getWhatsAppUrl } from "@/data/site";
import { MessageCircle, ArrowUpRight, ShieldCheck, Sparkles, Check } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#080B0F] overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[800px] rounded-full bg-[#FF7628]/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
              <Sparkles className="h-3 w-3" />
              <span>Fabrication Capabilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              PRECISION FABRICATION <br />
              <span className="welding-gradient-text">& WELDING SERVICES</span>
            </h2>
            <p className="text-base text-[#A8B0B9] leading-relaxed">
              From mirror-finish stainless steel railings to custom CNC laser-cut art gates, our
              fabrication workshop brings engineered strength and timeless finish to your property.
            </p>
          </div>

          <div className="hidden sm:block text-right">
            <span className="text-xs font-mono text-[#A8B0B9] uppercase block">
              Direct Workshop Fabrication
            </span>
            <span className="text-sm font-semibold text-white">
              SS 304 • SS 316 • Mild Steel
            </span>
          </div>
        </div>

        {/* Visually Varied Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isFeatured = index === 0 || index === 5; // Staircase Railings & Laser-Cut Designs
            const whatsappMessage = `Hello Logeshwaran, I am inquiring about your "${service.title}" service. Please share details and pricing.`;

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between rounded-2xl border border-[#29333D] bg-[#111820] overflow-hidden transition-all duration-300 hover:border-[#FF7628]/60 hover:shadow-2xl hover:shadow-[#FF7628]/10 ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative w-full overflow-hidden bg-[#080B0F] ${
                    isFeatured ? "h-64 sm:h-80" : "h-56"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes={isFeatured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-[#111820]/40 to-transparent" />

                  {/* Recommended Material Grade Badge */}
                  {service.recommendedGrade && (
                    <div className="absolute top-4 left-4 rounded-md border border-[#29333D] bg-[#080B0F]/85 px-3 py-1 backdrop-blur-md">
                      <span className="text-[11px] font-mono font-semibold text-[#FF8F3D]">
                        {service.recommendedGrade}
                      </span>
                    </div>
                  )}

                  {/* Corner Accent Icon */}
                  <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-[#111820]/80 border border-[#29333D] flex items-center justify-center text-[#C5CCD3] group-hover:text-white group-hover:bg-[#FF7628] group-hover:border-[#FF7628] transition-all duration-300">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#FF7628]">
                        0{index + 1}
                      </span>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-[#FFB86C] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#A8B0B9] leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Features list */}
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-[#C5CCD3]">
                          <Check className="h-3.5 w-3.5 text-[#FF7628] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Enquiry Button */}
                  <div className="pt-4 border-t border-[#29333D]/60 flex items-center justify-between">
                    <span className="text-xs text-[#A8B0B9] font-medium hidden sm:inline">
                      Custom Fabrication Available
                    </span>

                    <a
                      href={getWhatsAppUrl(whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#29333D] bg-[#161E27] px-4 py-2 text-xs font-semibold text-white group-hover:border-[#FF7628]/50 group-hover:bg-[#FF7628] group-hover:text-white transition-all duration-200"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

