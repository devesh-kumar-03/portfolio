import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

import {
  Landmark,
  Wallet,
  Building2,
  GraduationCap,
} from "lucide-react";

const domains = [
  {
    title: "Banking",
    icon: Landmark,
    description:
      "Loan Origination, Customer Portals and Banking Workflows.",
  },
  {
    title: "Fintech",
    icon: Wallet,
    description:
      "Payments, Analytics and Lending Platforms.",
  },
  {
    title: "Mortgage",
    icon: Building2,
    description:
      "Mortgage Applications and Approval Systems.",
  },
  {
    title: "Education",
    icon: GraduationCap,
    description:
      "University Platforms and Student Portals.",
  },
];

export default function Stats() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Trusted Domains"
          subtitle="Industry Experience"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {domains.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
              >
                <Icon className="mb-4 h-10 w-10 text-black-400" />

                <h3 className="mb-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}