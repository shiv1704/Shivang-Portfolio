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
    deckUrl: "",
    isFlagship: true,
  },
  {
    slug: "why-ai",
    title: "AI Adoption Intelligence Platform",
    company: "Why.AI",
    category: "AI Product",
    tagline: "Helping orgs understand where AI actually lands — and where it doesn't.",
    year: "2025",
    role: "Founder",
    deckUrl: "",
    isFlagship: true,
  },
  {
    slug: "salesgen",
    title: "AI Sales Enablement",
    company: "SalesGen",
    category: "AI Product",
    tagline: "Personalised outreach at scale — from ICP to booked call.",
    year: "2025",
    role: "Product Builder",
    deckUrl: "",
    liveUrl: "https://salesgen.lovable.app",
    isFlagship: true,
  },

  // ── Secondary ──────────────────────────────────────────────────────────────
  {
    slug: "perfora",
    title: "Haircare Brand Strategy",
    company: "Perfora",
    category: "Brand Strategy",
    tagline: "Building a category story for an early-stage personal care brand.",
    year: "2024",
    role: "Brand Strategist",
    deckUrl: "",
    isFlagship: false,
  },
  {
    slug: "idreamcareer",
    title: "Product Growth Strategy",
    company: "IDreamCareer",
    category: "Product Growth",
    tagline: "Growth loops and retention mechanics for EdTech at scale.",
    year: "2024",
    role: "Product Strategist",
    deckUrl: "",
    isFlagship: false,
  },
  {
    slug: "delhivery",
    title: "Express Logistics Long-Term Strategy",
    company: "Delhivery",
    category: "Brand Strategy",
    tagline: "Positioning Delhivery as the infrastructure backbone of Indian commerce.",
    year: "2024",
    role: "Strategy Consultant",
    deckUrl: "",
    isFlagship: false,
  },
  {
    slug: "la28-olympics",
    title: "AI-Led Product Launch",
    company: "LA28 Olympics",
    category: "AI Product",
    tagline: "Using AI to personalise the fan experience for a 3-billion-viewer event.",
    year: "2025",
    role: "Product Strategy",
    deckUrl: "",
    isFlagship: false,
  },
  {
    slug: "reconnect-india",
    title: "GTM for Students Returning to India",
    company: "ReConnectIndia",
    category: "GTM",
    tagline: "A go-to-market playbook for diaspora students re-entering the Indian job market.",
    year: "2024",
    role: "GTM Lead",
    deckUrl: "",
    isFlagship: false,
  },
  {
    slug: "panarch",
    title: "VIP Silver Gifting Initiative",
    company: "Panarch",
    category: "Consumer Product",
    tagline: "Premium gifting rituals for a new generation of silver buyers.",
    year: "2024",
    role: "Product Manager",
    deckUrl: "",
    isFlagship: false,
  },
  {
    slug: "fampay",
    title: "User Onboarding & Trust Marketing",
    company: "Fampay",
    category: "Marketing",
    tagline: "Earning parent trust while making banking feel fun for teens.",
    year: "2024",
    role: "Marketing Strategist",
    deckUrl: "",
    isFlagship: false,
  },
  {
    slug: "makemytrip-mice",
    title: "Business Account Teardown",
    company: "MakeMyTrip MICE",
    category: "Product Teardown",
    tagline: "Dissecting the B2B travel booking experience — what works, what doesn't.",
    year: "2024",
    role: "Product Analyst",
    deckUrl: "",
    isFlagship: false,
  },
  {
    slug: "agoda",
    title: "UI/UX Cancellation Flow Redesign",
    company: "Agoda",
    category: "Product Teardown",
    tagline: "Turning a frustrating cancellation flow into a retention moment.",
    year: "2024",
    role: "UX Strategist",
    deckUrl: "",
    isFlagship: false,
  },
  {
    slug: "khelo",
    title: "Sports Venue Booking Platform",
    company: "KhelO",
    category: "Consumer Product",
    tagline: "Making it dead simple to find, book, and play at sports venues near you.",
    year: "2024",
    role: "Product Lead",
    deckUrl: "",
    isFlagship: false,
  },
  {
    slug: "vittavishwas",
    title: "Low-Income Wealth-Building Platform",
    company: "Vittavishwas",
    category: "Consumer Product",
    tagline: "Building financial trust and long-term wealth habits for underserved Indians.",
    year: "2024",
    role: "Product Strategist",
    deckUrl: "",
    isFlagship: false,
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
