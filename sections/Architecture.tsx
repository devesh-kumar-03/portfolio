import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

import {
  Blocks,
  Palette,
  Accessibility,
  Settings,
} from "lucide-react";

const architectureItems = [
  {
    title: "Micro Frontend Architecture",
    description:
      "Independent deployment strategy using Module Federation for scalable enterprise applications.",
    icon: Blocks,
  },
  {
    title: "Design Systems",
    description:
      "Reusable component libraries ensuring consistency, accessibility and faster delivery.",
    icon: Palette,
  },
  {
    title: "Accessibility Framework",
    description:
      "WCAG 2.1 AA compliance, screen readers, keyboard navigation and semantic UI.",
    icon: Accessibility,
  },
  {
    title: "Frontend Governance",
    description:
      "Code standards, architecture reviews, reusable patterns and engineering best practices.",
    icon: Settings,
  },
];

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="py-12 md:py-20"
    >
      <Container>
        <div
          className="
            rounded-[24px]
            bg-slate-50
            p-5
            md:rounded-[40px]
            md:p-12
          "
        >
          <SectionTitle
            title="Architecture Leadership"
            subtitle="How I Build"
          />

          {/* Cards */}

          <div className="grid gap-5 md:grid-cols-2 md:gap-8">
            {architectureItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    md:p-8
                  "
                >
                  <div className="mb-5 h-[2px] w-16 bg-[#d84f3f]" />

                  <Icon className="mb-5 h-10 w-10 md:h-12 md:w-12" />

                  <h3 className="mb-3 text-xl font-bold md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Architecture Process */}

          <div className="mt-10 border-t border-slate-200 pt-8 md:mt-16 md:pt-10">
            <h3 className="mb-6 text-lg font-bold md:mb-8 md:text-xl">
              Architecture Approach
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h4 className="mb-2 font-semibold">
                  Design
                </h4>

                <p className="text-sm text-slate-600">
                  Product goals translated into scalable architecture.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">
                  Build
                </h4>

                <p className="text-sm text-slate-600">
                  React, Next.js and reusable component systems.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">
                  Scale
                </h4>

                <p className="text-sm text-slate-600">
                  Micro Frontends and team autonomy.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">
                  Govern
                </h4>

                <p className="text-sm text-slate-600">
                  Standards, reviews and engineering excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}