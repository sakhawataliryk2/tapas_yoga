import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Trainings from "./components/Trainings";
import TrainingDetails from "./components/TrainingDetails";
import YogaAlliance from "./components/YogaAlliance";
import WhatYoullLearn from "./components/WhatYoullLearn";
import Founder from "./components/Founder";
import TrainingImpressions from "./components/TrainingImpressions";
import Locations from "./components/Locations";
import Pricing from "./components/Pricing";
import WhatsAppCTA from "./components/WhatsAppCTA";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Trainings />
        <TrainingDetails />
        <YogaAlliance />
        <WhatYoullLearn />
        <Founder />
        <TrainingImpressions />
        <Locations />
        <Pricing />
        <WhatsAppCTA />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
