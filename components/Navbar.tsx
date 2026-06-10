import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between border-b border-gray-200">
          <a
            href="/"
            className="text-2xl font-bold"
          >
            Devesh Kumar
          </a>

          <nav className="hidden gap-10 md:flex">
            <a href="/" className="text-gray-600 hover:text-black">
              Home
            </a>
            <a href="#experience" className="text-gray-600 hover:text-black">
              Experience
            </a>

            <a href="#case-studies" className="text-gray-600 hover:text-black">
              Work
            </a>

            <a href="#skills" className="text-gray-600 hover:text-black">
              Skills
            </a>

            <a href="#contact" className="text-gray-600 hover:text-black">
              Contact
            </a>
          </nav>

          <a
            href="/resume.pdf"
            className="rounded-full bg-black px-6 py-3 text-white"
          >
            Resume
          </a>
        </div>
      </Container>
    </header>
  );
}