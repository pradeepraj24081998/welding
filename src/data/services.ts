export interface ServiceItem {
  id: string;
  categoryKey: "plumber" | "steel-grill-gate" | "fabrication" | "stainless-steel-gates" | "mosquito-nets";
  title: {
    ta: string;
    en: string;
  };
  shortDescription: {
    ta: string;
    en: string;
  };
  fullDescription: {
    ta: string;
    en: string;
  };
  features: {
    ta: string[];
    en: string[];
  };
  primaryImage: string;
  galleryImages: string[];
  recommendedGrade: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "plumber",
    categoryKey: "plumber",
    title: {
      ta: "பிளம்பர் & பிளம்பிங் வேலைகள்",
      en: "Plumber & Plumbing Works"
    },
    shortDescription: {
      ta: "குடிநீர் குழாய் பதிப்பு, பாத்ரூம் & கிச்சன் பிளம்பிங், PVC & CPVC பைப் இணைப்புகள், நீர் கசிவு பழுதுநீக்கம் மற்றும் நவீன குழாய் அமைப்புகள்.",
      en: "Professional residential and commercial plumbing installations, PVC/CPVC pipelines, bathroom fixtures, leak repairs, and water supply solutions."
    },
    fullDescription: {
      ta: "வீடுகள், வணிக வளாகங்கள் மற்றும் தொழிற்சாலைகளுக்கு தேவையான புதிய பைப் லைன் பதிப்பு, ஓவர்ஹெட் டேங்க் கனெக்ஷன், சானிட்டரி ஃபிட்டிங்ஸ், மற்றும் அவசர நீர் கசிவு சரிசெய்தல் அனுபவம் வாய்ந்த பிளம்பர்களால் தரமாக செய்து தரப்படும்.",
      en: "Complete plumbing engineering including underground water lines, overhead tank piping, sanitary ware installations, pump fittings, bathroom modernization, and durable CPVC/UPVC leak-proof joint solutions."
    },
    primaryImage: "/images/plumber/plumber-01.webp",
    galleryImages: [
      "/images/plumber/plumber-01.webp",
      "/images/plumber/plumber-02.webp",
      "/images/plumber/plumber-03.webp",
      "/images/plumber/plumber-04.webp",
      "/images/plumber/plumber-05.webp"
    ],
    features: {
      ta: [
        "PVC, CPVC & UPVC பைப்லைன் வேலைகள்",
        "பாத்ரூம் & கிச்சன் சானிட்டரி ஃபிட்டிங்ஸ்",
        "டேங்க் & மோட்டார் பைப் கனெக்ஷன்",
        "உடனடி நீர் கசிவு சரிபார்த்தல் & சர்வீஸ்"
      ],
      en: [
        "PVC, CPVC & UPVC Pipeline Setup",
        "Bathroom & Kitchen Sanitary Fixtures",
        "Overhead Tank & Water Pump Lines",
        "Rapid Leak Detection & Pipe Repairs"
      ]
    },
    recommendedGrade: "Heavy Gauge PVC / CPVC / Brass"
  },
  {
    id: "steel-grill-gate",
    categoryKey: "steel-grill-gate",
    title: {
      ta: "ஸ்டீல் கிரில் கேட் & பாதுகாப்பு கிரில்",
      en: "Steel Grill Gate & Security Works"
    },
    shortDescription: {
      ta: "வீட்டின் முன்வாசல் மற்றும் காம்பவுண்டிற்கு ஏற்ற உறுதியான MS ஸ்டீல் கிரில் கேட்டுகள், நவீன வடிவியல் டிசைன்கள் மற்றும் ஜன்னல் பாதுகாப்பு கிரில்கள்.",
      en: "High-security MS steel grill entrance gates, decorative residential gates, heavy-duty safety window grills, and anti-pry compound doors."
    },
    fullDescription: {
      ta: "கனரக மைல்ட் ஸ்டீல் (MS) குழாய்கள் மற்றும் சதுர கம்பிகள் கொண்டு உருவாக்கப்படும் பாதுகாப்பு கேட்டுகள். துருப்பிடிக்காத எபாக்சி பிரைமர் பூச்சு மற்றும் அழகிய எனாமல் பெயிண்ட் பினிஷிங்குடன் நீண்ட காலம் உழைக்கும்.",
      en: "Engineered solid steel security gates built with thick gauge sections, reinforced hinge brackets, anti-pry lock housings, and multi-layer anti-corrosion primer coating for lasting durability."
    },
    primaryImage: "/images/steel-grill-gate/grill-01.webp",
    galleryImages: [
      "/images/steel-grill-gate/grill-01.webp",
      "/images/steel-grill-gate/grill-02.webp",
      "/images/steel-grill-gate/grill-03.webp",
      "/images/steel-grill-gate/grill-04.webp",
      "/images/steel-grill-gate/grill-05.webp"
    ],
    features: {
      ta: [
        "கனரக தடிமனான MS ஸ்டீல் கம்பிகள்",
        "ஸ்லைடிங் & டபுள் டோர் கிரில் கேட்டுகள்",
        "துரு எதிர்ப்பு எபாக்சி பிரைமர் கோட்டிங்",
        "உறுதியான பேரிங் கீல்கள் & தாழ்ப்பாள்கள்"
      ],
      en: [
        "Heavy-Gauge Solid Mild Steel Bars",
        "Sliding & Double-Door Gate Models",
        "Dual-Layer Anti-Rust Primer Finish",
        "Heavy-Duty Ball Bearing Hinges & Locks"
      ]
    },
    recommendedGrade: "Heavy Structural MS (IS 2062)"
  },
  {
    id: "fabrication",
    categoryKey: "fabrication",
    title: {
      ta: "மெட்டல் ஃபேப்ரிகேஷன் & வெல்டிங்",
      en: "Metal Fabrication & Welding Works"
    },
    shortDescription: {
      ta: "தொழிற்சாலை மற்றும் வீட்டு ரூஃபிங் ஷெட்கள், மாடி ஸ்டீல் படிக்கட்டுகள், கனரக மெட்டல் பிரேம்கள், மற்றும் துல்லியமான TIG / MIG வெல்டிங் வேலைகள்.",
      en: "Comprehensive structural metal fabrication, factory sheds, tubular roof trusses, architectural steel staircases, and certified TIG/MIG welding."
    },
    fullDescription: {
      ta: "அதிநவீன ஆர்கான் TIG, MIG மற்றும் ஆர்க் வெல்டிங் இயந்திரங்கள் கொண்டு எங்கள் பட்டறையிலேயே நேரடி தயாரிப்பு. புயல் மழையை தாங்கும் ரூஃபிங் ட்ரஸ் ஷெட்கள் மற்றும் உறுதியான ஸ்டீல் கட்டமைப்பு வேலைகள்.",
      en: "Workshop and mobile field metal fabrication specializing in high-tensile joint welds, precision miter cuts, industrial warehouse frameworks, canopies, car parking sheds, and custom structural assemblies."
    },
    primaryImage: "/images/fabrication/fabrication-01.webp",
    galleryImages: [
      "/images/fabrication/fabrication-01.webp",
      "/images/fabrication/fabrication-02.webp",
      "/images/fabrication/fabrication-03.webp",
      "/images/fabrication/fabrication-04.webp",
      "/images/fabrication/fabrication-05.webp"
    ],
    features: {
      ta: [
        "ஆர்கான் TIG, MIG & ஆர்க் வெல்டிங்",
        "ஹெவி-டியூட்டி ரூஃபிங் ஷெட் & ட்ரஸ் ஒர்க்ஸ்",
        "மாடி ஸ்டீல் படிக்கட்டுகள் & பீம்கள்",
        "துல்லியமான பினிஷிங் & ஸ்பாட் சர்வீஸ்"
      ],
      en: [
        "Argon TIG, Wire-Feed MIG & ARC Welding",
        "Heavy-Duty Roofing Sheds & Trusses",
        "Steel Staircases & Structural Beams",
        "Smooth Weld Grinding & On-Site Service"
      ]
    },
    recommendedGrade: "SS 304 / Structural MS / Alloy Steel"
  },
  {
    id: "stainless-steel-gates",
    categoryKey: "stainless-steel-gates",
    title: {
      ta: "ஸ்டெயின்லெஸ் ஸ்டீல் (SS) பிரதான கேட்டுகள்",
      en: "Stainless Steel (SS) Main Gates"
    },
    shortDescription: {
      ta: "பிரீமியம் SS 304/316 கிரேடு ஸ்டெயின்லெஸ் ஸ்டீல் முன்வாசல் ஸ்லைடிங் மற்றும் சுழல் கேட்டுகள், மிரர் பாலிஷ் பளபளப்பு மற்றும் மர வேலைப்பாடு கலவை.",
      en: "Luxury SS 304 & 316 entrance gates, smooth sliding mechanisms, contemporary horizontal louvers, mirror polish, and wood/gold accent inlays."
    },
    fullDescription: {
      ta: "வீட்டின் முன் முகப்பிற்கு கம்பீரமான அழகையும் 100% துருப்பிடிக்காத பாதுகாப்பையும் தரும் SS கேட்டுகள். கனரக சதுர மற்றும் செவ்வக குழாய்கள் கொண்டு உருவாக்கப்பட்டு சீரான பேரிங் சக்கரங்களுடன் பொருத்தப்படும்.",
      en: "High-prestige main entrance compound gates fabricated with marine-grade stainless steel hollow sections. Built with concealed joint welds, whisper-quiet roller tracks, motorization readiness, and lifetime tarnish immunity."
    },
    primaryImage: "/images/stainless-steel-gates/ss-gate-01.webp",
    galleryImages: [
      "/images/stainless-steel-gates/ss-gate-01.webp",
      "/images/stainless-steel-gates/ss-gate-02.webp",
      "/images/stainless-steel-gates/ss-gate-03.webp",
      "/images/stainless-steel-gates/ss-gate-04.webp",
      "/images/stainless-steel-gates/ss-gate-05.webp"
    ],
    features: {
      ta: [
        "உயர்தர SS 304 / 316 கிரேடு ஸ்டீல்",
        "மிரர் பளபளப்பு அல்லது சாடின் பினிஷ்",
        "ஸ்லைடிங் & சுழல் கேட் அமைப்புகள்",
        "ஆட்டோமேஷன் மோட்டார் பொருத்தும் வசதி"
      ],
      en: [
        "Certified SS 304 & 316 Stainless Steel",
        "High-Sheen Mirror & Satin Hairline Buffing",
        "Smooth Rolling Sliding & Swing Systems",
        "Automatic Gate Motor Ready"
      ]
    },
    recommendedGrade: "SS 304 / SS 316 Marine Grade"
  },
  {
    id: "mosquito-nets",
    categoryKey: "mosquito-nets",
    title: {
      ta: "கொசு வலை & இன்செக்ட் மெஷ் சிஸ்டம்ஸ்",
      en: "Mosquito Nets & Insect Mesh Systems"
    },
    shortDescription: {
      ta: "ஜன்னல் மற்றும் பால்கனி கதவுகளுக்கு ஏற்ற ஸ்லைடிங் கொசு வலைகள், பிளீட்டட் (Pleated) சுருள் கதவுகள், மேக்னடிக் மெஷ் மற்றும் SS வயர் மெஷ் தடுப்புகள்.",
      en: "Custom-fitted window mosquito mesh screens, sliding mosquito net doors, pleated retractable balcony screens, magnetic net systems, and SS wire mesh."
    },
    fullDescription: {
      ta: "கொசு மற்றும் பூச்சிகள் வீட்டிற்குள் வராமல் பாதுகாக்கும் அதே வேளையில், தடையற்ற காற்று வெளிச்சத்தை தரும் நவீன அலுமினியம் பிரேம் கொசு வலைகள். அனைத்து வகையான மர, UPVC மற்றும் அலுமினிய ஜன்னல்களுக்கும் கச்சிதமாக பொருத்தப்படும்.",
      en: "Premium residential insect barrier systems built with powder-coated aluminum frames and high-tensile fiberglass or stainless steel wire mesh. Allows 100% natural ventilation while providing complete mosquito and insect protection."
    },
    primaryImage: "/images/mosquito-nets/mosquito-01.webp",
    galleryImages: [
      "/images/mosquito-nets/mosquito-01.webp",
      "/images/mosquito-nets/mosquito-02.webp",
      "/images/mosquito-nets/mosquito-03.webp",
      "/images/mosquito-nets/mosquito-04.webp",
      "/images/mosquito-nets/mosquito-05.webp"
    ],
    features: {
      ta: [
        "சுருள் பிளீட்டட் (Pleated) பால்கனி கதவுகள்",
        "அலுமினியம் பிரேம் ஸ்லைடிங் ஜன்னல் வலை",
        "துருப்பிடிக்காத SS & ஃபைபர் கிளாஸ் மெஷ்",
        "எளிதில் கழற்றி சுத்தம் செய்யும் வடிவமைப்பு"
      ],
      en: [
        "Retractable Pleated Balcony Screen Doors",
        "Smooth Aluminum Sliding Window Mesh",
        "Rust-Proof SS 304 & Fiberglass Mesh",
        "Easy Removable & Washable Design"
      ]
    },
    recommendedGrade: "Powder-Coated Aluminum + SS 304 Mesh"
  }
];
