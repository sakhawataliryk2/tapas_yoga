"use client";
import { useEffect, useMemo, useState } from "react";
import { CALENDLY, getNextSession, getAllUpcomingSessions } from "../data/products";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function TrainingDetails() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  const next = useMemo(() => getNextSession(), []);
  const allSessions = useMemo(() => getAllUpcomingSessions(), []);

  useEffect(() => {
    if (!next) return;
    const target = new Date(next.session.start + "T10:00:00Z"); // 6 PM Bali (UTC+8)
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86_400_000),
        h: Math.floor((diff % 86_400_000) / 3_600_000),
        m: Math.floor((diff % 3_600_000) / 60_000),
        s: Math.floor((diff % 60_000) / 1_000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [next]);

  const units = [
    { value: time.d, label: "Days" },
    { value: time.h, label: "Hours" },
    { value: time.m, label: "Minutes" },
    { value: time.s, label: "Seconds" },
  ];

  // Format the next session heading
  const nextLabel = next
    ? `${next.session.label}, 2026`
    : "Coming Soon";
  const nextSub = next
    ? `${next.session.location} · ${next.product.shortName}`
    : "";

  return (
    <section id="training-details" style={{ backgroundColor: "#EFE8DC" }} className="py-32 lg:py-44">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">

        <div className="label justify-center mb-10">Next Training</div>

        {/* Date heading */}
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "#1A1510",
            letterSpacing: "-0.02em",
          }}
          className="mb-3"
        >
          {nextLabel}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8125rem",
            letterSpacing: "0.1em",
            color: "#7A6E64",
          }}
          className="mb-20 uppercase"
        >
          {nextSub}
        </p>

        {/* Countdown */}
        <div className="flex justify-center items-start gap-8 md:gap-16 mb-20">
          {units.map(({ value, label }, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 300,
                  fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
                  color: "#1A1510",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {pad(value)}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.25em",
                  color: "#A8784A",
                  fontWeight: 500,
                }}
                className="mt-3 uppercase"
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Thin rule */}
        <div className="flex items-center gap-6 mb-14 max-w-xs mx-auto">
          <div className="flex-1 h-px bg-sand" />
          <div className="w-1 h-1 rounded-full bg-clay" />
          <div className="flex-1 h-px bg-sand" />
        </div>

        {/* Details row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14 text-left max-w-2xl mx-auto">
          {[
            { l: "Venue", v: next?.session.location.split(",")[0] || "TBA", s: next?.session.location || "" },
            { l: "Dates", v: next?.session.label || "TBA", s: "Immersive training" },
            { l: "Availability", v: "Limited Spots", s: "Small group enrollment" },
          ].map(({ l, v, s }) => (
            <div key={l} className="bg-ivory p-6">
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.25em",
                  color: "#A8784A",
                  fontWeight: 500,
                }}
                className="uppercase mb-2"
              >
                {l}
              </p>
              <p
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#1A1510" }}
                className="text-base mb-0.5"
              >
                {v}
              </p>
              <p
                style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#7A6E64" }}
              >
                {s}
              </p>
            </div>
          ))}
        </div>

        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 mb-6"
          style={{ backgroundColor: "#A8784A" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8A6038")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#A8784A")}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6875rem",
              letterSpacing: "0.22em",
              fontWeight: 600,
              color: "white",
              textTransform: "uppercase",
            }}
          >
            Apply Now
          </span>
        </a>

        {/* All 2026 Dates grid */}
        <div id="all-dates" className="mt-20">
          <div className="flex items-center gap-6 mb-10 max-w-xs mx-auto">
            <div className="flex-1 h-px bg-sand" />
            <div className="w-1 h-1 rounded-full bg-clay" />
            <div className="flex-1 h-px bg-sand" />
          </div>

          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "#1A1510",
              letterSpacing: "-0.01em",
            }}
            className="mb-10"
          >
            All 2026{" "}
            <em style={{ fontStyle: "italic" }}>Training Dates</em>
          </h3>

          <div className="space-y-2 max-w-2xl mx-auto text-left">
            {allSessions.map(({ product, session }, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-4 py-4 px-6 items-center"
                style={{
                  backgroundColor: "#F8F4EE",
                  borderBottom: i < allSessions.length - 1 ? "1px solid #EFE8DC" : "none",
                }}
              >
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500, color: "#A8784A" }}>
                  {product.shortName}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#1A1510" }}>
                  {session.label}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#7A6E64", textAlign: "right" }}>
                  {session.location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
