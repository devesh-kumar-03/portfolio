import Script from "next/script";

import Hero from "@/sections/Hero";
import Achievements from "@/sections/Achievements";
import WhatIDo from "@/sections/WhatIDo";
import Awards from "@/sections/Awards";
import Architecture from "@/sections/Architecture";
import CaseStudies from "@/sections/CaseStudies";
import Experience from "@/sections/Experience";
import Leadership from "@/sections/Leadership";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Devesh Kumar",
            jobTitle: "Frontend Architect",
            url: "https://portfolio.deveshkumar.workers.dev",
            sameAs: [
              "https://www.linkedin.com/in/devesh-kumar-developer/",
            ],
          }),
        }}
      />

      <Hero />

      <Achievements />

      <SectionDivider />

      <WhatIDo />

      <SectionDivider />

      <Awards />

      <SectionDivider />

      <Architecture />

      <SectionDivider />

      <CaseStudies />

      <SectionDivider />

      <Experience />

      <SectionDivider />

      <Leadership />

      <SectionDivider />

      <Skills />

      <SectionDivider />

      <Contact />

      <Footer />
    </>
  );
}