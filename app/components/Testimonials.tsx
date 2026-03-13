"use client";
import { WHATSAPP } from "../data/products";

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

export default function Testimonials() {
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

        {/* Video testimonials */}
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

        {/* Google Reviews */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#DDD0C0]" style={{ border: "1px solid #DDD0C0" }}>
            {FEATURED_REVIEWS.map(({ name, url, quote }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 lg:p-8 transition-colors"
                style={{ backgroundColor: "#EFE8DC", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F8F4EE")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EFE8DC")}
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
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "#7A6E64", marginTop: "2px" }}>
                      100HR Advanced
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
