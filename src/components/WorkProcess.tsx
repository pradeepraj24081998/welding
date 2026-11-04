"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { Sparkles, ArrowRight, Check } from "lucide-react";

export default function WorkProcess() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="process" className="relative py-20 sm:py-24 bg-[#0B1017] border-t border-[#29333D]/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
            <Sparkles className="h-3 w-3" />
            <span>{t.process.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight">
            {t.process.title}
          </h2>
          <p className="text-sm sm:text-base text-[#A8B0B9] leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {t.process.steps.map((st, idx) => (
            <div
              key={st.num}
              className="relative rounded-2xl border border-[#29333D] bg-[#111820] p-6 space-y-4 transition-all duration-300 hover:border-[#FF7628]/60 hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-extrabold text-[#FF7628]/40">
                  {st.num}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#161E27] border border-[#29333D] text-[#FF8F3D] text-xs font-bold">
                  ✓
                </span>
              </div>

              <h3 className="font-display text-base sm:text-lg font-bold text-white">
                {st.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#A8B0B9] leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
