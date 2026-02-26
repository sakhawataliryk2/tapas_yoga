"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const FEATURES = [
  {
    n: "01",
    title: "Designed for Serious Practice",
    body: "Spacious, light-filled yoga shalas with professional equipment and optimal conditions.",
  },
  {
    n: "02",
    title: "Boutique Comfort, Not Mass Tourism",
    body: "Small, Balinese-owned resorts chosen for quality, privacy, and atmosphere.",
  },
  {
    n: "03",
    title: "Experience You Can Feel",
    body: "Every detail from space to setting is selected to support focus, progress, and depth.",
  },
];

// Real photos first, gradient placeholders for remaining slots
const SLIDES: Array<
  | { type: "photo"; src: string; label: string }
  | { type: "gradient"; bg: string; label: string }
> = [
  { type: "photo", src: "/_LR_0381-Enhanced-NR.jpeg", label: "Yoga shala" },
  { type: "photo", src: "/_LR_0801-Enhanced-NR.jpeg", label: "Graduation ceremony" },
  { type: "photo", src: "/c27215725u6fa96652cb647b214f528c.jpg", label: "Practice studio" },
  { type: "gradient", bg: "#C4B298", label: "Pool area" },
  { type: "gradient", bg: "#DAC8B4", label: "Accommodation" },
  { type: "gradient", bg: "#C8B89E", label: "Meditation garden" },
  { type: "gradient", bg: "#D4C2AC", label: "Dining area" },
];

export default function Locations() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % SLIDES.length), 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="locations" style={{ backgroundColor: "#F8F4EE" }} className="py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Carousel ── */}
          <div className="relative overflow-hidden" style={{ height: "clamp(380px, 50vw, 580px)" }}>
            {SLIDES.map((s, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                {s.type === "photo" ? (
                  <>
                    <Image
                      src={s.src}
                      alt={s.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(20,15,10,0.4) 0%, transparent 40%)" }}
                    />
                  </>
                ) : (
                  <div className="absolute inset-0" style={{ backgroundColor: s.bg }} />
                )}

                {/* Bottom label + counter */}
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-10">
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.625rem",
                    letterSpacing: "0.25em",
                    color: s.type === "photo" ? "rgba(255,255,255,0.55)" : "rgba(26,21,16,0.4)",
                    textTransform: "uppercase",
                  }}>
                    {s.label}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle: "italic",
                    fontSize: "0.875rem",
                    color: s.type === "photo" ? "rgba(255,255,255,0.3)" : "rgba(26,21,16,0.25)",
                  }}>
                    {String(i + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
                  </p>
                </div>
              </div>
            ))}

            {/* Dot nav */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {SLIDES.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    height: "5px",
                    width: i === current ? "20px" : "5px",
                    borderRadius: "3px",
                    backgroundColor: i === current
                      ? (s.type === "photo" ? "rgba(255,255,255,0.85)" : "#A8784A")
                      : (s.type === "photo" ? "rgba(255,255,255,0.3)" : "rgba(26,21,16,0.2)"),
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── Text ── */}
          <div>
            <div className="label mb-10">Venues</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
                color: "#1A1510",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
              className="mb-5"
            >
              Our Training<br />
              <em style={{ fontStyle: "italic" }}>Locations</em>
            </h2>
            <p
              style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "#7A6E64", lineHeight: 1.75 }}
              className="mb-14"
            >
              After hosting 35+ trainings in Bali, we carefully choose spaces that
              truly support focus, learning, and transformation.
            </p>

            <div className="space-y-8">
              {FEATURES.map(({ n, title, body }) => (
                <div key={n} className="flex gap-5">
                  <span style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: "#A8784A",
                    opacity: 0.6,
                    minWidth: "24px",
                    lineHeight: 1.5,
                  }}>
                    {n}
                  </span>
                  <div className="border-t border-sand pt-1 flex-1">
                    <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.9375rem", color: "#1A1510", marginBottom: "6px" }}>
                      {title}
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#7A6E64", lineHeight: 1.7 }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
