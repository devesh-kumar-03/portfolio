"use client";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ContactModal({
    isOpen,
    onClose,
}: Props) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-[32px] bg-white p-8 shadow-2xl">
                <h3 className="mb-4 text-3xl font-bold">
                    Let's Connect 👋
                </h3>

                <p className="mb-6 leading-relaxed text-slate-600">
                    Thank you for visiting my portfolio.
                    I'm always open to discussing Frontend Architect,
                    Technical Lead and Senior Frontend opportunities,
                    consulting engagements or interesting projects.
                </p>

                <div className="mb-8 rounded-2xl bg-slate-100 p-4">
                    <p className="mb-2 text-sm text-slate-500">
                        Email
                    </p>

                    <a
                        href="mailto:kumar.devesh53@gmail.com"
                        className="text-lg font-semibold"
                    >
                        kumar.devesh53@gmail.com
                    </a>
                </div>

                <div className="flex gap-3">
                    <a
                        href="mailto:kumar.devesh53@gmail.com"
                        className="rounded-full bg-black px-6 py-3 font-medium text-white"
                    >
                        Send Email
                    </a>

                    <button
                        onClick={onClose}
                        className="rounded-full border border-slate-300 px-6 py-3 font-medium"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}