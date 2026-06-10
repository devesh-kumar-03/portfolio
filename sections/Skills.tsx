import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "Zustand",
      "Vue.js",
    ],
  },
  {
    title: "Architecture",
    skills: [
      "Micro Frontend",
      "Module Federation",
      "Design Systems",
      "Reusable Components",
    ],
  },
  {
    title: "Quality & Performance",
    skills: [
      "Accessibility",
      "WCAG",
      "SEO",
      "Performance Optimization",
      "Tailwind CSS",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28"
    >
      <Container>
        <SectionTitle
          title="Core Expertise"
          subtitle="Skills"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
              "
            >
              <h3 className="mb-6 text-2xl font-bold">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      px-4
                      py-2
                      text-sm
                      text-slate-700
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}