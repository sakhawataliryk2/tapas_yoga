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
  deposit?: string; // override the default deposit label
}

export interface ProductDetail {
  tagline: string;
  description: string[];
  highlights: { label: string; value: string }[];
  images: { src: string; alt: string; objectPosition?: string }[];
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
  detail: ProductDetail;
  // Stripe links — replace placeholders with real product links
  stripeDepositUrl: string;
  stripeFullUrl: string;
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
        name: "Training + 2 Meals/Day",
        price: "$3,970",
        earlyBird: "$3,670",
        note: "2 meals per day included · Own accommodation",
        featured: false,
      },
      {
        name: "Training + Shared Suite + 2 Meals/Day",
        price: "$4,470",
        earlyBird: "$4,170",
        note: "21 nights shared room · 2 meals per day",
        featured: true,
      },
      {
        name: "Training + Private Room + 2 Meals/Day",
        price: "$5,070",
        earlyBird: "$4,770",
        note: "21 nights private room · 2 meals per day",
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
      "Balance due 90 days before the training starts",
      "USD 200 referral bonus",
    ],
    earlyBirdRule: "Early bird price when full payment is made 90 days before training start.",
    stripeDepositUrl: STRIPE, // TODO: replace with deposit-only Stripe link
    stripeFullUrl: STRIPE,    // TODO: replace with full-payment Stripe link
    detail: {
      tagline: "21 days · Canggu, Bali · Yoga Alliance RYS 200",
      description: [
        "Transform your practice into your calling. Over 21 immersive days in the heart of Canggu, Bali, this foundational teacher training gives you everything you need to step onto the mat as a confident, qualified yoga teacher.",
        "Led by Vivienne Zeng, each day blends asana, philosophy, anatomy, and hands-on teaching practice in a small-group environment designed for real depth — not just a certificate. You'll leave knowing how to teach safely, cue precisely, and hold a room.",
      ],
      highlights: [
        { label: "Duration", value: "21 days" },
        { label: "Location", value: "Canggu, Bali" },
        { label: "Certification", value: "Yoga Alliance RYS 200" },
        { label: "Group size", value: "Small group" },
        { label: "Level", value: "All levels welcome" },
        { label: "From", value: "$3,670" },
      ],
      images: [
        // Facilities
        { src: "/location/pool-area.png", alt: "Pool area" },
        { src: "/location/pool-area-2.jpg", alt: "Pool area" },
        // Rooms
        { src: "/location/room-1.png", alt: "Room" },
        { src: "/location/standard-villa-bed.png", alt: "Standard villa bedroom" },
        { src: "/location/standard-villa-living.jpg", alt: "Standard villa living area" },
        { src: "/location/standard-villa-living-2.jpg", alt: "Standard villa living area" },
        { src: "/location/standard-villa-bathroom.jpg", alt: "Standard villa bathroom" },
        { src: "/location/superior-villa-1.jpg", alt: "Superior villa" },
        { src: "/location/superior-villa-2.jpg", alt: "Superior villa" },
        { src: "/location/superior-villa-private-pool.jpg", alt: "Superior villa private pool" },
        { src: "/location/superior-villa-private-jacuzzi.jpg", alt: "Superior villa private jacuzzi" },
        // Facilities
        { src: "/location/villa-exterior.jpg", alt: "Villa exterior" },
        { src: "/location/communal-area.jpg", alt: "Communal area" },
        { src: "/location/living-room.jpg", alt: "Living room" },
        { src: "/location/living-room-2.png", alt: "Living room" },
        // Wellness & food
        { src: "/location/massage-area.png", alt: "Massage area" },
        { src: "/location/massage-area-2.png", alt: "Massage area" },
        { src: "/location/healthy-food.png", alt: "Healthy food" },
        { src: "/location/healthy-treats.png", alt: "Healthy treats" },
        // Yoga area (lower quality)
        { src: "/location/yoga-area.png", alt: "Yoga practice area" },
        { src: "/location/yoga-area.jpg", alt: "Yoga practice area" },
        // Graduation photos
        { src: "/200hr-1.png", alt: "200HR training session" },
        { src: "/200hr-2.jpeg", alt: "200HR training session", objectPosition: "center 70%" },
        { src: "/200hr-3.png", alt: "200HR training community" },
      ],
    },
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
      "Early bird sign-ups (first 6): full payment due within 24 hours of signing up",
      "Balance due 90 days before the training starts",
    ],
    earlyBirdRule: "Early bird price for the first 6 sign-ups per session. Full payment required within 24 hours.",
    callout: "Food & accommodation NOT included",
    stripeDepositUrl: STRIPE, // TODO: replace with deposit-only Stripe link
    stripeFullUrl: STRIPE,    // TODO: replace with full-payment Stripe link
    detail: {
      tagline: "11 days · Bali & Greece · Yoga Alliance YACEP",
      description: [
        "Designed for certified yoga teachers ready to go deeper. This 11-day intensive sharpens your eye for alignment, refines your cueing, and gives you advanced sequencing tools that immediately elevate your teaching.",
        "Available in Canggu, Bali and Paros, Greece — both locations chosen for their atmosphere of focus and beauty. Small groups ensure every participant gets real attention and real progress.",
      ],
      highlights: [
        { label: "Duration", value: "11 days" },
        { label: "Location", value: "Bali & Greece" },
        { label: "Certification", value: "Yoga Alliance YACEP" },
        { label: "Group size", value: "Small group" },
        { label: "Level", value: "For certified teachers" },
        { label: "From", value: "$1,880" },
      ],
      images: [
        { src: "/bali/1.jpg", alt: "Bali training" },
        { src: "/100hr-1.png", alt: "Graduation ceremony" },
        { src: "/100hr-2.png", alt: "Graduation ceremony" },
        { src: "/100hr-3.png", alt: "Graduation ceremony" },
        { src: "/100hr-4.png", alt: "Small group intensive session" },
      ],
    },
  },
  {
    id: "zanzibar",
    slug: "pricing-zanzibar",
    name: "Zanzibar Teacher Training Certificate",
    shortName: "200HR Foundation",
    location: "Jambiani, Zanzibar",
    sessions: [
      { start: "2026-11-29", end: "2026-12-19", label: "Nov 29 – Dec 19", location: "Jambiani, Zanzibar" },
    ],
    tiers: [
      {
        name: "Certification + Shared Room",
        price: "$5,500",
        note: "Certificate · Shared accommodation · Breakfast included",
        featured: true,
        deposit: "USD 2,750 deposit to reserve (50%)",
      },
      {
        name: "Certification Only",
        price: "$3,500",
        note: "Certificate · No accommodation · No food",
        featured: false,
        deposit: "USD 1,750 deposit to reserve (50%)",
      },
      {
        name: "Asana Intensive",
        price: "$1,500",
        note: "15 morning intensive asana classes · No certification",
        featured: false,
        deposit: "USD 750 deposit to reserve (50%)",
      },
    ],
    includes: [
      "Full teacher training certificate program",
      "Daily yoga practice & teaching methodology",
      "Sharazad Oasis Retreat Center venue",
      "Certificate of completion",
    ],
    payment: [
      "50% deposit required to reserve your place",
      "Deposit is non-refundable but may be transferred to another student",
      "Remaining balance due 90 days before the training begins",
    ],
    stripeDepositUrl: STRIPE, // TODO: replace with deposit-only Stripe link
    stripeFullUrl: STRIPE,    // TODO: replace with full-payment Stripe link
    detail: {
      tagline: "21 days · Jambiani, Zanzibar · Indian Ocean",
      description: [
        "An unforgettable teacher training at the Sharazad Oasis Retreat Center on the coast of Zanzibar. This 21-day certification immerses you in yoga philosophy, asana, and teaching methodology while surrounded by the beauty of the Indian Ocean.",
        "Three participation options make the Zanzibar TTC accessible — whether you're seeking a full certification with accommodation, training only, or an intensive asana immersion without certification.",
      ],
      highlights: [
        { label: "Duration", value: "21 days" },
        { label: "Location", value: "Jambiani, Zanzibar" },
        { label: "Venue", value: "Sharazad Oasis Retreat" },
        { label: "Group size", value: "Small group" },
        { label: "Level", value: "All levels welcome" },
        { label: "From", value: "$1,500" },
      ],
      images: [
        { src: "/zanzibar/27cb4e59-82dd-40f2-a4dd-f6efba65e6d1.jpg", alt: "" },
        { src: "/zanzibar/310418c6-886a-4182-a55c-4485f10522f2.jpg", alt: "" },
        { src: "/zanzibar/746f733f-a2c8-43fe-9a61-1b61c1b2eca3.jpg", alt: "" },
        { src: "/zanzibar/95463a7c-dc33-431f-a0b1-b358a0edb95b.jpg", alt: "" },
        { src: "/zanzibar/a42ba8d7-80ee-4dda-9c93-fb17b1406f33.jpg", alt: "" },
        { src: "/zanzibar/db49980b-613f-441e-a28a-a37eaa596a21.jpg", alt: "" },
        { src: "/zanzibar/ea5920e4-4fa3-4449-b584-c512be10889d.jpg", alt: "" },
        { src: "/zanzibar/BOAT TRIPS.jpg", alt: "" },
        { src: "/zanzibar/BREAKFAST BOWL.jpg", alt: "" },
        { src: "/zanzibar/OUR BEACH.jpg", alt: "" },
        { src: "/zanzibar/OUR CHEF.jpg", alt: "" },
        { src: "/zanzibar/OUR HOUSE KEEPER_.jpg", alt: "" },
        { src: "/zanzibar/OUTDOOR SHOWERS.jpg", alt: "" },
        { src: "/zanzibar/SO  Deluxe sea view rooms bathroom.jpeg", alt: "" },
        { src: "/zanzibar/SO deluxe beach studio SO.jpeg", alt: "" },
        { src: "/zanzibar/SUNRISE AT THE RESTAURANT_.jpg", alt: "" },
        { src: "/zanzibar/TWIN ROOMS.jpg", alt: "" },
        { src: "/zanzibar/yoga shala.jpeg", alt: "" },
      ],
    },
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
