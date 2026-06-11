import Container from "@/components/Container";

const items = [
  {
    title: "9+ Years",
    description: "Frontend Engineering Experience",
  },
  {
    title: "20+",
    description: "Enterprise Projects Delivered",
  },
  {
    title: "5+",
    description: "Teams Mentored & Led",
  },
  {
    title: "🏆",
    description: "Best Project Award",
  },
];

export default function Achievements() {
  return (
    <section className="pb-12 md:pb-20">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {items.map((item) => (
            <div
              key={item.description}
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
              <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}