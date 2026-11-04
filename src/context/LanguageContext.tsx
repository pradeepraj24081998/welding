"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "ta" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}  

const LanguageContext = createContext<LanguageContextType>({
  language: "ta",
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to Tamil 'ta' as requested by the user
  const [language, setLanguageState] = useState<Language>("ta");

  useEffect(() => {
    // Check saved preference in localStorage
    const saved = localStorage.getItem("welding_lang") as Language | null;
    if (saved === "ta" || saved === "en") {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    } else {
      // default is 'ta'
      document.documentElement.lang = "ta";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("welding_lang", lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore local storage errors
    }
  };

  const toggleLanguage = () => {
    const next = language === "ta" ? "en" : "ta";
    setLanguage(next);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

