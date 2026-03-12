"use client";
import { WHATSAPP } from "../data/products";

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
