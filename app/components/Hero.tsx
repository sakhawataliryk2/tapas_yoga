"use client";
import { useState } from "react";
import MuxVideo from "@mux/mux-video-react";
import { CALENDLY } from "../data/products";

const MUX_PLAYBACK_ID = "OCh0212rblqv02ZdcToaj00YEYDKddcQL5sOE7xqKLPXvo";

const PROOF = [
  "5.0 · 28 Google Reviews",
  "250+ Graduates",
  "37 Countries",
  "Bali · Greece · Zanzibar",
];

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="relative flex flex-col"
        style={{ minHeight: "100svh" }}
      >
        {/* ── Background video ── */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://video.gumlet.io/67f02e049eef3d88099c9644/698c36e4aec3d4e4200257e7/download.mp4"
          />
          {/* Multi-layer overlay for depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(16,12,8,0.72) 0%, rgba(16,12,8,0.48) 45%, rgba(16,12,8,0.80) 100%)",
            }}
          />
          {/* Warm vignette edges */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 120% 80% at 50% 50%, transparent 40%, rgba(10,7,4,0.9) 100%)",
            }}
          />
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-36 pb-24">

          {/* Badge */}
          <div className="mb-10 flex items-center gap-3">
            <div className="h-px w-10 bg-white/30" />
            <span
              className="text-white/70 tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500 }}
            >
              Yoga Alliance Certified · Teacher Trainings
            </span>
            <div className="h-px w-10 bg-white/30" />
          </div>

          {/* Headline — Cormorant Garamond at its best */}
          <h1
            className="text-white mb-12 max-w-5xl"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            Become a{" "}
            <em
              className="not-italic"
              style={{
                fontStyle: "italic",
                color: "#C8A07A",
              }}
            >
              Certified
            </em>
            <br />
            Yoga Teacher
          </h1>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#trainings"
              className="group relative overflow-hidden px-10 py-4"
              style={{ backgroundColor: "#A8784A" }}
            >
              <span
                className="relative z-10 text-white tracking-[0.22em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600 }}
              >
                Apply Now
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "#8A6038" }}
              />
            </a>

            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-3 px-8 py-4 border border-white/25 hover:border-white/50 transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)" }}
            >
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(255,255,255,0.85)" }}
              >
                <svg className="w-3 h-3 text-charcoal ml-0.5" fill="#1A1510" viewBox="0 0 10 12">
                  <path d="M0 0L10 6L0 12V0Z" />
                </svg>
              </span>
              <span
                className="text-white/85 tracking-[0.22em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500 }}
              >
                Watch Video
              </span>
            </button>
          </div>
        </div>

        {/* ── Social proof bar ── */}
        <div
          className="relative z-10 border-t border-white/10"
          style={{ backgroundColor: "rgba(12,9,5,0.45)", backdropFilter: "blur(12px)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 overflow-x-auto">
            <div className="flex items-center justify-center gap-0 min-w-max mx-auto">
              {PROOF.map((item, i) => (
                <div key={i} className="flex items-center">
                  <span
                    className="text-white/65 whitespace-nowrap px-5"
                    style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "0.05em" }}
                  >
                    {item}
                  </span>
                  {i < PROOF.length - 1 && (
                    <span className="text-white/20 text-base">·</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(10,7,4,0.92)", backdropFilter: "blur(12px)" }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-10 right-0 text-white/50 hover:text-white/90 transition-colors"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.12em" }}
            >
              CLOSE ✕
            </button>
            <div className="aspect-video w-full">
              <MuxVideo playbackId={MUX_PLAYBACK_ID} controls autoPlay className="w-full h-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
