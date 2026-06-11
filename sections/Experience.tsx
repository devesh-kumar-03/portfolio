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
      className="py-12 md:py-20"
    >
      <Container>
        <SectionTitle
          title="Professional Experience"
          subtitle="9+ Years of Frontend Engineering & Technical Leadership"
        />

        <div className="relative ml-2 border-l border-slate-300 md:ml-4">
          {experiences.map((item) => (
            <div
              key={item.year}
              className="relative mb-8 ml-5 md:mb-12 md:ml-8"
            >
              {/* Timeline Dot */}

              <div
                className="
                  absolute
                  -left-[27px]
                  top-2
                  h-3
                  w-3
                  rounded-full
                  bg-slate-800
                  ring-4
                  ring-slate-200
                  md:-left-[42px]
                  md:h-4
                  md:w-4
                "
              />

              {/* Year */}

              <p className="mb-2 text-xs font-medium text-slate-500 md:text-sm">
                {item.year}
              </p>

              {/* Card */}

              <div
                className="
                  rounded-[24px]
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:shadow-lg
                  md:rounded-[32px]
                  md:p-6
                "
              >
                <h3 className="text-xl font-bold md:text-2xl">
                  {item.title}
                </h3>

                <p className="mb-4 text-slate-600">
                  {item.company}
                </p>

                <p className="leading-relaxed text-slate-600">
                  {item.impact}
                </p>

                <p className="mt-4 text-sm font-medium text-[#d84f3f]">
                  {item.domain}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        bg-slate-100
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-slate-700
                        md:text-sm
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