"use client";

import React from "react";
import Link from "next/link";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { SERVICES_DATA } from "@/data/services";
import {
  Sparkles,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUp,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05080C] border-t border-[#29333D] text-[#A8B0B9] pt-16 pb-12 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-industrial-grid opacity-10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#29333D]">
          {/* Column 1: Brand Info (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#161E27] border border-[#384654] text-[#FF7628]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <span className="font-display text-lg font-bold text-white tracking-wider uppercase block leading-none">
                  LOGESHWARAN
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-[#FF7628] uppercase">
                  WELDING & FABRICATION
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A8B0B9] leading-relaxed pt-2">
              High-precision stainless steel staircase railings, architectural balcony grills,
              custom CNC laser-cut decorative metal panels, and commercial welding services based in
              Thuraiyur, Tiruchirappalli.
            </p>

            <div className="pt-2 text-xs text-[#C5CCD3] space-y-1">
              <p className="font-semibold text-white">Proprietor: {SITE_DATA.owner}</p>
              <p className="text-[#A8B0B9]">Quality Metalwork & Architectural Fabrication</p>
            </div>
          </div>

          {/* Column 2: Quick Links (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#hero" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  Real Projects
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-white transition-colors">
                  Work Process
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Fabrication Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href="#services" className="hover:text-[#FF8F3D] transition-colors truncate block">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Workshop (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Contact & Workshop
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#FF7628] shrink-0 mt-0.5" />
                <span>
                  {SITE_DATA.location.city}, {SITE_DATA.location.district},{" "}
                  {SITE_DATA.location.state}, India
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono">
                <Phone className="h-4 w-4 text-[#FF7628] shrink-0" />
                <a
                  href={`tel:${SITE_DATA.phones[0].primary}`}
                  className="text-white hover:text-[#FF7628] font-bold"
                >
                  {SITE_DATA.phones[0].display}
                </a>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px]">
                <Phone className="h-3.5 w-3.5 text-[#384654] shrink-0" />
                <a href={`tel:${SITE_DATA.phones[1].primary}`} className="hover:text-white">
                  {SITE_DATA.phones[1].display}
                </a>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px]">
                <Phone className="h-3.5 w-3.5 text-[#384654] shrink-0" />
                <a href={`tel:${SITE_DATA.phones[2].primary}`} className="hover:text-white">
                  {SITE_DATA.phones[2].display}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hello Logeshwaran, I would like to get in touch.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FF7628] px-3.5 py-2 text-xs font-bold text-white shadow-md hover:bg-[#FF5400] transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#718096]">
          <p>
            &copy; 2026 Logeshwaran Welding & Fabrication. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">Thuraiyur • Tiruchirappalli</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 rounded-md border border-[#29333D] bg-[#111820] px-3 py-1.5 text-xs text-[#C5CCD3] hover:text-white hover:border-[#FF7628] transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
