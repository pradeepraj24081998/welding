"use client";

import React, { useState } from "react";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  const message =
    language === "ta"
      ? "வணக்கம் புஜண்டமகான், எனது தேவைக்கான வேலை விவரம் மற்றும் விலை அறிய விரும்புகிறேன்."
      : "Hello Bujandamahan Plumbing, Steel & Fabrication, I would like to discuss my project.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Greeting Bubble */}
      {showTooltip && (
        <div className="relative mb-3 hidden sm:flex items-center gap-2 rounded-xl border border-[#29333D] bg-[#111820]/95 px-4 py-2 text-xs shadow-2xl backdrop-blur-md text-white">
          <span className="flex h-2 w-2 rounded-full bg-[#25D366] animate-ping" />
          <span>
            {language === "ta" ? (
              <>வாட்ஸ்அப்பில் விலை கேட்க: <strong>லோகேஸ்வரன்</strong></>
            ) : (
              <>Need a quick quote? Chat with <strong>Logeshwaran</strong></>
            )}
          </span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="ml-2 text-[#718096] hover:text-white"
            aria-label="Dismiss tooltip"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        <MessageCircle className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  );
}
