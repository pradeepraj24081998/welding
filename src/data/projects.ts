export type ProjectCategory =
  | "All"
  | "Staircase Railings"
  | "Stainless Steel Works"
  | "Gates & Grills"
  | "Decorative Metal Designs"
  | "Custom Fabrication"
  | "Workshop & Welding";

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  isAuthentic: boolean;
  badge: string;
  location?: string;
  description: string;
  details: string[];
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "All",
  "Staircase Railings",
  "Stainless Steel Works",
  "Gates & Grills",
  "Decorative Metal Designs",
  "Custom Fabrication",
  "Workshop & Welding"
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "real-staircase-railing",
    title: "Stainless Steel Staircase Railing Installation",
    category: "Staircase Railings",
    image: "/images/projects/real-project-1-staircase-railing.jpg",
    isAuthentic: true,
    badge: "Actual Client Project",
    location: "Residential Project, Thuraiyur",
    description:
      "Custom multi-line stainless steel staircase railing installation featuring an ergonomic polished handrail, four intermediate safety guard bars, and a classic warm wood-accented newel post topped with a mirror-finish stainless steel ball finial.",
    details: [
      "Grade 304 Stainless Steel tubular construction",
      "Wood-accented decorative main corner post",
      "Mirror-polished stainless steel ball finial",
      "Precision step-anchored baluster posts with protective flanges"
    ]
  },
  {
    id: "real-laser-cut-gate",
    title: "Decorative Laser-Cut Tree & Floral Safety Gate",
    category: "Decorative Metal Designs",
    image: "/images/projects/real-project-2-laser-cut-gate.jpg",
    isAuthentic: true,
    badge: "Actual Client Project",
    location: "Residential Residence, Tiruchirappalli District",
    description:
      "Bespoke main entrance compound gate featuring CNC laser-cut Tree of Life and blooming floral motifs in an elegant gold metallic finish, framed within solid black vertical safety grills and textured metal kick-plates.",
    details: [
      "Precision CNC fiber laser-cut steel panels",
      "Lustrous gold enamel finish on decorative motifs",
      "Heavy-duty black protective iron frame & vertical bars",
      "Integrated dual-door entrance with heavy lock bracket"
    ]
  },
  {
    id: "real-workshop-ss-gate",
    title: "Stainless Steel Main Gate Workshop Fabrication",
    category: "Gates & Grills",
    image: "/images/projects/real-project-3-ss-main-gate-workshop.jpg",
    isAuthentic: true,
    badge: "Actual Workshop Project",
    location: "Logeshwaran Workshop, Thuraiyur",
    description:
      "In-progress workshop fabrication of a high-gloss stainless steel entrance gate. Shows meticulous welding, mirror-finish tubular frame assembly, and decorative etched SS door leaf paneling in our Thuraiyur workshop.",
    details: [
      "High grade stainless steel rectangular hollow sections",
      "Etched floral filigree panel insert",
      "High-penetration TIG welding on structural joints",
      "Mirror buffing and seam passivation before site installation"
    ]
  },
  {
    id: "real-laser-cut-ganesha",
    title: "Laser-Cut Sacred Ganesha Stainless Steel Panel",
    category: "Custom Fabrication",
    image: "/images/projects/real-project-4-laser-cut-ganesha-panel.jpg",
    isAuthentic: true,
    badge: "Actual Workshop Project",
    location: "Logeshwaran Workshop, Thuraiyur",
    description:
      "Custom laser-cut stainless steel decorative sheet panel depicting sacred Lord Ganesha with Om contours, engineered with pre-drilled corner mounting holes for safety door and entrance grill inlay.",
    details: [
      "High-precision laser cutting on stainless steel sheet",
      "Sacred Om and Ganesha iconography",
      "Clean burr-free edges with protective masking film",
      "Custom-sized for gate and door frame integration"
    ]
  },
  {
    id: "concept-modern-staircase",
    title: "Architectural Stainless Steel Open Stairway",
    category: "Staircase Railings",
    image: "/images/projects/gallery-staircase-modern.jpg",
    isAuthentic: false,
    badge: "Visual Concept Example",
    description:
      "Minimalist stainless steel railing configuration with sleek horizontal safety bars suited for contemporary open-plan residential villas.",
    details: [
      "Satin brush finish stainless steel",
      "Minimalist linear horizontal safety bars",
      "Ideal for modern interior architecture"
    ]
  },
  {
    id: "concept-balcony-ss",
    title: "Luxury Balcony Stainless Steel Glass System",
    category: "Stainless Steel Works",
    image: "/images/projects/gallery-balcony-ss.jpg",
    isAuthentic: false,
    badge: "Visual Concept Example",
    description:
      "Corrosion-resistant exterior balcony railing combining 316-grade stainless steel top coping with architectural toughened glass spigots.",
    details: [
      "Grade 316 weather-resistant stainless steel",
      "Compatible with laminated safety glass",
      "Clean sightlines for residential balconies"
    ]
  },
  {
    id: "concept-laser-cut-facade",
    title: "Architectural Laser-Cut Privacy Screen",
    category: "Decorative Metal Designs",
    image: "/images/projects/gallery-laser-cut-screen.jpg",
    isAuthentic: false,
    badge: "Visual Concept Example",
    description:
      "Geometric laser-cut privacy partitions and decorative cladding panels designed for modern balconies, facades, and interior partitions.",
    details: [
      "High-precision CNC laser pattern",
      "Custom powder-coated architectural finish",
      "Provides shade and decorative exterior screening"
    ]
  },
  {
    id: "concept-industrial-weld",
    title: "Precision TIG Welding & Structural Joint",
    category: "Workshop & Welding",
    image: "/images/projects/gallery-industrial-weld.jpg",
    isAuthentic: false,
    badge: "Visual Concept Example",
    description:
      "Demonstration of certified TIG welding bead control with deep metal fusion, argon shielding, and uniform scale formation for heavy structural joints.",
    details: [
      "Tungsten Inert Gas (TIG) precision bead",
      "Argon gas shielded oxidation prevention",
      "Engineered for high-vibration and load requirements"
    ]
  },
  {
    id: "concept-heavy-gate",
    title: "Heavy-Gauge Wrought Iron Security Gate",
    category: "Gates & Grills",
    image: "/images/projects/gallery-heavy-gate.jpg",
    isAuthentic: false,
    badge: "Visual Concept Example",
    description:
      "Robust compound driveway gate fabricated with heavy mild steel box sections, anti-rust zinc undercoating, and ornamental spearheads.",
    details: [
      "Heavy gauge structural mild steel",
      "Dual anti-corrosion epoxy primer",
      "Heavy load-bearing greaseable pivot hinges"
    ]
  },
  {
    id: "concept-ss-fixture",
    title: "Bespoke Stainless Steel Interior Framework",
    category: "Custom Fabrication",
    image: "/images/projects/gallery-ss-furniture.jpg",
    isAuthentic: false,
    badge: "Visual Concept Example",
    description:
      "Custom fabricated stainless steel architectural furniture structure with invisible mitered corner joints and high-sheen satin brush polish.",
    details: [
      "Seamless invisible weld transitions",
      "Satin hairline surface treatment",
      "Custom fabrication for architectural interiors"
    ]
  }
];

