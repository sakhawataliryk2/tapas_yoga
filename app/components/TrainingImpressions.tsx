import Image from "next/image";

const CLIPS = [
  {
    label: "Training clip 2",
    url: "https://video.gumlet.io/67f02e049eef3d88099c9644/698c44af5e94c7f61bedbb8a/download.mp4",
  },
  {
    label: "Training clip 3",
    url: "https://video.gumlet.io/67f02e049eef3d88099c9644/698c44afcfb6ef9b9fdb96af/download.mp4",
  },
];

export default function TrainingImpressions() {
  return (
    <section id="impressions" style={{ backgroundColor: "#EFE8DC" }} className="py-32 lg:py-44">
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

        {/* Mixed grid: photo left, 2 videos right */}
        <div className="flex flex-col lg:flex-row gap-3">

          {/* Left — feature photo */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              aspectRatio: "3/4",
              backgroundColor: "#1A1510",
              flex: "3",
            }}
          >
            <Image
              src="/group-session-5.JPG"
              alt="Ceremony circle during training"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(20,15,10,0.25) 0%, transparent 30%)" }}
            />
          </div>

          {/* Right column — two video clips stacked */}
          <div
            className="flex flex-col gap-3"
            style={{ flex: "2" }}
          >
            {CLIPS.map(({ label, url }) => (
              <div
                key={label}
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "4/3",
                  backgroundColor: "#1A1510",
                  flex: 1,
                }}
              >
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

      </div>
    </section>
  );
}
