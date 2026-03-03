// ── Shared constants ──
export const CALENDLY = "https://calendly.com/zengmin022/30min?month=2026-02";
export const WHATSAPP = "https://wa.me/8613816920709";
export const STRIPE = "https://buy.stripe.com/9B63cu6X2g9c4Lya4X2sM0n";
export const INSTAGRAM = "https://www.instagram.com/vivienne_zeng/";

// ── Types ──
export interface Session {
  start: string; // ISO date
  end: string;   // ISO date
  label: string; // e.g. "Apr 5 – Apr 25"
  location: string;
}

export interface Tier {
  name: string;
  price: string;
  earlyBird?: string;
  note: string;
  featured?: boolean;
}

export interface Product {
  id: string;
  slug: string;        // for URL hash: pricing-200hr
  name: string;
  shortName: string;   // tab label
  location: string;    // summary location text
  sessions: Session[];
  tiers: Tier[];
  includes: string[];
  payment: string[];
  earlyBirdRule?: string;
  callout?: string;    // prominent callout like "Food & accommodation NOT included"
}

// ── Products ──
export const PRODUCTS: Product[] = [
  {
    id: "200hr",
    slug: "pricing-200hr",
    name: "200HR Foundation Teacher Training",
    shortName: "200HR Foundation",
    location: "Canggu, Bali",
    sessions: [
      { start: "2026-04-05", end: "2026-04-25", label: "Apr 5 – Apr 25", location: "Canggu, Bali" },
      { start: "2026-08-09", end: "2026-08-29", label: "Aug 9 – Aug 29", location: "Canggu, Bali" },
      { start: "2026-11-02", end: "2026-11-22", label: "Nov 2 – Nov 22", location: "Canggu, Bali" },
    ],
    tiers: [
      {
        name: "Training + Meals",
        price: "$3,970",
        earlyBird: "$3,670",
        note: "Meals included · Own accommodation",
        featured: false,
      },
      {
        name: "Training + Shared Suite + Meals",
        price: "$4,470",
        earlyBird: "$4,170",
        note: "21 nights shared room · All meals",
        featured: true,
      },
      {
        name: "Training + Private Room + Meals",
        price: "$5,070",
        earlyBird: "$4,770",
        note: "21 nights private room · All meals",
        featured: false,
      },
    ],
    includes: [
      "Full 200-hour teacher training program",
      "Kundalini activation sessions",
      "The Tapas 200-hour certification",
      "Yoga Alliance registration RYS 200",
      "Breakfast & lunch · vegetarian · 6 days/week",
    ],
    payment: [
      "USD 470 deposit to reserve your spot",
      "Balance paid in person at the training",
      "Flexible payment plans available",
      "USD 200 referral bonus",
    ],
    earlyBirdRule: "Early bird price when full payment is made 90 days before training start.",
  },
  {
    id: "100hr",
    slug: "pricing-100hr",
    name: "100HR Advanced Teacher Training",
    shortName: "100HR Advanced",
    location: "Bali & Greece",
    sessions: [
      { start: "2026-05-01", end: "2026-05-11", label: "May 1 – May 11", location: "Canggu, Bali" },
      { start: "2026-06-15", end: "2026-06-25", label: "Jun 15 – Jun 25", location: "Paros, Greece" },
      { start: "2026-10-01", end: "2026-10-11", label: "Oct 1 – Oct 11", location: "Canggu, Bali" },
    ],
    tiers: [
      {
        name: "Early Bird",
        price: "$2,280",
        earlyBird: "$1,880",
        note: "First 6 sign-ups per session",
        featured: true,
      },
      {
        name: "Regular Price",
        price: "$2,280",
        note: "Standard enrollment",
        featured: false,
      },
    ],
    includes: [
      "Full 100-hour advanced training program",
      "Advanced asana & sequencing",
      "The Tapas 100-hour certification",
      "Yoga Alliance YACEP continuing education",
    ],
    payment: [
      "USD 470 deposit to reserve your spot",
      "Balance paid in person at the training",
      "Flexible payment plans available",
      "USD 200 referral bonus",
    ],
    earlyBirdRule: "Early bird price for the first 6 sign-ups per session.",
    callout: "Food & accommodation NOT included",
  },
  {
    id: "zanzibar",
    slug: "pricing-zanzibar",
    name: "Zanzibar Teacher Training Certificate",
    shortName: "Zanzibar TTC",
    location: "Jambiani, Zanzibar",
    sessions: [
      { start: "2026-11-29", end: "2026-12-19", label: "Nov 29 – Dec 19", location: "Jambiani, Zanzibar" },
    ],
    tiers: [
      {
        name: "With Accommodation",
        price: "$5,500",
        note: "Classes, certificate, accommodation & breakfast",
        featured: true,
      },
      {
        name: "Without Accommodation",
        price: "$3,500",
        note: "Classes & certificate only",
        featured: false,
      },
    ],
    includes: [
      "Full teacher training certificate program",
      "Daily yoga practice & teaching methodology",
      "Sharazad Oasis Retreat Center venue",
      "Certificate of completion",
    ],
    payment: [
      "USD 470 deposit to reserve your spot",
      "Balance paid in person at the training",
      "Flexible payment plans available",
      "USD 200 referral bonus",
    ],
  },
];

// ── Helper: get the next upcoming session across all products ──
export function getNextSession(): { product: Product; session: Session } | null {
  const now = new Date();
  let nearest: { product: Product; session: Session; date: Date } | null = null;

  for (const product of PRODUCTS) {
    for (const session of product.sessions) {
      const date = new Date(session.start + "T10:00:00Z");
      if (date > now && (!nearest || date < nearest.date)) {
        nearest = { product, session, date };
      }
    }
  }

  return nearest ? { product: nearest.product, session: nearest.session } : null;
}

// ── Helper: get all upcoming sessions sorted by date ──
export function getAllUpcomingSessions(): Array<{ product: Product; session: Session }> {
  const now = new Date();
  const all: Array<{ product: Product; session: Session; date: Date }> = [];

  for (const product of PRODUCTS) {
    for (const session of product.sessions) {
      const date = new Date(session.start + "T10:00:00Z");
      if (date > now) {
        all.push({ product, session, date });
      }
    }
  }

  return all.sort((a, b) => a.date.getTime() - b.date.getTime());
}
