export type ProjectCategoryKey =
  | "all"
  | "railings"
  | "gates"
  | "laser"
  | "roofing"
  | "industrial";

export interface ProjectItem {
  id: string;
  title: {
    ta: string;
    en: string;
  };
  category: ProjectCategoryKey;
  image: string;
  isAuthentic: boolean;
  location: {
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
}

export const PROJECT_CATEGORIES: { key: ProjectCategoryKey; label: { ta: string; en: string } }[] = [
  { key: "all", label: { ta: "அனைத்தும்", en: "All Works" } },
  { key: "railings", label: { ta: "SS ரெயிலிங்", en: "SS Railings" } },
  { key: "gates", label: { ta: "கேட் & கிரில்", en: "Gates & Grills" } },
  { key: "laser", label: { ta: "லேசர் கட்டிங்", en: "Laser Cut Art" } },
  { key: "roofing", label: { ta: "ரூஃபிங் ஷெட்", en: "Roofing Sheds" } },
  { key: "industrial", label: { ta: "வெல்டிங் வேலைகள்", en: "Welding Works" } }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "real-staircase-railing",
    title: {
      ta: "ஸ்டெயின்லெஸ் ஸ்டீல் மாடி படிக்கட்டு ரெயிலிங்",
      en: "Stainless Steel Staircase Railing Installation"
    },
    category: "railings",
    image: "/images/projects/real-project-1-staircase-railing.jpg",
    isAuthentic: true,
    location: {
      ta: "குடியிருப்பு இல்லம், துறையூர்",
      en: "Residential Project, Thuraiyur"
    },
    description: {
      ta: "பிரீமியம் SS 304 கிரேடு குழாய்கள், தேக்கு மர தொடுதலுடன் கூடிய கார்னர் தூண் மற்றும் மிரர் பினிஷிங் ஸ்டீல் உருண்டை அலங்காரத்துடன் அமைக்கப்பட்ட மாடி படிக்கட்டு.",
      en: "Custom multi-line SS 304 staircase railing installation featuring an ergonomic handrail, 4 guard rails, and a wood-accented newel post topped with a mirror ball finial."
    },
    features: {
      ta: ["SS 304 கிரேடு துருப்பிடிக்காத ஸ்டீல்", "உயர்தர மர வேலைப்பாடு கலவை", "மிரர் பினிஷ் பளபளப்பு", "உறுதியான படி ஆங்கரிங்"],
      en: ["Grade 304 SS Construction", "Wood-Accented Newel Post", "Mirror Polished Ball Finial", "Solid Floor Anchoring"]
    }
  },
  {
    id: "real-laser-cut-gate",
    title: {
      ta: "கற்பகவிருட்ச மரம் & மலர் டிசைன் CNC கேட்",
      en: "Decorative Laser-Cut Tree & Floral Safety Gate"
    },
    category: "laser",
    image: "/images/projects/real-project-2-laser-cut-gate.jpg",
    isAuthentic: true,
    location: {
      ta: "வீட்டு வாசல், திருச்சி மாவட்டம்",
      en: "Residential Residence, Tiruchirappalli District"
    },
    description: {
      ta: "தங்க நிற மெட்டாலிக் பெயிண்டில் CNC லேசர் கட்டிங் செய்யப்பட்ட மரம் மற்றும் மலர் அலங்கார பேனலுடன் கூடிய உறுதியான கருப்பு மெட்டல் கேட்.",
      en: "Compound entrance gate featuring CNC laser-cut Tree of Life and floral motifs in an elegant gold metallic finish, framed by vertical safety grills."
    },
    features: {
      ta: ["துல்லியமான CNC ஃபைபர் லேசர் கட்டிங்", "கோல்டு & மேட் பிளாக் இரட்டை நிறம்", "பாதுகாப்பான செங்குத்து கம்பிகள்", "கனரக கட்டமைப்பு"],
      en: ["High Precision Laser Cut", "Gold & Matte Black Dual Tone", "Rigid Perimeter Security", "Heavy Gauge Metal"]
    }
  },
  {
    id: "real-ss-main-gate",
    title: {
      ta: "ஹெவி-டியூட்டி SS பிரதான ஸ்லைடிங் கேட்",
      en: "Heavy-Duty Stainless Steel Main Entrance Gate"
    },
    category: "gates",
    image: "/images/projects/real-project-3-ss-main-gate-workshop.jpg",
    isAuthentic: true,
    location: {
      ta: "எங்கள் பட்டறையில் நேரடி தயாரிப்பு, துறையூர்",
      en: "Logeshwaran Workshop, Thuraiyur"
    },
    description: {
      ta: "கனரக SS சதுர குழாய்களால் உருவாக்கப்பட்ட பிரம்மாண்டமான முன்வாசல் கேட். எளிதாக நகரும் பேரிங் சக்கரங்கள் மற்றும் பாதுகாப்பு தாழ்ப்பாள்களுடன் பொருத்தப்பட்டது.",
      en: "Architectural stainless steel entrance gate fabricated in our workshop using heavy-gauge hollow rectangular sections and ball-bearing rollers."
    },
    features: {
      ta: ["முழுக்க முழுக்க SS 304 ஸ்டீல்", "எளிதாக உருளும் சக்கர அமைப்பு", "நவீன வடிவமைப்பு", "வாழ்நாள் துரு பாதுகாப்பு"],
      en: ["100% SS 304 Steel", "Smooth Sliding Rollers", "Contemporary Geometry", "Rust-Proof Lifetime Security"]
    }
  },
  {
    id: "real-ganesha-laser-panel",
    title: {
      ta: "CNC லேசர் விநாயகர் பக்தி உருவ பேனல்",
      en: "CNC Laser-Cut Lord Ganesha Decorative Panel"
    },
    category: "laser",
    image: "/images/projects/real-project-4-laser-cut-ganesha-panel.jpg",
    isAuthentic: true,
    location: {
      ta: "முன்வாசல் அலங்காரம், துறையூர்",
      en: "Entrance Gate Inlay, Thuraiyur"
    },
    description: {
      ta: "வீட்டின் முன் வாசலுக்கு மங்களகரமான அழகை சேர்க்கும் CNC மெட்டல் லேசர் கட்டிங் விநாயகர் உருவ பேனல்.",
      en: "Intricate laser-cut sacred Lord Ganesha metallic panel custom-fabricated for installation on residential front entrance doors."
    },
    features: {
      ta: ["நுணுக்கமான லேசர் வேலைப்பாடு", "கோல்டன் மெட்டாலிக் பினிஷ்", "பிரதான கேட்டுகளுக்கு ஏற்றது", "நீடித்த எஃகு உறுதி"],
      en: ["Fine Laser Profiling", "Golden Metallic Finish", "Pre-Welded For Gate Inlay", "Corrosion Resistant"]
    }
  },
  {
    id: "structural-shed-work",
    title: {
      ta: "ஹெவி-டியூட்டி ரூஃபிங் & இண்டஸ்ட்ரியல் ஷெட்",
      en: "Industrial Steel Truss Roofing Shed"
    },
    category: "roofing",
    image: "/images/welding/structural-roof-truss.jpg",
    isAuthentic: true,
    location: {
      ta: "தொழில் வளாகம், திருச்சி புறவழிச்சாலை",
      en: "Commercial Shed, Trichy Region"
    },
    description: {
      ta: "கனரக MS குழாய்கள் கொண்டு புயல், மழையை தாங்கும் வகையில் வடிவமைக்கப்பட்ட உயர்தர ரூஃபிங் ஷெட் மற்றும் ட்ரஸ் கட்டமைப்பு.",
      en: "Engineered heavy-gauge tubular steel truss roof designed for workshops, warehouses, and vehicle parking facilities."
    },
    features: {
      ta: ["அதிக எடை தாங்கும் வடிவமைப்பு", "ஆண்டி-ரஸ்ட் பிரைமர் பூச்சு", "விரைவான நிறுவுதல்", "பல வருட உறுதி"],
      en: ["High-Load Truss Engineering", "Anti-Rust Primer Treated", "Speedy On-Site Assembly", "Certified Durability"]
    }
  },
  {
    id: "tig-welding-craft",
    title: {
      ta: "அதிநவீன ஆர்கான் TIG & MIG வெல்டிங் பணி",
      en: "Precision Argon TIG & MIG Welding Craftsmanship"
    },
    category: "industrial",
    image: "/images/welding/mig-industrial-welding.jpg",
    isAuthentic: true,
    location: {
      ta: "பட்டறை & ஸ்பாட் சர்வீஸ், துறையூர்",
      en: "Workshop & Field Unit, Thuraiyur"
    },
    description: {
      ta: "துல்லியமான ஆர்கான் வாயு கவசம் கொண்டு செய்யப்படுவதால் பற்றவைக்கப்பட்ட இடம் தெரியாமல், உறுதியான மற்றும் மென்மையான பினிஷிங் கிடைக்கிறது.",
      en: "Clean argon shielding gas weld beads delivering deep metallurgical penetration with zero porosity, followed by mirror grinding and buffing."
    },
    features: {
      ta: ["ஆர்கான் வாயு கவச வெல்டிங்", "கண்ணுக்குத் தெரியாத மென்மையான பினிஷ்", "அதிகபட்ச இணைப்பு பலம்", "அனைத்து உலோகங்களுக்கும் ஏற்றது"],
      en: ["Argon Gas Shielded", "Seamless Ground Joint", "High Tensile Weld Strength", "SS, MS & Cast Metal Friendly"]
    }
  }
];
