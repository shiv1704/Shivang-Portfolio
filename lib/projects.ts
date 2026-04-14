export type ProjectCategory =
  | "AI Product"
  | "Brand Strategy"
  | "Product Growth"
  | "GTM"
  | "Product Teardown"
  | "Marketing"
  | "Consumer Product";

export type Project = {
  slug: string;
  title: string;
  company: string;
  category: ProjectCategory;
  tagline: string;
  year: string;
  role: string;
  deckUrl?: string;
  liveUrl?: string;
  isFlagship: boolean;
  coverImage: string;
};

export const projects: Project[] = [
  // ── Flagships ──────────────────────────────────────────────────────────────
  {
    slug: "ey-techathon",
    title: "Agentic AI for B2B RFPs",
    company: "EY Techathon 6.0",
    category: "AI Product",
    tagline: "Cutting RFP response time from weeks to hours with autonomous AI agents.",
    year: "2025",
    role: "Product Strategy",
    deckUrl: "https://drive.google.com/file/d/1nc3ntUOUIvmlqCSbEnywLXrELRK0E1Pm/view",
    isFlagship: true,
    coverImage: "/images/projects/ey-techathon/cover.jpg",
  },
  {
    slug: "why-ai",
    title: "AI Adoption Intelligence Platform",
    company: "Why.AI",
    category: "AI Product",
    tagline: "Helping orgs understand where AI actually lands, and where it doesn't.",
    year: "2026",
    role: "Founder",
    deckUrl: "https://why-ai-seven.vercel.app",
    isFlagship: true,
    coverImage: "/images/projects/why-ai/cover.jpg",
  },
  {
    slug: "salesgen",
    title: "AI Sales Enablement",
    company: "SalesGen",
    category: "AI Product",
    tagline: "Personalised outreach at scale: from ICP to booked call.",
    year: "2026",
    role: "Product Builder",
    deckUrl: "https://salesgen.lovable.app",
    liveUrl: "https://salesgen.lovable.app",
    isFlagship: true,
    coverImage: "/images/projects/salesgen/cover.jpg",
  },

  // ── Secondary ──────────────────────────────────────────────────────────────
  {
    slug: "perfora",
    title: "Haircare Brand Strategy",
    company: "Perfora",
    category: "Brand Strategy",
    tagline: "Building a category story for an early-stage personal care brand.",
    year: "2025",
    role: "Brand Strategist",
    deckUrl: "https://drive.google.com/file/d/1pprLxu1Y6EgHSkTLydIS0ry13dDOak4c/view?usp=sharing",
    isFlagship: false,
    coverImage: "/images/projects/perfora/cover.jpg",
  },
  {
    slug: "idreamcareer",
    title: "Product Growth Strategy",
    company: "IDreamCareer",
    category: "Product Growth",
    tagline: "Growth loops and retention mechanics for EdTech at scale.",
    year: "2025",
    role: "Product Strategist",
    deckUrl: "https://drive.google.com/file/d/1IJNa9zfITsT8YtYANSPLi5ObPxKmG3b-/view?usp=sharing",
    isFlagship: false,
    coverImage: "/images/projects/idreamcareer/cover.jpg",
  },
  {
    slug: "delhivery",
    title: "Express Logistics Long-Term Strategy",
    company: "Delhivery",
    category: "Brand Strategy",
    tagline: "Positioning Delhivery as the infrastructure backbone of Indian commerce.",
    year: "2025",
    role: "Strategy Consultant",
    deckUrl: "https://drive.google.com/file/d/1r7KdNZ5q62GjVutED1DP_V-80v_GbK-B/view",
    isFlagship: false,
    coverImage: "/images/projects/delhivery/cover.jpg",
  },
  {
    slug: "la28-olympics",
    title: "AI-Led Product Launch",
    company: "LA28 Olympics",
    category: "AI Product",
    tagline: "Using AI to personalise the fan experience for a 3-billion-viewer event.",
    year: "2025",
    role: "Product Strategy",
    deckUrl: "https://docs.google.com/presentation/d/1ju3Z9dpna3bzohu-mEXVJhLZM0pPZerCB-HEPl9caMA/edit?slide=id.p#slide=id.p",
    isFlagship: false,
    coverImage: "/images/projects/la28-olympics/cover.jpg",
  },
  {
    slug: "reconnect-india",
    title: "GTM for Students Returning to India",
    company: "ReConnectIndia",
    category: "GTM",
    tagline: "A go-to-market playbook for diaspora students re-entering the Indian job market.",
    year: "2025",
    role: "GTM Lead",
    deckUrl: "https://docs.google.com/presentation/d/1Tq4kwAlvHQ04mIgbPyRExW1cx-Xx9GDz/edit?slide=id.p1#slide=id.p1",
    isFlagship: false,
    coverImage: "/images/projects/reconnect-india/cover.jpg",
  },
  {
    slug: "panarch",
    title: "VIP Silver Gifting Initiative",
    company: "Panarch",
    category: "Consumer Product",
    tagline: "Premium gifting rituals for a new generation of silver buyers.",
    year: "2025",
    role: "Founder",
    deckUrl: "https://drive.google.com/file/d/1geMXsfeTLPPHp4kiGmgjxY8_qBTMH4_y/view",
    isFlagship: false,
    coverImage: "/images/projects/panarch/cover.jpg",
  },
  {
    slug: "fampay",
    title: "User Onboarding & Trust Marketing",
    company: "Fampay",
    category: "Marketing",
    tagline: "Earning parent trust while making banking feel fun for teens.",
    year: "2025",
    role: "Marketing Strategist",
    deckUrl: "https://drive.google.com/file/d/139H_aag4Hx4xdrfsFxx6KHPg3QwCW9OM/view",
    isFlagship: false,
    coverImage: "/images/projects/fampay/cover.jpg",
  },
  {
    slug: "makemytrip-mice",
    title: "Business Account Teardown",
    company: "MakeMyTrip MICE",
    category: "Product Teardown",
    tagline: "Dissecting the B2B travel booking experience: what works, what doesn't.",
    year: "2025",
    role: "Product Analyst",
    deckUrl: "https://www.canva.com/design/DAG86GB4MeM/rSHhVI7xzuC6LC-BSOlhOg/edit",
    isFlagship: false,
    coverImage: "/images/projects/makemytrip-mice/cover.jpg",
  },
  {
    slug: "agoda",
    title: "UI/UX Cancellation Flow Redesign",
    company: "Agoda",
    category: "Product Teardown",
    tagline: "Turning a frustrating cancellation flow into a retention moment.",
    year: "2025",
    role: "UX Strategist",
    deckUrl: "https://www.canva.com/design/DAG-FX658oY/juM7xVLtkyN4D7M6xy_d-w/edit",
    isFlagship: false,
    coverImage: "/images/projects/agoda/cover.jpg",
  },
  {
    slug: "khelo",
    title: "Sports Venue Booking Platform",
    company: "KhelO",
    category: "Consumer Product",
    tagline: "Making it dead simple to find, book, and play at sports venues near you.",
    year: "2025",
    role: "Product Lead",
    deckUrl: "https://aistudio.google.com/apps/drive/1ve_P7s5VC7io-6Eo-lyX_ty26M8Ts5ef?fullscreenApplet=true&showPreview=true&showAssistant=true",
    isFlagship: false,
    coverImage: "/images/projects/khelo/cover.jpg",
  },
  {
    slug: "vittavishwas",
    title: "Low-Income Wealth-Building Platform",
    company: "Vittavishwas",
    category: "Consumer Product",
    tagline: "Building financial trust and long-term wealth habits for underserved Indians.",
    year: "2025",
    role: "Product Strategist",
    deckUrl: "https://www.youtube.com/watch?v=lX6j7NBXtk0",
    isFlagship: false,
    coverImage: "/images/projects/vittavishwas/cover.jpg",
  },
];

export const ALL_CATEGORIES: ProjectCategory[] = [
  "AI Product",
  "Brand Strategy",
  "Product Growth",
  "GTM",
  "Product Teardown",
  "Marketing",
  "Consumer Product",
];

export const flagshipProjects = projects.filter((p) => p.isFlagship);
