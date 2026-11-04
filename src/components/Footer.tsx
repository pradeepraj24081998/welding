"use client";

import React from "react";
import Link from "next/link";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { SERVICES_DATA } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { Sparkles, Phone, MapPin, Clock, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05080C] border-t border-[#29333D] text-[#A8B0B9] pt-14 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-industrial-grid opacity-10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#29333D]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#161E27] border border-[#384654] text-[#FF7628]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <span className="font-display text-base sm:text-lg font-bold text-white tracking-wider uppercase block leading-none">
                  {language === "ta" ? "லோகேஸ்வரன்" : "LOGESHWARAN"}
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#FF7628] uppercase">
                  {language === "ta" ? "வெல்டிங் & ஃபேப்ரிகேஷன்" : "WELDING & FABRICATION"}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A8B0B9] leading-relaxed">
              {t.footer.tagline}
            </p>

            <div className="text-xs text-[#C5CCD3] pt-1 space-y-1">
              <p className="font-semibold text-white">
                {language === "ta" ? "உரிமையாளர்: லோகேஸ்வரன்" : `Proprietor: ${SITE_DATA.owner}`}
              </p>
              <p className="text-[#A8B0B9]">
                {language === "ta" ? "துறையூர் & திருச்சி மாவட்டம்" : "Thuraiyur & Tiruchirappalli District"}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#hero" className="hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="hover:text-white transition-colors">
                  {t.nav.whyUs}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.serviceList}
            </h4>
            <ul className="space-y-1.5 text-xs text-[#A8B0B9]">
              {SERVICES_DATA.slice(0, 5).map((srv) => (
                <li key={srv.id} className="line-clamp-1 hover:text-white transition-colors">
                  <Link href="#services">
                    • {srv.title[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${SITE_DATA.phones[0].primary}`}
                className="flex items-center gap-2 text-white hover:text-[#FF7628] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#FF7628]" />
                <span>{SITE_DATA.phones[0].display}</span>
              </a>
              <a
                href={`tel:${SITE_DATA.phones[1].primary}`}
                className="flex items-center gap-2 text-[#C5CCD3] hover:text-[#FF7628] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#A8B0B9]" />
                <span>{SITE_DATA.phones[1].display}</span>
              </a>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="h-3.5 w-3.5 text-[#FF7628] shrink-0 mt-0.5" />
                <span className="text-[#A8B0B9] text-[11px]">
                  {language === "ta" ? SITE_DATA.location.addressTa : SITE_DATA.location.address},{" "}
                  {language === "ta" ? SITE_DATA.location.cityTa : SITE_DATA.location.city},{" "}
                  {language === "ta" ? SITE_DATA.location.districtTa : SITE_DATA.location.district}.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A889B]">
          <p>
            © 2026 {language === "ta" ? SITE_DATA.nameTa : SITE_DATA.name}. {t.footer.rights}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-lg border border-[#29333D] bg-[#111820] px-3 py-1.5 text-xs text-[#C5CCD3] hover:text-white hover:border-[#FF7628] transition-colors"
          >
            <span>{language === "ta" ? "மேலே செல்ல" : "Back to top"}</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
