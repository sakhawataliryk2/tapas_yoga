"use client";
import { useState, useEffect } from "react";

import { CALENDLY } from "../data/products";

const NAV_LINKS = [
  { label: "Trainings", href: "#trainings" },
  { label: "About Us", href: "#founder" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bodyFont: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "0.75rem",
    letterSpacing: "0.08em",
    fontWeight: 500,
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? {
              backgroundColor: "rgba(248,244,238,0.96)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid #DDD0C0",
            }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center" style={{ opacity: 0.92 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={scrolled ? "/logo-clay.svg" : "/logo.svg"}
            alt="The Tapas Yoga School"
            style={{
              height: "44px",
              width: "auto",
            }}
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors"
              style={{
                ...bodyFont,
                color: scrolled ? "#7A6E64" : "rgba(255,255,255,0.75)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = scrolled ? "#1A1510" : "white")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? "#7A6E64"
                  : "rgba(255,255,255,0.75)")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 transition-colors"
            style={{
              ...bodyFont,
              backgroundColor: "#A8784A",
              color: "white",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#8A6038")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#A8784A")
            }
          >
            Book a Call
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className="block h-px transition-colors"
              style={{
                width: i === 3 ? "16px" : "24px",
                backgroundColor: scrolled ? "#1A1510" : "white",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-8 flex flex-col gap-6 border-t"
          style={{ backgroundColor: "#F8F4EE", borderColor: "#DDD0C0" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted"
              style={bodyFont}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center py-3"
            style={{
              ...bodyFont,
              backgroundColor: "#A8784A",
              color: "white",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
