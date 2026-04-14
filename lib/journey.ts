export type Milestone = {
  id: string;
  year: string;
  period: string;
  title: string;
  subtitle: string;
  body: string;
  highlights: string[];
  image?: string;
  color: "coral" | "mustard" | "ink";
};

export const journey: Milestone[] = [
  {
    id: "st-peters",
    year: "2004–17",
    period: "School",
    title: "St Peter's College",
    subtitle: "Where leadership began",
    body: "13 years at St Peter's shaped more than just academics. Being Cultural Captain and MP for six consecutive years taught me that leadership is built daily, not declared.",
    highlights: [
      "Cultural Captain & MP — 6 consecutive years",
      "Class 12 — 92.4%",
      "Led 500+ student events",
    ],
    image: "/images/journey/st-peters/hero.jpg",
    color: "coral",
  },
  {
    id: "gl-bajaj",
    year: "2017–21",
    period: "College",
    title: "GL Bajaj Institute",
    subtitle: "BTech Computer Science — with Honors",
    body: "Four years of computer science gave me the foundation I still lean on when thinking about products. CGPA 7.8, Honors degree, and the curiosity that led me into real engineering work.",
    highlights: ["BTech Computer Science, Honors", "CGPA — 7.8/10"],
    image: "/images/journey/gl-bajaj/hero.jpg",
    color: "mustard",
  },
  {
    id: "newgen",
    year: "2021",
    period: "First job",
    title: "Newgen Software",
    subtitle: "Software Engineer — Indian Navy RFID Project",
    body: "My first taste of enterprise scale. Automated critical workflows on Newgen's low-code platform for a project that actually mattered — tracking assets for the Indian Navy.",
    highlights: ["Indian Navy RFID automation", "Low-code workflow engineering"],
    image: "/images/journey/newgen/hero.jpg",
    color: "ink",
  },
  {
    id: "samsung",
    year: "2021–25",
    period: "Mobile R&D",
    title: "Samsung R&D",
    subtitle: "Automation for Galaxy flagship releases",
    body: "Four years in Samsung's Mobile R&D shipping automation for Galaxy flagship launches. Led multiple automation projects for major Galaxy applications — the kind of work where a bug ships to millions of phones.",
    highlights: [
      "Automation lead for Galaxy flagship apps",
      "Multi-project ownership across release cycles",
      "Cross-functional work with global teams",
    ],
    image: "/images/journey/samsung/hero.jpg",
    color: "coral",
  },
  {
    id: "united",
    year: "2025",
    period: "Engineer I",
    title: "United Airlines",
    subtitle: "Pricing Engine automation",
    body: "Spearheaded automation of the Pricing Engine User Application. The kind of infrastructure work that quietly saves hundreds of hours of engineering time every release.",
    highlights: ["Pricing Engine UI automation", "Cut release time for global users"],
    image: "/images/journey/united/hero.jpg",
    color: "mustard",
  },
  {
    id: "masters-union",
    year: "2025–Now",
    period: "MBA",
    title: "Masters' Union",
    subtitle: "PGP in Technology & Business Management",
    body: "The pivot. Four years of engineering built the foundation — Masters' Union is where I'm turning that into product and strategy thinking. President of the Netflix Fraternity, currently building Why.AI.",
    highlights: [
      "President — Netflix Fraternity",
      "Building Why.AI (AI adoption intelligence)",
      "Strategy coursework across 12+ live cases",
    ],
    image: "/images/journey/masters-union/hero.jpg",
    color: "coral",
  },
];
