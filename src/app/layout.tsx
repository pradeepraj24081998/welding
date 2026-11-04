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
    default: "லோகேஸ்வரன் வெல்டிங் & ஃபேப்ரிகேஷன் | Logeshwaran Welding Thuraiyur",
    template: `%s | ${SITE_DATA.name}`
  },
  description:
    "துறையூர் மற்றும் திருச்சியில் சிறந்த ஸ்டெயின்லெஸ் ஸ்டீல் (SS) ரெயிலிங், கேட், கிரில், லேசர் கட்டிங் மற்றும் மெட்டல் ஃபேப்ரிகேஷன் வேலைகள். Best Welding & SS Fabrication in Thuraiyur.",
  keywords: SITE_DATA.meta.keywords,
  authors: [{ name: SITE_DATA.owner }],
  creator: SITE_DATA.owner,
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Logeshwaran Welding"
  },
  openGraph: {
    type: "website",
    locale: "ta_IN",
    alternateLocale: ["en_IN"],
    url: SITE_DATA.meta.siteUrl,
    title: "லோகேஸ்வரன் வெல்டிங் & ஃபேப்ரிகேஷன் | Thuraiyur, Trichy",
    description: "உயர்தர ஸ்டெயின்லெஸ் ஸ்டீல் ரெயிலிங், கேட், கிரில் & லேசர் கட்டிங் மெட்டல் ஒர்க்ஸ். தொடர்பு: +91 91503 75567",
    siteName: SITE_DATA.name,
    images: [
      {
        url: "/images/hero/welding-sparks-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Logeshwaran Welding & Fabrication Workshop Thuraiyur"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "லோகேஸ்வரன் வெல்டிங் & ஃபேப்ரிகேஷன் | Logeshwaran Welding",
    description: "உயர்தர ஸ்டெயின்லெஸ் ஸ்டீல் (SS) மற்றும் மெட்டல் ஃபேப்ரிகேஷன் வேலைகள் - துறையூர், திருச்சி.",
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
  "name": "LOGESHWARAN WELDING & FABRICATION",
  "alternateName": "லோகேஸ்வரன் வெல்டிங் & ஃபேப்ரிகேஷன்",
  "description":
    "துறையூர் மற்றும் திருச்சியில் சிறந்த ஸ்டெயின்லெஸ் ஸ்டீல் (SS) ரெயிலிங், கேட், கிரில், லேசர் கட்டிங் டிசைன் மற்றும் தொழில்துறை வெல்டிங் வேலைகள்.",
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
  ]
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
        <meta name="application-name" content="Logeshwaran Welding" />
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
