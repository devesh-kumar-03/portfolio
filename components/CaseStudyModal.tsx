"use client";

type CaseStudy = {
    title: string;
    role: string;
    challenge: string;
    solution: string;
    results: string[];
};

type Props = {
    isOpen: boolean;
    onClose: () => void;
    study: CaseStudy | null;
};

export default function CaseStudyModal({
    isOpen,
    onClose,
    study,
}: Props) {
    if (!isOpen || !study) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[32px] bg-white p-8 shadow-2xl">
                <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
                            {study.role}
                        </span>

                        <h2 className="mt-4 text-4xl font-bold">
                            {study.title}
                        </h2>
                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-full border border-slate-300 px-5 py-2 font-medium"
                    >
                        Close
                    </button>
                </div>

                <div className="mb-6 rounded-3xl border border-slate-200 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        Challenge
                    </h3>

                    <p className="leading-relaxed text-slate-600">
                        {study.challenge}
                    </p>
                </div>

                <div className="mb-6 rounded-3xl border border-slate-200 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        Solution
                    </h3>

                    <p className="leading-relaxed text-slate-600">
                        {study.solution}
                    </p>
                </div>

                <div className="rounded-3xl border border-slate-200 p-6">
                    <h3 className="mb-6 text-2xl font-bold">
                        Results
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">
                        {study.results.map((result) => (
                            <div
                                key={result}
                                className="rounded-2xl bg-slate-50 p-4 font-medium"
                            >
                                ✓ {result}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}