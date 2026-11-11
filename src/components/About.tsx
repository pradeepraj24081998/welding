"use client";

import React from "react";
import Image from "next/image";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Hammer, ShieldCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  const { language } = useLanguage();

  const points = language === "ta" ? [
    {
      title: "நேரடி பட்டறை & கைதேர்ந்த உழைப்பு",
      desc: "இடைத்தரகர் இன்றி எங்கள் சொந்த பட்டறையிலேயே முழு தயாரிப்பும் தரமான முறையில் செய்யப்படுகிறது.",
      icon: Hammer
    },
    {
      title: "SS 304 / 316 தரமான ஸ்டீல்",
      desc: "துருப்பிடிக்காத உயர்தர மூலப்பொருட்கள் மற்றும் துல்லியமான TIG வெல்டிங் இணைப்புகள்.",
      icon: ShieldCheck
    },
    {
      title: "சரியான நேரத்தில் துரித சர்வீஸ்",
      desc: "துறையூர் மற்றும் திருச்சி சுற்றுவட்டார பகுதிகளில் உடனடியாக அளவெடுத்து சொன்ன தேதியில் பொருத்தி தருகிறோம்.",
      icon: Clock
    }
  ] : [
    {
      title: "In-House Workshop Craftsmanship",
      desc: "Fabricated directly in our dedicated workshop with master-level attention to detail.",
      icon: Hammer
    },
    {
      title: "Certified SS 304 / 316 Stainless Steel",
      desc: "Tested rust-proof raw materials and flawless argon TIG weld joints.",
      icon: ShieldCheck
    },
    {
      title: "Prompt On-Site Delivery & Setup",
      desc: "Accurate site measurement and fast, hassle-free installation across Thuraiyur & Trichy.",
      icon: Clock
    }
  ];

  return (
    <section id="about" className="relative py-20 sm:py-24 bg-[#0B1017] border-t border-[#29333D]/60 overflow-hidden">
      <div className="absolute top-1/4 right-0 -z-10 h-80 w-80 rounded-full bg-[#FF7628]/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Workshop Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[440px] w-full rounded-2xl overflow-hidden border border-[#29333D] shadow-2xl group">
              <Image
                src="/images/projects/real-project-3-ss-main-gate-workshop.jpg"
                alt="Logeshwaran Workshop Stainless Steel Gate Fabrication"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F] via-transparent to-transparent opacity-80" />

              <div className="absolute top-4 left-4 rounded-md border border-[#FF7628]/40 bg-[#080B0F]/90 px-3 py-1.5 backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FF8F3D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF7628] animate-pulse" />
                  <span>
                    {language === "ta" ? "எங்கள் சொந்த பட்டறை • துறையூர்" : "Direct Workshop • Thuraiyur"}
                  </span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-mono text-[#A8B0B9] uppercase">
                  {language === "ta" ? "உரிமையாளர் நேரடி மேற்பார்வை" : "Direct Owner Supervision"}
                </p>
                <p className="text-sm font-semibold text-white">
                  {language === "ta" ? "லோகேஸ்வரன் வெல்டிங் & ஃபேப்ரிகேஷன்" : "Logeshwaran Welding & Fabrication"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Punchy Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
              <Sparkles className="h-3 w-3" />
              <span>{language === "ta" ? "எங்களைப் பற்றி" : "About Us"}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight">
              {language === "ta" ? (
                <>
                  நேர்த்தியான உழைப்பு. <br />
                  <span className="welding-gradient-text">நம்பகமான வெல்டிங் தரம்.</span>
                </>
              ) : (
                <>
                  Crafting Strength. <br />
                  <span className="welding-gradient-text">Creating Perfection.</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-[#A8B0B9] leading-relaxed">
              {language === "ta"
                ? "லோகேஸ்வரன் வெல்டிங் & ஃபேப்ரிகேஷன்-ல் வாடிக்கையாளரின் திருப்தியே எங்களின் முதல் இலக்கு. பிரீமியம் SS 304 ஸ்டீல் கேட், நவீன ஸ்டீல் கிரில் கேட், மெட்டல் ஃபேப்ரிகேஷன், பிளம்பிங் (Plumbing Works) மற்றும் கொசு வலை (Mosquito Nets) அமைத்தல் என அனைத்தையும் உறுதியாகவும் துல்லியமாகவும் செய்து தருகிறோம்."
                : "At Logeshwaran Welding & Fabrication, we focus on rock-solid durability and clean aesthetics. From premium SS 304 gates and modern steel grill gates to custom metal fabrication, professional plumbing solutions, and insect-proof mosquito net installations, we deliver reliable craftsmanship tailored to your building."}
            </p>

            {/* 3 Simple Value Points */}
            <div className="space-y-3 pt-2">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 rounded-xl border border-[#29333D]/70 bg-[#161E27]/50 p-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF7628]/15 text-[#FF7628] border border-[#FF7628]/30">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{pt.title}</h4>
                      <p className="text-xs text-[#A8B0B9] mt-0.5">{pt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <a
                href={`tel:${SITE_DATA.phones[0].primary}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#FF7628] px-5 py-3 text-xs font-bold text-white shadow-lg shadow-[#FF7628]/20 hover:bg-[#FF8F3D] transition-colors"
              >
                <span>{language === "ta" ? "நேரடி ஆலோசனை பெற" : "Consult Directly"}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
