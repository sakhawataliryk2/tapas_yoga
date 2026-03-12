import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutIntro from "./components/AboutIntro";
import Trainings from "./components/Trainings";
import YogaAlliance from "./components/YogaAlliance";
import WhatYoullLearn from "./components/WhatYoullLearn";
import Founder from "./components/Founder";
import TrainingDetails from "./components/TrainingDetails";
import TrainingImpressions from "./components/TrainingImpressions";
import Locations from "./components/Locations";
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
        <AboutIntro />
        <YogaAlliance />
        <Founder />
        <Trainings />
        <TrainingDetails />
        <WhatYoullLearn />
        <Testimonials />
        <TrainingImpressions />
        <Locations />
        <WhatsAppCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
