"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
}

export default function TrainingCarousel({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const total = slides.length;

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent((idx + total) % total);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning, total]
  );

  // Auto-advance (paused when lightbox is open)
  useEffect(() => {
    if (lightbox) return;
    const id = setInterval(() => goTo(current + 1), 4500);
    return () => clearInterval(id);
  }, [current, goTo, lightbox]);

  // Close lightbox on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") setCurrent((p) => (p + 1) % total);
      if (e.key === "ArrowLeft") setCurrent((p) => (p - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, total]);

  return (
    <>
      {/* ── Carousel ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "67svh" }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            {/* Clickable image area */}
            <button
              onClick={() => setLightbox(true)}
              className="absolute inset-0 w-full h-full cursor-zoom-in"
              aria-label="View full screen"
              style={{ padding: 0, border: "none", background: "none" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(16,12,8,0.55) 0%, rgba(16,12,8,0.1) 40%, transparent 70%)",
                }}
              />
            </button>

            {/* Expand hint icon */}
            {i === current && (
              <div
                className="absolute top-5 right-5 z-10 flex items-center justify-center pointer-events-none"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 5V1h4M9 1h4v4M13 9v4H9M5 13H1V9" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}

        {/* Prev / Next arrows */}
        <button
          onClick={() => goTo(current - 1)}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-colors"
          style={{
            width: "48px", height: "48px", borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.12)", backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.2)", color: "white",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)")}
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={() => goTo(current + 1)}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-colors"
          style={{
            width: "48px", height: "48px", borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.12)", backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.2)", color: "white",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)")}
          aria-label="Next"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-7 flex items-end justify-between">
          {slides[current].alt && (
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.625rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.55)", textTransform: "uppercase" }}>
              {slides[current].alt}
            </p>
          )}
          {!slides[current].alt && <span />}
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    height: "4px", width: i === current ? "20px" : "4px", borderRadius: "2px",
                    backgroundColor: i === current ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.3)",
                    transition: "all 0.3s",
                  }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <span style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: "0.875rem", color: "rgba(255,255,255,0.3)" }}>
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* ── Lightbox overlay ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: "rgba(10,7,4,0.96)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightbox(false)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-5 right-6 flex items-center gap-2 transition-opacity opacity-60 hover:opacity-100"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.625rem", letterSpacing: "0.2em", color: "white", textTransform: "uppercase" }}
          >
            Close ✕
          </button>

          {/* Counter */}
          <span className="absolute top-6 left-1/2 -translate-x-1/2" style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>
            {current + 1} / {total}
          </span>

          {/* Image */}
          <div
            className="relative w-full h-full"
            style={{ maxWidth: "1200px", maxHeight: "85vh", margin: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); setCurrent((p) => (p - 1 + total) % total); }}
            className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors"
            style={{ width: "52px", height: "52px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); setCurrent((p) => (p + 1) % total); }}
            className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors"
            style={{ width: "52px", height: "52px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Caption */}
          {slides[current].alt && (
            <p
              className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.625rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", whiteSpace: "nowrap" }}
            >
              {slides[current].alt}
            </p>
          )}

          {/* Dot strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                style={{
                  width: i === current ? "20px" : "5px", height: "4px", borderRadius: "2px",
                  backgroundColor: i === current ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.25)",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
