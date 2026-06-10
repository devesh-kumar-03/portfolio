import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const experiences = [
  {
    year: "2020 - Present",
    title: "Technical Lead",
    company: "Finova Technologies",
    impact:
      "Led banking and lending platforms, improving performance by 40% and increasing component reuse by 60%.",
  },
  {
    year: "2017 - 2020",
    title: "Senior UI Developer",
    company: "Espire Infolabs",
    impact:
      "Built enterprise applications and large-scale university platforms serving thousands of users.",
  },
  {
    year: "2015 - 2017",
    title: "Senior HTML Developer",
    company: "Quasar Media",
    impact:
      "Established frontend standards and responsive architecture across multiple client projects.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28"
    >
      <Container>
        <SectionTitle
          title="Professional Experience"
          subtitle="9+ Years of Frontend Engineering & Technical Leadership"
        />

        <div className="relative border-l border-slate-300 ml-4">
          {experiences.map((item) => (
            <div
              key={item.year}
              className="relative mb-12 ml-8"
            >
              <div
                className="
    absolute
    -left-[42px]
    top-2
    h-4
    w-4
    rounded-full
    bg-slate-800
    ring-4
    ring-slate-200
  "
              />

              <p className="mb-2 text-sm font-medium text-slate-500">
                {item.year}
              </p>

              <div className="rounded-3xl border border-slate-300 bg-white/5 p-6">
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-slate-600 mb-4">
                  {item.company}
                </p>

                <p className="text-slate-600">
                  {item.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}