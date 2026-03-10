"use client";
import { CALENDLY } from "../data/products";

const HIGHLIGHTS = [
  {
    name: "Marion Huber",
    program: "200HR Graduate",
    quote: "The level of depth Vivienne goes to to make sure you become great teachers is unparalleled. I gained so much confidence from these exercises alone.",
  },
  {
    name: "Noemie Rousseau",
    program: "200HR Graduate",
    quote: "Training with Vivienne has been a truly transformative experience — a deep immersion into the philosophy of yoga, guided with immense wisdom and kindness.",
  },
  {
    name: "Denis Pasquali",
    program: "200HR Graduate",
    quote: "It's been even better than what I could imagine. Vivienne has changed my life because she is an example of discipline and the best teacher I could ever ask for.",
  },
];

function Star() {
  return (
    <svg width="13" height="12" viewBox="0 0 14 13" fill="#A8784A">
      <path d="M7 0l1.76 5.4H14l-4.58 3.33 1.75 5.41L7 10.87l-4.17 3.27 1.75-5.41L0 5.4h5.24L7 0z" />
    </svg>
  );
}

export default function AboutIntro() {
  return (
    <section id="about" style={{ backgroundColor: "#F8F4EE" }} className="pt-32 lg:pt-44 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Top grid: text + video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center mb-16 lg:mb-24">

          {/* Left: intro text */}
          <div>
            <div className="label mb-10">About the School</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#1A1510",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
              className="mb-8"
            >
              Where Yoga<br />
              <em style={{ fontStyle: "italic" }}>Becomes Mastery</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                color: "#7A6E64",
                lineHeight: 1.8,
              }}
              className="mb-6"
            >
              The Tapas Yoga School is registered with Yoga Alliance, offering internationally accredited teacher training courses led by highly qualified instructors. Our trainings meet the standards for the 200HR Yoga Alliance Certification and the 100HR Yoga Alliance Continuing Education Program (YACEP).
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                color: "#7A6E64",
                lineHeight: 1.8,
              }}
              className="mb-10"
            >
              The school is proudly recognized as one of the best yoga teacher training courses in Bali and worldwide.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mb-10">
              {[
                { value: "250+", label: "Graduates" },
                { value: "37", label: "Countries" },
                { value: "5.0", label: "Google Rating" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 300,
                    fontSize: "2.5rem",
                    color: "#1A1510",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}>
                    {value}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#A8784A", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 transition-colors"
              style={{ backgroundColor: "#A8784A" }}
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
                Apply Now
              </span>
            </a>
          </div>

          {/* Right: Hero video */}
          <div>
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "16/9", backgroundColor: "#1A1510" }}
            >
              <video
                src="/hero-vid.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "#7A6E64",
              marginTop: "12px",
            }}>
              Meet Vivienne Zeng &amp; the Tapas Yoga School
            </p>
          </div>
        </div>

        {/* Testimonials strip */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} />)}
            </div>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#7A6E64" }}>
              5.0 · 28 Google Reviews
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ border: "1px solid #DDD0C0", borderColor: "#DDD0C0" }}>
            {HIGHLIGHTS.map(({ name, program, quote }, i) => (
              <div
                key={name}
                className="p-6 lg:p-10"
                style={{
                  backgroundColor: "#F8F4EE",
                }}
              >
                <span style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  fontSize: "3rem",
                  lineHeight: 0.8,
                  color: "#DDD0C0",
                  display: "block",
                  marginBottom: "12px",
                }}>
                  &ldquo;
                </span>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "#1A1510",
                  lineHeight: 1.75,
                  minHeight: "5em",
                }} className="mb-6">
                  {quote}
                </p>
                <div className="flex items-center gap-3 border-t pt-5" style={{ borderColor: "#DDD0C0" }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#EFE8DC" }}
                  >
                    <span style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: "1rem", color: "#A8784A" }}>
                      {name[0]}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.9375rem", color: "#1A1510" }}>
                      {name}
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#A8784A", marginTop: "2px" }}>
                      {program}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
