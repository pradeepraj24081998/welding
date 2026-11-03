"use client";

import React from "react";
import Image from "next/image";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { ShieldCheck, Compass, Sparkles, Users, Hammer, CheckCircle, ArrowRight } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Quality Workmanship",
      desc: "Robust weld penetrations, solid structural anchoring, and smooth seamless surface finishing on every job.",
      icon: Hammer,
    },
    {
      title: "Precision Fabrication",
      desc: "Accurate dimensional cuts, mitered joints, and high-precision CNC fiber laser-cut panel integrations.",
      icon: Compass,
    },
    {
      title: "Custom Designs",
      desc: "Bespoke metalwork tailored to your architectural plans, stairwell contours, gate dimensions, and personal taste.",
      icon: Sparkles,
    },
    {
      title: "Customer-Focused Service",
      desc: "Direct communication with owner Logeshwaran from initial site measurement to final handover and installation.",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0B1017] border-t border-[#29333D]/60 overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-1/4 right-0 -z-10 h-96 w-96 rounded-full bg-[#FF7628]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-80 w-80 rounded-full bg-[#384654]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Real Workshop Photography Montage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Real Workshop Photo */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden border border-[#29333D] shadow-2xl group">
                <Image
                  src="/images/projects/real-project-3-ss-main-gate-workshop.jpg"
                  alt="Logeshwaran Workshop Stainless Steel Gate Fabrication in Progress"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F] via-transparent to-transparent opacity-80" />
                
                {/* Verified Photo Tag */}
                <div className="absolute top-4 left-4 rounded-md border border-[#FF7628]/40 bg-[#080B0F]/90 px-3 py-1.5 backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FF8F3D]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF7628] animate-pulse" />
                    <span>Real Workshop Fabrication • Thuraiyur</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-mono text-[#A8B0B9] uppercase">
                    In-House Craftsmanship
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Stainless Steel Gate Assembly & Buffing
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Inset Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-64 rounded-xl border border-[#384654] bg-[#161E27]/95 p-4 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg overflow-hidden relative border border-[#29333D] shrink-0">
                    <Image
                      src="/images/about/welder-detail.jpg"
                      alt="Welding Torch and Sparks"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">
                      TIG / MIG Precision
                    </h4>
                    <p className="text-[11px] text-[#A8B0B9]">
                      Clean Argon Shielded Welds
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#C5CCD3] pt-2 border-t border-[#29333D]">
                  <span>Durability First</span>
                  <span className="text-[#FF7628] font-semibold">100% Focused</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
              <Sparkles className="h-3 w-3" />
              <span>About Logeshwaran Fabrication</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              CRAFTING STRENGTH. <br />
              <span className="welding-gradient-text">CREATING PERFECTION.</span>
            </h2>

            <div className="space-y-4 text-base text-[#A8B0B9] leading-relaxed">
              <p>
                At <strong className="text-white font-semibold">Logeshwaran Welding & Fabrication</strong>,
                we focus on quality workmanship, precision and attention to detail. From stylish
                stainless-steel staircase railings to customized decorative metal designs, we aim to
                deliver fabrication solutions that combine durability and appearance.
              </p>
              <p>
                Located in Thuraiyur, Tiruchirappalli, we work directly with residential home
                owners, commercial builders, architects, and industrial clients to build enduring,
                structurally dependable metal structures that enhance property value and safety.
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="metallic-card rounded-xl p-4 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#111820] border border-[#29333D] text-[#FF7628]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#A8B0B9] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Target Client Scope */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="text-xs text-[#C5CCD3] font-semibold self-center mr-1">Serving:</span>
              {SITE_DATA.targetCustomers.slice(0, 4).map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-[#29333D] bg-[#111820] px-2.5 py-1 text-[11px] text-[#A8B0B9]"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Talk to Logeshwaran CTA */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hello Logeshwaran, I would like to discuss my fabrication project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7628] hover:text-[#FFA048] transition-colors"
              >
                <span>Discuss Your Requirements with Logeshwaran</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

