import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SITE_DATA } from "@/data/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DATA.meta.siteUrl),
  title: {
    default: SITE_DATA.meta.title,
    template: `%s | ${SITE_DATA.name}`
  },
  description: SITE_DATA.meta.description,
  keywords: SITE_DATA.meta.keywords,
  authors: [{ name: SITE_DATA.owner }],
  creator: SITE_DATA.owner,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_DATA.meta.siteUrl,
    title: SITE_DATA.meta.title,
    description: SITE_DATA.meta.description,
    siteName: SITE_DATA.name,
    images: [
      {
        url: "/images/hero/welding-sparks-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Logeshwaran Welding & Fabrication Workshop"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_DATA.meta.title,
    description: SITE_DATA.meta.description,
    images: ["/images/hero/welding-sparks-hero.jpg"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": SITE_DATA.name,
  "description": SITE_DATA.meta.description,
  "image": `${SITE_DATA.meta.siteUrl}/images/hero/welding-sparks-hero.jpg`,
  "telephone": SITE_DATA.phones[0].primary,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": SITE_DATA.location.address,
    "addressLocality": SITE_DATA.location.city,
    "addressRegion": SITE_DATA.location.state,
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.1444",
    "longitude": "78.5966"
  },
  "url": SITE_DATA.meta.siteUrl,
  "priceRange": "$$",
  "openingHours": "Mo-Sa 08:30-20:00"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#080B0F] text-[#FFFFFF] font-sans selection:bg-[#FF7628] selection:text-white">
        {children}
      </body>
    </html>
  );
}
