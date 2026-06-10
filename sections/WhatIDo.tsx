import Container from "@/components/Container";

export default function WhatIDo() {
    return (
        <section className="pb-10">
            <Container>
                <h2 className="mb-12 text-4xl font-bold">
                    What I Do
                </h2>

                <div className="grid gap-10 md:grid-cols-3">
                    <div className="pr-8 border-r border-slate-200/60">
                        <h3 className="mb-3 text-xl font-semibold">
                            Frontend Architecture
                        </h3>

                        <p className="text-slate-500">
                            Architecting enterprise-grade frontend applications for Banking, Lending and Fintech domains using React, Next.js, TypeScript and Micro Frontend Architecture. Focused on scalability, maintainability and high-performance user experiences.
                        </p>
                    </div>

                    <div className="pr-8 border-r border-slate-200/60">
                        <h3 className="mb-3 text-xl font-semibold">
                            Technical Leadership
                        </h3>

                        <p className="text-slate-500">
                            Providing technical leadership through architecture planning, code reviews, developer mentoring and engineering best practices. Collaborating closely with product, design and business teams to deliver high-quality solutions.
                        </p>
                    </div>

                    <div className="pr-8 ">
                        <h3 className="mb-3 text-xl font-semibold">
                            Accessibility
                        </h3>

                        <p className="text-slate-500">
                            Implementing accessibility-first development practices with WCAG compliance, semantic markup and assistive technology support. Ensuring applications are usable, performant and accessible to all users.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}