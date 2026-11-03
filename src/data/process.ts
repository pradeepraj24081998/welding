export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  keyPoints: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "DISCUSS",
    tagline: "Understanding Your Vision",
    description:
      "We begin by understanding your exact site requirements, aesthetic preferences, dimension specifications, and functional priorities.",
    keyPoints: ["Site visit & direct discussion", "Exact measurement recording", "Requirement analysis"]
  },
  {
    step: "02",
    title: "DESIGN",
    tagline: "Planning Fabrication Details",
    description:
      "We recommend the ideal metal grades (SS 304, SS 316, or heavy mild steel) and curate laser-cut patterns or custom railing layouts.",
    keyPoints: ["Material grade selection", "Pattern & motif finalization", "Clear project scope definition"]
  },
  {
    step: "03",
    title: "FABRICATE",
    tagline: "Master Metalworking & Welding",
    description:
      "Our workshop executes high-penetration TIG/MIG welding, CNC laser cutting, deburring, seam grinding, and multi-stage mirror buffing.",
    keyPoints: ["TIG & MIG precision welding", "CNC fiber laser cutting", "Multi-stage buffing & finishing"]
  },
  {
    step: "04",
    title: "DELIVER",
    tagline: "Rigid Installation & Handover",
    description:
      "We complete final on-site positioning, heavy-duty bolting or grouting, structural alignment checks, and clean handover to the customer.",
    keyPoints: ["Secure site mounting", "Structural rigidity check", "Clean final polish & handover"]
  }
];

export interface WhyChooseUsFeature {
  title: string;
  description: string;
  icon: string;
}

export const WHY_CHOOSE_US_DATA: WhyChooseUsFeature[] = [
  {
    title: "Precision Craftsmanship",
    description: "Every joint, miter cut, and weld seam is meticulously measured and finished for structural stability and clean visual lines.",
    icon: "Ruler"
  },
  {
    title: "Custom Design Solutions",
    description: "From tailored stainless steel staircase layouts to intricate laser-cut Tree of Life panels and religious inlays.",
    icon: "Compass"
  },
  {
    title: "Quality Materials",
    description: "We use genuine Grade 304/316 stainless steel and heavy-gauge mild steel engineered to resist weathering and wear.",
    icon: "ShieldCheck"
  },
  {
    title: "Attention to Detail",
    description: "Smooth weld transitions, concealed anchors, burr-free laser cut edges, and high-gloss mirror finishes.",
    icon: "Sparkles"
  },
  {
    title: "Professional Workmanship",
    description: "Experienced welding and fabrication discipline applied on every residential, commercial, and workshop job.",
    icon: "Hammer"
  },
  {
    title: "Customer-Focused Service",
    description: "Direct owner consultation with Logeshwaran, clear communication, transparent pricing, and dependable site execution.",
    icon: "Users"
  }
];
