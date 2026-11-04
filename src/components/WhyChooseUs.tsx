"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { ShieldCheck, Sparkles, CheckCircle2, MessageCircle, Phone } from "lucide-react";

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="why-choose-us" className="relative py-20 sm:py-28 bg-[#080B0F] overflow-hidden">
      <div className="absolute inset-0 bg-industrial-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#FF7628]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image and quick info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
              <Sparkles className="h-3 w-3" />
              <span>{t.whyUs.badge}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight">
              {t.whyUs.title}
            </h2>

            <p className="text-sm sm:text-base text-[#A8B0B9] leading-relaxed">
              {t.whyUs.subtitle}
            </p>

            {/* High quality workshop photo */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-[#29333D] shadow-xl group">
              <Image
                src="/images/welding/workshop-artisan-welder.jpg"
                alt="Master Welder at Logeshwaran Workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F] via-[#080B0F]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono text-[#FF7628] uppercase font-semibold">
                  {language === "ta" ? "நேரடி மேற்பார்வை" : "Owner Supervised"}
                </span>
                <p className="text-xs text-[#C5CCD3] mt-0.5 font-medium">
                  {language === "ta" ? "உயர்ந்த கூட்டு பலம் & கண்ணுக்குத் தெரியாத வெல்டிங் இணைப்புகள்" : "High weld penetration & seamless finishing"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Value Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.whyUs.items.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#29333D] bg-[#111820]/90 p-5 space-y-2.5 transition-all duration-300 hover:border-[#FF7628]/50 hover:bg-[#161E27]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF7628]/10 text-[#FF7628] border border-[#FF7628]/25">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white pt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A8B0B9] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Quick Contact CTA Strip */}
            <div className="sm:col-span-2 rounded-2xl border border-[#384654] bg-[#161E27] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono text-[#FF7628] uppercase">
                  {language === "ta" ? "நேரடி தொடர்பு" : "Need Quick Consultation?"}
                </p>
                <p className="text-sm font-bold text-white">
                  {language === "ta" ? "அளவீடு & விலை விவரம் பெற உடனே பேசலாம்" : "Get Free Measurement & Estimate Today"}
                </p>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:${SITE_DATA.phones[0].primary}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#FF7628] px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-[#FF8F3D] transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>{SITE_DATA.phones[0].display}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
