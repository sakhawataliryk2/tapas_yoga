"use client";
import { useState } from "react";
import { WHATSAPP } from "../data/products";

const TEXT_TESTIMONIALS = [
  {
    name: "Marion Huber",
    program: "200HR Graduate",
    quote:
      "The level of depth Vivienne goes to to make sure you become great teachers is unparalleled. She puts you on the line to teach every single day — it makes a whole difference with other YTTs. I gained so much confidence from these exercises alone.",
  },
  {
    name: "Noemie Rousseau",
    program: "200HR Graduate",
    quote:
      "Training with Vivienne has been a truly transformative experience. Her teaching goes far beyond sharing techniques — it's a deep immersion into the philosophy of yoga, guided with immense wisdom and kindness. I leave with strong tools to teach and a deeper understanding of yoga.",
  },
  {
    name: "Serena Lin",
    program: "200HR Graduate",
    quote:
      "I've made more progress in three weeks than I did in three years of yoga! After graduation I could do a handstand and a headstand for ten minutes. Knowing how to do yoga correctly really makes things easier. Highly recommend.",
  },
  {
    name: "Carlotte Klop",
    program: "100HR Graduate",
    quote:
      "I followed my 100HR with Vivienne and was amazed how much I learned — from my own practice to teaching skills like alignment and foundation. The training was tough, like Vivienne is, but the best. 100% worth my money and time.",
  },
  {
    name: "Denis Pasquali",
    program: "200HR Graduate",
    quote:
      "It's been even better than what I could imagine. Just with the training I really started to do real yoga — it opened a whole world to explore. Vivienne has changed my life because she is an example of discipline and the best teacher I could ever ask for.",
  },
  {
    name: "Anda Christine",
    program: "Long-time Student",
    quote:
      "Of all my teachers across Guam, Spain, California, Hawaii, and Bali — Vivienne is by far the best instructor I've encountered. She understands the body on both a physical and spiritual level, and will push you farther than you thought you could go.",
  },
];

const VIDEOS = [
  {
    name: "Tanya",
    program: "100HR Advanced · Switzerland",
    url: "https://video.gumlet.io/67f02e049eef3d88099c9644/698c49be5cf0bdb0b9286778/download.mp4",
  },
  {
    name: "Julien",
    program: "200HR Graduate · France",
    url: "https://video.gumlet.io/67f02e049eef3d88099c9644/698c49be5cf0bdb0b928677a/download.mp4",
  },
];

function Star() {
  return (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="#A8784A">
      <path d="M7 0l1.76 5.4H14l-4.58 3.33 1.75 5.41L7 10.87l-4.17 3.27 1.75-5.41L0 5.4h5.24L7 0z" />
    </svg>
  );
}

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center transition-colors"
      style={{
        width: "48px",
        height: "48px",
        border: "1px solid",
        borderColor: disabled ? "#EFE8DC" : "#DDD0C0",
        borderRadius: "50%",
        backgroundColor: "transparent",
        color: disabled ? "#DDD0C0" : "#1A1510",
        opacity: disabled ? 0.4 : 1,
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = "#1A1510";
          e.currentTarget.style.color = "white";
          e.currentTarget.style.borderColor = "#1A1510";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = disabled ? "#DDD0C0" : "#1A1510";
        e.currentTarget.style.borderColor = disabled ? "#EFE8DC" : "#DDD0C0";
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        {direction === "left" ? (
          <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TEXT_TESTIMONIALS.length;
  const t = TEXT_TESTIMONIALS[current];

  return (
    <section id="testimonials" style={{ backgroundColor: "#EFE8DC" }} className="py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="label justify-center mb-10">Student Stories</div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "#1A1510",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
            className="mb-6"
          >
            What Our Students Say
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            {[...Array(5)].map((_, i) => <Star key={i} />)}
            <span
              style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#7A6E64", marginLeft: "8px" }}
            >
              5.0 · 28 Google Reviews
            </span>
          </div>
        </div>

        {/* ── Single testimonial carousel ── */}
        <div className="max-w-3xl mx-auto mb-24">
          <div
            className="p-10 lg:p-14"
            style={{ backgroundColor: "#F8F4EE", border: "1px solid #DDD0C0" }}
          >
            {/* Decorative quote mark */}
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontStyle: "italic",
                fontSize: "4.5rem",
                lineHeight: 0.8,
                color: "#DDD0C0",
                display: "block",
                marginBottom: "16px",
              }}
            >
              &ldquo;
            </span>

            {/* Quote */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.125rem",
                color: "#1A1510",
                lineHeight: 1.8,
                minHeight: "6em",
              }}
              className="mb-10"
            >
              {t.quote}
            </p>

            {/* Student info + nav */}
            <div className="flex items-end justify-between border-t pt-6" style={{ borderColor: "#DDD0C0" }}>
              <div className="flex items-center gap-4">
                {/* Avatar initial */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#EFE8DC" }}
                >
                  <span style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle: "italic",
                    fontSize: "1.125rem",
                    color: "#A8784A",
                  }}>
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "1rem", color: "#1A1510" }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#A8784A", marginTop: "2px" }}>
                    {t.program}
                  </p>
                </div>
              </div>

              {/* Arrow nav + counter */}
              <div className="flex items-center gap-3">
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: "#7A6E64",
                  marginRight: "4px",
                }}>
                  {current + 1} / {total}
                </span>
                <ArrowButton
                  direction="left"
                  onClick={() => setCurrent((p) => p - 1)}
                  disabled={current === 0}
                />
                <ArrowButton
                  direction="right"
                  onClick={() => setCurrent((p) => p + 1)}
                  disabled={current === total - 1}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Video testimonials heading */}
        <div className="text-center mb-12">
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#1A1510",
              letterSpacing: "-0.01em",
            }}
          >
            Video{" "}
            <em style={{ fontStyle: "italic" }}>Testimonials</em>
          </h3>
        </div>

        {/* Video pair — portrait */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-24 max-w-2xl mx-auto">
          {VIDEOS.map(({ name, program, url }) => (
            <div key={name} style={{ backgroundColor: "#F8F4EE", width: "100%", borderRadius: "12px", overflow: "hidden" }}>
              <div className="relative" style={{ aspectRatio: "9/16", backgroundColor: "#1A1510" }}>
                <video
                  src={url}
                  controls
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-4 p-6 border-t border-sand">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#EFE8DC" }}
                >
                  <span style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle: "italic",
                    fontSize: "1.125rem",
                    color: "#A8784A",
                  }}>
                    {name[0]}
                  </span>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.9375rem", color: "#1A1510" }}>
                    {name}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#7A6E64", marginTop: "2px" }}>
                    {program}
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Below CTA */}
        <div className="text-center max-w-lg mx-auto">
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "#1A1510",
              letterSpacing: "-0.01em",
            }}
            className="mb-4"
          >
            Still have questions?
          </h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "#7A6E64", lineHeight: 1.7 }} className="mb-8">
            Contact our team on WhatsApp and get personal guidance before you apply.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border transition-colors px-10 py-4"
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
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6875rem",
              letterSpacing: "0.22em",
              fontWeight: 600,
              textTransform: "uppercase",
            }}>
              Message us on WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
