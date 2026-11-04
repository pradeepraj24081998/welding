"use client";

import React from "react";
import Image from "next/image";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, Sparkles, ArrowRight } from "lucide-react";

export default function CTA() {
  const { language } = useLanguage();

  return (
    <section className="relative py-20 sm:py-28 bg-[#080B0F] overflow-hidden">
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
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FF7628]/40 bg-[#161E27]/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#FF8F3D] uppercase mb-6 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-[#FF7628] animate-pulse" />
          <span>
            {language === "ta" ? "நேரடி பட்டறை விலை • உறுதியான தரம்" : "Direct Workshop Rates • Uncompromised Quality"}
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.15]">
          {language === "ta" ? (
            <>
              உங்கள் கனவு இல்லத்திற்கு <br />
              <span className="welding-gradient-text">உறுதியான வெல்டிங் வேலைகள்</span>
            </>
          ) : (
            <>
              Let&apos;s Build Something <br />
              <span className="welding-gradient-text">Stronger Together.</span>
            </>
          )}
        </h2>

        {/* Supporting text */}
        <p className="max-w-2xl mx-auto mt-5 text-sm sm:text-base text-[#C5CCD3] leading-relaxed">
          {language === "ta"
            ? "ஸ்டெயின்லெஸ் ஸ்டீல் மாடி படிக்கட்டு, கேட், கிரில், லேசர் கட்டிங் பேனல் அல்லது தொழிற்சாலை ஷெட் - எதுவாக இருந்தாலும் உடனே அழையுங்கள். உங்கள் இடத்திற்கே வந்து அளவெடுத்து நேர்த்தியாக செய்து தருகிறோம்."
            : "Looking for durable stainless steel railings, custom gates, laser-cut panels, or industrial roofing? Contact us for a direct site measurement and upfront transparent quote."}
        </p>

        {/* Call & WhatsApp Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={getWhatsAppUrl(
              language === "ta"
                ? "வணக்கம் லோகேஸ்வரன் வெல்டிங், எனது தேவையை விவாதிக்க விரும்புகிறேன்."
                : "Hello Logeshwaran Welding, I would like to discuss my project."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#FF7628] to-[#FF8F3D] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#FF7628]/30 hover:shadow-[#FF7628]/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{language === "ta" ? "வாட்ஸ்அப்பில் விலை கேட்க" : "Get Quote on WhatsApp"}</span>
          </a>

          <a
            href={`tel:${SITE_DATA.phones[0].primary}`}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#384654] bg-[#161E27] px-7 py-3.5 text-sm font-bold text-white hover:border-[#FF7628] hover:bg-[#1A2430] transition-all"
          >
            <Phone className="h-4 w-4 text-[#FF7628]" />
            <span>{SITE_DATA.phones[0].display}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
