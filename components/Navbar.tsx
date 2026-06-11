"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "./Container";

const links = [
  {
    label: "Awards",
    href: "#awards",
  },
  {
    label: "Architecture",
    href: "#architecture",
  },
  {
    label: "Case Studies",
    href: "#case-studies",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Expertise",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50">
      <Container>
        <div
          className="
          flex
          h-14
          items-center
          justify-between
          rounded-full
          border
          border-slate-200
          bg-white/90
          px-4
          shadow-lg
          backdrop-blur-xl
          md:h-16
          md:px-6
        "
        >
          {/* Logo */}

          <a
            href="/"
            className="text-sm font-bold md:text-xl"
          >
            Devesh Kumar
          </a>

          {/* Desktop Nav */}

          <nav className="hidden items-center gap-6 xl:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  text-sm
                  text-slate-600
                  transition
                  hover:text-black
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Resume */}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              rounded-full
              bg-black
              px-5
              py-2
              text-sm
              text-white
              transition
              hover:bg-slate-800
              xl:block
            "
          >
            Resume
          </a>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(!open)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              xl:hidden
            "
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Drawer */}

        {open && (
          <div
            className="
              mt-3
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-xl
              xl:hidden
            "
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-medium text-slate-700"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-2
                  rounded-full
                  bg-black
                  px-5
                  py-3
                  text-center
                  font-medium
                  text-white
                "
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}