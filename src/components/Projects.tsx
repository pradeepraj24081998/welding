"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  PROJECTS_DATA,
  PROJECT_CATEGORIES,
  ProjectCategoryKey,
  ProjectItem
} from "@/data/projects";
import ProjectLightbox from "@/components/ProjectLightbox";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { Sparkles, Shield, Maximize2, MapPin, CheckCircle2, Images, ArrowRight } from "lucide-react";

export default function Projects() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryKey>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Listen for custom 'filter-gallery' event from Services section
  useEffect(() => {
    const handleFilterEvent = (e: Event) => {
      const customEvent = e as CustomEvent<ProjectCategoryKey>;
      if (customEvent.detail) {
        setActiveCategory(customEvent.detail);
      }
    };

    window.addEventListener("filter-gallery", handleFilterEvent);
    return () => window.removeEventListener("filter-gallery", handleFilterEvent);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (project: ProjectItem) => {
    const idx = filteredProjects.findIndex((p) => p.id === project.id);
    setActiveLightboxIndex(idx >= 0 ? idx : 0);
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredProjects.length - 1
    );
  };

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev! < filteredProjects.length - 1 ? prev! + 1 : 0
    );
  };

  const currentLightboxProject =
    activeLightboxIndex !== null ? filteredProjects[activeLightboxIndex] : null;

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-[#0B1017] border-t border-[#29333D]/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -z-10 h-96 w-96 rounded-full bg-[#FF7628]/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
              <Images className="h-3 w-3" />
              <span>
                {language === "ta" ? "தொழில்முறை வேலைப்பாடுகள் கேலரி" : "Professional Work Gallery"}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              {language === "ta" ? (
                <>
                  நிஜமான புகைப்படங்கள் & <br />
                  <span className="welding-gradient-text">நேர்த்தியான தயாரிப்புகள்</span>
                </>
              ) : (
                <>
                  Workmanship Gallery & <br />
                  <span className="welding-gradient-text">Service Collections</span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-[#A8B0B9] leading-relaxed">
              {language === "ta"
                ? "பிளம்பிங், ஸ்டீல் கிரில் கேட், மெட்டல் ஃபேப்ரிகேஷன், SS கேட்டுகள் மற்றும் கொசு வலை — ஒவ்வொன்றிற்கும் விரிவான 2K தர புகைப்படங்கள்."
                : "Explore our dedicated visual collection for plumbing, steel grill gates, metal fabrication, stainless steel gates, and window/door mosquito net installations."}
            </p>
          </div>

          {/* Quality Indicator Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-xl border border-[#FF7628]/30 bg-[#161E27] px-4 py-3 backdrop-blur-md">
            <Shield className="h-5 w-5 text-[#FF7628]" />
            <div className="text-left text-xs">
              <span className="font-semibold text-white block">
                {language === "ta" ? "உயர்தர புகைப்பட தொகுப்பு" : "High-Resolution Gallery"}
              </span>
              <span className="text-[11px] text-[#A8B0B9]">
                {PROJECTS_DATA.length} {language === "ta" ? "பிரத்யேக தயாரிப்புகள்" : "Curated Showcases"}
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#FF7628] text-white shadow-lg shadow-[#FF7628]/25 scale-[1.02]"
                    : "border border-[#29333D] bg-[#111820] text-[#C5CCD3] hover:border-[#384654] hover:text-white hover:bg-[#161E27]"
                }`}
              >
                <span>{cat.label[language]}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-mono font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-[#1E293B] text-[#A8B0B9]"
                  }`}
                >
                  {cat.key === "all" ? PROJECTS_DATA.length : cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid with Consistent Aspect Ratios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, pIndex) => {
            const title = project.title[language];
            const loc = project.location[language];
            const catLabel = project.categoryLabel[language];

            return (
              <div
                key={project.id}
                className="group relative flex flex-col rounded-2xl border border-[#29333D] bg-[#111820] overflow-hidden transition-all duration-300 hover:border-[#FF7628]/60 hover:shadow-2xl hover:shadow-[#FF7628]/10"
              >
                {/* Image Card with Consistent 4:3 Aspect Ratio */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#080B0F] cursor-pointer"
                  onClick={() => handleOpenLightbox(project)}
                >
                  <Image
                    src={project.image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading={pIndex < 6 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md border border-[#384654]/80 bg-[#080B0F]/90 px-2.5 py-1 text-[10px] font-semibold text-[#FF8F3D] backdrop-blur-md">
                      {catLabel}
                    </span>
                  </div>

                  {/* Zoom Preview Icon on Hover */}
                  <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#080B0F]/90 border border-[#384654] text-white opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                    <Maximize2 className="h-4 w-4 text-[#FF7628]" />
                  </div>
                </div>

                {/* Card Information */}
                <div className="flex flex-1 flex-col justify-between p-5 space-y-3">
                  <div>
                    <h3
                      className="font-display text-base font-bold text-white group-hover:text-[#FFB86C] transition-colors cursor-pointer line-clamp-1"
                      onClick={() => handleOpenLightbox(project)}
                    >
                      {title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-[#A8B0B9] mt-1.5">
                      <MapPin className="h-3 w-3 text-[#FF7628] shrink-0" />
                      <span className="line-clamp-1">{loc}</span>
                    </div>

                    <p className="text-xs text-[#A8B0B9] mt-2 line-clamp-2 leading-relaxed">
                      {project.description[language]}
                    </p>
                  </div>

                  {/* Action Link to Fullview Lightbox */}
                  <div className="pt-3 border-t border-[#29333D]/60 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(project)}
                      className="text-xs font-semibold text-[#FF7628] hover:text-[#FF8F3D] transition-colors flex items-center gap-1.5"
                    >
                      <span>{t.projects.viewDetails}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                    <span className="text-[11px] font-mono text-[#7A889B]">
                      {language === "ta" ? "புஜண்டமகான்" : "Bujandamahan"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      <ProjectLightbox
        project={currentLightboxProject}
        onClose={() => setActiveLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
