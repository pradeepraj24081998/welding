export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  projectType: string;
  avatar: string;
  isIllustrativePlaceholder: boolean;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "demo-1",
    name: "S. Ramesh",
    role: "Homeowner",
    location: "Thuraiyur",
    comment:
      "Logeshwaran Welding delivered exceptional quality on our duplex house staircase railings. The stainless steel finish is mirror-smooth, the wooden accent post looks fantastic, and the entire structure feels rock-solid.",
    projectType: "SS Staircase Railing Installation",
    avatar: "/images/customers/customer-1.jpg",
    isIllustrativePlaceholder: true
  },
  {
    id: "demo-2",
    name: "K. Murugesan",
    role: "Property Owner",
    location: "Tiruchirappalli",
    comment:
      "We ordered a custom gold-accented laser-cut gate for our residential entrance. The detailing on the Tree of Life design exceeded our expectations and the installation was finished with great care.",
    projectType: "Decorative Laser-Cut Gate",
    avatar: "/images/customers/customer-2.jpg",
    isIllustrativePlaceholder: true
  },
  {
    id: "demo-3",
    name: "V. Anand",
    role: "Building Contractor",
    location: "Musiri / Trichy",
    comment:
      "Reliable fabrication partner for commercial handrails and custom safety grills. Their attention to weld penetration, neat joints, and responsive on-site coordination makes them a top choice.",
    projectType: "Commercial Handrails & Metal Grills",
    avatar: "/images/customers/customer-3.jpg",
    isIllustrativePlaceholder: true
  }
];
