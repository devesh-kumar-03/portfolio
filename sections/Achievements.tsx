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
    title: "Millions",
    description: "End Users Served",
  },
];

export default function Achievements() {
  return (
    <section className="pb-28">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="
rounded-3xl
border
border-slate-200
bg-white
p-8
shadow-sm
transition-all
duration-300
hover:-translate-y-2
hover:shadow-xl
">
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