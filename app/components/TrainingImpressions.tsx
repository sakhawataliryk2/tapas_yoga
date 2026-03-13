"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/impressions-training.png", label: "Training session" },
  { src: "/impressions-training-2.jpeg", label: "Community & practice" },
];

const VIDEOS = [
  "https://video.gumlet.io/67f02e049eef3d88099c9644/698c35ecfc23d3d76fe7f2bb/download.mp4",
  "https://video.gumlet.io/67f02e049eef3d88099c9644/698c44af5e94c7f61bedbb8a/download.mp4",
  "https://video.gumlet.io/67f02e049eef3d88099c9644/698c44afcfb6ef9b9fdb96af/download.mp4",
];

export default function TrainingImpressions() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % SLIDES.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="impressions" style={{ backgroundColor: "#EFE8DC" }} className="py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="label justify-center mb-10">Inside the Trainings</div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "#1A1510",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
            className="mb-5"
          >
            Impressions from Our Trainings
          </h2>
          <p
            style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "#7A6E64", lineHeight: 1.75 }}
            className="max-w-lg mx-auto"
          >
            A glimpse into daily life, practice, and community during our
            Yoga Teacher Trainings.
          </p>
        </div>

        {/* Photo carousel */}
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16/9", backgroundColor: "#1A1510" }}
        >
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <Image
                src={slide.src}
                alt={slide.label}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(20,15,10,0.25) 0%, transparent 30%)" }}
              />
            </div>
          ))}

          {/* Dot nav */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  height: "5px",
                  width: i === current ? "20px" : "5px",
                  borderRadius: "3px",
                  backgroundColor: i === current ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.3)",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Training videos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
          {VIDEOS.map((url, i) => (
            <div key={i} className="relative overflow-hidden" style={{ aspectRatio: "9/16", backgroundColor: "#1A1510", borderRadius: "12px" }}>
              <video
                src={url}
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
