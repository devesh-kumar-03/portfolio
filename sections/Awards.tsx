import Image from "next/image";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function Awards() {
    return (
        <section
            id="awards"
            className="py-12 md:py-20"
        >
            <Container>
                <SectionTitle
                    title="Recognition & Awards"
                    subtitle="Professional Achievements"
                />

                <div
                    className="
            overflow-hidden
            rounded-[24px]
            border
            border-slate-200
            bg-white
            shadow-sm
          "
                >
                    <div
                        className="
              grid
              grid-cols-1
              lg:grid-cols-2
            "
                    >
                        {/* Image Section */}

                        <div className="relative">
                            <Image
                                src="/images/award-2018.JPG"
                                alt="Best Project Of The Year 2018 Award"
                                width={1200}
                                height={900}
                                className="
                  h-[260px]
                  w-full
                  object-cover
                  md:h-[420px]
                  lg:h-full
                "
                            />

                            <div
                                className="
                  absolute
                  left-4
                  top-4
                  rounded-full
                  bg-black/80
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-white
                  backdrop-blur
                  md:text-sm
                "
                            >
                                🏆 Best Project Of The Year
                            </div>
                        </div>

                        {/* Content */}

                        <div
                            className="
                p-6
                md:p-10
                lg:p-12
              "
                        >
                            <span
                                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-amber-100
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-amber-700
                  md:text-sm
                "
                            >
                                🏆 Award Recognition
                            </span>

                            <h3
                                className="
                  mt-5
                  text-3xl
                  font-bold
                  leading-tight
                  md:text-5xl
                "
                            >
                                Best Project Of The Year 2018
                            </h3>

                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-2xl  p-2">
                                    <p className="mb-1 text-xs uppercase tracking-wide text-slate-500">
                                        Awarded By
                                    </p>

                                    <p className="">
                                        Espire Infolabs
                                    </p>
                                </div>

                                <div className="rounded-2xl  p-2">
                                    <p className="mb-1 text-xs uppercase tracking-wide text-slate-500">
                                        Project
                                    </p>

                                    <p className="">
                                        ACU Sitecore 9.x Implementation
                                    </p>
                                </div>

                                <div className="rounded-2xl  p-2">
                                    <p className="mb-1 text-xs uppercase tracking-wide text-slate-500">
                                        Client
                                    </p>

                                    <p className="">
                                        Australian Catholic University
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <a
                                    href="https://www.acu.edu.au/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
      flex
      items-center
      justify-between
      rounded-2xl
      border
      border-slate-200
      p-4
      transition-all
      hover:border-[#d84f3f]
      hover:bg-[#fff8f5]
    "
                                >
                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-500">
                                            Client Website
                                        </p>

                                        <p className="mt-1 font-semibold text-[#d84f3f]">
                                            Australian Catholic University
                                        </p>
                                    </div>

                                    <span className="font-semibold text-[#d84f3f]">
                                        Open Site →
                                    </span>
                                </a>
                            </div>



                            <p
                                className="
                  mt-6
                  leading-relaxed
                  text-slate-600
                "
                            >
                                Recognized for contribution to the
                                ACU Sitecore 9.x implementation project,
                                awarded as part of the Best Project Of The
                                Year team for successful enterprise delivery.
                            </p>

                            <div
                                className="
                  mt-8
                  grid
                  gap-3
                  sm:grid-cols-2
                "
                            >
                                <div className="rounded-2xl bg-slate-50 ">
                                    ✓ Sitecore 9.x Enterprise Platform
                                </div>

                                <div className="rounded-2xl bg-slate-50 ">
                                    ✓ Best Project Of The Year
                                </div>

                                <div className="rounded-2xl bg-slate-50 ">
                                    ✓ Outstanding Contribution
                                </div>

                                <div className="rounded-2xl bg-slate-50 ">
                                    ✓ Enterprise Delivery Excellence
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}