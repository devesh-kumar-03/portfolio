import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const items = [
    {
        title: "Frontend Architecture",
        description:
            "Architecting enterprise-grade frontend applications for Banking, Lending and Fintech domains using React, Next.js, TypeScript and Micro Frontend Architecture. Focused on scalability, maintainability and high-performance user experiences.",
    },
    {
        title: "Technical Leadership",
        description:
            "Providing technical leadership through architecture planning, code reviews, developer mentoring and engineering best practices. Collaborating closely with product, design and business teams to deliver high-quality solutions.",
    },
    {
        title: "Accessibility",
        description:
            "Implementing accessibility-first development practices with WCAG compliance, semantic markup and assistive technology support. Ensuring applications are usable, performant and accessible to all users.",
    },
];

export default function WhatIDo() {
    return (
        <section className="py-12 md:py-20">
            <Container>
                <SectionTitle
                    title="What I Do"
                    subtitle="Core Expertise"
                />

                <div className="grid gap-5 md:grid-cols-3 md:gap-8">
                    {items.map((item) => (
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

                            <h3 className="mb-4 text-xl font-bold">
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