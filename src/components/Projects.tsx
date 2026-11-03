"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { PROJECTS_DATA, PROJECT_CATEGORIES, ProjectCategory, ProjectItem } from "@/data/projects";
import ProjectLightbox from "@/components/ProjectLightbox";
import { Sparkles, Shield, Maximize2, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS_DATA;
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
    <section id="projects" className="relative py-24 sm:py-32 bg-[#0B1017] border-t border-[#29333D]/60 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -z-10 h-96 w-96 rounded-full bg-[#FF7628]/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
              <Sparkles className="h-3 w-3" />
              <span>Project Portfolio</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              PROVEN CRAFTSMANSHIP. <br />
              <span className="welding-gradient-text">REAL FABRICATION WORK.</span>
            </h2>
            <p className="text-base text-[#A8B0B9] leading-relaxed">
              Explore our genuine workshop fabrications and completed installations across
              Thuraiyur and the Tiruchirappalli region, alongside visual design concepts for inspiration.
            </p>
          </div>

          {/* Authentic Project Indicator */}
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#FF7628]/30 bg-[#161E27] px-4 py-2.5 backdrop-blur-md">
            <Shield className="h-4 w-4 text-[#FF7628]" />
            <div className="text-left text-xs">
              <span className="font-semibold text-white block">Verified Client Photos</span>
              <span className="text-[11px] text-[#A8B0B9]">Original Installations Featured</span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-8 overflow-x-auto no-scrollbar">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#FF7628] text-white shadow-lg shadow-[#FF7628]/30 border border-[#FF7628]"
                    : "border border-[#29333D] bg-[#111820] text-[#A8B0B9] hover:text-white hover:border-[#384654]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const isLarge = project.isAuthentic || index === 0;

            return (
              <div
                key={project.id}
                onClick={() => handleOpenLightbox(project)}
                className={`group relative rounded-2xl border bg-[#111820] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] ${
                  project.isAuthentic
                    ? "border-[#FF7628]/40 hover:border-[#FF7628]"
                    : "border-[#29333D] hover:border-[#384654]"
                } ${isLarge ? "lg:col-span-1" : "col-span-1"}`}
              >
                {/* Image Container */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#080B0F]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1017] via-[#0B1017]/30 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-300" />

                  {/* Authenticity Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-[11px] font-bold backdrop-blur-md shadow-md ${
                        project.isAuthentic
                          ? "bg-[#080B0F]/90 border border-[#FF7628] text-[#FF8F3D]"
                          : "bg-[#080B0F]/85 border border-[#29333D] text-[#C5CCD3]"
                      }`}
                    >
                      {project.isAuthentic ? (
                        <>
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FF7628] animate-ping" />
                          <span>{project.badge}</span>
                        </>
                      ) : (
                        <span>{project.badge}</span>
                      )}
                    </span>
                  </div>

                  {/* Expand Lightbox Button */}
                  <div className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#080B0F]/80 border border-[#29333D] text-[#C5CCD3] opacity-0 group-hover:opacity-100 group-hover:bg-[#FF7628] group-hover:border-[#FF7628] group-hover:text-white transition-all duration-300 shadow-lg">
                    <Maximize2 className="h-4 w-4" />
                  </div>

                  {/* Hover Overlay Content */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 flex flex-col justify-end">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF7628] font-semibold">
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#FFB86C] transition-colors mt-0.5 line-clamp-2">
                      {project.title}
                    </h3>

                    {project.location && (
                      <div className="flex items-center gap-1.5 text-xs text-[#C5CCD3] mt-1.5">
                        <MapPin className="h-3 w-3 text-[#FF7628]" />
                        <span>{project.location}</span>
                      </div>
                    )}

                    <p className="text-xs text-[#A8B0B9] mt-2 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#FF8F3D] opacity-90 group-hover:translate-x-1 transition-transform">
                      <span>Click to view project details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ProjectLightbox
        project={currentLightboxProject}
        onClose={() => setActiveLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
