"use client";
import { PRODUCTS } from "../data/products";

const CARD_DATA = PRODUCTS.map((p) => {
  const locations = [...new Set(p.sessions.map((s) => s.location))].join(" · ");
  const dates = p.sessions.length === 1
    ? p.sessions[0].label
    : `${p.sessions.length} sessions in 2026`;
  const startingPrice = p.tiers.reduce((min, t) => {
    const val = parseInt(t.earlyBird?.replace(/\D/g, "") || t.price.replace(/\D/g, ""));
    return val < min ? val : min;
  }, Infinity);

  return { ...p, locations, dates, startingPrice: `$${startingPrice.toLocaleString()}` };
});

export default function Trainings() {
  const handleClick = (slug: string) => {
    window.location.hash = slug;
    const el = document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="trainings" style={{ backgroundColor: "#F8F4EE" }} className="py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="label justify-center mb-10">Our Programs</div>
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
            Teacher{" "}
            <em style={{ fontStyle: "italic" }}>Trainings</em>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "#7A6E64", lineHeight: 1.75 }}
            className="max-w-lg mx-auto"
          >
            Choose the training that matches your journey — from foundation certification to advanced specialization.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ border: "1px solid #DDD0C0" }}>
          {CARD_DATA.map((card, i) => (
            <div
              key={card.id}
              className="flex flex-col p-10 lg:p-12"
              style={{
                backgroundColor: "#F8F4EE",
                borderRight: i < CARD_DATA.length - 1 ? "1px solid #DDD0C0" : "none",
              }}
            >
              <div className="mb-auto">
                {/* Product label */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.625rem",
                    letterSpacing: "0.25em",
                    fontWeight: 500,
                    color: "#A8784A",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  {card.shortName}
                </p>

                {/* Product name */}
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 400,
                    fontSize: "1.5rem",
                    color: "#1A1510",
                    lineHeight: 1.2,
                    marginBottom: "24px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {card.name}
                </h3>

                {/* Location */}
                <div className="flex items-start gap-3 mb-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0">
                    <path d="M7 1C4.79 1 3 2.79 3 5c0 3 4 7.5 4 7.5s4-4.5 4-7.5C11 2.79 9.21 1 7 1zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#A8784A" />
                  </svg>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#7A6E64" }}>
                    {card.locations}
                  </span>
                </div>

                {/* Dates */}
                <div className="flex items-start gap-3 mb-8">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0">
                    <rect x="1.5" y="2.5" width="11" height="10" rx="1" stroke="#A8784A" strokeWidth="0.75" />
                    <path d="M1.5 5.5h11" stroke="#A8784A" strokeWidth="0.75" />
                    <path d="M4.5 1v2M9.5 1v2" stroke="#A8784A" strokeWidth="0.75" strokeLinecap="round" />
                  </svg>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#7A6E64" }}>
                    {card.dates}
                  </span>
                </div>

                {/* Starting price */}
                <div>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "#7A6E64", letterSpacing: "0.05em" }}>
                    From
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 300,
                      fontSize: "2.5rem",
                      color: "#1A1510",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                      display: "block",
                      marginTop: "4px",
                    }}
                  >
                    {card.startingPrice}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => handleClick(card.slug)}
                className="mt-10 w-full text-center py-3.5 transition-colors border"
                style={{
                  borderColor: "#1A1510",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                  color: "#1A1510",
                  textTransform: "uppercase",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1A1510";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#1A1510";
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
