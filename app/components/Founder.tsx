"use client";
import Image from "next/image";

import { INSTAGRAM } from "../data/products";
import CalendlyPopup from "./CalendlyPopup";

const CREDS = [
  { label: "Yoga Alliance Certified", detail: "RYT 200, E-RYT 500, YACEP" },
  { label: "Taught Internationally", detail: "Bali and worldwide" },
  { label: "Mentorship-Based Training", detail: "Small groups, personal guidance" },
];

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="1" y="2.5" width="13" height="11.5" rx="1" stroke="currentColor" strokeWidth="1" />
      <line x1="1" y1="6.5" x2="14" y2="6.5" stroke="currentColor" strokeWidth="1" />
      <line x1="4.5" y1="1" x2="4.5" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="10.5" y1="1" x2="10.5" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Founder() {
  return (
    <section id="founder" style={{ backgroundColor: "#F8F4EE" }} className="py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* ── Mobile: stacked flow / Desktop: two-column grid ── */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-x-12 lg:gap-y-0 lg:items-start mb-16 lg:mb-20">

          {/* Label + heading — shown first on mobile, part of right col on desktop */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4 order-1 lg:row-start-1">
            <div className="label mb-10">Lead Instructor</div>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                color: "#1A1510",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
              className="mb-0 lg:mb-10"
            >
              Vivienne Zeng
            </h2>
          </div>

          {/* Portrait — second on mobile, left col spanning all rows on desktop */}
          <div className="lg:col-span-5 lg:row-start-1 lg:row-end-3 order-2">
            <div
              className="relative w-full overflow-hidden"
            >
              <Image
                src="/meet-the-teacher.jpg"
                alt="Vivienne Zeng — Founder & Lead Instructor"
                width={800}
                height={1000}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
              {/* Bottom gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(20,15,10,0.55) 0%, transparent 45%)" }}
              />
              {/* Name card on photo */}
              <div className="absolute bottom-8 left-8 right-8">
                <p style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  fontSize: "1.5rem",
                  color: "white",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}>
                  Vivienne Zeng
                </p>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                  marginTop: "5px",
                }}>
                  Founder &amp; Lead Instructor
                </p>
              </div>
            </div>
          </div>

          {/* Bio text + credentials + CTAs — third on mobile, continues right col on desktop */}
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-2 order-3">
            <div
              style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "#7A6E64", lineHeight: 1.82 }}
              className="space-y-5 mb-12"
            >
              <p>
                Vivienne is an alignment-focused yoga teacher with over 1,400 hours of
                certified teacher training and more than a decade of teaching experience.
                After years of supporting teachers and students, she developed a clear and
                intelligent approach that prioritizes precise alignment, strength, and
                long-term body health.
              </p>
              <p>
                Her teaching is known for clarity, depth, and personal attention. Students
                value her ability to read the body, adapt practices individually, and
                support safe, sustainable progress, both physically and mentally.
              </p>
            </div>

            {/* Credentials */}
            <div className="border-t border-sand pt-8 mb-10 space-y-4">
              {CREDS.map(({ label, detail }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-clay mt-2.5 flex-shrink-0" />
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#7A6E64", lineHeight: 1.6 }}>
                    <strong style={{ color: "#1A1510", fontWeight: 500 }}>{label}</strong>
                    {": "}{detail}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <CalendlyPopup
                className="flex items-center gap-2.5 px-8 py-3.5 transition-colors"
                style={{ backgroundColor: "#A8784A", color: "white" }}
                onMouseEnter={(e: any) => (e.currentTarget.style.backgroundColor = "#8A6038")}
                onMouseLeave={(e: any) => (e.currentTarget.style.backgroundColor = "#A8784A")}
              >
                <CalendarIcon />
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.18em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}>
                  Free Discovery Call
                </span>
              </CalendlyPopup>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-3.5 border transition-colors"
                style={{ borderColor: "#DDD0C0", color: "#7A6E64" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#A8784A";
                  e.currentTarget.style.color = "#A8784A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#DDD0C0";
                  e.currentTarget.style.color = "#7A6E64";
                }}
              >
                <InstagramIcon />
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}>
                  Follow on Instagram
                </span>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
