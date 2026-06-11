import Image from "next/image";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-28">
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-orange-100 blur-3xl md:h-[500px] md:w-[500px]" />

        <div className="absolute right-0 top-20 h-[250px] w-[250px] rounded-full bg-blue-100 blur-3xl md:h-[400px] md:w-[400px]" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT */}

          <div className="order-2 lg:order-1">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#d84f3f] md:text-sm">
              Hi, I'm Devesh Kumar
            </p>

            <h1 className="text-4xl font-black leading-none tracking-tight sm:text-5xl lg:text-7xl xl:text-8xl">
              Frontend Architect
              <br />

              <span className="text-slate-500">
                & Technical Lead
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:mt-6 md:text-xl">
              Leading frontend architecture and engineering teams
              to build scalable Banking, Mortgage and Fintech
              platforms using React, Next.js, TypeScript,
              Accessibility and Micro Frontend Architecture.
            </p>

            {/* Metrics */}

            <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3">
              <span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium md:px-4 md:text-sm">
                9+ Years Experience
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium md:px-4 md:text-sm">
                20+ Enterprise Projects
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium md:px-4 md:text-sm">
                Technical Leadership
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium md:px-4 md:text-sm">
                Banking & Fintech
              </span>
            </div>

            {/* CTA */}

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                className="
                rounded-full
                bg-black
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-slate-800
                md:px-8
                md:py-4
              "
              >
                Download Resume
              </a>

              <a
                href="#case-studies"
                className="
                rounded-full
                border
                border-slate-300
                px-6
                py-3
                text-sm
                font-medium
                transition
                hover:bg-slate-100
                md:px-8
                md:py-4
              "
              >
                View Work
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              {/* Desktop Badges Only */}

              <div
                className="
                absolute
                -left-12
                top-12
                z-20
                hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                py-3
                shadow-xl
                lg:block
              "
              >
                <p className="text-2xl font-bold">
                  9+
                </p>

                <p className="text-xs text-slate-500">
                  Years Experience
                </p>
              </div>

              <div
                className="
                absolute
                -right-10
                bottom-10
                z-20
                hidden
                rounded-full
                bg-black
                px-5
                py-3
                text-sm
                font-medium
                text-white
                shadow-xl
                lg:block
              "
              >
                Technical Lead
              </div>

              {/* Image */}

              <Image
                src="/images/devesh.png"
                alt="Devesh Kumar"
                width={450}
                height={450}
                priority
                className="
                  h-auto
                  w-full
                  max-w-[220px]
                  md:max-w-[300px]
                  lg:max-w-[380px]
                "
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}