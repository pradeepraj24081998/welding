"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import BrandLogo from "@/components/BrandLogo";
import { Phone, MessageCircle, Menu, X, Sparkles, Globe } from "lucide-react";

export default function Navbar() {
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const t = TRANSLATIONS[language];
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav.home, href: "#hero", id: "hero" },
    { name: t.nav.services, href: "#services", id: "services" },
    { name: t.nav.projects, href: "#projects", id: "projects" },
    { name: t.nav.whyUs, href: "#why-choose-us", id: "why-choose-us" },
    { name: t.nav.process, href: "#process", id: "process" },
    { name: t.nav.contact, href: "#contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["hero", "services", "projects", "why-choose-us", "process", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#080B0F]/95 backdrop-blur-md border-b border-[#29333D] shadow-2xl py-3"
            : "bg-gradient-to-b from-[#080B0F]/95 via-[#080B0F]/60 to-transparent py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="#hero"
              className="group flex shrink-0 items-center gap-3 transition-transform duration-200 hover:scale-[1.01]"
            >
              <BrandLogo size={42} />

              <div className="flex flex-col text-left">
                <span className="font-display text-base sm:text-lg font-extrabold tracking-wider text-white uppercase group-hover:text-[#FFB86C] transition-colors leading-tight">
                  {language === "ta" ? "புஜண்டமகான்" : "BUJANDAMAHAN"}
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#FF7628] uppercase flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-[#FF7628]" />
                  Plumbing, Steel & Fabrication
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 rounded-full border border-[#29333D]/80 bg-[#111820]/80 p-1 backdrop-blur-md shadow-inner shrink-0">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? "bg-[#FF7628] text-white shadow-md shadow-[#FF7628]/25"
                        : "text-[#C5CCD3] hover:text-white hover:bg-[#1E293B]/60"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions: Language Switcher + Call / WhatsApp CTA */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Language Switcher Pill */}
              <button
                onClick={toggleLanguage}
                title="Switch Language / மொழியை மாற்ற"
                aria-label="Switch Language"
                className="flex items-center gap-1.5 rounded-full border border-[#384654] bg-[#161E27]/90 px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-bold text-white shadow-sm hover:border-[#FF7628] hover:bg-[#1F2937] transition-all shrink-0 whitespace-nowrap"
              >
                <Globe className="h-3.5 w-3.5 text-[#FF7628]" />
                <span className={language === "ta" ? "text-[#FF8F3D]" : "text-[#A8B0B9]"}>தமிழ்</span>
                <span className="text-[#384654]">/</span>
                <span className={language === "en" ? "text-[#FF8F3D]" : "text-[#A8B0B9]"}>EN</span>
              </button>

              {/* Call Direct Button */}
              <a
                href={`tel:${SITE_DATA.phones[0].primary}`}
                className="hidden xl:inline-flex items-center gap-2 rounded-lg border border-[#29333D] bg-[#161E27] px-3.5 py-2 text-xs font-semibold text-white hover:border-[#FF7628]/50 hover:bg-[#1F2937] transition-all shadow-sm whitespace-nowrap shrink-0"
              >
                <Phone className="h-3.5 w-3.5 text-[#FF7628] shrink-0" />
                <span className="whitespace-nowrap tracking-wide">{SITE_DATA.phones[0].display}</span>
              </a>

              {/* WhatsApp Quick CTA */}
              <a
                href={getWhatsAppUrl(
                  language === "ta"
                    ? "வணக்கம் புஜண்டமகான், எனது தேவைக்கான வேலை விவரம் மற்றும் விலை அறிய விரும்புகிறேன்."
                    : "Hello Bujandamahan, I would like to get a quote for your services."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FF7628] px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-[#FF7628]/25 hover:bg-[#FF8F3D] active:scale-95 transition-all whitespace-nowrap shrink-0"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span className="hidden md:inline whitespace-nowrap">{t.nav.whatsapp}</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Mobile Menu"
                className="inline-flex lg:hidden items-center justify-center rounded-lg border border-[#29333D] bg-[#161E27] p-2 text-[#C5CCD3] hover:text-white hover:border-[#384654] transition-colors"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080B0F]/95 backdrop-blur-xl lg:hidden pt-20 px-6 pb-8 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Language Switcher inside Mobile Menu */}
            <div className="flex items-center justify-between rounded-xl border border-[#29333D] bg-[#111820] p-3">
              <span className="text-xs font-semibold text-[#A8B0B9] flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#FF7628]" />
                {language === "ta" ? "மொழியை தேர்வு செய்ய" : "Choose Language"}
              </span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setLanguage("ta")}
                  className={`px-3 py-1 text-xs font-bold rounded-lg ${
                    language === "ta" ? "bg-[#FF7628] text-white" : "text-[#A8B0B9] bg-[#161E27]"
                  }`}
                >
                  தமிழ்
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 text-xs font-bold rounded-lg ${
                    language === "en" ? "bg-[#FF7628] text-white" : "text-[#A8B0B9] bg-[#161E27]"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-[#C5CCD3] hover:bg-[#161E27] hover:text-white transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#FF7628]">→</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Bottom Contact Actions */}
          <div className="space-y-3 pt-6 border-t border-[#29333D]">
            <a
              href={`tel:${SITE_DATA.phones[0].primary}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#161E27] border border-[#384654] py-3 text-sm font-bold text-white shadow-md"
            >
              <Phone className="h-4 w-4 text-[#FF7628]" />
              <span>{SITE_DATA.phones[0].display}</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#FF7628] py-3 text-sm font-bold text-white shadow-lg shadow-[#FF7628]/30"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t.hero.ctaPrimary}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
