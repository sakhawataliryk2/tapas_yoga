import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, CALENDLY } from "../../data/products";
import Nav from "../../components/Nav";
import TrainingCarousel from "../../components/TrainingCarousel";
import PriceCard from "../../components/PriceCard";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default async function TrainingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  const { detail } = product;

  return (
    <>
      <Nav />

      <main>
        {/* ── Full-width carousel ── */}
        <TrainingCarousel slides={detail.images} />

        {/* ── Content ── */}
        <div style={{ backgroundColor: "#F8F4EE" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-14 py-12 sm:py-16 lg:py-28">

            {/* Breadcrumb + label */}
            <div className="flex items-center gap-2 mb-8" style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#7A6E64" }}>
              <Link href="/" style={{ color: "#A8784A" }}>Home</Link>
              <span>›</span>
              <Link href="/#trainings" style={{ color: "#A8784A" }}>Trainings</Link>
              <span>›</span>
              <span>{product.shortName}</span>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6875rem",
                letterSpacing: "0.2em",
                fontWeight: 500,
                color: "#A8784A",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              {detail.tagline}
            </p>

            {/* Title */}
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#1A1510",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
              className="mb-12"
            >
              {product.name}
            </h1>

            {/* Two-column layout: description + highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 lg:mb-20">

              {/* Left: description + includes */}
              <div className="lg:col-span-7">
                {detail.description.map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.0625rem",
                      color: "#7A6E64",
                      lineHeight: 1.8,
                    }}
                    className="mb-6"
                  >
                    {para}
                  </p>
                ))}

                {/* What's included */}
                <div className="mt-12">
                  <h2
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      fontSize: "1rem",
                      color: "#1A1510",
                      marginBottom: "20px",
                    }}
                  >
                    What&apos;s included
                  </h2>
                  <ul className="space-y-3">
                    {product.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3.5">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0">
                          <circle cx="7" cy="7" r="6.5" stroke="#A8784A" strokeWidth="0.75" />
                          <path d="M4.5 7l2 2 3.5-3.5" stroke="#A8784A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9375rem",
                            color: "#7A6E64",
                            lineHeight: 1.6,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: interactive price card */}
              <div className="lg:col-span-5">
                <PriceCard
                  productId={product.id}
                  productName={product.name}
                  tiers={product.tiers}
                  calendly={CALENDLY}
                />
              </div>
            </div>

            {/* ── 100HR Video — About the Training ── */}
            {product.id === "100hr" && (
              <div className="max-w-md mb-16 lg:mb-20">
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.625rem",
                    letterSpacing: "0.15em",
                    color: "#A8784A",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    marginBottom: "12px",
                  }}
                >
                  About the Training
                </p>
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "9/16", backgroundColor: "#1A1510" }}
                >
                  <video
                    src="https://video.gumlet.io/67f02e049eef3d88099c9644/698c36e4aec3d4e4200257e7/download.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* ── Sessions / Dates ── */}
            <div className="border-t pt-16" style={{ borderColor: "#DDD0C0" }}>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 400,
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  color: "#1A1510",
                  letterSpacing: "-0.01em",
                }}
                className="mb-10"
              >
                2026{" "}
                <em style={{ fontStyle: "italic" }}>Training Dates</em>
              </h2>

              <div className="space-y-2 max-w-2xl">
                {product.sessions.map((session, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-5 px-5 sm:px-6"
                    style={{ backgroundColor: "#EFE8DC", borderBottom: i < product.sessions.length - 1 ? "1px solid #DDD0C0" : "none" }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                          fontSize: "0.9375rem",
                          color: "#1A1510",
                        }}
                      >
                        {session.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.8125rem",
                          color: "#7A6E64",
                          marginTop: "2px",
                        }}
                      >
                        {session.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <Link
                        href={`/checkout?product=${product.id}&tier=0`}
                        className="inline-block px-6 py-2.5 transition-colors"
                        style={{
                          backgroundColor: "#1A1510",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.625rem",
                          letterSpacing: "0.2em",
                          fontWeight: 600,
                          color: "white",
                          textTransform: "uppercase",
                        }}
                      >
                        Reserve
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Payment details ── */}
            <div className="border-t pt-16 mt-16" style={{ borderColor: "#DDD0C0" }}>
              <h2
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: "#1A1510",
                  marginBottom: "20px",
                }}
              >
                Payment details
              </h2>
              <ul className="space-y-3">
                {product.payment.map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#A8784A" }} />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        color: "#7A6E64",
                        lineHeight: 1.7,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
