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
    <section className="py-28">
      <Container>
        <div className="rounded-[40px] bg-slate-50 p-12">
          <SectionTitle
            title="Architecture Leadership"
            subtitle="How I Build"
          />

          <div className="grid gap-8 md:grid-cols-2">
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
p-8
transition-all
duration-500
hover:-translate-y-2
hover:shadow-lg
"
                >
                  {/* Gradient Line */}

                  <div className="mb-6 h-[2px] w-16 bg-[#d84f3f]" />

                  {/* Icon */}

                  <div className="mb-6">
                    <Icon className="h-12 w-12 text-black-400" />
                  </div>

                  {/* Title */}

                  <h3 className="mb-4 text-2xl font-bold">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}