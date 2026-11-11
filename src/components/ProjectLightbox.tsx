"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ProjectItem } from "@/data/projects";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Shield,
  Phone,
  Tag
} from "lucide-react";

interface ProjectLightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ProjectLightbox({
  project,
  onClose,
  onPrev,
  onNext,
}: ProjectLightboxProps) {
  const { language } = useLanguage();

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose, onPrev, onNext]);

  if (!project) return null;

  const title = project.title[language];
  const desc = project.description[language];
  const loc = project.location[language];
  const features = project.features[language];
  const catLabel = project.categoryLabel[language];

  const whatsappMessage =
    language === "ta"
      ? `வணக்கம் புஜண்டமகான், "${title}" (${catLabel}) வேலை பற்றிய விலை மற்றும் கூடுதல் விவரங்கள் அறிய விரும்புகிறேன்.`
      : `Hello Bujandamahan Plumbing, Steel & Fabrication, I am interested in "${title}" (${catLabel}). Please share quotation and details.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-h-[94vh] w-full max-w-5xl rounded-2xl border border-[#29333D] bg-[#0E151E] shadow-2xl overflow-hidden flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#161E27]/90 border border-[#384654] text-[#C5CCD3] hover:text-white hover:border-[#FF7628] hover:bg-[#FF7628] transition-all shadow-lg"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Media Preview Section */}
        <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[500px] lg:w-3/5 bg-[#05080C] flex items-center justify-center">
          <Image
            src={project.image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-contain"
            priority
          />

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between pointer-events-none">
            <button
              type="button"
              onClick={onPrev}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#111820]/85 border border-[#29333D] text-white hover:bg-[#FF7628] hover:border-[#FF7628] transition-all shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#111820]/85 border border-[#29333D] text-white hover:bg-[#FF7628] hover:border-[#FF7628] transition-all shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:w-2/5 border-t lg:border-t-0 lg:border-l border-[#29333D] overflow-y-auto max-h-[50vh] lg:max-h-none">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#FF7628]/40 bg-[#FF7628]/10 px-3 py-1 text-xs font-semibold text-[#FF8F3D]">
                <Tag className="h-3.5 w-3.5" />
                {catLabel}
              </span>
              <span className="text-xs font-mono text-[#7A889B]">•</span>
              <span className="text-xs text-[#A8B0B9] font-medium">
                {language === "ta" ? "புஜண்டமகான்" : "Bujandamahan Works"}
              </span>
            </div>

            <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
              {title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-[#A8B0B9]">
              <MapPin className="h-3.5 w-3.5 text-[#FF7628] shrink-0" />
              <span>{loc} • {SITE_DATA.location.city}</span>
            </div>

            <p className="text-xs sm:text-sm text-[#A8B0B9] leading-relaxed">
              {desc}
            </p>

            {/* Features Specifications */}
            <div className="space-y-2 pt-3 border-t border-[#29333D]">
              <h4 className="text-xs font-mono uppercase text-[#C5CCD3]">
                {language === "ta" ? "சிறப்பம்சங்கள்:" : "Key Specifications:"}
              </h4>
              <ul className="space-y-2 text-xs text-[#A8B0B9]">
                {features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FF7628] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 space-y-2.5 border-t border-[#29333D] mt-4">
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF7628] to-[#FF8F3D] py-3 px-4 text-xs font-bold text-white shadow-lg shadow-[#FF7628]/25 hover:shadow-[#FF7628]/40 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{language === "ta" ? "வாட்ஸ்அப்பில் விலை கேட்க" : "Inquire on WhatsApp"}</span>
            </a>

            <a
              href={`tel:${SITE_DATA.phones[0].primary}`}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#161E27] border border-[#384654] py-3 px-4 text-xs font-semibold text-white hover:border-[#FF7628] hover:text-[#FF8F3D] transition-colors"
            >
              <Phone className="h-4 w-4 text-[#FF7628]" />
              <span>{language === "ta" ? "உடனே போன் செய்ய" : `Call ${SITE_DATA.phones[0].display}`}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
