"use client";
import { CALENDLY } from "../data/products";

const GOOGLE_REVIEWS = "https://maps.app.goo.gl/joNzUzQ3rT3X5g446?g_st=iw";

const FEATURED_REVIEWS = [
  {
    name: "Mina Khazeni",
    url: "https://maps.app.goo.gl/SLE3woFnvXDm2uCQ8",
    quote: "I had such a great experience at the 100-hour Advanced Teacher Training. The training was led by Vivienne, and I really loved her way of teaching. Vivienne made the practice really challenging in the best way, but also so playful. I felt like I grew a lot as a teacher and left with so many new tools and ideas for my own classes.",
  },
  {
    name: "Tanja Meier",
    url: "https://maps.app.goo.gl/dE654HEVBu5p6e1H7",
    quote: "Vivienne\u2019s Teacher Training at the Tapas Yoga is definitively one of the most memorable experiences of my life. I\u2019ve learned so much & had so much fun at the same time! Vivienne has a teaching style that is very precise and motivating \u2014 it will push you to the next level without doubt!",
  },
  {
    name: "Maura Hegi",
    url: "https://maps.app.goo.gl/vdEU3Cs3Tsy56pMk8",
    quote: "Nowhere will you learn deeper and quicker than in Vivienne\u2019s classes and trainings. She hands down will give you the best technical and alignment input you can hope for, bringing your practice to a whole new dimension. Plus Vivienne is fun and caring, and full of wisdom.",
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
              className="mb-10"
            >
              The Tapas Yoga School is registered with Yoga Alliance, offering internationally accredited teacher training courses led by highly qualified instructors. Our trainings meet the standards for the 200HR Yoga Alliance Certification and the 100HR Yoga Alliance Continuing Education Program (YACEP), and the school is proudly recognized as one of the best yoga teacher training courses in Bali and worldwide.
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

        {/* Google Reviews */}
        <div>
          <a
            href={GOOGLE_REVIEWS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 mb-8 transition-opacity hover:opacity-80"
            style={{ textDecoration: "none" }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} />)}
            </div>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#7A6E64" }}>
              5.0 · 28 Google Reviews →
            </span>
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ border: "1px solid #DDD0C0" }}>
            {FEATURED_REVIEWS.map(({ name, url, quote }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 lg:p-8 transition-colors"
                style={{ backgroundColor: "#F8F4EE", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#EFE8DC")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F8F4EE")}
              >
                <span style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  fontSize: "2.5rem",
                  lineHeight: 0.8,
                  color: "#DDD0C0",
                  display: "block",
                  marginBottom: "10px",
                }}>
                  &ldquo;
                </span>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "#1A1510",
                  lineHeight: 1.7,
                }} className="mb-5">
                  {quote}
                </p>
                <div className="flex items-center gap-3 border-t pt-4" style={{ borderColor: "#DDD0C0" }}>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#EFE8DC" }}
                  >
                    <span style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: "0.875rem", color: "#A8784A" }}>
                      {name[0]}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.875rem", color: "#1A1510" }}>
                      {name}
                    </p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => <Star key={i} />)}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
