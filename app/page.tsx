import Hero from "@/sections/Hero";
import Achievements from "@/sections/Achievements";
import WhatIDo from "@/sections/WhatIDo";
import Architecture from "@/sections/Architecture";
import CaseStudies from "@/sections/CaseStudies";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <Achievements />

      <SectionDivider />

      <WhatIDo />

      <SectionDivider />

      <Architecture />

      <SectionDivider />

      <CaseStudies />

      <SectionDivider />

      <Experience />

      <SectionDivider />

      <Skills />

      <SectionDivider />

      <Contact />

      <Footer />
    </>
  );
}