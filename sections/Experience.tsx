import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const experiences = [
  {
    year: "2020 - Present",
    title: "Technical Lead",
    company: "Finova Technologies",
    domain: "Banking • Fintech • Mortgage",
    impact:
      "Leading frontend architecture, mentoring engineers, driving code quality standards and delivering enterprise banking and lending platforms.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Micro Frontends",
      "Accessibility",
    ],
  },
  {
    year: "2017 - 2020",
    title: "Senior UI Developer",
    company: "Espire Infolabs",
    domain: "Education • Enterprise Applications",
    impact:
      "Delivered large-scale enterprise and education platforms with strong focus on performance, accessibility and scalability.",
    technologies: [
      "React",
      "JavaScript",
      "SCSS",
      "Bootstrap",
      "WCAG",
    ],
  },
  {
    year: "2015 - 2017",
    title: "Senior HTML Developer",
    company: "Quasar Media",
    domain: "Client Projects • Responsive Web Applications",
    impact:
      "Built responsive web applications and established reusable frontend standards across multiple client projects.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
    ],
  },
];
export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28"
    >
      <Container>
        <SectionTitle
          title="Professional Experience"
          subtitle="9+ Years of Frontend Engineering & Technical Leadership"
        />

        <div className="relative border-l border-slate-300 ml-4">
          {experiences.map((item) => (
            <div
              key={item.year}
              className="relative mb-12 ml-8"
            >
              <div
                className="
    absolute
    -left-[42px]
    top-2
    h-4
    w-4
    rounded-full
    bg-slate-800
    ring-4
    ring-slate-200
  "
              />

              <p className="mb-2 text-sm font-medium text-slate-500">
                {item.year}
              </p>

              <div className="rounded-3xl border border-slate-300 bg-white/5 p-6">
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-slate-600 mb-4">
                  {item.company}
                </p>

                <p className="text-slate-600">
                  {item.impact}
                </p>

                <p className="mt-4 text-sm font-medium text-[#d84f3f]">
                  {item.domain}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
      rounded-full
      bg-slate-100
      px-3
      py-1
      text-sm
      font-medium
      text-slate-700
      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>


            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}