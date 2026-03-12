import Image from "next/image";

export default function TrainingImpressions() {
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

        {/* Feature photo */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: "16/9",
            backgroundColor: "#1A1510",
          }}
        >
          <Image
            src="/group-session-5.JPG"
            alt="Ceremony circle during training"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(20,15,10,0.25) 0%, transparent 30%)" }}
          />
        </div>

      </div>
    </section>
  );
}
