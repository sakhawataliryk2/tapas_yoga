"use client";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-04-05T10:00:00Z"); // 6 PM Bali (UTC+8)
const CALENDLY = "https://calendly.com/zengmin022/30min?month=2026-02";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function TrainingDetails() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = TARGET.getTime() - Date.now();
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
  }, []);

  const units = [
    { value: time.d, label: "Days" },
    { value: time.h, label: "Hours" },
    { value: time.m, label: "Minutes" },
    { value: time.s, label: "Seconds" },
  ];

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
          April 5 – 25, 2026
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
          Canggu · Bali · 21-Day Immersive
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
            { l: "Venue", v: "United Colors of Bali", s: "Canggu, Bali" },
            { l: "Dates", v: "Apr 5 – Apr 25", s: "Sunday to Saturday" },
            { l: "Availability", v: "7 Spots Left", s: "Limited enrollment" },
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

        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#7A6E64" }} className="mt-4">
          Can&apos;t make the next start?{" "}
          <span style={{ color: "#A8784A", textDecoration: "underline", textUnderlineOffset: "4px" }}>
            View all 2026 training dates
          </span>
        </p>
      </div>
    </section>
  );
}
