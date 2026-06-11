import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const testimonials = [
    {
        quote:
            "Devesh consistently delivered scalable frontend solutions while mentoring engineers and improving overall code quality.",
        author: "Engineering Manager",
    },
    {
        quote:
            "Strong architectural thinking combined with deep React expertise. A dependable technical leader.",
        author: "Product Leadership",
    },
    {
        quote:
            "Played a key role in driving accessibility and frontend standards across multiple enterprise initiatives.",
        author: "Delivery Lead",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="py-28"
        >
            <Container>
                <SectionTitle
                    title="Leadership Highlights"
                    subtitle="What People Say"
                />

                <div className="grid gap-8 lg:grid-cols-3">
                    {testimonials.map((item) => (
                        <div
                            key={item.quote}
                            className="rounded-[32px] border border-slate-200 p-8"
                        >
                            <p className="mb-6 text-lg leading-relaxed text-slate-600">
                                "{item.quote}"
                            </p>

                            <p className="font-semibold">
                                {item.author}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}