import Image from "next/image";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function Awards() {
    return (
        <section
            id="awards"
            className="py-20"
        >
            <Container>
                <SectionTitle
                    title="Recognition & Awards"
                    subtitle="Professional Achievements"
                />

                <div
                    className="
            grid
            gap-10
            overflow-hidden
            rounded-[40px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-sm
            lg:grid-cols-2
          "
                >
                    {/* Image */}

                    <div className="relative">
                        <Image
                            src="/images/award-2018.JPG"
                            alt="Best Project Of The Year 2018 Award"
                            width={800}
                            height={600}
                            className="
                h-full
                w-full
                rounded-[24px]
                object-cover
              "
                        />
                    </div>

                    {/* Content */}

                    <div className="flex flex-col justify-center">
                        <span
                            className="
                mb-4
                inline-flex
                w-fit
                rounded-full
                bg-amber-100
                px-4
                py-2
                text-sm
                font-semibold
                text-amber-700
              "
                        >
                            🏆 Award Recognition
                        </span>

                        <h3 className="mb-4 text-4xl font-bold">
                            Best Project Of The Year 2018
                        </h3>

                        <p className="mb-6 text-lg font-medium text-[#d84f3f]">
                            Espire Infolabs
                        </p>

                        <p className="mb-6 leading-relaxed text-slate-600">
                            Recognized for contribution to the
                            ACU Sitecore 9.x implementation project,
                            awarded as part of the Best Project Of The
                            Year team for successful enterprise delivery.
                        </p>

                        <div className="space-y-4">
                            <div
                                className="
                  rounded-2xl
                  bg-slate-50
                  p-4
                "
                            >
                                ✓ Enterprise Sitecore 9.x Platform
                            </div>

                            <div
                                className="
                  rounded-2xl
                  bg-slate-50
                  p-4
                "
                            >
                                ✓ Best Project Of The Year Award
                            </div>

                            <div
                                className="
                  rounded-2xl
                  bg-slate-50
                  p-4
                "
                            >
                                ✓ Recognized For Outstanding Contribution
                            </div>

                            <div
                                className="
                  rounded-2xl
                  bg-slate-50
                  p-4
                "
                            >
                                ✓ Enterprise Project Delivery Excellence
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}