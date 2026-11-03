"use client";

import React from "react";
import Image from "next/image";
import { WHY_CHOOSE_US_DATA } from "@/data/process";
import { Ruler, Compass, ShieldCheck, Sparkles, Hammer, Users, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/data/site";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Ruler,
  Compass,
  ShieldCheck,
  Sparkles,
  Hammer,
  Users
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 sm:py-32 bg-[#080B0F] overflow-hidden">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-industrial-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#FF7628]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
              <Sparkles className="h-3 w-3" />
              <span>Trust & Craftsmanship</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              WHY CUSTOMERS <br />
              <span className="welding-gradient-text">CHOOSE QUALITY</span>
            </h2>

            <p className="text-base text-[#A8B0B9] leading-relaxed">
              Metal fabrication isn't just about joining iron together; it is about engineering
              long-term security, seamless aesthetic finishes, and structural rigidity that stands up
              to years of daily use and weather.
            </p>

            {/* Supporting Image Feature Card */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-[#29333D] shadow-xl group">
              <Image
                src="/images/about/workshop-craftsmanship.jpg"
                alt="Industrial Metal Fabrication Craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F] via-[#080B0F]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-mono text-[#FF7628] uppercase font-semibold">
                  Workshop Standards
                </span>
                <p className="text-xs text-[#C5CCD3] mt-0.5">
                  High-integrity weld joints, zero rough burrs, and mirror polishing.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hello Logeshwaran, I would like to consult with you about fabrication materials and designs.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7628] hover:text-[#FFA048] transition-colors"
              >
                <span>Have a Specific Requirement? Talk to Logeshwaran</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 6 Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_CHOOSE_US_DATA.map((feature, idx) => {
              const Icon = ICON_MAP[feature.icon] || Sparkles;
              return (
                <div
                  key={feature.title}
                  className="metallic-card rounded-2xl p-6 relative group transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111820] border border-[#29333D] text-[#FF7628] group-hover:border-[#FF7628]/60 group-hover:bg-[#FF7628]/10 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#384654] group-hover:text-[#FF7628] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FFB86C] transition-colors mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A8B0B9] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

