"use client";

import React from "react";
import Image from "next/image";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import HeroSparkCanvas from "@/components/HeroSparkCanvas";
import MetallicBeam3D from "@/components/MetallicBeam3D";
import { ArrowRight, MapPin, Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24 bg-[#080B0F]"
    >
      {/* Background Hero Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/welding-sparks-hero.jpg"
          alt="Professional Stainless Steel Welding in Industrial Workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F] via-[#080B0F]/80 to-[#080B0F]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B0F] via-[#080B0F]/85 to-transparent" />
        <div className="absolute inset-0 bg-industrial-grid opacity-25 pointer-events-none" />
      </div>

      {/* Sparks Canvas */}
      <HeroSparkCanvas />

      {/* Main Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-8 text-left space-y-6">
            {/* Location & Brand Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#29333D] bg-[#111820]/90 px-4 py-1.5 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#FF7628] animate-ping" />
              <MapPin className="h-3.5 w-3.5 text-[#FF7628]" />
              <span className="font-mono text-xs font-semibold tracking-wider text-[#C5CCD3] uppercase">
                {language === "ta" ? SITE_DATA.location.badgeTa : SITE_DATA.location.badge}
              </span>
              <span className="text-[#384654]">•</span>
              <span className="text-xs text-[#A8B0B9] font-medium hidden sm:inline">
                {t.hero.badgeSubtitle}
              </span>
            </div>

            {/* Main Punchy Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.12]">
              <span className="block text-white">{t.hero.title1}</span>
              <span className="block welding-gradient-text">{t.hero.titleHighlight}</span>
              <span className="block text-[#C5CCD3] text-2xl sm:text-3xl md:text-4xl mt-1 font-semibold normal-case">
                {t.hero.title2}
              </span>
            </h1>

            {/* Simple, Effective Supporting Text */}
            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#A8B0B9] font-normal leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Highlights Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-[#C5CCD3]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#FF7628] shrink-0" />
                <span>{t.hero.feature1}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#FF7628] shrink-0" />
                <span>{t.hero.feature2}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#FF7628] shrink-0" />
                <span>{t.hero.feature3}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={getWhatsAppUrl(
                  language === "ta"
                    ? "வணக்கம் லோகேஸ்வரன் வெல்டிங், எனது வீட்டிற்கு/கட்டிடத்திற்கு வெல்டிங் வேலை செய்ய வேண்டும். விலை விவரம் கூறவும்."
                    : "Hello Logeshwaran Welding, I need a quotation for welding and fabrication work."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#FF7628] to-[#FF8F3D] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#FF7628]/25 hover:shadow-[#FF7628]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={`tel:${SITE_DATA.phones[0].primary}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#384654] bg-[#161E27]/90 px-6 py-3.5 text-sm font-semibold text-white hover:border-[#FF7628] hover:bg-[#1E293B] hover:text-[#FFB86C] transition-all"
              >
                <Phone className="h-4 w-4 text-[#FF7628]" />
                <span>{SITE_DATA.phones[0].display}</span>
              </a>
            </div>

            {/* Phone numbers quick call bar */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-[#A8B0B9]">
              <span className="font-semibold text-white">{t.hero.directCall}</span>
              {SITE_DATA.phones.map((phone, idx) => (
                <a
                  key={phone.primary}
                  href={`tel:${phone.primary}`}
                  className="rounded-md bg-[#161E27] px-2.5 py-1 text-[#C5CCD3] border border-[#29333D] hover:border-[#FF7628] hover:text-white transition-colors"
                >
                  {phone.display}
                  {idx === 0 && <span className="ml-1 text-[#FF7628]">★</span>}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Metallic Beam interactive visual */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <MetallicBeam3D />
          </div>
        </div>
      </div>
    </section>
  );
}
