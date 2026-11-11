"use client";

import React from "react";
import Image from "next/image";
import { SERVICES_DATA, ServiceItem } from "@/data/services";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import {
  MessageCircle,
  Phone,
  Sparkles,
  Check,
  Images,
  ArrowRight,
  Shield,
  Layers
} from "lucide-react";

export default function Services() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const handleViewGalleryCategory = (categoryKey: string) => {
    // Dispatch custom event for gallery tab sync
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("filter-gallery", { detail: categoryKey })
      );
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#080B0F] overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[800px] rounded-full bg-[#FF7628]/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
              <Sparkles className="h-3 w-3" />
              <span>
                {language === "ta" ? "எங்களின் 5 முதன்மை சேவைகள்" : "5 Core Specialized Services"}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              {language === "ta" ? (
                <>
                  தொழில்முறை வெல்டிங், <br />
                  <span className="welding-gradient-text">ஃபேப்ரிகேஷன் & பிளம்பிங்</span>
                </>
              ) : (
                <>
                  Precision Fabrication, <br />
                  <span className="welding-gradient-text">Gates & Plumbing Services</span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-[#A8B0B9] leading-relaxed">
              {language === "ta"
                ? "பிளம்பிங், ஸ்டீல் கிரில் கேட், மெட்டல் ஃபேப்ரிகேஷன், SS கேட்டுகள் மற்றும் கொசு வலை அமைப்புகள் — ஒவ்வொன்றிற்கும் பிரத்யேகமான நிபுணத்துவ வேலைப்பாடு."
                : "Dedicated craftsmanship across plumbing, custom steel grill gates, structural fabrication, luxury stainless steel gates, and residential mosquito net systems."}
            </p>
          </div>

          <div className="hidden sm:block text-right">
            <span className="text-xs font-mono text-[#A8B0B9] uppercase block">
              {language === "ta" ? "நேரடி பட்டறை & ஆன்-சைட் சர்வீஸ்" : "Workshop Craft & On-Site Service"}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#FF8F3D]">
              Thuraiyur • Trichy • Tamil Nadu
            </span>
          </div>
        </div>

        {/* 5 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, idx) => {
            const serviceTitle = service.title[language];
            const serviceDesc = service.shortDescription[language];
            const features = service.features[language];
            const isFeatured = idx === 0 || idx === 2; // Plumber and Fabrication featured wider on desktop if desired

            const whatsappMessage =
              language === "ta"
                ? `வணக்கம் லோகேஸ்வரன் வெல்டிங், "${serviceTitle}" சேவைக்கான விலை மற்றும் கூடுதல் விவரங்கள் அறிய விரும்புகிறேன்.`
                : `Hello Logeshwaran Welding, I would like to inquire about your "${serviceTitle}" service. Please share details and pricing.`;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#29333D] bg-[#111820] overflow-hidden transition-all duration-300 hover:border-[#FF7628]/60 hover:shadow-2xl hover:shadow-[#FF7628]/10"
              >
                {/* Image Section */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#080B0F]">
                  <Image
                    src={service.primaryImage}
                    alt={serviceTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-[#111820]/30 to-transparent" />

                  {/* Grade Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md border border-[#384654]/80 bg-[#080B0F]/90 px-2.5 py-1 text-[11px] font-mono font-semibold text-[#FF8F3D] backdrop-blur-md">
                      {service.recommendedGrade}
                    </span>
                  </div>

                  {/* Photo count indicator */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 rounded-md border border-[#29333D] bg-[#080B0F]/90 px-2 py-0.5 text-[10px] font-semibold text-[#C5CCD3] backdrop-blur-md">
                      <Images className="h-3 w-3 text-[#FF7628]" />
                      <span>{service.galleryImages.length} Photos</span>
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#FFB86C] transition-colors line-clamp-1">
                      {serviceTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A8B0B9] line-clamp-3 leading-relaxed">
                      {serviceDesc}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-1.5 pt-2 border-t border-[#29333D]/70 text-xs text-[#C5CCD3]">
                    {features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 line-clamp-1">
                        <Check className="h-3.5 w-3.5 text-[#FF7628] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Gallery Thumbnail Preview Row */}
                  <div className="pt-2 border-t border-[#29333D]/50">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#7A889B] mb-2 flex items-center justify-between">
                      <span>{language === "ta" ? "படங்கள் முன்னோட்டம்:" : "Sample Works Preview:"}</span>
                      <span className="text-[#FF7628]">{service.galleryImages.length} images</span>
                    </p>
                    <div className="grid grid-cols-5 gap-1.5">
                      {service.galleryImages.map((thumbUrl, tIdx) => (
                        <div
                          key={tIdx}
                          onClick={() => handleViewGalleryCategory(service.categoryKey)}
                          className="relative h-11 rounded-md overflow-hidden border border-[#29333D] cursor-pointer hover:border-[#FF7628] transition-all hover:scale-105"
                          title="Click to view in gallery"
                        >
                          <Image
                            src={thumbUrl}
                            alt={`${serviceTitle} preview ${tIdx + 1}`}
                            fill
                            sizes="60px"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 space-y-2">
                    {/* View More Images Button */}
                    <button
                      type="button"
                      onClick={() => handleViewGalleryCategory(service.categoryKey)}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#161E27] border border-[#384654] py-2.5 px-3 text-xs font-semibold text-white hover:border-[#FF7628] hover:text-[#FF8F3D] hover:bg-[#1E293B] transition-all shadow-sm"
                    >
                      <Images className="h-3.5 w-3.5 text-[#FF7628]" />
                      <span>{language === "ta" ? "அனைத்து படங்களையும் காண்க" : "View All Images & Details"}</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>

                    <div className="flex items-center gap-2">
                      {/* WhatsApp Enquiry Button */}
                      <a
                        href={getWhatsAppUrl(whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#FF7628] to-[#FF8F3D] py-2.5 px-3 text-xs font-bold text-white shadow-md hover:shadow-lg hover:shadow-[#FF7628]/25 transition-all"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>{language === "ta" ? "வாட்ஸ்அப் விலை கேட்க" : "WhatsApp Enquiry"}</span>
                      </a>

                      {/* Direct Call Button */}
                      <a
                        href={`tel:${SITE_DATA.phones[0].primary}`}
                        title="Direct Call"
                        className="flex items-center justify-center rounded-xl bg-[#161E27] border border-[#384654] p-2.5 text-[#C5CCD3] hover:text-[#FF7628] hover:border-[#FF7628] transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                      </a>
                    </div>
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
