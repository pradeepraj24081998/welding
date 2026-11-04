"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { PROJECTS_DATA, PROJECT_CATEGORIES, ProjectCategoryKey, ProjectItem } from "@/data/projects";
import ProjectLightbox from "@/components/ProjectLightbox";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { Sparkles, Shield, Maximize2, MapPin, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryKey>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

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
      <div className="absolute top-1/2 left-0 -z-10 h-96 w-96 rounded-full bg-[#FF7628]/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
              <Sparkles className="h-3 w-3" />
              <span>{t.projects.badge}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              {t.projects.title}
            </h2>
            <p className="text-sm sm:text-base text-[#A8B0B9] leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Verified tag */}
          <div className="inline-flex items-center gap-2 rounded-xl border border-[#FF7628]/30 bg-[#161E27] px-4 py-2.5 backdrop-blur-md">
            <Shield className="h-4 w-4 text-[#FF7628]" />
            <div className="text-left text-xs">
              <span className="font-semibold text-white block">{t.projects.authenticBadge}</span>
              <span className="text-[11px] text-[#A8B0B9]">
                {language === "ta" ? "துறையூர் & திருச்சி திட்டங்கள்" : "Thuraiyur & Trichy Installations"}
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#FF7628] text-white shadow-lg shadow-[#FF7628]/25"
                    : "border border-[#29333D] bg-[#111820] text-[#C5CCD3] hover:border-[#384654] hover:text-white"
                }`}
              >
                {cat.label[language]}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const title = project.title[language];
            const loc = project.location[language];

            return (
              <div
                key={project.id}
                className="group relative flex flex-col rounded-2xl border border-[#29333D] bg-[#111820] overflow-hidden transition-all duration-300 hover:border-[#FF7628]/60 hover:shadow-xl"
              >
                {/* Image Section */}
                <div
                  className="relative h-60 w-full overflow-hidden bg-[#080B0F] cursor-pointer"
                  onClick={() => handleOpenLightbox(project)}
                >
                  <Image
                    src={project.image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md border border-[#FF7628]/40 bg-[#080B0F]/90 px-2.5 py-1 text-[10px] font-semibold text-[#FF8F3D] backdrop-blur-md">
                      {t.projects.authenticBadge}
                    </span>
                  </div>

                  {/* Expand icon on hover */}
                  <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#080B0F]/80 border border-[#384654] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="h-4 w-4 text-[#FF7628]" />
                  </div>
                </div>

                {/* Details Card */}
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
                  </div>

                  <div className="pt-2 border-t border-[#29333D]/60 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(project)}
                      className="text-xs font-semibold text-[#FF7628] hover:text-[#FF8F3D] transition-colors flex items-center gap-1"
                    >
                      <span>{t.projects.viewDetails}</span>
                      <span>→</span>
                    </button>
                    <span className="text-[11px] font-mono text-[#A8B0B9]">
                      Logeshwaran
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <ProjectLightbox
        project={currentLightboxProject}
        onClose={() => setActiveLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
