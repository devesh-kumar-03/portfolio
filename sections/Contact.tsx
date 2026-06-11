"use client";

import { useState } from "react";
import Container from "@/components/Container";
import ContactModal from "@/components/ContactModal";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="py-32"
      >
        <Container>
          <div className="rounded-[40px] border border-slate-200 bg-slate-50 p-16 text-center">
            <h2 className="mb-4 text-5xl font-bold">
              Let's Build Scalable Digital Products
            </h2>

            <p className="mb-10 text-slate-400">
              Available for Frontend Architecture,
              Technical Leadership and Enterprise Engineering.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                className="rounded-full bg-black px-8 py-4 font-semibold text-white"
              >
                Resume
              </a>

              <a
                href="https://www.linkedin.com/in/devesh-kumar-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 px-8 py-4 font-semibold"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/devesh-kumar-03"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 px-8 py-4 font-semibold"
              >
                GitHub
              </a>

              <button
                onClick={() => setOpen(true)}
                className="rounded-full border border-slate-300 px-8 py-4 font-semibold"
              >
                Email
              </button>
            </div>
          </div>
        </Container>
      </section>

      <ContactModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}