export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  owner: string;
  phones: {
    primary: string;
    display: string;
    label?: string;
  }[];
  primaryWhatsAppNumber: string; // international digits without + or spaces e.g. 919150375567
  location: {
    address: string;
    city: string;
    district: string;
    state: string;
    country: string;
    pincode?: string;
    badge: string;
    mapsUrl: string;
  };
  workingHours: string;
  categories: string[];
  targetCustomers: string[];
  meta: {
    title: string;
    description: string;
    keywords: string[];
    siteUrl: string;
  };
}

export const SITE_DATA: BusinessConfig = {
  name: "LOGESHWARAN WELDING & FABRICATION",
  shortName: "Logeshwaran Fabrication",
  tagline: "PRECISION IN EVERY WELD. STRENGTH IN EVERY DETAIL.",
  subTagline:
    "Expert Welding & Custom Metal Fabrication Solutions. Quality Craftsmanship for Residential, Commercial and Industrial Projects.",
  owner: "Logeshwaran",
  phones: [
    { primary: "+919150375567", display: "+91 91503 75567", label: "Primary & WhatsApp" },
    { primary: "+919095240008", display: "+91 90952 40008", label: "Direct Inquiries" },
    { primary: "+919965011126", display: "+91 99650 11126", label: "Workshop Support" }
  ],
  primaryWhatsAppNumber: "919150375567",
  location: {
    address: "Thuraiyur Main Road",
    city: "Thuraiyur",
    district: "Tiruchirappalli",
    state: "Tamil Nadu",
    country: "India",
    badge: "THURAIYUR | TIRUCHIRAPPALLI",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Logeshwaran+Welding+Thuraiyur+Tiruchirappalli+Tamil+Nadu"
  },
  workingHours: "Monday – Saturday: 8:30 AM – 8:00 PM | Sunday: On Appointment",
  categories: [
    "Stainless Steel Fabrication",
    "Architectural Railings & Handrails",
    "Custom Metal Gates & Grills",
    "CNC Laser-Cut Metal Art",
    "Commercial & Industrial Welding"
  ],
  targetCustomers: [
    "Residential House Owners",
    "Commercial Building Owners",
    "Builders & Civil Contractors",
    "Architects & Interior Designers",
    "Industrial Facility Managers",
    "Property Developers"
  ],
  meta: {
    title: "Logeshwaran Welding & Fabrication | Stainless Steel Works in Thuraiyur",
    description:
      "Explore stainless steel staircase railings, custom metal fabrication, decorative metal designs and welding services in Thuraiyur, Tiruchirappalli.",
    keywords: [
      "Welding Thuraiyur",
      "Stainless Steel Fabrication Trichy",
      "SS Staircase Railings Thuraiyur",
      "Laser Cut Gate Tiruchirappalli",
      "Metal Fabrication Tamil Nadu",
      "Logeshwaran Welding",
      "Custom Metal Gates"
    ],
    siteUrl: "https://logeshwaran-welding.vercel.app"
  }
};

/**
 * Builds a WhatsApp chat link with optional pre-filled message
 */
export function getWhatsAppUrl(message?: string, customPhone?: string): string {
  const phone = customPhone || SITE_DATA.primaryWhatsAppNumber;
  const base = `https://wa.me/${phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

