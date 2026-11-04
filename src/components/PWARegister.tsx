"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function PWARegister() {
  const { language } = useLanguage();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // 1. Register Service Worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("PWA Service Worker registered with scope:", registration.scope);
          })
          .catch((error) => {
            console.log("PWA Service Worker registration failed:", error);
          });
      });
    }

    // 2. Capture install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show prompt banner after a brief delay if user hasn't dismissed before
      const dismissed = sessionStorage.getItem("pwa_banner_dismissed");
      if (!dismissed) {
        setTimeout(() => setShowBanner(true), 3000);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === "accepted") {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    sessionStorage.setItem("pwa_banner_dismissed", "true");
  };

  if (!showBanner || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-40 mx-auto max-w-md sm:bottom-6 sm:left-auto sm:right-6 animate-bounce-subtle">
      <div className="flex items-center justify-between gap-3 rounded-xl border border-[#FF7628]/40 bg-[#111820]/95 p-3.5 shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF7628]/20 text-[#FF7628] border border-[#FF7628]/30">
            <Download className="h-5 w-5" />
          </div>
          <div className="text-left text-xs">
            <p className="font-semibold text-white">
              {language === "ta" ? "போனில் இன்ஸ்டால் செய்ய" : "Install Mobile App"}
            </p>
            <p className="text-[#A8B0B9] text-[11px]">
              {language === "ta" ? "வேகமான அணுகல் மற்றும் ஆஃப்லைன் சேவைக்கு" : "Fast one-tap access & offline support"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleInstallClick}
            className="rounded-lg bg-[#FF7628] px-3 py-1.5 text-xs font-bold text-white shadow-md hover:bg-[#FF8F3D] transition-colors"
          >
            {language === "ta" ? "சேர்" : "Install"}
          </button>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss banner"
            className="p-1 text-[#A8B0B9] hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

