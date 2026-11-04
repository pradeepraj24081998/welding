export interface ServiceItem {
  id: string;
  title: {
    ta: string;
    en: string;
  };
  shortDescription: {
    ta: string;
    en: string;
  };
  features: {
    ta: string[];
    en: string[];
  };
  image: string;
  recommendedGrade: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "staircase-railings",
    title: {
      ta: "SS மாடி படிக்கட்டு ரெயிலிங்",
      en: "SS Staircase Railings"
    },
    shortDescription: {
      ta: "துருப்பிடிக்காத SS 304/316 கிரேடு ஸ்டீல் பைப் மற்றும் கிளாஸ் அல்லது வுட்டன் தொடுதலுடன் கூடிய பிரீமியம் மாடி கைப்பிடிகள்.",
      en: "Architectural stainless steel stair railings with mirror polish, custom wooden accents, and solid step-anchored balusters."
    },
    features: {
      ta: ["SS 304 / 316 கிரேடு ஸ்டீல்", "மிரர் & சாடின் பாலிஷ்", "உறுதியான ஆங்கரிங் ஃபிக்சிங்", "நீடித்த ஆயுள் & பாதுகாப்பு"],
      en: ["Grade 304 / 316 Stainless Steel", "Mirror Polish & Satin Brush", "Rigid Floor Core Anchoring", "Long-lasting Safety & Elegance"]
    },
    image: "/images/welding/modern-ss-railing.jpg",
    recommendedGrade: "SS 304 / SS 316"
  },
  {
    id: "ss-gates",
    title: {
      ta: "பிரதான மெட்டல் & SS கேட் வேலைகள்",
      en: "Main Entrance Metal & SS Gates"
    },
    shortDescription: {
      ta: "வீட்டின் அழகையும் பாதுகாப்பையும் கூட்டும் அதிநவீன ஸ்லைடிங் (Sliding) மற்றும் சுழல் (Swing) கேட் வடிவமைப்பு.",
      en: "High-security luxury entrance sliding and swing gates fabricated with rigid stainless steel or mild steel profiles."
    },
    features: {
      ta: ["ஸ்லைடிங் & ஸ்விங் மாடல்கள்", "ஹெவி-டியூட்டி பேரிங் கீல்கள்", "துருப்பிடிக்காத பினிஷிங்", "ஆட்டோமேஷன் பொருத்தும் வசதி"],
      en: ["Sliding & Swing Configurations", "Heavy Duty Ball Bearings", "Rust & Tarnish Resistant", "Motor Automation Compatible"]
    },
    image: "/images/welding/designer-metal-gate.jpg",
    recommendedGrade: "SS 304 / Heavy MS"
  },
  {
    id: "laser-cut-designs",
    title: {
      ta: "CNC லேசர் கட்டிங் கேட் & திரைகள்",
      en: "CNC Laser-Cut Designer Gates & Panels"
    },
    shortDescription: {
      ta: "அதிநவீன CNC ஃபைபர் லேசர் கொண்டு வெட்டப்பட்ட விநாயகர் உருவம், கற்பகவிருட்ச மரம் மற்றும் நவீன வடிவியல் டிசைன்கள்.",
      en: "High-precision CNC fiber laser-cut art panels, Tree of Life screens, religious inlays (Ganesha panels), and facade privacy partitions."
    },
    features: {
      ta: ["துல்லியமான லேசர் கட்டிங்", "விருப்பப்படி டிசைன் தேர்வு", "கோல்டு & மெட்டாலிக் பெயிண்ட்", "முன்வாசல் & பால்கனிக்கு ஏற்றது"],
      en: ["High-Precision Laser Cutting", "Custom Vector Motifs", "Dual-Tone Metallic/Gold Paint", "Ideal for Compound Gates & Balcony"]
    },
    image: "/images/welding/laser-cut-screen-art.jpg",
    recommendedGrade: "SS 304 / MS Sheet"
  },
  {
    id: "balcony-railings",
    title: {
      ta: "பால்கனி ரெயிலிங் & சுவர் கைப்பிடிகள்",
      en: "Balcony Railings & Safety Handrails"
    },
    shortDescription: {
      ta: "மழை, வெயிலை தாங்கக்கூடிய கடினமான ஸ்டெயின்லெஸ் ஸ்டீல் மற்றும் டஃபன்ட் கிளாஸ் பால்கனி பாதுகாப்பு தடுப்புகள்.",
      en: "All-weather architectural balcony safety guards and wall handrails engineered for maximum fall protection and sleek looks."
    },
    features: {
      ta: ["மழை வெயில் தாங்கும் SS 316", "டஃபன்ட் கிளாஸ் பொருத்தும் வசதி", "வலுவான சுவர் கைப்பிடி", "அழகான தோற்றம்"],
      en: ["SS 316 Marine Weather Resistance", "Toughened Glass Clamp Ready", "Ergonomic Wall Mount Handrails", "Modern Architectural Look"]
    },
    image: "/images/services/balcony-railings.jpg",
    recommendedGrade: "SS 316 / SS 304"
  },
  {
    id: "structural-roof-truss",
    title: {
      ta: "ரூஃபிங் ஷெட் & ஸ்டீல் கட்டமைப்பு",
      en: "Structural Steel Roofing & Sheds"
    },
    shortDescription: {
      ta: "தொழிற்சாலைகள், குடோன்கள் மற்றும் கார் பார்க்கிங்கிற்கு தேவையான ஹெவி-டியூட்டி ட்ரஸ் (Truss) மற்றும் ரூஃபிங் ஷெட் அமைப்புகள்.",
      en: "Engineered structural steel frameworks, industrial sheds, factory roofing, warehouse canopies, and car parking shades."
    },
    features: {
      ta: ["ஹெவி MS ஸ்டீல் பைப் வேலைகள்", "அதிக எடை தாங்கும் கட்டமைப்பு", "புயல்/மழை எதிர்ப்பு வடிவமைப்பு", "விரைவான அமைத்தல்"],
      en: ["Heavy-Gauge Structural MS", "High Load-Bearing Capacity", "Storm & Rain Resilient Design", "Fast On-Site Erection"]
    },
    image: "/images/welding/structural-roof-truss.jpg",
    recommendedGrade: "Structural Mild Steel (IS 2062)"
  },
  {
    id: "industrial-welding",
    title: {
      ta: "தொழில்துறை TIG / MIG வெல்டிங்",
      en: "Industrial TIG, MIG & ARC Welding"
    },
    shortDescription: {
      ta: "அதிநவீன ஆர்கான் TIG மற்றும் MIG வெல்டிங் இயந்திரங்கள் மூலம் மெல்லிய தகடுகள் முதல் தடிமனான பாகங்கள் வரை உறுதியான இணைப்பு.",
      en: "Certified TIG, MIG, and Shielded Metal Arc welding for machinery frames, pressure vessels, pipes, and precision alloy joints."
    },
    features: {
      ta: ["ஆர்கான் TIG & MIG வெல்டிங்", "கற்கூம்பு பினிஷிங் & மெருகூட்டல்", "உயர்ந்த கூட்டு பலம்", "தொழில்துறை தர நிர்ணயம்"],
      en: ["Argon TIG & Wire Feed MIG", "Smooth Passivation & Grinding", "High Tensile Joint Integrity", "Industrial Standard Quality"]
    },
    image: "/images/welding/mig-industrial-welding.jpg",
    recommendedGrade: "SS, MS, Aluminum & Cast Iron"
  },
  {
    id: "spot-repairs",
    title: {
      ta: "ஸ்பாட் வெல்டிங் & உடனடி ரிப்பேர்",
      en: "On-Site Spot Welding & Quick Repairs"
    },
    shortDescription: {
      ta: "உங்கள் இடத்திற்கே வந்து உடைந்த கேட், கிரில், கதவு கீல்கள் மற்றும் ஷெட்டுகளை உடனடியாக சரிசெய்யும் நடமாடும் வெல்டிங் சேவை.",
      en: "Mobile on-site welding unit equipped for rapid repair of broken gates, worn hinges, window grills, shutters, and brackets."
    },
    features: {
      ta: ["உங்கள் இடத்திற்கே வருகை", "உடனடி பழுது நீக்கம்", "அனைத்து வெல்டிங் கருவிகளுடன்", "நியாயமான கட்டணம்"],
      en: ["Direct Site Visit", "Rapid Turnaround Repairs", "Self-Contained Mobile Unit", "Affordable Service Charge"]
    },
    image: "/images/welding/spot-welding-repair.jpg",
    recommendedGrade: "All Metal Types"
  },
  {
    id: "custom-ss-works",
    title: {
      ta: "கஸ்டம் SS இன்டீரியர் & கவுண்டர்",
      en: "Custom SS Furniture & Interior Works"
    },
    shortDescription: {
      ta: "ஹோட்டல், கிச்சன், மருத்துவமனை மற்றும் வீடுகளுக்கு தேவையான உணவுத் தர SS மேஜைகள், ரேக்குகள் மற்றும் டிஸ்பிளே ஸ்டாண்டுகள்.",
      en: "Custom-built food-grade stainless steel kitchen counters, hospital trolleys, commercial tables, and minimalist furniture frames."
    },
    features: {
      ta: ["உணவுத் தர SS ஸ்டீல்", "சுத்தப்படுத்த எளிதான பினிஷிங்", "விருப்பத்திற்கேற்ற அளவு", "அழுத்தமான மூலை இணைப்புகள்"],
      en: ["Food-Grade Sanitary Surfaces", "Easy Wipe Clean Finish", "Tailor-Made Dimensions", "Seamless Welded Edges"]
    },
    image: "/images/services/custom-ss-works.jpg",
    recommendedGrade: "SS 304 Food Grade"
  }
];
