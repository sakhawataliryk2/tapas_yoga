"use client";
import { useState } from "react";

// TODO: Replace PDF_URL with the actual curriculum PDF link from client
const PDF_URL = "#";

const PILLARS_200 = [
  {
    n: "01",
    title: "100+ Asana Poses",
    body: "With modifications for all levels",
  },
  {
    n: "02",
    title: "Yoga Props Usage",
    body: "Belts, blocks, bolsters",
  },
  {
    n: "03",
    title: "Anatomy & Physiology",
    body: "Skeletal, muscular, and joint systems",
  },
  {
    n: "04",
    title: "Philosophy",
    body: "Yogic lineages, eight limbs, tantra, karma",
  },
  {
    n: "05",
    title: "Yogic Practices",
    body: "Chakras, mudras, bandhas, nadis",
  },
  {
    n: "06",
    title: "Pranayama",
    body: "Breathing techniques including Ujjayi and Nadi Shodhana",
  },
  {
    n: "07",
    title: "Meditation",
    body: "Mindfulness practices with journaling",
  },
  {
    n: "08",
    title: "Teaching Methodology",
    body: "Classroom dynamics, voice, ethics, demonstrations",
  },
];

const CURRICULUM_100 = [
  "Meditation and Philosophy",
  "Advanced Asana Practice",
  "Universal Principles of Alignment",
  "Refined Cueing",
  "Alignment & Misalignment Clinic",
  "Hands-on & Verbal Adjustments",
  "Intelligent Sequencing Study",
  "Teaching Methodology",
  "Yoga Ethics & Professionalism",
  "Intelligent Self-Practice Programs",
];

function PdfIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 2h7l3 3v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <path d="M10 2v3h3" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <line x1="5" y1="9" x2="11" y2="9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="5" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export default function WhatYoullLearn() {
  const [active, setActive] = useState<"200hr" | "100hr">("200hr");

  return (
    <section id="curriculum" style={{ backgroundColor: "#EFE8DC" }} className="py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="label mb-10">Curriculum</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#1A1510",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              What You&apos;ll Learn<br />
              <em style={{ fontStyle: "italic" }}>in this Training</em>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.0625rem",
              color: "#7A6E64",
              lineHeight: 1.75,
              maxWidth: "380px",
            }}
            className="lg:pb-2"
          >
            A clear, practical foundation for teaching safe, confident,
            well-structured classes.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 border-b mb-12" style={{ borderColor: "#DDD0C0" }}>
          {(["200hr", "100hr"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="px-6 md:px-10 py-4 transition-colors relative"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                fontWeight: active === tab ? 600 : 400,
                color: active === tab ? "#A8784A" : "#7A6E64",
                textTransform: "uppercase",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              {tab === "200hr" ? "200HR Foundation" : "100HR Advanced"}
              {active === tab && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: "#A8784A" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* 200HR: Pillar grid */}
        {active === "200hr" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ borderTop: "1px solid #DDD0C0", borderLeft: "1px solid #DDD0C0" }}>
            {PILLARS_200.map(({ n, title, body }) => (
              <div
                key={n}
                className="p-5 lg:p-7 group transition-colors"
                style={{ borderRight: "1px solid #DDD0C0", borderBottom: "1px solid #DDD0C0" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(248,244,238,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <div className="flex items-start justify-end mb-5">
                  <span style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle: "italic",
                    fontSize: "0.8125rem",
                    color: "#A8784A",
                    opacity: 0.45,
                  }}>
                    {n}
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.9375rem", color: "#1A1510", marginBottom: "6px" }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#7A6E64", lineHeight: 1.6 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* 100HR: Card grid (matching 200HR style) */}
        {active === "100hr" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ borderTop: "1px solid #DDD0C0", borderLeft: "1px solid #DDD0C0" }}>
            {CURRICULUM_100.map((item, i) => (
              <div
                key={i}
                className="p-5 lg:p-7 group transition-colors"
                style={{ borderRight: "1px solid #DDD0C0", borderBottom: "1px solid #DDD0C0" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(248,244,238,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <div className="flex items-start justify-end mb-5">
                  <span style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle: "italic",
                    fontSize: "0.8125rem",
                    color: "#A8784A",
                    opacity: 0.45,
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.9375rem", color: "#1A1510" }}>
                  {item}
                </h3>
              </div>
            ))}
          </div>
        )}

        {/* PDF download CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 py-8">
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "1rem", color: "#1A1510", marginBottom: "4px" }}>
              Want the full picture?
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#7A6E64" }}>
              Download the complete curriculum overview as a PDF.
            </p>
          </div>
          <a
            href={PDF_URL}
            download
            className="flex items-center gap-3 px-8 py-3.5 border flex-shrink-0 transition-colors group"
            style={{ borderColor: "#1A1510", color: "#1A1510" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1A1510";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#1A1510";
            }}
          >
            <PdfIcon />
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              fontWeight: 600,
              textTransform: "uppercase",
            }}>
              Download Curriculum PDF
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
