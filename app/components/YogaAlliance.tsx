"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const FEATURES = [
  { title: "Official RYS Registration", body: "Formally registered with Yoga Alliance — verifiable, legitimate, and respected worldwide." },
  { title: "Certificate on Graduation", body: "Receive your official 200-hour certificate upon completing the program." },
  { title: "Recognized Worldwide", body: "Your qualification holds weight wherever you choose to teach or continue your training." },
];

const SLIDES = [
  { src: "/group-session-4.jpeg", label: "Training in session" },
  { src: "/group-session-2.jpeg", label: "Community & connection" },
  { src: "/solo-2.jpg", label: "Vivienne Zeng · Lead instructor" },
];

export default function YogaAlliance() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="yoga-alliance" style={{ backgroundColor: "#F8F4EE" }} className="py-20 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* ── Text ── */}
          <div className="order-2 lg:order-1">
            <div className="label mb-10">Credentials</div>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#1A1510",
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
              }}
              className="mb-6"
            >
              Yoga Alliance<br />
              <em style={{ fontStyle: "italic", color: "#A8784A" }}>Registered</em> School
            </h2>

            <p
              style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "#7A6E64", lineHeight: 1.8 }}
              className="mb-14 max-w-md"
            >
              An official RYS certification recognized worldwide — so your qualification
              carries weight wherever you choose to teach.
            </p>

            <div className="space-y-6">
              {FEATURES.map(({ title, body }, i) => (
                <div key={i} className="flex gap-5 pb-6 border-b border-sand last:border-0 last:pb-0">
                  <span
                    className="flex-shrink-0 mt-0.5"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontStyle: "italic",
                      fontSize: "1.25rem",
                      color: "#A8784A",
                      lineHeight: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#1A1510", fontSize: "0.9375rem" }} className="mb-1">
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

          {/* ── Carousel ── */}
          <div className="order-1 lg:order-2 relative overflow-hidden" style={{ height: "clamp(440px, 55vw, 580px)" }}>
            {SLIDES.map((s, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <Image
                  src={s.src}
                  alt={s.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={i === 0}
                />
                {/* Subtle bottom gradient for label legibility */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(20,15,10,0.45) 0%, transparent 40%)" }}
                />
                {/* Label */}
                <div className="absolute bottom-8 left-8">
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.625rem",
                    letterSpacing: "0.25em",
                    color: "rgba(255,255,255,0.55)",
                    textTransform: "uppercase",
                  }}>
                    {s.label}
                  </p>
                </div>
              </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-8 right-8 flex gap-2 z-10">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    backgroundColor: i === current ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.3)",
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
