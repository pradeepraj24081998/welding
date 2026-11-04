"use client";

import React from "react";
import Image from "next/image";
import { SERVICES_DATA } from "@/data/services";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { MessageCircle, Phone, Sparkles, Check, ArrowRight } from "lucide-react";

export default function Services() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#080B0F] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[800px] rounded-full bg-[#FF7628]/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
              <Sparkles className="h-3 w-3" />
              <span>{t.services.badge}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              {t.services.title}
            </h2>
            <p className="text-sm sm:text-base text-[#A8B0B9] leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>

          <div className="hidden sm:block text-right">
            <span className="text-xs font-mono text-[#A8B0B9] uppercase block">
              {language === "ta" ? "நேரடி பட்டறை தயாரிப்பு" : "Direct Workshop Fabrication"}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#FF8F3D]">
              SS 304 • SS 316 • Mild Steel (MS)
            </span>
          </div>
        </div>

        {/* Multiple Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => {
            const serviceTitle = service.title[language];
            const serviceDesc = service.shortDescription[language];
            const features = service.features[language];

            const whatsappMessage =
              language === "ta"
                ? `வணக்கம் லோகேஸ்வரன் வெல்டிங், "${serviceTitle}" சேவைக்கான விலை மற்றும் விவரம் அறிய விரும்புகிறேன்.`
                : `Hello Logeshwaran Welding, I would like to inquire about "${serviceTitle}". Please share details and pricing.`;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#29333D] bg-[#111820] overflow-hidden transition-all duration-300 hover:border-[#FF7628]/60 hover:shadow-xl hover:shadow-[#FF7628]/10"
              >
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden bg-[#080B0F]">
                  <Image
                    src={service.image}
                    alt={serviceTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-[#111820]/30 to-transparent" />

                  {/* Grade Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md border border-[#384654]/80 bg-[#080B0F]/90 px-2.5 py-1 text-[10px] font-mono font-semibold text-[#C5CCD3] backdrop-blur-md">
                      {service.recommendedGrade}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-base font-bold text-white group-hover:text-[#FFB86C] transition-colors line-clamp-1">
                      {serviceTitle}
                    </h3>
                    <p className="text-xs text-[#A8B0B9] line-clamp-3 leading-relaxed">
                      {serviceDesc}
                    </p>
                  </div>

                  {/* Feature bullet list */}
                  <ul className="space-y-1.5 pt-2 border-t border-[#29333D]/60 text-[11px] text-[#C5CCD3]">
                    {features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1.5 line-clamp-1">
                        <Check className="h-3 w-3 text-[#FF7628] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Actions */}
                  <div className="pt-2 flex items-center gap-2">
                    <a
                      href={getWhatsAppUrl(whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-[#161E27] border border-[#384654] py-2 px-2.5 text-xs font-semibold text-white hover:bg-[#FF7628] hover:border-[#FF7628] transition-colors shadow-sm"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-[#FF7628] group-hover:text-white" />
                      <span>{t.services.getQuote}</span>
                    </a>

                    <a
                      href={`tel:${SITE_DATA.phones[0].primary}`}
                      title="Direct Call"
                      className="flex items-center justify-center rounded-lg bg-[#161E27] border border-[#384654] p-2 text-[#C5CCD3] hover:text-[#FF7628] hover:border-[#FF7628] transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
