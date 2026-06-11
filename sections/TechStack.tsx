import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const tech = [
    "React",
    "Next.js",
    "TypeScript",
    "Redux",
    "Zustand",
    "Module Federation",
    "Micro Frontends",
    "Accessibility",
    "Tailwind",
    "Jest",
    "React Testing Library",
    "AWS",
];

export default function TechStack() {
    return (
        <section
            id="tech-stack"
            className="py-28"
        >
            <Container>
                <SectionTitle
                    title="Technology Ecosystem"
                    subtitle="Tools & Platforms"
                />

                <div className="flex flex-wrap gap-4">
                    {tech.map((item) => (
                        <span
                            key={item}
                            className="
                rounded-full
                border
                border-slate-200
                px-6
                py-3
                font-medium
              "
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </Container>
        </section>
    );
}
