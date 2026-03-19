import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS } from "../data/products";
import Footer from "../components/Footer";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; tier?: string; session?: string }>;
}) {
  const { product: productId, tier: tierParam, session: sessionParam } = await searchParams;
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) notFound();

  const tierIdx = Math.max(0, Math.min(parseInt(tierParam ?? "0"), product.tiers.length - 1));
  const tier = product.tiers[tierIdx];
  const sessionIdx = Math.max(0, Math.min(parseInt(sessionParam ?? "0"), product.sessions.length - 1));
  const session = product.sessions[sessionIdx];
  const displayPrice = tier.earlyBird ?? tier.price;
  const priceNum = parseInt(displayPrice.replace(/\D/g, ""));
  const depositLabel = tier.deposit ?? "USD 470 deposit";
  const depositNum = parseInt((depositLabel.match(/USD[\s]?([\d,]+)/)?.[1] ?? "470").replace(/,/g, ""));
  const isEarlyBird = !!tier.earlyBird;
  const stripeFullUrl = (isEarlyBird && tier.stripeEarlyBirdUrl) ? tier.stripeEarlyBirdUrl : tier.stripeUrl;
  const hideDeposit = product.id === "100hr" && isEarlyBird;

  const bodyFont: React.CSSProperties = { fontFamily: "var(--font-body)" };

  return (
    <>
      {/* Nav */}
      <header
        className="flex items-center justify-between px-6 lg:px-12 py-5"
        style={{ backgroundColor: "#1A1510" }}
      >
        <Link href="/" className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Tapas Yoga School" style={{ height: "28px", filter: "brightness(0) invert(1) opacity(0.75)" }} />
        </Link>
        <Link
          href={`/training/${product.id}`}
          className="opacity-65 hover:opacity-100 transition-opacity"
          style={{ ...bodyFont, fontSize: "0.6875rem", letterSpacing: "0.2em", fontWeight: 600, color: "white", textTransform: "uppercase" }}
        >
          ← Back
        </Link>
      </header>

      <main style={{ backgroundColor: "#F8F4EE", minHeight: "100vh" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-14 py-12 sm:py-16 lg:py-28">

          {/* Header */}
          <div className="mb-16">
            <p style={{ ...bodyFont, fontSize: "0.625rem", letterSpacing: "0.2em", fontWeight: 500, color: "#A8784A", textTransform: "uppercase", marginBottom: "12px" }}>
              Checkout
            </p>
            <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#1A1510", letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: "8px" }}>
              Reserve Your Spot
            </h1>
            <p style={{ ...bodyFont, fontSize: "0.9375rem", color: "#7A6E64" }}>
              One step away from your transformation.
            </p>
          </div>

          {/* Order summary card */}
          <div className="mb-10" style={{ border: "1px solid #DDD0C0", backgroundColor: "white" }}>
            <div className="px-8 py-6 border-b" style={{ borderColor: "#DDD0C0" }}>
              <p style={{ ...bodyFont, fontSize: "0.625rem", letterSpacing: "0.2em", fontWeight: 500, color: "#A8784A", textTransform: "uppercase", marginBottom: "4px" }}>
                Order Summary
              </p>
            </div>
            <div className="divide-y" style={{ borderColor: "#DDD0C0" }}>
              {[
                { label: "Program", value: product.name },
                { label: "Dates", value: session.label },
                { label: "Location", value: session.location },
                { label: "Package", value: tier.name },
                { label: "Details", value: tier.note },
                { label: "Total price", value: `${displayPrice} USD${tier.earlyBird ? " (early bird)" : ""}` },
              ].map(({ label, value }) => value && (
                <div key={label} className="px-8 py-4 flex items-start justify-between gap-8">
                  <span style={{ ...bodyFont, fontSize: "0.8125rem", color: "#7A6E64", flexShrink: 0 }}>{label}</span>
                  <span style={{ ...bodyFont, fontWeight: 500, fontSize: "0.9375rem", color: "#1A1510", textAlign: "right" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment options */}
          <h2 style={{ ...bodyFont, fontWeight: 500, fontSize: "1rem", color: "#1A1510", marginBottom: "16px" }}>
            Choose how you&apos;d like to pay
          </h2>

          <div className={`grid grid-cols-1 ${hideDeposit ? "" : "md:grid-cols-2"} gap-4`}>

            {/* Option 1: Deposit */}
            {!hideDeposit && (
            <div style={{ border: "1px solid #DDD0C0", backgroundColor: "#F8F4EE" }}>
              <div className="p-8">
                <p style={{ ...bodyFont, fontSize: "0.625rem", letterSpacing: "0.2em", fontWeight: 600, color: "#A8784A", textTransform: "uppercase", marginBottom: "16px" }}>
                  Option 1
                </p>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 400, fontSize: "1.5rem", color: "#1A1510", letterSpacing: "-0.01em", marginBottom: "8px" }}>
                  Pay Deposit Today
                </h3>
                <p style={{ ...bodyFont, fontSize: "0.875rem", color: "#7A6E64", lineHeight: 1.7, marginBottom: "24px" }}>
                  Secure your spot with a deposit now. Pay the remaining balance 90 days before the training starts.
                </p>

                {/* Deposit amount */}
                <div className="mb-6 p-4" style={{ backgroundColor: "#EFE8DC" }}>
                  <p style={{ ...bodyFont, fontSize: "0.75rem", color: "#7A6E64", marginBottom: "4px" }}>Due today</p>
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "2.25rem", color: "#1A1510", letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {depositLabel.match(/USD[\s]?([\d,]+)/)?.[1]
                      ? `$${depositLabel.match(/USD[\s]?([\d,]+)/)![1]}`
                      : depositLabel}
                    {" "}
                    <span style={{ ...bodyFont, fontSize: "0.75rem", color: "#7A6E64", fontWeight: 400 }}>USD</span>
                  </p>
                  <p style={{ ...bodyFont, fontSize: "0.75rem", color: "#7A6E64", marginTop: "4px" }}>
                    Remaining ${(priceNum - depositNum).toLocaleString()} USD due 90 days before start
                  </p>
                </div>

                <a
                  href={product.stripeDepositUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-4 transition-colors"
                  style={{ backgroundColor: "#1A1510", ...bodyFont, fontSize: "0.6875rem", letterSpacing: "0.2em", fontWeight: 600, color: "white", textTransform: "uppercase" }}
                >
                  Pay Deposit →
                </a>
              </div>
            </div>
            )}

            {/* Option 2: Pay in full */}
            <div style={{ border: "1px solid #DDD0C0", backgroundColor: "#1A1510", position: "relative" }}>
              {/* Badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5" style={{ backgroundColor: "#A8784A" }}>
                <span style={{ ...bodyFont, fontSize: "0.5625rem", letterSpacing: "0.22em", fontWeight: 600, color: "white", textTransform: "uppercase" }}>
                  Best Value
                </span>
              </div>
              <div className="p-8">
                <p style={{ ...bodyFont, fontSize: "0.625rem", letterSpacing: "0.2em", fontWeight: 600, color: "rgba(168,120,74,0.8)", textTransform: "uppercase", marginBottom: "16px" }}>
                  Option 2
                </p>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 400, fontSize: "1.5rem", color: "white", letterSpacing: "-0.01em", marginBottom: "8px" }}>
                  Pay in Full
                </h3>
                <p style={{ ...bodyFont, fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "24px" }}>
                  Pay the full amount today and have complete peace of mind. Nothing left to worry about before your training.
                </p>

                {/* Full amount */}
                <div className="mb-6 p-4" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                  <p style={{ ...bodyFont, fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "4px" }}>Due today</p>
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "2.25rem", color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {displayPrice}{" "}
                    <span style={{ ...bodyFont, fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>USD</span>
                  </p>
                  <p style={{ ...bodyFont, fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", marginTop: "4px" }}>
                    Full amount · Nothing more to pay
                  </p>
                </div>

                <a
                  href={stripeFullUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-4 transition-colors"
                  style={{ backgroundColor: "#A8784A", ...bodyFont, fontSize: "0.6875rem", letterSpacing: "0.2em", fontWeight: 600, color: "white", textTransform: "uppercase" }}
                >
                  Pay in Full →
                </a>
              </div>
            </div>
          </div>

          {/* Reassurance row */}
          <div className="mt-12 flex flex-wrap gap-8 justify-center">
            {[
              "Secure payment via Stripe",
              "SSL encrypted",
              "Deposit transferable to future dates",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6.5" stroke="#A8784A" strokeWidth="0.75" />
                  <path d="M4.5 7l2 2 3.5-3.5" stroke="#A8784A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ ...bodyFont, fontSize: "0.8125rem", color: "#7A6E64" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Help link */}
          <p className="mt-12 text-center" style={{ ...bodyFont, fontSize: "0.875rem", color: "#7A6E64" }}>
            Questions before you book?{" "}
            <Link href={`/training/${product.id}`} style={{ color: "#A8784A" }}>
              Back to training details →
            </Link>
          </p>

        </div>
      </main>

      <Footer />
    </>
  );
}
