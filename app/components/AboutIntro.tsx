"use client";
import { CALENDLY } from "../data/products";


export default function AboutIntro() {
  return (
    <section id="about" style={{ backgroundColor: "#F8F4EE" }} className="pt-32 lg:pt-44 pb-8 lg:pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Top grid: text + video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center mb-6 lg:mb-8">

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
              Tapas Yoga School offers internationally accredited teacher training courses in Bali and Greece, led by highly qualified instructors. Our intimate group settings and hands-on approach have earned us recognition as one of the best yoga teacher training programs worldwide.
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

          </div>

          {/* Right: Hero video */}
          <div>
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "16/9", backgroundColor: "#1A1510" }}
            >
              <iframe
                src="https://www.youtube.com/embed/yILoIfTMVr8"
                title="Introduction to Tapas Yoga School"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
