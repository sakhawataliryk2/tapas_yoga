"use client";
import { CALENDLY } from "../data/products";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#1A1510", padding: "clamp(100px, 14vw, 180px) 24px" }}
    >
      {/* Warm radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,120,74,0.14) 0%, transparent 65%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">

        {/* Label — flanking lines suit dark bg better than the .label class */}
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            fontFamily: "var(--font-body)",
            fontSize: "0.625rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontWeight: 500,
            color: "#C8A07A",
            marginBottom: "40px",
          }}
        >
          <span style={{ display: "block", width: "24px", height: "1px", backgroundColor: "#C8A07A" }} />
          Get Started
          <span style={{ display: "block", width: "24px", height: "1px", backgroundColor: "#C8A07A" }} />
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: "clamp(3rem, 7vw, 6rem)",
            color: "white",
            letterSpacing: "-0.02em",
            lineHeight: 1.0,
            marginBottom: "32px",
          }}
        >
          Schedule an<br />
          <em style={{ fontStyle: "italic", color: "#C8A07A" }}>Info Call</em>
        </h2>

        {/* Body */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.0625rem",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.8,
            maxWidth: "440px",
            margin: "0 auto",
            marginBottom: "56px",
          }}
        >
          Looking for help finding the right yoga teacher training?
          Questions about certification, accommodation, or the program?
          Schedule a free call with our training director.
        </p>

        {/* CTA */}
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-colors"
          style={{ backgroundColor: "#A8784A", padding: "16px 56px" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8A6038")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#A8784A")}
        >
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6875rem",
            letterSpacing: "0.22em",
            fontWeight: 600,
            color: "white",
            textTransform: "uppercase",
          }}>
            Schedule a Call
          </span>
        </a>
      </div>
    </section>
  );
}
