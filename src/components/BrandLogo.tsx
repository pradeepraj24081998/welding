"use client";

import React, { useState } from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export default function BrandLogo({ className = "", size = 44 }: BrandLogoProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1E293B] via-[#161E27] to-[#0A0E14] border border-[#FF7628]/40 shadow-lg shadow-[#FF7628]/10 overflow-hidden group-hover:border-[#FF7628] transition-colors shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {!imgError ? (
        <Image
          src="/images/logo/brand-logo.png"
          alt="புஜண்டமகான் Plumbing, Steel & Fabrication Logo"
          width={size}
          height={size}
          className="object-cover object-center w-full h-full p-1 group-hover:scale-105 transition-transform duration-300"
          onError={() => setImgError(true)}
        />
      ) : (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagonal Shield Background */}
          <polygon
            points="50,6 90,26 90,74 50,94 10,74 10,26"
            fill="url(#shieldGrad)"
            stroke="#FF7628"
            strokeWidth="3.5"
          />
          {/* Inner Steel Gate Structure Lines */}
          <line x1="28" y1="36" x2="28" y2="68" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="40" y1="30" x2="40" y2="74" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="50" y1="28" x2="50" y2="76" stroke="#FF7628" strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="30" x2="60" y2="74" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="72" y1="36" x2="72" y2="68" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M24 52 H76" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />
          {/* Welding Spark / Torch Flame Crest */}
          <path
            d="M50 16 C55 24 60 28 55 37 C52 34 50 33 48 35 C45 38 47 43 50 47 C43 43 41 36 44 30 C46 26 48 22 50 16 Z"
            fill="url(#flameGrad)"
          />
          <circle cx="50" cy="52" r="3.5" fill="#FF7628" />
          <defs>
            <linearGradient id="shieldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E293B" />
              <stop offset="1" stopColor="#0B1017" />
            </linearGradient>
            <linearGradient id="flameGrad" x1="40" y1="16" x2="60" y2="47" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFD166" />
              <stop offset="0.5" stopColor="#FF7628" />
              <stop offset="1" stopColor="#FF3B00" />
            </linearGradient>
          </defs>
        </svg>
      )}
      <div className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-[#FF7628] ring-2 ring-[#080B0F]" />
    </div>
  );
}

