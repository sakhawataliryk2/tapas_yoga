"use client";
import { useState } from "react";
import { WHATSAPP } from "../data/products";

const GOOGLE_REVIEWS = "https://maps.app.goo.gl/joNzUzQ3rT3X5g446?g_st=iw";

const REVIEWS_200HR = [
  {
    name: "Denis Pasquali",
    program: "200HR Foundation",
    url: "https://maps.app.goo.gl/7NBB26WtZjqLcG3b6",
    quote: "I did the 200hr foundation training. It is been even better than what I could imagine. I was already following Vivienne classes before the training cause I\u2019ve fallen in love with her way of teaching which I felt it was so wise, hard and challenging sometimes even funny. I thought that I was already learning a lot but I\u2019ve got to admit that just with the training I really started to do real yoga, it literally open to me a world to explore. This training is not for people who wants to become a yoga teacher just as a trend, it\u2019s for people who wants to get yoga as a life style. The training it\u2019s complete of philosophy of yoga, asana practice, pranayama works, and a lot of tips not just about asanas but also about life. Vivienne has changed my life because she is an example of discipline and the best teacher I could ever ask, always pushing me over my imaginary limits and showing me the best way to enjoy this journey. I\u2019m gonna thanks her for ever!",
  },
  {
    name: "Liisa",
    program: "200HR Foundation",
    url: "https://maps.app.goo.gl/WcjVuMHMUxZC4ewz9",
    quote: "This teacher training has been life-changing, and I couldn\u2019t have asked for a better experience!!\nI first met Vivienne in one of her yoga classes and knew right away that with her I learn the most, she inspired me in so many ways and still continues to do so. I\u2019ve never met a teacher like her, who is so hardworking, smart, and always doing her best for all her students. Vivienne is super dedicated and a master at what she does best, teaching yoga. You can really see that she loves what she does! And it makes a big difference to learn from someone so dedicated. This all makes her a teacher unlike any other!!\nAt first, I didn\u2019t even plan to do my YTT in Canggu, but when I heard that Vivienne had her training coming up, I knew that training with her was the smartest. I am super lucky to say that I had the best experience. I learned more than I could have imagined and met the most heartwarming people, whom I will never forget. One main difference between other YTT\u2019s and Tapas is that the group is very small (there was just the 4 of us), so you get so much more attention and can learn much more, than in any other yoga schools.\nDuring the training I also learned more about myself, discipline, and how to include the ancient practice and mindfulness in my daily life and routines. Learning more about ayurveda, anatomy and yoga history were all very interesting. The whole team of teachers in Tapas are amazing at teaching and I learned so much from them.\nVivienne\u2019s YTT truly gets you to the right beginning of a yoga teachers career. She ensures that you actually learn how to teach others, which is incredibly beneficial for future teachers. Of course, each student must put in their own effort, but it is totally worth it. Also, I am someone who trains daily, but after completing the YTT, I feel stronger than I\u2019ve ever felt before.\nI am forever grateful and look forward to do another teacher training with Vivienne! Want to give more than five stars",
  },
  {
    name: "Peter Bainbridge",
    program: "200HR Foundation",
    url: "https://maps.app.goo.gl/uQpqvYmQJpEkncna8",
    quote: "I\u2019ve taken a 200 hour & 100 hour training through The Tapas Yoga school. Vivienne, the lead teacher, is passionate about yoga and it shines through in her teaching. When practicing with her, I always feel that she knows when I\u2019m ready to go that little bit further with my practice and will help me to get there.\n\nTaking a YTT with Vivienne will deepen your asana practice as well as give you the knowledge and the confidence to go into teaching yoga as well.\n\nWhether you just want to deepen your self practice or become a teacher as well, I would highly recommend taking a YTT at the Tapas Yoga school with Vivienne.",
  },
];

const REVIEWS_100HR = [
  {
    name: "Mina Khazeni",
    program: "100HR Advanced",
    url: "https://maps.app.goo.gl/SLE3woFnvXDm2uCQ8",
    quote: "I had such a great experience at the 100-hour Advanced Teacher Training. The training was led by Vivienne, and I really loved her way of teaching. Vivienne made the practice really challenging in the best way, but also so playful. I felt like I grew a lot as a teacher and left with so many new tools and ideas for my own classes.",
  },
  {
    name: "Tanja Meier",
    program: "100HR Advanced",
    url: "https://maps.app.goo.gl/dE654HEVBu5p6e1H7",
    quote: "Vivienne\u2019s Teacher Training at the Tapas Yoga is definitively one of the most memorable experiences of my life. I\u2019ve learned so much & had so much fun at the same time! Vivienne has a teaching style that is very precise and motivating \u2014 it will push you to the next level without doubt!",
  },
  {
    name: "Maura Hegi",
    program: "100HR Advanced",
    url: "https://maps.app.goo.gl/vdEU3Cs3Tsy56pMk8",
    quote: "Nowhere will you learn deeper and quicker than in Vivienne\u2019s classes and trainings. She hands down will give you the best technical and alignment input you can hope for, bringing your practice to a whole new dimension. Plus Vivienne is fun and caring, and full of wisdom.",
  },
];

const REVIEW_PAGES = [
  { label: "200HR Foundation", reviews: REVIEWS_200HR },
  { label: "100HR Advanced", reviews: REVIEWS_100HR },
];

const VIDEOS = [
  {
    name: "Tanya",
    program: "100HR Advanced \u00b7 Switzerland",
    url: "https://video.gumlet.io/67f02e049eef3d88099c9644/698c49be5cf0bdb0b9286778/download.mp4",
  },
  {
    name: "Julien",
    program: "200HR Graduate \u00b7 France",
    url: "https://video.gumlet.io/67f02e049eef3d88099c9644/698c49be5cf0bdb0b928677a/download.mp4",
  },
];

const TRUNCATE_LENGTH = 280;

function Star() {
  return (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="#A8784A">
      <path d="M7 0l1.76 5.4H14l-4.58 3.33 1.75 5.41L7 10.87l-4.17 3.27 1.75-5.41L0 5.4h5.24L7 0z" />
    </svg>
  );
}

function TruncatedQuote({ quote, url }: { quote: string; url: string }) {
  const needsTruncation = quote.length > TRUNCATE_LENGTH;
  const displayText = needsTruncation
    ? quote.slice(0, TRUNCATE_LENGTH).replace(/\s+\S*$/, "") + "\u2026"
    : quote;

  return (
    <div>
      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.875rem",
        color: "#1A1510",
        lineHeight: 1.7,
        whiteSpace: "pre-line",
      }} className="mb-3">
        {displayText}
      </p>
      {needsTruncation && (
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "#A8784A",
            letterSpacing: "0.05em",
          }}
        >
          Read the full review
        </span>
      )}
    </div>
  );
}

function ArrowButton({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center transition-colors"
      style={{
        width: "40px",
        height: "40px",
        border: "1px solid #DDD0C0",
        background: "none",
        cursor: "pointer",
        color: "#1A1510",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F8F4EE")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      aria-label={direction === "left" ? "Previous reviews" : "Next reviews"}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {direction === "left"
          ? <path d="M10 3L5 8l5 5" />
          : <path d="M6 3l5 5-5 5" />
        }
      </svg>
    </button>
  );
}

export default function Testimonials() {
  const [pageIndex, setPageIndex] = useState(0);
  const currentPage = REVIEW_PAGES[pageIndex];

  const goNext = () => setPageIndex((i) => (i + 1) % REVIEW_PAGES.length);
  const goPrev = () => setPageIndex((i) => (i - 1 + REVIEW_PAGES.length) % REVIEW_PAGES.length);

  return (
    <section id="testimonials" style={{ backgroundColor: "#EFE8DC" }} className="py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="label justify-center mb-10">Student Stories</div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "#1A1510",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
            className="mb-6"
          >
            What Our Students Say
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            {[...Array(5)].map((_, i) => <Star key={i} />)}
            <span
              style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#7A6E64", marginLeft: "8px" }}
            >
              5.0 · 28 Google Reviews
            </span>
          </div>
        </div>

        {/* Video testimonials */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-24 max-w-2xl mx-auto">
          {VIDEOS.map(({ name, program, url }) => (
            <div key={name} style={{ backgroundColor: "#F8F4EE", width: "100%", borderRadius: "12px", overflow: "hidden" }}>
              <div className="relative" style={{ aspectRatio: "9/16", backgroundColor: "#1A1510" }}>
                <video
                  src={url}
                  controls
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-4 p-6 border-t border-sand">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#EFE8DC" }}
                >
                  <span style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle: "italic",
                    fontSize: "1.125rem",
                    color: "#A8784A",
                  }}>
                    {name[0]}
                  </span>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.9375rem", color: "#1A1510" }}>
                    {name}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#7A6E64", marginTop: "2px" }}>
                    {program}
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Written Reviews with arrow navigation */}
        <div className="mb-24">
          {/* Navigation header */}
          <div className="flex items-center justify-between mb-6">
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6875rem",
              letterSpacing: "0.15em",
              fontWeight: 500,
              color: "#A8784A",
              textTransform: "uppercase",
            }}>
              {currentPage.label} Reviews
            </p>
            <div className="flex gap-2">
              <ArrowButton direction="left" onClick={goPrev} />
              <ArrowButton direction="right" onClick={goNext} />
            </div>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#DDD0C0]" style={{ border: "1px solid #DDD0C0" }}>
            {currentPage.reviews.map(({ name, url, quote, program }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 lg:p-8 transition-colors"
                style={{ backgroundColor: "#EFE8DC", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F8F4EE")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EFE8DC")}
              >
                <span style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  fontSize: "2.5rem",
                  lineHeight: 0.8,
                  color: "#DDD0C0",
                  display: "block",
                  marginBottom: "10px",
                }}>
                  &ldquo;
                </span>
                <TruncatedQuote quote={quote} url={url} />
                <div className="flex items-center gap-3 border-t pt-4 mt-3" style={{ borderColor: "#DDD0C0" }}>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#EFE8DC" }}
                  >
                    <span style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: "0.875rem", color: "#A8784A" }}>
                      {name[0]}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.875rem", color: "#1A1510" }}>
                      {name}
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "#7A6E64", marginTop: "2px" }}>
                      {program}
                    </p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => <Star key={i} />)}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
