"use client";

import { useState } from "react";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CaseStudyModal from "@/components/CaseStudyModal";

const studies = [
  {
    number: "01",
    title: "Loan Origination Platform",
    role: "Technical Lead",

    description:
      "Built scalable loan origination workflows for enterprise banking applications using React, Next.js and TypeScript.",

    challenge:
      "Legacy loan workflows were fragmented, resulting in manual effort, slower processing and inconsistent user experiences.",

    solution:
      "Built a scalable React and Next.js platform using reusable components, TypeScript and accessibility-first architecture. Improved maintainability and streamlined workflows.",

    results: [
      "40% Faster Processing",
      "Improved User Experience",
      "Reduced Manual Effort",
      "Better Maintainability",
    ],

    impactValue: "40%",
    impactLabel: "Faster Processing",
  },

  {
    number: "02",
    title: "Mortgage Management Portal",
    role: "Frontend Architect",

    description:
      "Designed a Micro Frontend architecture enabling independent deployments and improved team scalability.",

    challenge:
      "Multiple teams were blocked by tightly coupled frontend deployments and release dependencies.",

    solution:
      "Designed a Micro Frontend architecture using Module Federation and established shared design systems for independent deployments.",

    results: [
      "100% Independent Deployments",
      "Faster Releases",
      "Improved Team Scalability",
      "Reduced Deployment Dependency",
    ],

    impactValue: "100%",
    impactLabel: "Independent Deployments",
  },

  {
    number: "03",
    title: "Multi-Tenant University Platform",
    role: "Senior UI Developer",

    description:
      "Built a reusable university platform supporting multiple institutions through configurable themes, component-driven architecture and accessibility-first development.",

    challenge:
      "Multiple universities required unique branding, layouts and user experiences while sharing the same core application. The platform also needed to meet accessibility requirements and maintain a consistent user experience across institutions.",

    solution:
      "Designed a scalable frontend architecture using reusable components, modular SCSS and configuration-driven theming. Implemented component-level theme management allowing multiple universities to operate from a single codebase while maintaining unique branding. Applied WCAG guidelines, semantic HTML, keyboard navigation and screen-reader support to ensure accessibility compliance across the platform.",

    results: [
      "Single Codebase For Multiple Universities",
      "Multi-Theme Support",
      "Reusable Component Architecture",
      "WCAG Compliance",
      "Improved Accessibility",
      "Reduced Maintenance Effort",
      "Faster Client Onboarding",
    ],

    impactValue: "WCAG",
    impactLabel: "Accessible Multi-Tenant Platform",
  },
];

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<
    (typeof studies)[number] | null
  >(null);

  return (
    <>
      <section
        id="case-studies"
        className="py-12 md:py-20"
      >
        <Container>
          <SectionTitle
            title="Featured Case Studies"
            subtitle="Selected Work"
          />

          <div className="grid gap-5 md:gap-8 lg:grid-cols-3">
            {studies.map((study) => (
              <div
                key={study.title}
                className="
                  rounded-[24px]
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  md:rounded-[32px]
                  md:p-8
                "
              >
                {/* Number */}

                <p className="mb-4 text-4xl font-bold text-slate-200 md:mb-6 md:text-5xl">
                  {study.number}
                </p>

                {/* Role */}

                <p className="mb-3 text-sm font-medium text-slate-500">
                  {study.role}
                </p>

                {/* Title */}

                <h3 className="mb-4 text-2xl font-bold leading-tight md:mb-5 md:text-3xl">
                  {study.title}
                </h3>

                {/* Description */}

                <p className="leading-relaxed text-slate-600">
                  {study.description}
                </p>

                {/* View Details */}

                <button
                  onClick={() => setSelectedStudy(study)}
                  className="
                    mt-6
                    font-semibold
                    text-[#d84f3f]
                    transition
                    hover:underline
                  "
                >
                  View Details →
                </button>

                {/* Impact */}

                <div className="mt-6 border-t border-slate-100 pt-5 md:mt-10 md:pt-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Impact
                  </p>

                  <h4 className="text-3xl font-bold md:text-4xl">
                    {study.impactValue}
                  </h4>

                  <p className="mt-2 text-slate-500">
                    {study.impactLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CaseStudyModal
        isOpen={selectedStudy !== null}
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
      />
    </>
  );
}