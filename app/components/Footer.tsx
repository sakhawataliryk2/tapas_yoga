"use client";

import { INSTAGRAM, WHATSAPP, CALENDLY } from "../data/products";

export default function Footer() {
  const linkStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "0.8125rem",
    color: "#7A6E64",
    letterSpacing: "0.04em",
  };

  return (
    <footer style={{ backgroundColor: "#F8F4EE", borderTop: "1px solid #DDD0C0" }} className="py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
          {/* Logo + tagline */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-clay.svg"
              alt="The Tapas Yoga School"
              style={{ height: "44px", width: "auto", marginBottom: "12px" }}
            />
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#7A6E64", letterSpacing: "0.08em" }}>
              Yoga Teacher Trainings · Bali · Greece · Zanzibar
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-8">
            {[
              { label: "Trainings", href: "#trainings" },
              { label: "About", href: "#founder" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQs", href: "#faq" },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1A1510")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7A6E64")}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social + CTA */}
          <div className="flex items-center gap-6">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1A1510")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7A6E64")}
            >
              Instagram
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7A6E64")}
            >
              WhatsApp
            </a>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 transition-colors"
              style={{ backgroundColor: "#A8784A" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8A6038")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#A8784A")}
            >
              <span style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.625rem",
                letterSpacing: "0.2em",
                fontWeight: 600,
                color: "white",
                textTransform: "uppercase",
              }}>
                Book a Call
              </span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6" style={{ borderTop: "1px solid #DDD0C0" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#7A6E64", letterSpacing: "0.04em" }}>
            © 2026 The Tapas Yoga School. All rights reserved.
          </p>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#A8784A", letterSpacing: "0.04em" }}>
            Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  );
}
