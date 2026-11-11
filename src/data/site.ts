export interface BusinessConfig {
  name: string;
  nameTa: string;
  shortName: string;
  shortNameTa: string;
  tagline: string;
  taglineTa: string;
  subTagline: string;
  subTaglineTa: string;
  owner: string;
  ownerTa: string;
  phones: {
    primary: string;
    display: string;
    label: string;
    labelTa: string;
  }[];
  primaryWhatsAppNumber: string; // 919150375567
  location: {
    address: string;
    addressTa: string;
    city: string;
    cityTa: string;
    district: string;
    districtTa: string;
    state: string;
    stateTa: string;
    country: string;
    pincode: string;
    badge: string;
    badgeTa: string;
    mapsUrl: string;
  };
  workingHours: string;
  workingHoursTa: string;
  meta: {
    title: string;
    titleTa: string;
    description: string;
    descriptionTa: string;
    keywords: string[];
    siteUrl: string;
  };
}

export const SITE_DATA: BusinessConfig = {
  name: "LOGESHWARAN WELDING & FABRICATION",
  nameTa: "லோகேஸ்வரன் வெல்டிங் & ஃபேப்ரிகேஷன்",
  shortName: "Logeshwaran Welding",
  shortNameTa: "லோகேஸ்வரன் வெல்டிங்",
  tagline: "PRECISION IN EVERY WELD. STRENGTH IN EVERY DETAIL.",
  taglineTa: "துல்லியமான வேலைப்பாடு. உறுதியான வெல்டிங். நீடித்த தரம்.",
  subTagline:
    "Expert Plumber & Plumbing Works, Steel Grill Gates, Structural Metal Fabrication, Stainless Steel (SS) Gates, and Window/Door Mosquito Nets in Thuraiyur & Trichy.",
  subTaglineTa:
    "துறையூர் மற்றும் திருச்சியில் சிறந்த முறையில் பிளம்பிங், ஸ்டீல் கிரில் கேட், மெட்டல் ஃபேப்ரிகேஷன், ஸ்டெயின்லெஸ் ஸ்டீல் (SS) கேட்டுகள் மற்றும் கொசு வலை அமைப்புகள் செய்து தரப்படும்.",
  owner: "Logeshwaran",
  ownerTa: "லோகேஸ்வரன்",
  phones: [
    {
      primary: "+919150375567",
      display: "+91 91503 75567",
      label: "Primary & WhatsApp",
      labelTa: "முதன்மை & வாட்ஸ்அப்"
    },
    {
      primary: "+919095240008",
      display: "+91 90952 40008",
      label: "Direct Inquiries",
      labelTa: "நேரடி அழைப்பு"
    },
    {
      primary: "+919965011126",
      display: "+91 99650 11126",
      label: "Workshop Support",
      labelTa: "பட்டறை தொடர்பு"
    }
  ],
  primaryWhatsAppNumber: "919150375567",
  location: {
    address: "Thuraiyur Main Road",
    addressTa: "துறையூர் மெயின் ரோடு",
    city: "Thuraiyur",
    cityTa: "துறையூர்",
    district: "Tiruchirappalli",
    districtTa: "திருச்சிராப்பள்ளி",
    state: "Tamil Nadu",
    stateTa: "தமிழ்நாடு",
    country: "India",
    pincode: "621010",
    badge: "THURAIYUR | TIRUCHIRAPPALLI",
    badgeTa: "துறையூர் | திருச்சிராப்பள்ளி",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Logeshwaran+Welding+Thuraiyur+Tiruchirappalli+Tamil+Nadu"
  },
  workingHours: "Monday – Saturday: 8:30 AM – 8:00 PM | Sunday: On Appointment",
  workingHoursTa: "திங்கள் – சனி: காலை 8:30 – இரவு 8:00 | ஞாயிறு: முன்பதிவுபடி",
  meta: {
    title: "Logeshwaran Welding & Fabrication | Plumbing, Steel Gates & Fabrication in Thuraiyur",
    titleTa: "லோகேஸ்வரன் வெல்டிங் & ஃபேப்ரிகேஷன் | பிளம்பிங், ஸ்டீல் கேட், கொசு வலை - துறையூர், திருச்சி",
    description:
      "Premier welding & fabrication workshop in Thuraiyur, Trichy. Specialists in Plumber works, Steel Grill Gates, Metal Fabrication, Stainless Steel (SS) Gates, and Window/Door Mosquito Nets.",
    descriptionTa:
      "துறையூர் & திருச்சியில் உயர்தர பிளம்பிங், ஸ்டீல் கிரில் கேட், மெட்டல் ஃபேப்ரிகேஷன், ஸ்டெயின்லெஸ் ஸ்டீல் (SS) கேட்டுகள் மற்றும் கொசு வலை அமைப்புகள். தொடர்பு: +91 91503 75567.",
    keywords: [
      "Welding Thuraiyur",
      "வெல்டிங் துறையூர்",
      "Plumber Thuraiyur",
      "பிளம்பிங் துறையூர்",
      "Steel Grill Gate Trichy",
      "ஸ்டீல் கிரில் கேட் திருச்சி",
      "Stainless Steel Gates Thuraiyur",
      "SS கேட் துறையூர்",
      "Metal Fabrication Works Tamil Nadu",
      "Mosquito Nets Thuraiyur",
      "கொசு வலை திருச்சி",
      "Logeshwaran Welding",
      "TIG MIG welding Trichy"
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
