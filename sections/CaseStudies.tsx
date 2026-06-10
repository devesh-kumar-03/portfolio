import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const studies = [
  {
    number: "01",
    title: "Loan Origination Platform",
    role: "Technical Lead",
    description:
      "Built scalable loan origination workflows for enterprise banking applications using React, Next.js and TypeScript.",
    impactValue: "40%",
    impactLabel: "Faster Processing",
  },
  {
    number: "02",
    title: "Mortgage Management Portal",
    role: "Frontend Architect",
    description:
      "Designed a Micro Frontend architecture enabling independent deployments and improved team scalability.",
    impactValue: "100%",
    impactLabel: "Independent Deployments",
  },
  {
    number: "03",
    title: "University Platform",
    role: "Senior UI Developer",
    description:
      "Delivered accessibility-first university platforms with improved SEO, usability and WCAG compliance.",
    impactValue: "WCAG",
    impactLabel: "Accessibility Compliant",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-28"
    >
      <Container>
        <SectionTitle
          title="Featured Case Studies"
          subtitle="Selected Work"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {studies.map((study) => (
            <div
              key={study.title}
              className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Number */}

              <p className="mb-6 text-5xl font-bold text-slate-200">
                {study.number}
              </p>

              {/* Role */}

              <p className="mb-3 text-sm font-medium text-slate-500">
                {study.role}
              </p>

              {/* Title */}

              <h3 className="mb-5 text-3xl font-bold leading-tight">
                {study.title}
              </h3>

              {/* Description */}

              <p className="leading-relaxed text-slate-600">
                {study.description}
              </p>

              {/* Impact */}

              <div className="mt-10 border-t border-slate-100 pt-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Impact
                </p>

                <h4 className="text-4xl font-bold">
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
  );
}