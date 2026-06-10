import Container from "@/components/Container";

const items = [
  {
    title: "9+ Years",
    description: "Frontend Engineering Experience",
  },
  {
    title: "Technical Lead",
    description: "Banking & Fintech Platforms",
  },
  {
    title: "Micro Frontend",
    description: "Enterprise Architecture",
  },
  {
    title: "Accessibility",
    description: "WCAG 2.1 Compliance",
  },
];

export default function Achievements() {
  return (
    <section className="pb-28">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title}>
              <h3 className="mb-2 text-3xl font-bold">
                {item.title}
              </h3>

              <p className="text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}