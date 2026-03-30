"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import CalendlyPopup from "./CalendlyPopup";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Trainings", href: "#trainings" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const link = (anchor: string) => isHome ? anchor : `/${anchor}`;

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
        <a href={isHome ? "#" : "/"} className="flex items-center" style={{ opacity: 0.92 }}>
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
          {NAV_LINKS.map((navLink) => (
            <a
              key={navLink.label}
              href={link(navLink.href)}
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
              {navLink.label}
            </a>
          ))}
          <CalendlyPopup
            className="px-6 py-2.5 transition-colors"
            style={{
              ...bodyFont,
              backgroundColor: "#A8784A",
              color: "white",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e: any) =>
              (e.currentTarget.style.backgroundColor = "#8A6038")
            }
            onMouseLeave={(e: any) =>
              (e.currentTarget.style.backgroundColor = "#A8784A")
            }
          >
            Book a Call
          </CalendlyPopup>
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
          className="md:hidden fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: "#F8F4EE" }}
        >
          {/* Close button */}
          <div className="px-6 h-20 flex items-center justify-between">
            <a href={isHome ? "#" : "/"} className="flex items-center" style={{ opacity: 0.92 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-clay.svg"
                alt="The Tapas Yoga School"
                style={{ height: "44px", width: "auto" }}
              />
            </a>
            <button
              className="p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1510" strokeWidth="1.5">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((navLink) => (
              <a
                key={navLink.label}
                href={link(navLink.href)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  letterSpacing: "0.12em",
                  fontWeight: 500,
                  color: "#7A6E64",
                  textTransform: "uppercase",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {navLink.label}
              </a>
            ))}
            <CalendlyPopup
              className="text-center px-10 py-3 mt-4"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                letterSpacing: "0.18em",
                fontWeight: 500,
                backgroundColor: "#A8784A",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              Book a Call
            </CalendlyPopup>
          </div>
        </div>
      )}
    </nav>
  );
}
