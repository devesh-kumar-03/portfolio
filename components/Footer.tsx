import Container from "./Container";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 py-10">
            <Container>
                <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
                    <p className="text-slate-500">
                        © 2026 Devesh Kumar. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="mailto:kumar.devesh53@gmail.com"
                            className="text-slate-500 hover:text-black"
                        >
                            Email
                        </a>

                        <a
                            href="https://www.linkedin.com/in/devesh-kumar-developer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-black"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-black"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}