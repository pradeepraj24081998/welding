"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ProjectItem } from "@/data/projects";
import { getWhatsAppUrl } from "@/data/site";
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin, CheckCircle2, Shield } from "lucide-react";

interface ProjectLightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ProjectLightbox({
  project,
  onClose,
  onPrev,
  onNext,
}: ProjectLightboxProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock scroll
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose, onPrev, onNext]);

  if (!project) return null;

  const whatsappMessage = `Hello Logeshwaran, I am interested in this project: "${project.title}" (${project.category}). Please share more details and an estimate.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Lightbox Modal Container */}
      <div
        className="relative max-h-[92vh] w-full max-w-5xl rounded-2xl border border-[#29333D] bg-[#0E151E] shadow-2xl overflow-hidden flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#161E27]/90 border border-[#29333D] text-[#C5CCD3] hover:text-white hover:border-[#FF7628] hover:bg-[#FF7628] transition-all"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Prev & Next Floating Buttons */}
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#161E27]/90 border border-[#29333D] text-white hover:bg-[#FF7628] transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={onNext}
          className="absolute right-4 lg:right-[380px] top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#161E27]/90 border border-[#29333D] text-white hover:bg-[#FF7628] transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Image Display */}
        <div className="relative h-72 sm:h-96 lg:h-auto lg:flex-1 bg-[#05080C] flex items-center justify-center overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Details Sidebar */}
        <div className="w-full lg:w-[380px] p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#29333D] bg-[#111820] overflow-y-auto max-h-[45vh] lg:max-h-none">
          <div className="space-y-4">
            {/* Authenticity Badge */}
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                  project.isAuthentic
                    ? "bg-[#FF7628]/15 border border-[#FF7628]/50 text-[#FF8F3D]"
                    : "bg-[#29333D]/60 border border-[#384654] text-[#C5CCD3]"
                }`}
              >
                {project.isAuthentic ? (
                  <>
                    <Shield className="h-3.5 w-3.5 text-[#FF7628]" />
                    <span>{project.badge}</span>
                  </>
                ) : (
                  <span>{project.badge}</span>
                )}
              </span>
              <span className="text-xs font-mono text-[#A8B0B9]">{project.category}</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
              {project.title}
            </h3>

            {project.location && (
              <div className="flex items-center gap-1.5 text-xs text-[#A8B0B9]">
                <MapPin className="h-3.5 w-3.5 text-[#FF7628]" />
                <span>{project.location}</span>
              </div>
            )}

            <p className="text-xs sm:text-sm text-[#A8B0B9] leading-relaxed">
              {project.description}
            </p>

            {/* Project Specs */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#C5CCD3]">
                Fabrication Highlights
              </h4>
              <ul className="space-y-1.5">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#C5CCD3]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#FF7628] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-6 border-t border-[#29333D] mt-6">
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#FF7628] to-[#FF5400] px-4 py-3 text-xs font-bold text-white shadow-lg shadow-[#FF7628]/25 hover:shadow-[#FF7628]/40 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Inquire About This Design on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

