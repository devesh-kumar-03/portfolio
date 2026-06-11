import Container from "./Container";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 py-8 md:py-10">
            <Container>
                <div
                    className="
            flex
            flex-col
            items-center
            justify-between
            gap-6
            text-center
            md:flex-row
            md:text-left
          "
                >
                    <div>
                        <h3 className="text-lg font-bold">
                            Devesh Kumar
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                            Frontend Architect & Technical Lead
                        </p>
                    </div>

                    <div
                        className="
              flex
              flex-wrap
              justify-center
              gap-4
              md:gap-6
            "
                    >
                        <a
                            href="mailto:kumar.devesh53@gmail.com"
                            className="text-sm text-slate-500 transition hover:text-black"
                        >
                            Email
                        </a>

                        <a
                            href="https://www.linkedin.com/in/devesh-kumar-developer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-500 transition hover:text-black"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/devesh-kumar-03"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-500 transition hover:text-black"
                        >
                            GitHub
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-500 transition hover:text-black"
                        >
                            Resume
                        </a>
                    </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-6 text-center">
                    <p className="text-sm text-slate-500">
                        © 2026 Devesh Kumar. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}