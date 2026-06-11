import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const leadershipItems = [
    {
        title: "Architecture Strategy",
        description:
            "Defining scalable frontend architecture, reusable patterns and long-term technical direction.",
    },
    {
        title: "Developer Mentoring",
        description:
            "Guiding engineers through code reviews, best practices and technical growth.",
    },
    {
        title: "Engineering Standards",
        description:
            "Establishing coding standards, quality gates and maintainable development workflows.",
    },
    {
        title: "Accessibility Leadership",
        description:
            "Driving WCAG compliance, semantic HTML and inclusive user experiences.",
    },
    {
        title: "Cross-Team Collaboration",
        description:
            "Working closely with Product, Design, QA and Business stakeholders to deliver successful outcomes.",
    },
    {
        title: "Technical Governance",
        description:
            "Leading architecture reviews, technical decisions and frontend engineering excellence initiatives.",
    },
];

export default function Leadership() {
    return (
        <section
            id="leadership"
            className="py-12 md:py-20"
        >
            <Container>
                <SectionTitle
                    title="Technical Leadership"
                    subtitle="Beyond Coding"
                />

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {leadershipItems.map((item) => (
                        <div
                            key={item.title}
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

                            <h3 className="mb-4 text-lg font-bold md:text-xl">
                                {item.title}
                            </h3>

                            <p className="leading-relaxed text-slate-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}