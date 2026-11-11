import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_DATA } from "@/data/site";
import PWARegister from "@/components/PWARegister";
import LanguageProvider from "@/context/LanguageContext";

export const viewport: Viewport = {
  themeColor: "#FF7628",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DATA.meta.siteUrl),
  title: {
    default: "புஜண்டமகான் Plumbing, Steel & Fabrication | Thuraiyur, Trichy",
    template: `%s | ${SITE_DATA.name}`
  },
  description:
    "துறையூர் மற்றும் திருச்சியில் சிறந்த பிளம்பிங் (Plumber), ஸ்டீல் கிரில் கேட், மெட்டல் ஃபேப்ரிகேஷன், ஸ்டெயின்லெஸ் ஸ்டீல் (SS) கேட் மற்றும் கொசு வலை அமைப்புகள். புஜண்டமகான் Plumbing, Steel & Fabrication.",
  keywords: SITE_DATA.meta.keywords,
  authors: [{ name: SITE_DATA.owner }],
  creator: SITE_DATA.owner,
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "புஜண்டமகான்"
  },
  openGraph: {
    type: "website",
    locale: "ta_IN",
    alternateLocale: ["en_IN"],
    url: SITE_DATA.meta.siteUrl,
    title: "புஜண்டமகான் Plumbing, Steel & Fabrication | Thuraiyur, Trichy",
    description: "உயர்தர பிளம்பிங், ஸ்டீல் கிரில் கேட், மெட்டல் ஃபேப்ரிகேஷன், SS கேட் & கொசு வலை அமைப்புகள். தொடர்பு: +91 91503 75567",
    siteName: SITE_DATA.name,
    images: [
      {
        url: "/images/hero/welding-sparks-hero.jpg",
        width: 1200,
        height: 630,
        alt: "புஜண்டமகான் Plumbing, Steel & Fabrication Workshop Thuraiyur"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "புஜண்டமகான் Plumbing, Steel & Fabrication",
    description: "உயர்தர பிளம்பிங், ஸ்டீல் கிரில் கேட், மெட்டல் ஃபேப்ரிகேஷன், SS கேட் & கொசு வலை - துறையூர், திருச்சி.",
    images: ["/images/hero/welding-sparks-hero.jpg"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_DATA.meta.siteUrl}/#business`,
  "name": "புஜண்டமகான் Plumbing, Steel & Fabrication",
  "alternateName": "Bujandamahan Plumbing, Steel & Fabrication",
  "description":
    "துறையூர் மற்றும் திருச்சியில் சிறந்த பிளம்பிங் (Plumber), ஸ்டீல் கிரில் கேட், மெட்டல் ஃபேப்ரிகேஷன், ஸ்டெயின்லெஸ் ஸ்டீல் (SS) கேட் மற்றும் கொசு வலை அமைப்புகள்.",
  "image": `${SITE_DATA.meta.siteUrl}/images/hero/welding-sparks-hero.jpg`,
  "telephone": "+919150375567",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Bank Transfer",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Thuraiyur Main Road",
    "addressLocality": "Thuraiyur",
    "addressRegion": "Tamil Nadu",
    "postalCode": "621010",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.1444",
    "longitude": "78.5966"
  },
  "areaServed": [
    "Thuraiyur",
    "Tiruchirappalli",
    "Musiri",
    "Perambalur",
    "Uppiliapuram",
    "Tamil Nadu"
  ],
  "url": SITE_DATA.meta.siteUrl,
  "priceRange": "₹₹",
  "openingHours": "Mo-Sa 08:30-20:00",
  "sameAs": [
    "https://wa.me/919150375567"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Welding, Fabrication & Plumbing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plumber / Plumbing Works",
          "description": "Water pipeline installation, PVC/CPVC pipes, bathroom & kitchen fittings, repair and maintenance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Steel Grill Gate",
          "description": "Custom modern MS steel grill gates, residential entrance gates, heavy-duty security gates."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fabrication Works",
          "description": "Structural metal fabrication, precision welding, metal frames, steel staircases, workshop fabrication."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Stainless Steel Gates",
          "description": "SS 304 / 316 designer entrance gates, sliding gates, laser-cut decorative gates, mirror polish finish."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mosquito Nets",
          "description": "Window mosquito mesh, sliding mosquito net doors, magnetic mesh, pleated insect screens."
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ta"
      className="scroll-smooth antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="application-name" content="புஜண்டமகான் Plumbing, Steel & Fabrication" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#080B0F] text-[#FFFFFF] font-sans selection:bg-[#FF7628] selection:text-white">
        <LanguageProvider>
          {children}
          <PWARegister />
        </LanguageProvider>
      </body>
    </html>
  );
}
