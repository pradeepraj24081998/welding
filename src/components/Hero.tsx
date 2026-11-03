"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import HeroSparkCanvas from "@/components/HeroSparkCanvas";
import MetallicBeam3D from "@/components/MetallicBeam3D";
import { ArrowRight, MapPin, Sparkles, Shield, ChevronDown, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#080B0F]"
    >
      {/* Background Photography with Depth Layering */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/welding-sparks-hero.jpg"
          alt="Professional Stainless Steel Welding in Industrial Workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Cinematic dark gradients & vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F] via-[#080B0F]/75 to-[#080B0F]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B0F] via-[#080B0F]/80 to-transparent" />
        <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
      </div>

      {/* Atmospheric Welding Spark Particles */}
      <HeroSparkCanvas />

      {/* Main Content Container */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-8 text-left space-y-6 sm:space-y-8">
            {/* Location & Brand Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#29333D] bg-[#111820]/80 px-4 py-1.5 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#FF7628] animate-ping" />
              <MapPin className="h-3.5 w-3.5 text-[#FF7628]" />
              <span className="font-mono text-xs font-semibold tracking-wider text-[#C5CCD3] uppercase">
                {SITE_DATA.location.badge}
              </span>
              <span className="text-[#384654]">•</span>
              <span className="text-xs text-[#A8B0B9] font-medium hidden sm:inline">
                Custom Metal & SS Fabrication
              </span>
            </div>

            {/* Main Cinematic Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.08]">
              <span className="block text-white">PRECISION IN</span>
              <span className="block welding-gradient-text">EVERY WELD.</span>
              <span className="block text-white mt-1">STRENGTH IN</span>
              <span className="block text-[#C5CCD3]">EVERY DETAIL.</span>
            </h1>

            {/* Supporting Text */}
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#A8B0B9] font-normal leading-relaxed">
              Expert Stainless Steel & Custom Metal Fabrication Solutions. Quality craftsmanship
              engineered for residential house owners, commercial architects, builders, and
              industrial facilities.
            </p>

            {/* Quality Highlights Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#C5CCD3]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#FF7628]" />
                <span>Grade 304 / 316 Stainless Steel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#FF7628]" />
                <span>CNC Fiber Laser-Cut Art</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#FF7628]" />
                <span>TIG / MIG Precision Welds</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#FF7628] to-[#FF5400] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#FF7628]/25 hover:shadow-[#FF7628]/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={getWhatsAppUrl("Hello Logeshwaran, I would like to get a free quote for custom fabrication.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-[#29333D] bg-[#161E27]/90 px-6 py-4 text-sm font-semibold text-white hover:border-[#FF7628]/70 hover:bg-[#1A2430] hover:text-[#FF8F3D] backdrop-blur-md transition-all duration-200"
              >
                <Sparkles className="h-4 w-4 text-[#FF7628]" />
                <span>Get a Free Quote</span>
              </a>
            </div>

            {/* Direct Phone Assistance */}
            <div className="flex items-center gap-3 pt-1 text-xs text-[#A8B0B9]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF7628]" />
              <span>Direct Consultation with Logeshwaran:</span>
              <a
                href={`tel:${SITE_DATA.phones[0].primary}`}
                className="font-mono font-semibold text-white hover:text-[#FF7628] underline underline-offset-4 decoration-[#FF7628]/40"
              >
                {SITE_DATA.phones[0].display}
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Metallic Accent Visual */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* 3D Model with Three.js */}
              <MetallicBeam3D />

              {/* Verified Workshop Badge Overlay */}
              <div className="mt-4 sm:mt-0 relative sm:absolute sm:-bottom-6 sm:-left-8 rounded-xl border border-[#29333D] bg-[#111820]/95 p-4 shadow-2xl backdrop-blur-md max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#161E27] border border-[#FF7628]/40 text-[#FF7628]">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Authentic Workshop
                    </h4>
                    <p className="text-[11px] text-[#A8B0B9] mt-0.5">
                      Thuraiyur, Tiruchirappalli
                    </p>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#29333D]/60 flex items-center justify-between text-[10px] text-[#C5CCD3]">
                  <span>Custom Fabrication</span>
                  <span className="font-semibold text-[#FF7628]">Stainless Steel Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-widest uppercase font-mono text-[#A8B0B9]">
          Scroll to explore
        </span>
        <ChevronDown className="h-4 w-4 text-[#FF7628] animate-bounce" />
      </div>
    </section>
  );
}
