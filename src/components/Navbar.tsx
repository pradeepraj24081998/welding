"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { Phone, MessageCircle, Menu, X, Shield, Sparkles } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
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
            ? "bg-[#080B0F]/95 backdrop-blur-md border-b border-[#29333D] shadow-2xl py-3.5"
            : "bg-gradient-to-b from-[#080B0F]/90 via-[#080B0F]/50 to-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="#hero"
              className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.01]"
            >
              <div className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#1E293B] via-[#161E27] to-[#0F172A] border border-[#384654] shadow-md group-hover:border-[#FF7628]/60 transition-colors">
                <Sparkles className="h-5 w-5 text-[#FF7628] animate-pulse" />
                <div className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-[#FF7628] ring-2 ring-[#080B0F]" />
              </div>

              <div className="flex flex-col text-left">
                <span className="font-display text-lg font-bold tracking-wider text-white uppercase group-hover:text-[#FFB86C] transition-colors leading-tight">
                  LOGESHWARAN
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-[#A8B0B9] uppercase flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-[#FF7628]" />
                  WELDING & FABRICATION
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-md ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-[#A8B0B9] hover:text-white hover:bg-[#161E27]/60"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#FF7628] to-transparent" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Quick Contact & Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Call Now */}
              <a
                href={`tel:${SITE_DATA.phones[0].primary}`}
                className="flex items-center gap-2 rounded-lg border border-[#29333D] bg-[#161E27]/80 px-3.5 py-2 text-xs font-medium text-[#C5CCD3] hover:border-[#FF7628]/50 hover:text-white transition-all duration-200"
                title="Call Logeshwaran"
              >
                <Phone className="h-3.5 w-3.5 text-[#FF7628]" />
                <span className="hidden md:inline font-mono">{SITE_DATA.phones[0].display}</span>
                <span className="md:hidden">Call</span>
              </a>

              {/* WhatsApp Quote CTA */}
              <a
                href={getWhatsAppUrl("Hello Logeshwaran, I would like to get a quote for welding & fabrication work.")}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FF7628] to-[#FF5400] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#FF7628]/25 hover:shadow-[#FF7628]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Quote</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg border border-[#29333D] bg-[#161E27] text-[#C5CCD3] hover:text-white hover:border-[#FF7628]/60 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5 text-[#FF7628]" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0F1722] border-l border-[#29333D] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#29333D]">
                <div>
                  <span className="font-display text-base font-bold text-white tracking-wider">
                    LOGESHWARAN
                  </span>
                  <p className="text-[10px] tracking-wider text-[#FF7628] uppercase font-semibold">
                    Welding & Fabrication
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg p-2 text-[#A8B0B9] hover:bg-[#161E27] hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[#161E27] text-[#FF7628] font-semibold border-l-2 border-[#FF7628]"
                          : "text-[#A8B0B9] hover:bg-[#161E27]/50 hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#FF7628]" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Contact Actions */}
            <div className="pt-6 border-t border-[#29333D] space-y-3">
              <div className="text-xs text-[#A8B0B9] mb-2">
                <p className="font-semibold text-white">Thuraiyur, Trichy</p>
                <p className="font-mono text-[11px] text-[#C5CCD3] mt-0.5">+91 91503 75567</p>
              </div>

              <a
                href={`tel:${SITE_DATA.phones[0].primary}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#29333D] bg-[#161E27] py-2.5 text-xs font-medium text-white hover:border-[#FF7628]"
              >
                <Phone className="h-4 w-4 text-[#FF7628]" />
                <span>Call Directly</span>
              </a>

              <a
                href={getWhatsAppUrl("Hello Logeshwaran, I'd like to get a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#FF7628] to-[#FF5400] py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#FF7628]/30"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
