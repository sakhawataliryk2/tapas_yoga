"use client";
const CALENDLY = "https://calendly.com/zengmin022/30min?month=2026-02";
const STRIPE = "https://buy.stripe.com/9B63cu6X2g9c4Lya4X2sM0n";

const TIERS = [
  {
    name: "Training + Meals",
    price: "$3,970",
    note: "Meals included · Own accommodation",
    featured: false,
  },
  {
    name: "Training + Shared Suite + Meals",
    price: "$4,470",
    note: "21 nights shared room · All meals",
    featured: true,
  },
  {
    name: "Training + Private Room + Meals",
    price: "$5,070",
    note: "21 nights private room · All meals",
    featured: false,
  },
];

const INCLUDES = [
  "Full 200-hour teacher training program",
  "Kundalini activation sessions",
  "The Tapas 200-hour certification",
  "Yoga Alliance registration RYS 200",
  "Breakfast & lunch · vegetarian · 6 days/week",
];

const PAYMENT = [
  "USD 470 deposit to reserve your spot",
  "Balance paid in person at the training",
  "Flexible payment plans available",
  "USD 200 referral bonus",
];

export default function Pricing() {
  const bodyFont = (size = "0.875rem", weight = 400, color = "#7A6E64") =>
    ({ fontFamily: "var(--font-body)", fontSize: size, fontWeight: weight, color } as React.CSSProperties);

  return (
    <section id="pricing" style={{ backgroundColor: "#EFE8DC" }} className="py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="label justify-center mb-10">Investment</div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "#1A1510",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
            className="mb-4"
          >
            Investment &amp; Pricing
          </h2>
          <p style={bodyFont("1rem", 400, "#7A6E64")}>
            200-Hour Yoga Teacher Training · Choose Your Training Option
          </p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-0" style={{ border: "1px solid #DDD0C0" }}>
          {TIERS.map(({ name, price, note, featured }, i) => (
            <div
              key={name}
              className="flex flex-col p-10 lg:p-12"
              style={{
                backgroundColor: featured ? "#1A1510" : "#F8F4EE",
                borderRight: i < 2 ? "1px solid #DDD0C0" : "none",
                position: "relative",
              }}
            >
              {featured && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5"
                  style={{ backgroundColor: "#A8784A" }}
                >
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.5625rem",
                    letterSpacing: "0.22em",
                    fontWeight: 600,
                    color: "white",
                    textTransform: "uppercase",
                  }}>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-auto">
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.15em",
                    fontWeight: 500,
                    color: featured ? "rgba(255,255,255,0.4)" : "#A8784A",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  Package
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 400,
                    fontSize: "1.5rem",
                    color: featured ? "white" : "#1A1510",
                    lineHeight: 1.2,
                    marginBottom: "24px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {name}
                </h3>
                <div style={{ marginBottom: "8px" }}>
                  <span style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 300,
                    fontSize: "3.25rem",
                    color: featured ? "white" : "#1A1510",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}>
                    {price}
                  </span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: featured ? "rgba(255,255,255,0.4)" : "#7A6E64", marginLeft: "6px" }}>
                    USD
                  </span>
                </div>
                <p style={bodyFont("0.8125rem", 400, featured ? "#C8A07A" : "#A8784A")} className="mb-8">
                  USD 470 deposit to reserve
                </p>
                <p style={bodyFont("0.875rem", 400, featured ? "rgba(255,255,255,0.55)" : "#7A6E64")} className="leading-relaxed">
                  {note}
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-3">
                <a
                  href={STRIPE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 transition-colors"
                  style={{
                    backgroundColor: featured ? "#A8784A" : "#1A1510",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.2em",
                    fontWeight: 600,
                    color: "white",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Reserve My Spot
                </a>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 transition-colors"
                  style={bodyFont("0.6875rem", 500, featured ? "rgba(255,255,255,0.4)" : "#7A6E64")}
                  onMouseEnter={(e) => (e.currentTarget.style.color = featured ? "rgba(255,255,255,0.8)" : "#1A1510")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = featured ? "rgba(255,255,255,0.4)" : "#7A6E64")}
                >
                  Have a question →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Includes + payment details */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-0"
          style={{ border: "1px solid #DDD0C0", borderTop: "none", backgroundColor: "#F8F4EE" }}
        >
          <div className="p-10 lg:p-12" style={{ borderRight: "1px solid #DDD0C0" }}>
            <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "1rem", color: "#1A1510", marginBottom: "24px" }}>
              All packages include
            </h3>
            <ul className="space-y-3.5">
              {INCLUDES.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0">
                    <circle cx="7" cy="7" r="6.5" stroke="#A8784A" strokeWidth="0.75" />
                    <path d="M4.5 7l2 2 3.5-3.5" stroke="#A8784A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={bodyFont("0.875rem", 400, "#7A6E64")} className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 lg:p-12">
            <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "1rem", color: "#1A1510", marginBottom: "24px" }}>
              Payment details
            </h3>
            <ul className="space-y-3.5">
              {PAYMENT.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <div className="w-1 h-1 rounded-full bg-clay mt-2 flex-shrink-0" />
                  <span style={bodyFont("0.875rem", 400, "#7A6E64")} className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
