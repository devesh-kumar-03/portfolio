import Image from "next/image";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            {/* <p className="mb-4 text-sm uppercase tracking-[0.2em] text-black-600">
              Hi, I'm Devesh Kumar
            </p> */}

            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d84f3f]">
              Hi, I'm Devesh Kumar
            </p>



            <h1 className="text-6xl font-black leading-none tracking-tight md:text-7xl xl:text-8xl">
              Frontend Architect
              <br />
              <span className="text-slate-500">
                & Technical Lead
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600">
              9+ years delivering Banking, Mortgage and Fintech platforms using React, Next.js, TypeScript, Accessibility and Micro Frontend Architecture.
            </p>

            {/* Metrics */}

            <div className="mb-10 flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
                9+ Years Experience
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
                Banking & Fintech
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
                Technical Lead
              </span>
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                className="rounded-full bg-black px-8 py-4 font-medium text-white transition hover:bg-slate-800"
              >
                Download Resume
              </a>

              <a
                href="#case-studies"
                className="rounded-full border border-slate-300 px-8 py-4 font-medium transition hover:bg-slate-100"
              >
                View Work
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Soft background shape */}

              <div className="absolute inset-0 rounded-full bg-[#d84f3f]/10 blur-3xl" />

              <Image
                src="/images/devesh.png"
                alt="Devesh Kumar"

                priority
                className="relative z-10 h-auto w-full max-w-[360px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}