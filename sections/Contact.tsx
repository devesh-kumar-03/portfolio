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
        className="py-12 md:py-20"
      >
        <Container>
          <div
            className="
              rounded-[24px]
              border
              border-slate-200
              bg-slate-50
              p-6
              text-center
              md:rounded-[40px]
              md:p-12
              lg:p-16
            "
          >
            <h2
              className="
                mb-4
                text-3xl
                font-bold
                leading-tight
                md:text-5xl
              "
            >
              Let's Build Scalable
              <br />
              Digital Products
            </h2>

            <p
              className="
                mx-auto
                mb-8
                max-w-2xl
                text-sm
                leading-relaxed
                text-slate-500
                md:mb-10
                md:text-base
              "
            >
              Available for Frontend Architecture,
              Technical Leadership and Enterprise
              Engineering opportunities.
            </p>

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-3
                md:gap-4
              "
            >
              <a
                href="/resume.pdf"
                target="_blank"
                className="
                  rounded-full
                  bg-black
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-slate-800
                  md:px-8
                  md:py-4
                "
              >
                Resume
              </a>

              <a
                href="https://www.linkedin.com/in/devesh-kumar-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border
                  border-slate-300
                  px-6
                  py-3
                  font-semibold
                  transition
                  hover:bg-white
                  md:px-8
                  md:py-4
                "
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/devesh-kumar-03"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border
                  border-slate-300
                  px-6
                  py-3
                  font-semibold
                  transition
                  hover:bg-white
                  md:px-8
                  md:py-4
                "
              >
                GitHub
              </a>

              <button
                onClick={() => setOpen(true)}
                className="
                  rounded-full
                  border
                  border-slate-300
                  px-6
                  py-3
                  font-semibold
                  transition
                  hover:bg-white
                  md:px-8
                  md:py-4
                "
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