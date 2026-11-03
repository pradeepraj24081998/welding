"use client";

import React from "react";
import { PROCESS_STEPS } from "@/data/process";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/data/site";

export default function WorkProcess() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#080B0F] overflow-hidden">
      {/* Background glow & line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[900px] rounded-full bg-[#FF7628]/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
            <Sparkles className="h-3 w-3" />
            <span>Execution Workflow</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            FROM IDEA TO <br />
            <span className="welding-gradient-text">FINISHED CRAFTSMANSHIP</span>
          </h2>

          <p className="text-base text-[#A8B0B9] leading-relaxed">
            A structured, transparent fabrication methodology ensuring dimensional precision,
            structural security, and fine surface polishing at every phase.
          </p>
        </div>

        {/* 4-Step Timeline (Horizontal Desktop, Vertical Mobile) */}
        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-20 left-12 right-12 h-[2px] bg-gradient-to-r from-[#29333D] via-[#FF7628]/60 to-[#29333D] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="metallic-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:border-[#FF7628]/70 hover:-translate-y-1"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1722] border-2 border-[#29333D] group-hover:border-[#FF7628] transition-colors shadow-lg">
                      <span className="font-display text-xl font-extrabold text-[#FF7628]">
                        {step.step}
                      </span>
                      <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#FF7628] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8B0B9] bg-[#111820] px-2.5 py-1 rounded border border-[#29333D]">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#FFB86C] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono text-[#FF7628] font-semibold mt-0.5 mb-3">
                    {step.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#A8B0B9] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Key Points */}
                <div className="pt-4 border-t border-[#29333D]/60 space-y-1.5">
                  {step.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-[11px] text-[#C5CCD3]">
                      <CheckCircle2 className="h-3 w-3 text-[#FF7628] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Workflow Banner */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl("Hello Logeshwaran, I would like to schedule a site measurement and discuss fabrication.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7628] hover:text-[#FFA048] transition-colors"
          >
            <span>Ready to start step 01? Schedule a Site Visit or WhatsApp Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

