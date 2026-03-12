"use client";
import Image from "next/image";
import { CALENDLY } from "../data/products";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      style={{ backgroundColor: "#EFE8DC" }}
      className="py-16 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — photo */}
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "4/5", backgroundColor: "#1A1510" }}
          >
            <Image
              src="/schedule-call.png"
              alt="Schedule a call"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right — text + CTA */}
          <div>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontFamily: "var(--font-body)",
                fontSize: "0.625rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "#A8784A",
                marginBottom: "40px",
              }}
            >
              <span style={{ display: "block", width: "24px", height: "1px", backgroundColor: "#A8784A" }} />
              Get Started
            </p>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                color: "#1A1510",
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
                marginBottom: "32px",
              }}
            >
              Schedule an<br />
              <em style={{ fontStyle: "italic", color: "#A8784A" }}>Info Call</em>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                color: "#7A6E64",
                lineHeight: 1.8,
                maxWidth: "440px",
                marginBottom: "56px",
              }}
            >
              Looking for help finding the right yoga teacher training?
              Questions about certification, accommodation, or the program?
              Schedule a free call with our training director.
            </p>

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
                letterSpacing: "0.12em",
                fontWeight: 600,
                color: "white",
                textTransform: "uppercase",
              }}>
                Schedule a Call
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
