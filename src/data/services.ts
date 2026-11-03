export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  recommendedGrade?: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "staircase-railings",
    title: "Stainless Steel Staircase Railings",
    shortDescription:
      "Precision-crafted interior and exterior SS railings with bespoke balusters, wooden accents, and polished mirror finishes.",
    fullDescription:
      "Engineered for structural rigidity and contemporary visual elegance. Fabricated using premium grade stainless steel with seamless joints, anti-wobble floor anchors, and ergonomic profiles tailored to straight, spiral, or curved stairs.",
    image: "/images/services/staircase-railings.jpg",
    features: ["Grade 304 / 316 Stainless Steel", "Mirror Polish or Satin Brush Finish", "Solid Core Floor Anchoring", "Custom Wooden/Glass Inlay Options"],
    recommendedGrade: "SS 304 / SS 316"
  },
  {
    id: "ss-handrails",
    title: "Stainless Steel Handrails",
    shortDescription:
      "Ergonomic, heavy-duty wall-mounted and freestanding handrails for homes, hospitals, ramps, and commercial stairwells.",
    fullDescription:
      "Continuous smooth gripping surfaces designed according to accessibility standards. Resistant to weather and high human traffic, fabricated with precision mandrel bends and concealed mounting hardware.",
    image: "/images/services/ss-handrails.jpg",
    features: ["Continuous Ergonomic Grip", "Concealed Screw Mounting", "Zero Weld Seam Exposure", "Corrosion & Rust Proof"],
    recommendedGrade: "SS 304"
  },
  {
    id: "balcony-railings",
    title: "Balcony Railings",
    shortDescription:
      "Modern architectural balcony protection combining heavy gauge stainless steel with safety glass or horizontal safety pipes.",
    fullDescription:
      "Designed to withstand external weather exposure and high wind loads without tarnishing. Features sleek minimalist profiles that enhance building facades while providing certified fall safety.",
    image: "/images/services/balcony-railings.jpg",
    features: ["All-Weather Weatherproof Durability", "Toughened Glass Clamp Readiness", "High Tensile Safety Specifications", "Architectural Modern Profiles"],
    recommendedGrade: "SS 316 Marine Grade"
  },
  {
    id: "ss-gates",
    title: "Stainless Steel Gates",
    shortDescription:
      "High-prestige main entrance sliding and swing gates fabricated with rigid SS hollow sections and modern geometric louvers.",
    fullDescription:
      "Combines luxury exterior aesthetics with enduring security. Engineered with heavy-duty ball bearing hinges, smooth automated track compatibility, and clean laser-cut or louver accents.",
    image: "/images/services/ss-gates.jpg",
    features: ["Heavy Duty Sealed Hinges", "Sliding / Swing Mechanism Options", "Rust & Tarnish Immunity", "Motorization & Automation Ready"],
    recommendedGrade: "SS 304"
  },
  {
    id: "metal-gates-grills",
    title: "Metal Gates and Grills",
    shortDescription:
      "Heavy-duty forged wrought iron and mild steel safety gates, window grills, boundary grilles, and compound doors.",
    fullDescription:
      "Solid security fabrication built with thick steel sections and anti-pry reinforcements. Treated with multi-layer anti-rust epoxy zinc primers and durable enamel or powder-coat finishes.",
    image: "/images/services/metal-gates-grills.jpg",
    features: ["Heavy Gauge Mild Steel", "Double-Coat Anti-Rust Primer", "Intricate Custom Ornamental Patterns", "Burglar-Proof Perimeter Security"],
    recommendedGrade: "Structural Mild Steel"
  },
  {
    id: "laser-cut-designs",
    title: "Decorative Laser-Cut Metal Designs",
    shortDescription:
      "CNC fiber laser-cut metal art panels, Tree of Life screens, religious inlays (Ganesha panels), and facade privacy partitions.",
    fullDescription:
      "High-precision CNC cutting transforms raw steel into fine architectural artwork. Ideal for residential front gate inserts, terrace privacy screens, prayer room partitions, and decorative backlit panels.",
    image: "/images/services/laser-cut-designs.jpg",
    features: ["High-Precision Fiber Laser Cutting", "Custom Vector & Traditional Motifs", "Dual-Tone Metallic Paint / Gold Accents", "Bespoke Sizing For Gates & Grills"],
    recommendedGrade: "SS 304 / MS Sheet"
  },
  {
    id: "custom-metal-fabrication",
    title: "Custom Metal Fabrication",
    shortDescription:
      "Structural framework, metal sheds, canopies, industrial machine platforms, stairs, and specialty metal assemblies.",
    fullDescription:
      "Engineered structural metal solutions built to builder and architect specifications. Includes accurate miter cuts, load-tested joint welds, and comprehensive on-site installation.",
    image: "/images/services/custom-metal-fabrication.jpg",
    features: ["Architectural & Industrial Grade", "Heavy Load Capacity Engineering", "Precision Angle & Miter Welds", "Custom Dimensional Manufacturing"],
    recommendedGrade: "Engineered MS / SS"
  },
  {
    id: "residential-commercial-welding",
    title: "Residential and Commercial Welding",
    shortDescription:
      "Certified TIG, MIG, and ARC welding services for new building construction, renovations, and on-site metal repairs.",
    fullDescription:
      "Equipped for mobile on-site deployment as well as full-scale workshop manufacturing. Delivers structurally sound weld penetrations with clean grinding, smoothing, and chemical passivations.",
    image: "/images/services/residential-commercial-welding.jpg",
    features: ["TIG, MIG & Shielded ARC Welding", "Mobile On-Site Welding Setup", "Structural Joint Integrity", "Clean Passivation & Finishing"],
    recommendedGrade: "All Metal Grades"
  },
  {
    id: "custom-ss-works",
    title: "Custom Stainless Steel Works",
    shortDescription:
      "Custom-tailored stainless steel fixtures, commercial tables, kitchen counters, display frames, and interior furniture.",
    fullDescription:
      "Bespoke stainless steel furniture frames and utilitarian structures crafted with food-grade sanitary standards and high-sheen architectural finishes tailored to bespoke interior designs.",
    image: "/images/services/custom-ss-works.jpg",
    features: ["Sanitary & Food Grade Surfaces", "Custom Architectural Dimensions", "Seamless Welded Corners", "Mirror or Hairline Satin Finishes"],
    recommendedGrade: "SS 304 Food Grade"
  }
];
