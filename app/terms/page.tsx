import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | The Tapas Yoga School",
  description: "Terms and Conditions for PT East West Yoga Teacher Training Programs.",
};

export default function TermsPage() {
  const heading: React.CSSProperties = {
    fontFamily: "var(--font-heading)",
    color: "#1A1510",
    fontWeight: 400,
  };

  const body: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "0.9375rem",
    lineHeight: 1.8,
    color: "#4A3F35",
    letterSpacing: "0.01em",
  };

  const sectionTitle: React.CSSProperties = {
    ...body,
    fontWeight: 600,
    fontSize: "1rem",
    color: "#1A1510",
    marginBottom: "8px",
  };

  return (
    <>
      <main style={{ backgroundColor: "#FAF7F2" }} className="min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-20 lg:py-28">
          <h1
            style={{ ...heading, fontSize: "clamp(2rem, 4vw, 2.75rem)", letterSpacing: "-0.01em", marginBottom: "8px" }}
          >
            Terms &amp; Conditions
          </h1>
          <p style={{ ...body, color: "#7A6E64", marginBottom: "48px" }}>
            PT East West Yoga &ndash; Yoga Teacher Training Programs
          </p>

          <p style={{ ...body, marginBottom: "40px" }}>
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern participation in any yoga teacher training
            programs (&ldquo;Training&rdquo;) offered by PT East West Yoga (&ldquo;East West Yoga,&rdquo;
            &ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;). By enrolling in a Training, you
            (&ldquo;student,&rdquo; &ldquo;participant,&rdquo; or &ldquo;you&rdquo;) agree to abide by these Terms.
          </p>

          <div className="space-y-10">
            {/* 1 */}
            <section>
              <h2 style={sectionTitle}>1. Eligibility</h2>
              <ul style={body} className="list-disc pl-5 space-y-2">
                <li>Participants must be at least 18 years old.</li>
                <li>
                  By enrolling, you confirm that you are physically, mentally, and emotionally capable of participating
                  in an intensive yoga training program.
                </li>
              </ul>
            </section>

            {/* 2 */}
            <section>
              <h2 style={sectionTitle}>2. Enrollment &amp; Payments</h2>
              <ul style={body} className="list-disc pl-5 space-y-2">
                <li>A deposit is required to secure your spot.</li>
                <li>Full payment must be received by the date specified in your enrollment confirmation.</li>
                <li>Payment plans may be available and must be agreed upon in writing.</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 style={sectionTitle}>3. Refund &amp; Cancellation Policy</h2>
              <ul style={body} className="list-disc pl-5 space-y-2">
                <li>
                  Deposits become non-refundable seven (7) days after payment. However, deposits may be transferred to a
                  different training if the request is submitted no later than thirty (30) days before the training start
                  date.
                </li>
                <li>
                  Cancellations made more than 60 days before the start date: eligible for a refund of tuition paid,
                  minus the deposit.
                </li>
                <li>
                  Cancellations made 30&ndash;60 days before the start date: eligible for a 50% refund of tuition paid,
                  minus the deposit.
                </li>
                <li>Cancellations made less than 30 days before the start date: no refunds.</li>
                <li>
                  Once the Training has begun, no refunds will be granted under any circumstances, including illness,
                  travel disruption, or withdrawal.
                </li>
                <li>
                  If East West Yoga cancels or reschedules the Training, students may choose a transfer to a future
                  program or a full refund of tuition paid.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 style={sectionTitle}>4. Attendance &amp; Certification Requirements</h2>
              <ul style={body} className="list-disc pl-5 space-y-2">
                <li>
                  Students must attend 100% of scheduled sessions (lectures, practices, workshops, and assessments) to
                  receive certification.
                </li>
                <li>
                  Absences may be excused at the discretion of the lead trainer and may require makeup work at an
                  additional cost.
                </li>
                <li>
                  Students who do not meet attendance, participation, or assessment requirements will not be certified,
                  regardless of payment status.
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 style={sectionTitle}>5. Conduct &amp; Expectations</h2>
              <ul style={body} className="list-disc pl-5 space-y-2">
                <li>
                  Students are expected to uphold the ethical standards of the yoga community, including respect,
                  inclusivity, and professionalism.
                </li>
                <li>
                  Use of drugs, alcohol, or disruptive behavior during the Training is grounds for dismissal without
                  refund.
                </li>
                <li>
                  East West Yoga reserves the right to dismiss any student whose behavior is deemed unsafe,
                  inappropriate, or harmful to the community.
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 style={sectionTitle}>6. Health &amp; Liability</h2>
              <ul style={body} className="list-disc pl-5 space-y-2">
                <li>
                  You acknowledge that yoga involves physical activity that may present risks, including injury.
                </li>
                <li>
                  You affirm that you have consulted with a medical professional regarding your ability to safely
                  participate.
                </li>
                <li>
                  You release East West Yoga, its trainers, and affiliates from liability for any injury, illness, or
                  damages sustained during or as a result of the Training.
                </li>
                <li>
                  You are responsible for your own well-being and agree to modify or decline practices as needed for your
                  safety.
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 style={sectionTitle}>7. Travel, Accommodation &amp; Logistics</h2>
              <ul style={body} className="list-disc pl-5 space-y-2">
                <li>
                  Students are responsible for their own travel arrangements, visas, insurance, and any accommodation or
                  meals not explicitly included in the Training package.
                </li>
                <li>
                  East West Yoga is not liable for travel delays, natural disasters, pandemics, or other events outside
                  its control.
                </li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 style={sectionTitle}>8. Intellectual Property</h2>
              <ul style={body} className="list-disc pl-5 space-y-2">
                <li>
                  Training manuals, recordings, and materials provided by East West Yoga are for personal study only.
                </li>
                <li>Reproduction, distribution, or commercial use without written consent is prohibited.</li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2 style={sectionTitle}>9. Media Release</h2>
              <ul style={body} className="list-disc pl-5 space-y-2">
                <li>
                  By participating, you consent to photographs, video, or audio recordings being taken and used by East
                  West Yoga for educational or promotional purposes.
                </li>
                <li>
                  If you do not wish to be recorded, you must notify us in writing before the start of the Training.
                </li>
              </ul>
            </section>

            {/* 10 */}
            <section>
              <h2 style={sectionTitle}>10. Force Majeure &amp; COVID-19 Policy</h2>
              <ul style={body} className="list-disc pl-5 space-y-2">
                <li>
                  East West Yoga shall not be liable or deemed in breach of these Terms for any delay, cancellation, or
                  modification of the Training due to events beyond its reasonable control, including but not limited to
                  natural disasters, acts of God, war, civil unrest, labor disputes, government restrictions, pandemics,
                  public health emergencies, or transportation interruptions.
                </li>
                <li>
                  In such cases, students will be offered a transfer to a future training date or location at no
                  additional cost.
                </li>
                <li>
                  Tuition payments will not be refunded but may be applied as a credit toward a rescheduled program.
                </li>
                <li>
                  Participants are strongly encouraged to obtain comprehensive travel insurance that covers trip
                  cancellations, medical emergencies, and COVID-19&ndash;related disruptions.
                </li>
                <li>
                  If government regulations or health guidelines (including COVID-19 testing, vaccination, or quarantine
                  requirements) affect participation, it is the student&rsquo;s responsibility to comply with all
                  applicable laws and regulations.
                </li>
              </ul>
            </section>

            {/* 11 */}
            <section>
              <h2 style={sectionTitle}>11. Social Media &amp; Unauthorized Content Sharing</h2>
              <ul style={body} className="list-disc pl-5 space-y-2">
                <li>
                  Students agree not to post, publish, or distribute training materials, manuals, or proprietary content
                  from PT East West Yoga on social media, websites, or other platforms without prior written consent.
                </li>
                <li>
                  Sharing short, personal reflections or non-sensitive photos is welcome, but content that misrepresents
                  East West Yoga, its teachers, or fellow students is strictly prohibited.
                </li>
                <li>
                  Any posts, videos, or commentary that disparage, defame, or otherwise harm the reputation of East West
                  Yoga, its teachers, or participants are grounds for immediate dismissal from the program without
                  refund.
                </li>
                <li>
                  Students are responsible for any posts made by themselves or by third parties acting on their behalf
                  (such as social media managers, influencers, or family/friends).
                </li>
                <li>
                  East West Yoga reserves the right to request removal of any unauthorized or harmful content, and
                  violation of this clause may result in legal action.
                </li>
              </ul>
            </section>

            {/* 12 */}
            <section>
              <h2 style={sectionTitle}>12. Changes to Terms &amp; Conditions</h2>
              <ul style={body} className="list-disc pl-5 space-y-2">
                <li>
                  PT East West Yoga reserves the right to update, amend, or modify these Terms and Conditions at any
                  time without prior notice.
                </li>
                <li>Any changes will be effective immediately upon posting to our website.</li>
                <li>
                  It is the responsibility of the student to review the Terms and Conditions periodically to ensure
                  awareness of any updates.
                </li>
                <li>
                  Continued participation in a Training after changes are posted constitutes acceptance of the revised
                  Terms and Conditions.
                </li>
              </ul>
            </section>

            {/* 13 */}
            <section>
              <h2 style={sectionTitle}>13. Governing Law</h2>
              <ul style={body} className="list-disc pl-5 space-y-2">
                <li>These Terms are governed by the laws of Indonesia.</li>
                <li>
                  Any disputes will be resolved in the jurisdiction where East West Yoga is registered (Bali, Indonesia).
                </li>
              </ul>
            </section>

            {/* 14 */}
            <section>
              <h2 style={sectionTitle}>14. Acceptance of Terms</h2>
              <p style={body}>
                By submitting payment and enrolling in a Training, you acknowledge that you have read, understood, and
                agreed to these Terms and Conditions.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
