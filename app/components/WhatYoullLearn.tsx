"use client";

// TODO: Replace PDF_URL with the actual curriculum PDF link from client
const PDF_URL = "#";

const PILLARS = [
  {
    n: "01",
    title: "Teach with confidence",
    body: "Voice, presence, and class leadership — the fundamentals of holding a room.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="0.75" />
        <line x1="16" y1="1" x2="16" y2="31" stroke="currentColor" strokeWidth="0.75" />
        <line x1="1" y1="16" x2="31" y2="16" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Sequence intelligently",
    body: "Build classes with clear arcs, logical progressions, and transitions that flow.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 8h24M4 16h20M4 24h16" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
        <path d="M28 16l-4-4v8l4-4z" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Cue & adjust safely",
    body: "Precise alignment cues, hands-on adjustments, and modifications for every body.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 10c0-4 16-4 16 0v2c0 4-16 4-16 0v-2z" stroke="currentColor" strokeWidth="0.75" />
        <path d="M16 12v12" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
        <path d="M10 24c0-4 12-4 12 0" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Understand anatomy basics",
    body: "Injury prevention, load management, and anatomy knowledge for safer teaching.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="8" rx="4" ry="4" stroke="currentColor" strokeWidth="0.75" />
        <path d="M8 18c0-5.5 16-5.5 16 0v10H8V18z" stroke="currentColor" strokeWidth="0.75" />
        <line x1="12" y1="18" x2="12" y2="28" stroke="currentColor" strokeWidth="0.75" />
        <line x1="20" y1="18" x2="20" y2="28" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Pranayama & meditation",
    body: "Foundational breathwork and meditation techniques to complete your teaching toolkit.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4 Q24 16 16 28 Q8 16 16 4z" stroke="currentColor" strokeWidth="0.75" fill="none" />
        <ellipse cx="16" cy="16" rx="6" ry="6" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    ),
  },
  {
    n: "06",
    title: "Yoga philosophy & ethics",
    body: "Roots of the practice, teaching ethics, and the values that guide responsible instruction.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="5" width="20" height="24" rx="1" stroke="currentColor" strokeWidth="0.75" />
        <line x1="11" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
        <line x1="11" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
        <line x1="11" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      </svg>
    ),
  },
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
  return (
    <section id="what-youll-learn" style={{ backgroundColor: "#EFE8DC" }} className="py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
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
              What You&apos;ll<br />
              <em style={{ fontStyle: "italic" }}>Learn to Teach</em>
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ borderTop: "1px solid #DDD0C0", borderLeft: "1px solid #DDD0C0" }}>
          {PILLARS.map(({ n, title, body, icon }) => (
            <div
              key={n}
              className="p-10 lg:p-12 group transition-colors"
              style={{ borderRight: "1px solid #DDD0C0", borderBottom: "1px solid #DDD0C0" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(248,244,238,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <div className="flex items-start justify-between mb-8">
                <div style={{ color: "#A8784A", opacity: 0.6 }}>{icon}</div>
                <span style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  fontSize: "0.875rem",
                  color: "#A8784A",
                  opacity: 0.45,
                }}>
                  {n}
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "1rem", color: "#1A1510", marginBottom: "8px" }}>
                {title}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#7A6E64", lineHeight: 1.7 }}>
                {body}
              </p>
            </div>
          ))}
        </div>

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
              letterSpacing: "0.2em",
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
