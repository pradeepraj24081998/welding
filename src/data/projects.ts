export type ProjectCategoryKey =
  | "all"
  | "plumber"
  | "steel-grill-gate"
  | "fabrication"
  | "stainless-steel-gates"
  | "mosquito-nets";

export interface ProjectItem {
  id: string;
  category: ProjectCategoryKey;
  title: {
    ta: string;
    en: string;
  };
  image: string;
  categoryLabel: {
    ta: string;
    en: string;
  };
  description: {
    ta: string;
    en: string;
  };
  features: {
    ta: string[];
    en: string[];
  };
  location: {
    ta: string;
    en: string;
  };
}

export const PROJECT_CATEGORIES: {
  key: ProjectCategoryKey;
  label: { ta: string; en: string };
  count: number;
}[] = [
  { key: "all", label: { ta: "அனைத்தும்", en: "All Works" }, count: 25 },
  { key: "plumber", label: { ta: "பிளம்பர்", en: "Plumber" }, count: 5 },
  { key: "steel-grill-gate", label: { ta: "ஸ்டீல் கிரில் கேட்", en: "Steel Grill Gate" }, count: 5 },
  { key: "fabrication", label: { ta: "ஃபேப்ரிகேஷன்", en: "Fabrication" }, count: 5 },
  { key: "stainless-steel-gates", label: { ta: "SS கேட்", en: "Stainless Steel Gates" }, count: 5 },
  { key: "mosquito-nets", label: { ta: "கொசு வலை", en: "Mosquito Nets" }, count: 5 }
];

export const PROJECTS_DATA: ProjectItem[] = [
  // 1. PLUMBER CATEGORY
  {
    id: "plumber-01",
    category: "plumber",
    categoryLabel: { ta: "பிளம்பிங்", en: "Plumbing" },
    title: {
      ta: "குடிநீர் குழாய் பதிப்பு & வால்வு பொருத்துதல்",
      en: "Water Supply Pipeline & Pressure Valve Installation"
    },
    image: "/images/plumber/plumber-01.webp",
    description: {
      ta: "குடியிருப்பு இல்லத்திற்கு தேவையான உயர்தர CPVC மற்றும் பித்தளை வால்வுகள் கொண்ட குடிநீர் விநியோக பைப்லைன் இணைப்பு.",
      en: "High-grade CPVC and brass valve installation for residential clean water supply and pressure regulation."
    },
    features: {
      ta: ["கசிவில்லாத CPVC பைப்லைன்", "பிரெஷர் ரெகுலேட்டர் வால்வு", "நீடித்த இணைப்பு பலம்"],
      en: ["Leak-Proof CPVC Joints", "Pressure Regulating Valves", "Durable Heavy-Duty Fittings"]
    },
    location: { ta: "துறையூர்", en: "Thuraiyur" }
  },
  {
    id: "plumber-02",
    category: "plumber",
    categoryLabel: { ta: "பிளம்பிங்", en: "Plumbing" },
    title: {
      ta: "ஓவர்ஹெட் டேங்க் & மோட்டார் பைப்லைன் பிளம்பிங்",
      en: "Overhead Tank & Water Pump Pipeline Setup"
    },
    image: "/images/plumber/plumber-02.webp",
    description: {
      ta: "தடையற்ற நீர் ஓட்டத்தை உறுதி செய்யும் ஓவர்ஹெட் தண்ணீர் தொட்டி மற்றும் மோட்டார் பைப்லைன் இணைப்பு வேலைகள்.",
      en: "Multi-line water distribution from overhead storage tanks with air-release valves and bypass line configuration."
    },
    features: {
      ta: ["UV ரெசிஸ்டண்ட் PVC பைப்", "ஏர் ரிலீஸ் வால்வு அமைப்பு", "சுத்தமான பைப் ரூட்டிங்"],
      en: ["UV-Resistant Heavy PVC", "Air-Release Protection", "Clean Manifold Routing"]
    },
    location: { ta: "திருச்சி மாவட்டம்", en: "Trichy District" }
  },
  {
    id: "plumber-03",
    category: "plumber",
    categoryLabel: { ta: "பிளம்பிங்", en: "Plumbing" },
    title: {
      ta: "பாத்ரூம் சானிட்டரி & ஷவர் பைப் ஃபிட்டிங்ஸ்",
      en: "Bathroom Sanitary & Shower Pipeline Installation"
    },
    image: "/images/plumber/plumber-03.webp",
    description: {
      ta: "நவீன பாத்ரூம்களுக்கான கன்சீல்டு (Concealed) சுவரில் பதிக்கப்படும் டைவர்ஷன் பைப்லைன்கள் மற்றும் க்ரோம் ஃபிட்டிங்ஸ்.",
      en: "Concealed wall hot & cold water diverter plumbing, chrome fixture alignments, and drain trap installations."
    },
    features: {
      ta: ["ஹாட் & கோல்டு வாட்டர் லைன்", "கன்சீல்டு டைவர்ட்டர் ஃபிட்டிங்", "கசிவற்ற டெஸ்டிங்"],
      en: ["Hot & Cold Dual Piping", "Concealed Wall Diverters", "100% Hydrostatic Tested"]
    },
    location: { ta: "துறையூர் புறவழிச்சாலை", en: "Thuraiyur Bypass" }
  },
  {
    id: "plumber-04",
    category: "plumber",
    categoryLabel: { ta: "பிளம்பிங்", en: "Plumbing" },
    title: {
      ta: "சமையலறை சிங்க் & கழிவுநீர் வடிகால் குழாய் அமைப்பு",
      en: "Kitchen Sink & Waste Water Drainage Line Setup"
    },
    image: "/images/plumber/plumber-04.webp",
    description: {
      ta: "சமையலறை பாத்திரம் கழுவும் சிங்க் மற்றும் துரித கழிவுநீர் வெளியேற்றத்திற்கான பைப்லைன் அமைத்தல்.",
      en: "Odor-sealed kitchen sink trap installation, grease-resistant drain lines, and flexible tap fittings."
    },
    features: {
      ta: ["துர்நாற்ற தடுப்பு ட்ராப்", "அடைப்பில்லாத வடிகால் குழாய்", "விரைவான பொருத்துதல்"],
      en: ["Anti-Odor S-Trap Fitting", "Clog-Free Drainage Slope", "Easy Service Access"]
    },
    location: { ta: "முசிறி ரோடு", en: "Musiri Road" }
  },
  {
    id: "plumber-05",
    category: "plumber",
    categoryLabel: { ta: "பிளம்பிங்", en: "Plumbing" },
    title: {
      ta: "பிளம்பிங் பராமரிப்பு & அவசர பழுதுநீக்கம்",
      en: "Comprehensive Plumbing Maintenance & Leak Repair"
    },
    image: "/images/plumber/plumber-05.webp",
    description: {
      ta: "சுவர் மற்றும் தரைக்கு அடியில் உள்ள குழாய் கசிவுகளை கண்டறிந்து சுவரை சேதப்படுத்தாமல் உடனடியாக சரிசெய்யும் பணி.",
      en: "Precision acoustic leak detection, valve core replacements, and underground pipe repair with minimal wall disruption."
    },
    features: {
      ta: ["துல்லியமான கசிவு கண்டறிதல்", "அவசர ஸ்பாட் சர்வீஸ்", "நீடித்த உதிரிபாகங்கள்"],
      en: ["Non-Destructive Leak Check", "Rapid Emergency Response", "Long-Life Replacement Parts"]
    },
    location: { ta: "பெரம்பலூர் சுற்றுவட்டாரம்", en: "Perambalur Area" }
  },

  // 2. STEEL GRILL GATE CATEGORY
  {
    id: "grill-01",
    category: "steel-grill-gate",
    categoryLabel: { ta: "ஸ்டீல் கிரில் கேட்", en: "Steel Grill Gate" },
    title: {
      ta: "நவீன வடிவியல் MS ஸ்டீல் கிரில் கேட்",
      en: "Contemporary Geometric MS Steel Grill Gate"
    },
    image: "/images/steel-grill-gate/grill-01.webp",
    description: {
      ta: "வீட்டின் முகப்பிற்கு அழகும் கூடுதல் பாதுகாப்பும் தரும் நவீன செங்குத்து கம்பிகள் கொண்ட MS ஸ்டீல் ஸ்லைடிங் கேட்.",
      en: "Architectural mild steel entrance gate with balanced vertical louver styling and smooth roller track system."
    },
    features: {
      ta: ["கனரக MS குழாய்கள்", "இரட்டை அடுக்கு எபாக்சி பெயிண்ட்", "எளிதாக உருளும் பேரிங் சக்கரம்"],
      en: ["Heavy Gauge Tubular MS", "Double Epoxy Primer Coat", "Smooth Ball-Bearing Track"]
    },
    location: { ta: "குடியிருப்பு வளாகம், துறையூர்", en: "Residential Villa, Thuraiyur" }
  },
  {
    id: "grill-02",
    category: "steel-grill-gate",
    categoryLabel: { ta: "ஸ்டீல் கிரில் கேட்", en: "Steel Grill Gate" },
    title: {
      ta: "அலங்கார கலைநயமிக்க வீடு கிரில் கேட்",
      en: "Ornamental Forged Steel House Grill Gate"
    },
    image: "/images/steel-grill-gate/grill-02.webp",
    description: {
      ta: "பாரம்பரிய கலை நுணுக்கங்களுடன் கூடிய வளைவு டிசைன்கள் மற்றும் தங்க நிற மெட்டாலிக் ஹைலைட்ஸ் கொண்ட பிரதான கேட்.",
      en: "Hand-forged wrought iron and mild steel entrance gate featuring decorative spiral scrollwork and gold highlights."
    },
    features: {
      ta: ["கலைநயமிக்க வளைவு வேலைப்பாடு", "கோல்டு மெட்டாலிக் பினிஷ்", "உறுதியான மைய பூட்டு அமைப்பு"],
      en: ["Handcrafted Scrollwork", "Golden Accent Highlighting", "Central Multi-Point Lock"]
    },
    location: { ta: "திருச்சிராப்பள்ளி புறநகர்", en: "Trichy Suburb" }
  },
  {
    id: "grill-03",
    category: "steel-grill-gate",
    categoryLabel: { ta: "ஸ்டீல் கிரில் கேட்", en: "Steel Grill Gate" },
    title: {
      ta: "ஹெவி-டியூட்டி பாதுகாப்பு எல்லை கேட்",
      en: "Heavy-Duty Compound Security Perimeter Gate"
    },
    image: "/images/steel-grill-gate/grill-03.webp",
    description: {
      ta: "அதிகபட்ச பாதுகாப்பு தரும் தடிமனான MS சட்டகங்கள் மற்றும் திருடர்கள் புக முடியாத நெருக்கமான கம்பிகள் கொண்ட கேட்.",
      en: "High-security compound perimeter gate with reinforced anti-cut vertical bars and anti-lift hinge safety pins."
    },
    features: {
      ta: ["கட்டறுக்க முடியாத தடிமன்", "ஆன்டி-லிப்ட் கீல் பாதுகாப்பு", "புயல் காற்று தாங்கும் உறுதி"],
      en: ["Anti-Cut Heavy Steel Bars", "Anti-Lift Security Pins", "High Wind-Load Capacity"]
    },
    location: { ta: "தொழில் பேட்டை, துறையூர்", en: "Industrial Area, Thuraiyur" }
  },
  {
    id: "grill-04",
    category: "steel-grill-gate",
    categoryLabel: { ta: "ஸ்டீல் கிரில் கேட்", en: "Steel Grill Gate" },
    title: {
      ta: "டபுள் டோர் குடியிருப்பு பாதுகாப்பு கிரில் கேட்",
      en: "Double-Leaf Residential Swing Grill Gate"
    },
    image: "/images/steel-grill-gate/grill-04.webp",
    description: {
      ta: "இருபுறமும் சுலபமாக திறக்கும் டபுள் டோர் அமைப்புடன் கூடிய அழகிய மேட் பிளாக் பினிஷ் பாதுகாப்பு கேட்.",
      en: "Dual-swing entrance grill doors with integrated pedestrian pass gate, greased heavy hinges, and floor drop bolts."
    },
    features: {
      ta: ["டபுள் டோர் ஸ்விங் வசதி", "தனி நடைபாதை கதவு", "மேட் பிளாக் பினிஷிங்"],
      en: ["Dual-Swing Ease of Access", "Integrated Pedestrian Gate", "Matte Black Protective Coat"]
    },
    location: { ta: "உப்பிலியாபுரம் ரோடு", en: "Uppiliapuram Road" }
  },
  {
    id: "grill-05",
    category: "steel-grill-gate",
    categoryLabel: { ta: "ஸ்டீல் கிரில் கேட்", en: "Steel Grill Gate" },
    title: {
      ta: "துல்லியமான வெல்டிங் இணைப்புகள் கொண்ட மெட்டல் கேட்",
      en: "Precision-Seamed Heavy Welded Grill Gate"
    },
    image: "/images/steel-grill-gate/grill-05.webp",
    description: {
      ta: "பற்றவைக்கப்பட்ட இடங்கள் தெரியாதவாறு மெருகூட்டப்பட்ட மூலையிணைப்புகள் மற்றும் நீர் தங்காத மழைநீர் வடிகால் வடிவமைப்பு.",
      en: "Detailed full-penetration welded joints with flush-ground seams and weep holes to prevent internal moisture rust."
    },
    features: {
      ta: ["மென்மையான மூலை பினிஷ்", "மழைநீர் தங்காத வடிவம்", "உறுதியான ஆங்கர் போல்ட்"],
      en: ["Seamless Ground Joints", "Anti-Moisture Drainage", "Rigid Anchor Fasteners"]
    },
    location: { ta: "துறையூர் டவுன்", en: "Thuraiyur Town" }
  },

  // 3. FABRICATION WORKS CATEGORY
  {
    id: "fabrication-01",
    category: "fabrication",
    categoryLabel: { ta: "ஃபேப்ரிகேஷன்", en: "Fabrication" },
    title: {
      ta: "ஆர்கான் TIG & MIG வெல்டிங் பட்டறை தயாரிப்பு",
      en: "Argon TIG & MIG Workshop Precision Fabrication"
    },
    image: "/images/fabrication/fabrication-01.webp",
    description: {
      ta: "ஆர்கான் வாயு கவசம் கொண்டு உலோகத்தின் ஆழம் வரை பற்றவைக்கப்படும் அதிநவீன வெல்டிங் உழைப்பு.",
      en: "Deep-penetration argon gas shielded welding delivering structurally certified joint rigidity with zero slag."
    },
    features: {
      ta: ["ஆர்கான் வாயு கவச வெல்டிங்", "உயர்ந்த கூட்டு பலம்", "பட்டறை நேரடி தயாரிப்பு"],
      en: ["Argon Gas Shielded Process", "High Tensile Weld Integrity", "Direct Workshop Craft"]
    },
    location: { ta: "லோகேஸ்வரன் பட்டறை, துறையூர்", en: "Logeshwaran Workshop, Thuraiyur" }
  },
  {
    id: "fabrication-02",
    category: "fabrication",
    categoryLabel: { ta: "ஃபேப்ரிகேஷன்", en: "Fabrication" },
    title: {
      ta: "கனரக ஸ்டீல் கட்டமைப்பு & பிரேம் தயாரிப்பு",
      en: "Heavy Structural Steel Framework Fabrication"
    },
    image: "/images/fabrication/fabrication-02.webp",
    description: {
      ta: "தொழிற்சாலை தளவாடங்கள், இயந்திர தாங்கு பீம்கள் மற்றும் பெரிய அளவிலான உலோக கட்டமைப்புகள்.",
      en: "Structural I-beam and box-section assembly engineered to builder blueprints and heavy load requirements."
    },
    features: {
      ta: ["ஹெவி லோடு தாங்கும் பீம்கள்", "துல்லியமான மிட்டர் கட்டிங்", "தளத்தில் பாதுகாப்பான பொருத்துதல்"],
      en: ["Heavy Load Tested", "Precision Laser Miter Cuts", "Engineered Site Erection"]
    },
    location: { ta: "திருச்சி இண்டஸ்ட்ரியல் எஸ்டேட்", en: "Trichy Industrial Estate" }
  },
  {
    id: "fabrication-03",
    category: "fabrication",
    categoryLabel: { ta: "ஃபேப்ரிகேஷன்", en: "Fabrication" },
    title: {
      ta: "துல்லியமான மெட்டல் கட்டிங் & பினிஷிங் பணி",
      en: "High-Precision Metal Cutting & Deburring Work"
    },
    image: "/images/fabrication/fabrication-03.webp",
    description: {
      ta: "கூரிய முனைகள் மற்றும் தேவையற்ற பிசிறுகளை அகற்றி உலோக பாகங்களை நேர்த்தியாக தயார் செய்யும் முறை.",
      en: "High-speed cold saw cutting and pneumatic rotary deburring ensuring razor-clean edge alignment on all components."
    },
    features: {
      ta: ["பிசிறற்ற வழவழப்பான விளிம்புகள்", "துல்லியமான கோண அளவீடு", "நேர்த்தியான மேற்பரப்பு"],
      en: ["Burr-Free Edge Profiling", "Accurate Bevel Alignment", "Fine Surface Prep"]
    },
    location: { ta: "துறையூர் பட்டறை", en: "Thuraiyur Workshop" }
  },
  {
    id: "fabrication-04",
    category: "fabrication",
    categoryLabel: { ta: "ஃபேப்ரிகேஷன்", en: "Fabrication" },
    title: {
      ta: "ஹெவி-டியூட்டி ரூஃபிங் ஷெட் & ட்ரஸ் ஒர்க்ஸ்",
      en: "Heavy-Duty Tubular Steel Roofing Shed & Truss"
    },
    image: "/images/fabrication/fabrication-04.webp",
    description: {
      ta: "தொழிற்சாலைகள், குடோன்கள் மற்றும் கார் பார்க்கிங்கிற்கு புயல் மற்றும் மழையை தாங்கும் வகையில் அமைக்கப்பட்ட ரூஃபிங் ட்ரஸ்.",
      en: "Tubular steel Pratt and Warren truss roofs fabricated for warehouse coverage, factory halls, and vehicle shelters."
    },
    features: {
      ta: ["புயல் காற்று தாங்கும் உறுதி", "அரிமான எதிர்ப்பு பிரைமர்", "துரித ஆன்-சைட் நிறுவுதல்"],
      en: ["Storm Load Rated Engineering", "Corrosion Resistant Zinc Primer", "Speedy On-Site Assembly"]
    },
    location: { ta: "துறையூர் பைபாஸ் குடோன்", en: "Thuraiyur Bypass Warehouse" }
  },
  {
    id: "fabrication-05",
    category: "fabrication",
    categoryLabel: { ta: "ஃபேப்ரிகேஷன்", en: "Fabrication" },
    title: {
      ta: "மாடி மெட்டல் படிக்கட்டு & கைப்பிடி கட்டமைப்பு",
      en: "Custom Architectural Steel Staircase Assembly"
    },
    image: "/images/fabrication/fabrication-05.webp",
    description: {
      ta: "வீடுகள் மற்றும் வணிக வளாகங்களுக்கு தேவையான உறுதியான ஸ்பைரல் அல்லது நேரடி மாடி படிக்கட்டு ஃபேப்ரிகேஷன்.",
      en: "Custom steel stringer staircases with anti-wobble floor anchors, ergonomic handrails, and checker-plate steps."
    },
    features: {
      ta: ["அதிர்வு இல்லாத தரை ஆங்கரிங்", "வழுக்காத ஸ்டீல் படிகள்", "வாழ்நாள் கட்டமைப்பு உறுதி"],
      en: ["Anti-Wobble Ground Anchors", "Non-Slip Tread Profiling", "Certified Lifetime Rigidity"]
    },
    location: { ta: "குடியிருப்பு பங்களா, துறையூர்", en: "Residential Villa, Thuraiyur" }
  },

  // 4. STAINLESS STEEL GATES CATEGORY
  {
    id: "ss-gate-01",
    category: "stainless-steel-gates",
    categoryLabel: { ta: "SS கேட்", en: "SS Gate" },
    title: {
      ta: "SS 304 பிரதான ஸ்லைடிங் என்ட்ரன்ஸ் கேட்",
      en: "Premium SS 304 Main Sliding Entrance Gate"
    },
    image: "/images/stainless-steel-gates/ss-gate-01.webp",
    description: {
      ta: "உயர்தர துருப்பிடிக்காத SS 304 கிரேடு குழாய்கள் கொண்டு உருவாக்கப்பட்ட நவீன ஸ்லைடிங் முன்வாசல் கேட்.",
      en: "Grade 304 stainless steel sliding entrance gate with smooth stainless roller track and concealed corner joints."
    },
    features: {
      ta: ["SS 304 கிரேடு துரு பாதுகாப்பு", "மிரர் பாலிஷ் பளபளப்பு", "எளிதாக நகரும் ஸ்லைடிங் டிராக்"],
      en: ["Grade 304 Corrosion Proof", "High-Gloss Mirror Buffing", "Whisper-Quiet Slider Track"]
    },
    location: { ta: "துறையூர் பிரதான இல்லம்", en: "Thuraiyur Residence" }
  },
  {
    id: "ss-gate-02",
    category: "stainless-steel-gates",
    categoryLabel: { ta: "SS கேட்", en: "SS Gate" },
    title: {
      ta: "நவீன லூவர் மற்றும் மர வேலைப்பாடு கலந்த SS கேட்",
      en: "Contemporary SS Gate with Horizontal Louvers & Wood Inlay"
    },
    image: "/images/stainless-steel-gates/ss-gate-02.webp",
    description: {
      ta: "ஸ்டெயின்லெஸ் ஸ்டீலின் வலிமையுடன் தேக்கு மர தோற்றத்தை இணைத்து வீட்டின் பிரம்மாண்டத்தை கூட்டும் சொகுசு கேட்.",
      en: "Luxury architectural compound gate combining heavy stainless steel profiles with weather-treated wooden aesthetic panels."
    },
    features: {
      ta: ["லூவர் வடிவமைப்பு", "மர தோற்ற பாதுகாப்பு பேனல்", "பிரீமியம் அழகுத் தோற்றம்"],
      en: ["Horizontal Louver Blades", "Weather-Sealed Wood Texture", "Contemporary Architectural Look"]
    },
    location: { ta: "திருச்சிராப்பள்ளி நகர்", en: "Trichy City" }
  },
  {
    id: "ss-gate-03",
    category: "stainless-steel-gates",
    categoryLabel: { ta: "SS கேட்", en: "SS Gate" },
    title: {
      ta: "மழை வெயில் தாங்கும் SS 316 பால்கனி & கேட்",
      en: "Marine-Grade SS 316 Weather-Resistant Gate"
    },
    image: "/images/stainless-steel-gates/ss-gate-03.webp",
    description: {
      ta: "அதிக மழை, வெயில் மற்றும் உப்புக்காற்றை தாங்கி நிறம் மங்காமல் பளபளக்கும் SS 316 கடல்சார் தர ஸ்டீல் கேட்.",
      en: "Fabricated with certified SS 316 molybdenum alloy to prevent chemical corrosion, tarnishing, and tea-staining."
    },
    features: {
      ta: ["SS 316 கடல்சார் தரம்", "துருப்பிடிக்காத வாழ்நாள் உத்தரவாதம்", "சாடின் ஹேர்லைன் பினிஷ்"],
      en: ["Certified Marine Grade 316", "Lifetime Tarnish Immunity", "Satin Hairline Surface"]
    },
    location: { ta: "துறையூர்", en: "Thuraiyur" }
  },
  {
    id: "ss-gate-04",
    category: "stainless-steel-gates",
    categoryLabel: { ta: "SS கேட்", en: "SS Gate" },
    title: {
      ta: "ஹெவி-டியூட்டி SS சுழல் கேட் (Swing Gate)",
      en: "Heavy-Duty Dual-Leaf Stainless Steel Swing Gate"
    },
    image: "/images/stainless-steel-gates/ss-gate-04.webp",
    description: {
      ta: "இருபுறமும் சுலபமாக சுழலும் கனரக பேரிங் கீல்களுடன் கூடிய டபுள் டோர் SS கேட்.",
      en: "Engineered double swing gate with heavy-duty ball-bearing pivots, center safety drop latch, and motorization brackets."
    },
    features: {
      ta: ["கனரக பேரிங் கீல்கள்", "ஆட்டோமேஷன் மோட்டார் வசதி", "பாதுகாப்பான மைய தாழ்ப்பாள்"],
      en: ["Sealed Ball-Bearing Pivots", "Automated Motor Ready", "Secure Center Drop Latch"]
    },
    location: { ta: "பெரம்பலூர் சாலை", en: "Perambalur Road" }
  },
  {
    id: "ss-gate-05",
    category: "stainless-steel-gates",
    categoryLabel: { ta: "SS கேட்", en: "SS Gate" },
    title: {
      ta: "பட்டறையில் நேரடி தயாரிப்பு செய்யப்பட்ட SS மெயின் கேட்",
      en: "Authentic Workshop-Fabricated SS Compound Gate"
    },
    image: "/images/stainless-steel-gates/ss-gate-05.webp",
    description: {
      ta: "எங்கள் பட்டறையிலேயே வாடிக்கையாளர் அளவிற்கேற்ப முழுமையாக வெல்டிங் மற்றும் பஃப்பிங் செய்யப்பட்ட நேரடி தயாரிப்பு.",
      en: "Direct workshop fabrication by master craftsmen showing seamless mirror-ground corner joints and rigid internal bracing."
    },
    features: {
      ta: ["பட்டறை நேரடி தயாரிப்பு", "மிரர் பளபளப்பு பஃப்பிங்", "நேரடி விலை & உத்தரவாதம்"],
      en: ["Direct Workshop Craft", "Mirror Buffed Finish", "Direct Manufacturer Rate"]
    },
    location: { ta: "லோகேஸ்வரன் பட்டறை, துறையூர்", en: "Logeshwaran Workshop, Thuraiyur" }
  },

  // 5. MOSQUITO NETS CATEGORY
  {
    id: "mosquito-01",
    category: "mosquito-nets",
    categoryLabel: { ta: "கொசு வலை", en: "Mosquito Nets" },
    title: {
      ta: "அலுமினியம் பிரேம் ஜன்னல் ஸ்லைடிங் கொசு வலை",
      en: "Aluminum Frame Window Sliding Mosquito Mesh"
    },
    image: "/images/mosquito-nets/mosquito-01.webp",
    description: {
      ta: "ஜன்னலின் அளவிற்கு கச்சிதமாக பொருந்தும் பவுடர்-கோட்டட் அலுமினியம் பிரேம் மற்றும் கண்ணுக்குத் தெரியாத ஃபைபர் கிளாஸ் மெஷ்.",
      en: "Custom-extruded powder coated aluminum frame window screen with high-visibility fiberglass insect mesh."
    },
    features: {
      ta: ["பவுடர்-கோட்டட் அலுமினியம்", "தடைபடாத காற்று வெளிச்சம்", "சுலபமாக கழற்றி கழுவலாம்"],
      en: ["Powder-Coated Aluminum", "100% Air & Light Flow", "Washable & Low Maintenance"]
    },
    location: { ta: "குடியிருப்பு அடுக்குமாடி, துறையூர்", en: "Residential Apartment, Thuraiyur" }
  },
  {
    id: "mosquito-02",
    category: "mosquito-nets",
    categoryLabel: { ta: "கொசு வலை", en: "Mosquito Nets" },
    title: {
      ta: "சுருள் பிளீட்டட் (Pleated) பால்கனி கொசு வலை கதவு",
      en: "Retractable Pleated Balcony Screen Door"
    },
    image: "/images/mosquito-nets/mosquito-02.webp",
    description: {
      ta: "பால்கனி மற்றும் பிரதான கதவுகளுக்கு அழகிய சுருள் வடிவத்தில் விரியும் அதிநவீன பிளீட்டட் கொசு வலை கதவு அமைப்பு.",
      en: "Caterpillar-track pleated retractable screen door designed for wide balconies, patios, and French doors."
    },
    features: {
      ta: ["இடத்தை அடைக்காத சுருள் அமைப்பு", "அமைதியான இயக்கம்", "அழகிய மாடர்ன் லுக்"],
      en: ["Space-Saving Folding Mesh", "Smooth Whisper Gliding", "Elegant Contemporary Look"]
    },
    location: { ta: "முசிறி டவுன்", en: "Musiri Town" }
  },
  {
    id: "mosquito-03",
    category: "mosquito-nets",
    categoryLabel: { ta: "கொசு வலை", en: "Mosquito Nets" },
    title: {
      ta: "ஸ்மூத் ஸ்லைடிங் டபுள் டிராக் ஜன்னல் வலை",
      en: "Smooth Gliding Double-Track Window Mesh Screen"
    },
    image: "/images/mosquito-nets/mosquito-03.webp",
    description: {
      ta: "UPVC மற்றும் மர ஜன்னல்களுக்கு வெளிப்புறத்தில் அல்லது உள்புறத்தில் பொருத்தப்படும் இரட்டை டிராக் ஸ்லைடிங் வலை.",
      en: "Dual-track sliding screen panels fitted seamlessly to existing UPVC and wooden window casings."
    },
    features: {
      ta: ["UPVC மற்றும் மரத்திற்கு ஏற்றது", "நைலான் உருளை சக்கரங்கள்", "கொசு புக முடியாத பிரஷ் சீல்"],
      en: ["UPVC & Wood Compatible", "Nylon Roller Wheels", "Felt Brush Seal Edge"]
    },
    location: { ta: "துறையூர் மெயின் ரோடு", en: "Thuraiyur Main Road" }
  },
  {
    id: "mosquito-04",
    category: "mosquito-nets",
    categoryLabel: { ta: "கொசு வலை", en: "Mosquito Nets" },
    title: {
      ta: "SS 304 துருப்பிடிக்காத ஸ்டெயின்லெஸ் ஸ்டீல் மெஷ்",
      en: "Heavy-Duty SS 304 Security Wire Mosquito Mesh"
    },
    image: "/images/mosquito-nets/mosquito-04.webp",
    description: {
      ta: "எலி, அணில் அல்லது பூனைகள் கடித்து கிழிக்க முடியாத கடினமான SS 304 ஸ்டெயின்லெஸ் ஸ்டீல் கம்பி வலை.",
      en: "High-tensile SS 304 woven wire mesh resistant to pet scratches, rodent gnawing, and sharp impacts."
    },
    features: {
      ta: ["எலி கடிக்காத SS கம்பி வலை", "அதிகபட்ச பாதுகாப்பு & ஆயுள்", "துருப்பிடிக்காத எஃகு தரம்"],
      en: ["Rodent & Pet Proof SS", "Maximum Security & Tensile", "Corrosion Proof Stainless Steel"]
    },
    location: { ta: "திருச்சி சாலை", en: "Trichy Road" }
  },
  {
    id: "mosquito-05",
    category: "mosquito-nets",
    categoryLabel: { ta: "கொசு வலை", en: "Mosquito Nets" },
    title: {
      ta: "மேக்னடிக் வெல்க்ரோ எளிதான கொசு வலை அமைப்பு",
      en: "Magnetic & Velcro Removable Window Screen"
    },
    image: "/images/mosquito-nets/mosquito-05.webp",
    description: {
      ta: "ஆணி அடிக்காமல் காந்தம் மற்றும் வெல்க்ரோ கொண்டு கச்சிதமாக ஒட்டி பிரித்து எடுக்கும் எளிய கொசு வலை அமைப்பு.",
      en: "No-drill magnetic and adhesive-mount window insect screens ideal for rental houses and clean minimalist frames."
    },
    features: {
      ta: ["ஆணி அடிக்க தேவையில்லை", "சுலபமாக கழற்றி ஒட்டலாம்", "குறைந்த செலவு & சிறந்த பலன்"],
      en: ["No-Drill Installation", "Quick Peel-and-Stick Mount", "Cost-Effective & Functional"]
    },
    location: { ta: "துறையூர்", en: "Thuraiyur" }
  }
];
