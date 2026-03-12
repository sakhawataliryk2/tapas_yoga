"use client";

const FEATURES = [
  { title: "Official RYS Registration", body: "Formally registered with Yoga Alliance — verifiable, legitimate, and respected worldwide." },
  { title: "Certificate on Graduation", body: "Receive your official 200-hour certificate upon completing the program." },
  { title: "Recognized Worldwide", body: "Your qualification holds weight wherever you choose to teach or continue your training." },
];

export default function YogaAlliance() {
  return (
    <section id="yoga-alliance" style={{ backgroundColor: "#F8F4EE" }} className="py-16 lg:py-28">
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

          {/* ── Yoga Alliance Badge (placeholder) ── */}
          <div className="order-1 lg:order-2 flex items-center justify-center" style={{ height: "clamp(440px, 55vw, 580px)" }}>
            <div
              className="flex flex-col items-center justify-center gap-6"
              style={{
                width: "320px",
                height: "320px",
                border: "2px solid #DDD0C0",
                backgroundColor: "#EFE8DC",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  color: "#A8784A",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                Yoga Alliance<br />
                <em style={{ fontStyle: "italic" }}>Certified</em>
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.2em",
                  color: "#7A6E64",
                  textTransform: "uppercase",
                }}
              >
                RYS 200 · YACEP
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: "#A8784A",
                  marginTop: "8px",
                }}
              >
                Badge placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
