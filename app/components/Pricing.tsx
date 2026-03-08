"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PRODUCTS, STRIPE, CALENDLY } from "../data/products";
import type { Product } from "../data/products";

export default function Pricing() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Listen for hash changes to set active tab
  useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      const idx = PRODUCTS.findIndex((p) => p.slug === hash);
      if (idx >= 0) setActiveIdx(idx);
    };
    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  const product = PRODUCTS[activeIdx];

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
            Choose your training · Select your package
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-0 border-b" style={{ borderColor: "#DDD0C0" }}>
            {PRODUCTS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  setActiveIdx(i);
                  window.history.replaceState(null, "", `#${p.slug}`);
                }}
                className="px-6 md:px-10 py-4 transition-colors relative"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  fontWeight: i === activeIdx ? 600 : 400,
                  color: i === activeIdx ? "#A8784A" : "#7A6E64",
                  textTransform: "uppercase",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                {p.shortName}
                {i === activeIdx && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: "#A8784A" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* View details link */}
        <div className="flex justify-center mb-8">
          <Link
            href={`/training/${product.id}`}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6875rem",
              letterSpacing: "0.18em",
              fontWeight: 600,
              color: "#A8784A",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1A1510")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#A8784A")}
          >
            View full training details →
          </Link>
        </div>

        {/* Tab content */}
        <PricingContent product={product} bodyFont={bodyFont} />
      </div>
    </section>
  );
}

function PricingContent({
  product,
  bodyFont,
}: {
  product: Product;
  bodyFont: (size?: string, weight?: number, color?: string) => React.CSSProperties;
}) {
  const tierCount = product.tiers.length;
  // 3-col for 200hr, 2-col centered for others
  const gridCols = tierCount === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  const maxWidth = tierCount === 2 ? "max-w-3xl mx-auto" : "";

  return (
    <div>
      {/* Callout if exists */}
      {product.callout && (
        <div
          className="text-center mb-8 py-3 px-6"
          style={{
            backgroundColor: "rgba(168,120,74,0.08)",
            border: "1px solid rgba(168,120,74,0.2)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#A8784A",
              letterSpacing: "0.05em",
            }}
          >
            {product.callout}
          </span>
        </div>
      )}

      {/* Early bird rule */}
      {product.earlyBirdRule && (
        <p className="text-center mb-8" style={bodyFont("0.8125rem", 400, "#A8784A")}>
          {product.earlyBirdRule}
        </p>
      )}

      {/* Tiers */}
      <div className={`grid grid-cols-1 ${gridCols} gap-0 mb-0 ${maxWidth}`} style={{ border: "1px solid #DDD0C0" }}>
        {product.tiers.map(({ name, price, earlyBird, note, featured, deposit }, i) => (
          <div
            key={name}
            className="flex flex-col p-10 lg:p-12"
            style={{
              backgroundColor: featured ? "#1A1510" : "#F8F4EE",
              borderRight: i < tierCount - 1 ? "1px solid #DDD0C0" : "none",
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
                  {tierCount === 3 ? "Most Popular" : earlyBird ? "Best Value" : "Recommended"}
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

              {/* Price display */}
              {earlyBird ? (
                <div style={{ marginBottom: "8px" }}>
                  <span style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 300,
                    fontSize: "3.25rem",
                    color: featured ? "white" : "#1A1510",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}>
                    {earlyBird}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: featured ? "rgba(255,255,255,0.4)" : "#7A6E64",
                    marginLeft: "6px",
                  }}>
                    USD
                  </span>
                  <div style={{ marginTop: "6px" }}>
                    <span style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      color: featured ? "rgba(255,255,255,0.35)" : "#7A6E64",
                      textDecoration: "line-through",
                    }}>
                      {price}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.6875rem",
                      color: featured ? "rgba(255,255,255,0.3)" : "#7A6E64",
                      marginLeft: "6px",
                    }}>
                      regular
                    </span>
                  </div>
                </div>
              ) : (
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
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: featured ? "rgba(255,255,255,0.4)" : "#7A6E64",
                    marginLeft: "6px",
                  }}>
                    USD
                  </span>
                </div>
              )}

              <p style={bodyFont("0.8125rem", 400, featured ? "#C8A07A" : "#A8784A")} className="mb-8">
                {deposit ?? "USD 470 deposit to reserve"}
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
                href="https://wa.me/8613816920709"
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
        className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${maxWidth}`}
        style={{ border: "1px solid #DDD0C0", borderTop: "none", backgroundColor: "#F8F4EE" }}
      >
        <div className="p-10 lg:p-12" style={{ borderRight: "1px solid #DDD0C0" }}>
          <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "1rem", color: "#1A1510", marginBottom: "24px" }}>
            All packages include
          </h3>
          <ul className="space-y-3.5">
            {product.includes.map((item, i) => (
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
            {product.payment.map((item, i) => (
              <li key={i} className="flex items-start gap-3.5">
                <div className="w-1 h-1 rounded-full bg-clay mt-2 flex-shrink-0" />
                <span style={bodyFont("0.875rem", 400, "#7A6E64")} className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
