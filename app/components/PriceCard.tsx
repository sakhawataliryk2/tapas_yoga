"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Tier, Session } from "../data/products";

interface Props {
  productId: string;
  productName: string;
  tiers: Tier[];
  sessions: Session[];
  calendly: string;
}

export default function PriceCard({ productId, productName, tiers, sessions, calendly }: Props) {
  const router = useRouter();
  const defaultIdx = Math.max(tiers.findIndex((t) => t.featured), 0);
  const [selectedIdx, setSelectedIdx] = useState(defaultIdx);
  const [selectedSession, setSelectedSession] = useState(sessions.length === 1 ? 0 : -1);
  const [showSessionError, setShowSessionError] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const tier = tiers[selectedIdx];
  const displayPrice = tier.earlyBird ?? tier.price;
  const isEarlyBird = !!tier.earlyBird;
  const hideDeposit = productId === "100hr" && isEarlyBird;
  const depositLabel = tier.deposit ?? "USD 470 deposit to reserve";

  function handleBook() {
    if (sessions.length > 1 && selectedSession === -1) {
      setShowSessionError(true);
      return;
    }
    const sessionIdx = selectedSession === -1 ? 0 : selectedSession;
    const params = new URLSearchParams({ product: productId, tier: String(selectedIdx), session: String(sessionIdx) });
    router.push(`/checkout?${params.toString()}`);
  }

  function handleBrochureSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to email delivery (e.g. Resend, ConvertKit, etc.)
    setSubmitted(true);
  }

  return (
    <>
      <div style={{ border: "1px solid #DDD0C0", backgroundColor: "#F8F4EE" }}>

        {/* Package selector */}
        <div className="px-8 pt-8 pb-6 border-b" style={{ borderColor: "#DDD0C0" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.15em", color: "#A8784A", textTransform: "uppercase", marginBottom: "10px" }}>
            Select Package
          </p>
          <div className="relative">
            <select
              value={selectedIdx}
              onChange={(e) => setSelectedIdx(Number(e.target.value))}
              className="w-full appearance-none pr-8"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "#1A1510",
                backgroundColor: "transparent",
                border: "1px solid #DDD0C0",
                padding: "10px 36px 10px 14px",
                borderRadius: "0",
                cursor: "pointer",
                outline: "none",
              }}
            >
              {tiers.map((t, i) => (
                <option key={i} value={i}>{t.name}</option>
              ))}
            </select>
            {/* Chevron */}
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <path d="M2 4l4 4 4-4" stroke="#A8784A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Session selector */}
        {sessions.length > 1 && (
          <div className="px-8 pt-6 pb-6 border-b" style={{ borderColor: "#DDD0C0" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.15em", color: "#A8784A", textTransform: "uppercase", marginBottom: "10px" }}>
              Select Date & Location
            </p>
            <div className="relative">
              <select
                value={selectedSession}
                onChange={(e) => { setSelectedSession(Number(e.target.value)); setShowSessionError(false); }}
                className="w-full appearance-none pr-8"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: selectedSession === -1 ? "#7A6E64" : "#1A1510",
                  backgroundColor: "transparent",
                  border: `1px solid ${showSessionError ? "#C0392B" : "#DDD0C0"}`,
                  padding: "10px 36px 10px 14px",
                  borderRadius: "0",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <option value={-1} disabled>Choose a session…</option>
                {sessions.map((s, i) => (
                  <option key={i} value={i}>{s.label} — {s.location}</option>
                ))}
              </select>
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              >
                <path d="M2 4l4 4 4-4" stroke="#A8784A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {showSessionError && (
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#C0392B", marginTop: "6px" }}>
                Please select a date and location to continue.
              </p>
            )}
          </div>
        )}

        {/* Price */}
        <div className="px-8 py-6 border-b" style={{ borderColor: "#DDD0C0" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.15em", color: "#A8784A", textTransform: "uppercase", marginBottom: "8px" }}>
            {isEarlyBird ? "Early Bird Price" : "Price"}
          </p>
          <div className="flex items-end gap-3">
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "3.5rem", color: "#1A1510", letterSpacing: "-0.02em", lineHeight: 1 }}>
              {displayPrice}
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#7A6E64", marginBottom: "6px" }}>
              USD
            </span>
          </div>
          {isEarlyBird && (
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#7A6E64", marginTop: "4px" }}>
              <span style={{ textDecoration: "line-through" }}>{tier.price}</span>
              <span style={{ marginLeft: "6px", color: "#A8784A" }}>regular</span>
            </p>
          )}
          {!hideDeposit && (
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#A8784A", marginTop: "10px" }}>
            {depositLabel}
          </p>
          )}
          {hideDeposit && (
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#A8784A", marginTop: "10px" }}>
            Full payment required within 24 hours
          </p>
          )}
          {tier.note && (
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#7A6E64", marginTop: "6px" }}>
              {tier.note}
            </p>
          )}
        </div>

        {/* CTAs */}
        <div className="px-8 py-8 flex flex-col gap-3">
          <button
            onClick={handleBook}
            className="block w-full text-center py-4 transition-colors"
            style={{ backgroundColor: "#A8784A", fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.12em", fontWeight: 600, color: "white", textTransform: "uppercase", border: "none", cursor: "pointer" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8A6038")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#A8784A")}
          >
            Book Now →
          </button>

          <button
            onClick={() => setBrochureOpen(true)}
            className="block w-full text-center py-3.5 transition-colors"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.12em", fontWeight: 500, color: "#7A6E64", textTransform: "uppercase", border: "1px solid #DDD0C0", backgroundColor: "transparent", cursor: "pointer" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1A1510"; e.currentTarget.style.color = "#1A1510"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#DDD0C0"; e.currentTarget.style.color = "#7A6E64"; }}
          >
            Get Free Brochure
          </button>

          <a
            href="https://wa.me/8613816920709"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-2"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.15em", color: "#7A6E64", textTransform: "uppercase" }}
          >
            Have a question →
          </a>
        </div>
      </div>

      {/* ── Brochure modal ── */}
      {brochureOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(10,7,4,0.88)", backdropFilter: "blur(10px)" }}
          onClick={() => { setBrochureOpen(false); setSubmitted(false); setEmail(""); }}
        >
          <div
            className="w-full max-w-md"
            style={{ backgroundColor: "#F8F4EE", border: "1px solid #DDD0C0" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-8 pb-0">
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.625rem", letterSpacing: "0.12em", color: "#A8784A", textTransform: "uppercase", marginBottom: "8px" }}>
                  Free Download
                </p>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 400, fontSize: "1.875rem", color: "#1A1510", letterSpacing: "-0.01em", lineHeight: 1.1 }}>
                  {productName}<br />
                  <em style={{ fontStyle: "italic" }}>Brochure</em>
                </h3>
              </div>
              <button
                onClick={() => { setBrochureOpen(false); setSubmitted(false); setEmail(""); }}
                style={{ fontFamily: "var(--font-body)", fontSize: "0.625rem", letterSpacing: "0.12em", color: "#7A6E64", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", marginTop: "4px" }}
              >
                ✕ Close
              </button>
            </div>

            <div className="p-8">
              {submitted ? (
                <div className="text-center py-6">
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 400, fontSize: "1.5rem", color: "#1A1510", marginBottom: "12px" }}>
                    Check your inbox ✓
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#7A6E64", lineHeight: 1.7 }}>
                    We&apos;ve sent the brochure to <strong>{email}</strong>. It may take a minute to arrive.
                  </p>
                </div>
              ) : (
                <>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#7A6E64", lineHeight: 1.7, marginBottom: "24px" }}>
                    Enter your email and we&apos;ll send you the full program details, schedule, and pricing breakdown as a PDF.
                  </p>
                  <form onSubmit={handleBrochureSubmit} className="flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        color: "#1A1510",
                        backgroundColor: "white",
                        border: "1px solid #DDD0C0",
                        padding: "12px 16px",
                        outline: "none",
                        width: "100%",
                      }}
                    />
                    <button
                      type="submit"
                      className="w-full py-4 transition-colors"
                      style={{ backgroundColor: "#1A1510", fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.12em", fontWeight: 600, color: "white", textTransform: "uppercase", border: "none", cursor: "pointer" }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#A8784A")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1A1510")}
                    >
                      Send Me the Brochure
                    </button>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#7A6E64", textAlign: "center", marginTop: "4px" }}>
                      No spam. Unsubscribe any time.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
