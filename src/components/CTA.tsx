"use client";

import React from "react";
import Image from "next/image";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { Phone, MessageCircle, Sparkles, Shield, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#080B0F] overflow-hidden">
      {/* Background Photography with fiery welding glow */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/welding-cta-bg.jpg"
          alt="Dramatic Welding Sparks in Fabrication Workshop"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F] via-[#080B0F]/80 to-[#080B0F]" />
        <div className="absolute inset-0 bg-radial from-[#FF7628]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FF7628]/40 bg-[#161E27]/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#FF8F3D] uppercase mb-6 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-[#FF7628] animate-pulse" />
          <span>Quality Fabrication • Direct Workshop Rates</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.1]">
          LET&apos;S BUILD SOMETHING <br />
          <span className="welding-gradient-text">STRONGER TOGETHER.</span>
        </h2>

        {/* Supporting text */}
        <p className="max-w-2xl mx-auto mt-6 text-base sm:text-lg text-[#C5CCD3] leading-relaxed">
          Looking for reliable welding and custom metal fabrication? Get in touch with us to discuss
          your requirements, request a site measurement, or receive an upfront transparent estimate.
        </p>

        {/* Location & Workshop Tag */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#A8B0B9]">
          <span>📍 Thuraiyur, Tiruchirappalli</span>
          <span>•</span>
          <span>⚡ Stainless Steel Specialists</span>
          <span>•</span>
          <span>⚙️ Custom CNC Laser Works</span>
        </div>

        {/* Call & WhatsApp Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Call Primary */}
          <a
            href={`tel:${SITE_DATA.phones[0].primary}`}
            className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl border border-[#384654] bg-[#161E27] px-8 py-4 text-sm font-bold text-white hover:border-[#FF7628] hover:bg-[#1A2430] transition-all duration-200 shadow-xl"
          >
            <Phone className="h-4 w-4 text-[#FF7628] group-hover:scale-110 transition-transform" />
            <span>Call Now ({SITE_DATA.phones[0].display})</span>
          </a>

          {/* WhatsApp Primary */}
          <a
            href={getWhatsAppUrl("Hello Logeshwaran, I would like to build something with you. Let's discuss my project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#FF7628] to-[#FF5400] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#FF7628]/30 hover:shadow-[#FF7628]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
            <span>WhatsApp Us Instantly</span>
          </a>
        </div>
      </div>
    </section>
  );
}

