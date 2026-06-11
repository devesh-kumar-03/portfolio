import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const skillGroups = [
  {
    title: "Frameworks & Libraries",
    skills: [
      "React.js 18",
      "Next.js 13/14",
      "Vue.js 3",
      "React Router",
      "Micro Frontends",
      "Module Federation",
      "Single-SPA",
    ],
  },
  {
    title: "Languages",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript 5",
      "HTML5",
    ],
  },
  {
    title: "State Management",
    skills: [
      "Redux",
      "Zustand",
      "Vuex",
      "Pinia",
      "Context API",
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "SCSS/SASS",
      "CSS3",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "CSS Architecture",
    ],
  },
  {
    title: "Testing",
    skills: [
      "React Testing Library",
      "Jest",
      "Vue Test Utils",
    ],
  },
  {
    title: "Build Tools & Engineering",
    skills: [
      "Webpack",
      "Vite",
      "NPM",
      "Git",
      "CI/CD",
      "Code Reviews",
      "Technical Mentoring",
    ],
  },
  {
    title: "APIs & Integrations",
    skills: [
      "REST APIs",
      "Stripe",
      "Chrome DevTools",
    ],
  },
  {
    title: "Accessibility",
    skills: [
      "WCAG 2.1",
      "WAI-ARIA",
      "Semantic HTML",
      "Keyboard Navigation",
      "Screen Readers",
      "Lighthouse Audits",
      "Color Contrast Testing",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 md:py-20"
    >
      <Container>
        <SectionTitle
          title="Technical Expertise"
          subtitle="Frontend Architecture & Engineering"
        />

        <div className="grid gap-5 md:gap-8 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
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
                hover:shadow-lg
                md:rounded-[32px]
                md:p-8
              "
            >
              <div className="mb-5 h-[2px] w-16 bg-[#d84f3f]" />

              <h3 className="mb-5 text-xl font-bold md:text-2xl">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      bg-slate-100
                      px-3
                      py-2
                      text-xs
                      font-medium
                      text-slate-700
                      transition-all
                      duration-200
                      hover:bg-black
                      hover:text-white
                      md:px-4
                      md:text-sm
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