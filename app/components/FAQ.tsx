"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Do I need to want to become a teacher?",
    a: "No. Many students join to deepen their practice, build confidence, and immerse themselves in yoga — teaching is optional.",
  },
  {
    q: "What are the prerequisites?",
    a: "For the 200h, we recommend at least 1 year of consistent practice, but it's not a strict requirement. If you're unsure, message us and we'll guide you.",
  },
  {
    q: "Is the training physically intense — do I need advanced poses?",
    a: "You'll be challenged but the focus is safe alignment, intelligent progress and strong foundations — not extreme postures. Modifications are always available.",
  },
  {
    q: "What's included (accommodation & meals)?",
    a: "If you choose the all-inclusive option, your stay and meals are included. Some dates may also offer a training-only option (you book your own accommodation).",
  },
  {
    q: "Is it Yoga Alliance / YACEP certified?",
    a: "The 200h is Yoga Alliance eligible (where applicable). The 100h is typically offered as Yoga Alliance Continuing Education (YACEP).",
  },
  {
    q: "How do payments work — deposit and payment plans?",
    a: "A $470 deposit secures your spot, and payment plans are available for the remaining balance.",
  },
  {
    q: "What is your cancellation / transfer policy?",
    a: "The $470 deposit is non-refundable, but can be transferred to a future training within a set period (see booking terms for details).",
  },
  {
    q: "Can I work or stay connected during the training?",
    a: "Yes, Wi-Fi is available and you can use your laptop during off-hours. We recommend keeping work minimal to get the full experience.",
  },
  {
    q: "What's the difference between the 200HR and 100HR training?",
    a: "The 200HR Foundation is a complete certification for aspiring yoga teachers — it covers everything from asana to philosophy to teaching methodology over 21 days. The 100HR Advanced is designed for graduates who want to deepen their skills with advanced sequencing, alignment, and teaching techniques over 11 days.",
  },
  {
    q: "Is accommodation included in all trainings?",
    a: "It depends on the program. The 200HR Bali training offers all-inclusive packages with accommodation and meals. The 100HR Advanced does not include accommodation — you arrange your own stay. The Zanzibar TTC offers both options: with or without accommodation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ backgroundColor: "#F8F4EE" }} className="py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: title */}
          <div className="lg:col-span-4">
            <div className="label mb-10">Common Questions</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                color: "#1A1510",
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
              }}
            >
              Frequently<br />
              <em style={{ fontStyle: "italic" }}>Asked</em>
            </h2>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8">
            <div className="divide-y" style={{ borderTop: "1px solid #DDD0C0", borderColor: "#DDD0C0" }}>
              {FAQS.map(({ q, a }, i) => (
                <div key={i} style={{ borderColor: "#DDD0C0" }}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left flex items-start justify-between gap-8 py-7 group"
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        fontSize: "1rem",
                        color: open === i ? "#A8784A" : "#1A1510",
                        lineHeight: 1.5,
                        transition: "color 0.2s",
                      }}
                    >
                      {q}
                    </span>
                    <span
                      className="flex-shrink-0 mt-0.5 flex items-center justify-center transition-transform"
                      style={{
                        width: "22px",
                        height: "22px",
                        border: `1px solid ${open === i ? "#A8784A" : "#DDD0C0"}`,
                        borderRadius: "50%",
                        transform: open === i ? "rotate(45deg)" : "none",
                        transition: "all 0.25s",
                        color: open === i ? "#A8784A" : "#7A6E64",
                      }}
                    >
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M4.5 1v7M1 4.5h7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: open === i ? "400px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.35s ease",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        color: "#7A6E64",
                        lineHeight: 1.78,
                        paddingBottom: "28px",
                      }}
                    >
                      {a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
