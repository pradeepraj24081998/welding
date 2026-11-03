"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { Sparkles, Quote, ChevronLeft, ChevronRight, MessageSquare, ShieldAlert } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS_DATA.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < TESTIMONIALS_DATA.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#0B1017] border-t border-[#29333D]/60 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-[#FF7628]/5 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
            <Sparkles className="h-3 w-3" />
            <span>Customer Experience</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            BUILDING TRUST <br />
            <span className="welding-gradient-text">THROUGH QUALITY WORK</span>
          </h2>

          <p className="text-base text-[#A8B0B9] leading-relaxed">
            Our goal is simple: deliver dependable metal fabrication that earns lasting client confidence.
          </p>

          {/* Illustrative Demo Notice Pill */}
          <div className="inline-flex items-center gap-2 rounded-md border border-[#29333D] bg-[#111820]/90 px-3 py-1 text-[11px] text-[#A8B0B9]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF7628]" />
            <span>Illustrative client feedback placeholders ready for genuine client testimonials</span>
          </div>
        </div>

        {/* Testimonials Grid & Carousel on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={t.id}
              className="metallic-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group transition-all duration-300 hover:border-[#FF7628]/50"
            >
              {/* Quote Mark */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="h-8 w-8 text-[#FF7628]/40 group-hover:text-[#FF7628] transition-colors" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A8B0B9] bg-[#111820] px-2.5 py-1 rounded border border-[#29333D]">
                  {t.projectType}
                </span>
              </div>

              {/* Comment */}
              <p className="text-sm text-[#C5CCD3] leading-relaxed italic mb-6">
                &ldquo;{t.comment}&rdquo;
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#29333D]/60 flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-[#29333D] bg-[#111820] shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white group-hover:text-[#FFB86C] transition-colors">
                    {t.name}
                  </h3>
                  <p className="text-xs text-[#A8B0B9]">
                    {t.role} • {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Distinctive Section Banner: "Every Project Matters. Every Customer Matters." */}
        <div className="mt-16 rounded-2xl border border-[#29333D] bg-gradient-to-r from-[#111820] via-[#161E27] to-[#111820] p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 translate-x-12 -translate-y-12 h-48 w-48 rounded-full bg-[#FF7628]/10 blur-2xl pointer-events-none" />
          
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
            &ldquo;Every Project Matters. <span className="welding-gradient-text">Every Customer Matters.</span>&rdquo;
          </h3>
          <p className="max-w-2xl mx-auto mt-3 text-sm text-[#A8B0B9]">
            Whether it is a single entrance handrail, custom laser-cut tree gate, or complete
            commercial staircase balustrade, Logeshwaran Welding & Fabrication gives every single weld
            the highest degree of attention and precision.
          </p>
        </div>
      </div>
    </section>
  );
}

