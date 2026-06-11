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
        <div
            className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/50
        p-4
        backdrop-blur-sm
      "
        >
            <div
                className="
          max-h-[90vh]
          w-full
          max-w-4xl
          overflow-y-auto
          rounded-[24px]
          bg-white
          p-5
          shadow-2xl
          md:rounded-[32px]
          md:p-8
        "
            >
                {/* Header */}

                <div className="mb-6 flex items-start justify-between gap-4 md:mb-8">
                    <div>
                        <span
                            className="
                rounded-full
                bg-slate-100
                px-4
                py-2
                text-xs
                font-medium
                md:text-sm
              "
                        >
                            {study.role}
                        </span>

                        <h2
                            className="
                mt-4
                text-2xl
                font-bold
                leading-tight
                md:text-4xl
              "
                        >
                            {study.title}
                        </h2>
                    </div>

                    <button
                        onClick={onClose}
                        className="
              rounded-full
              border
              border-slate-300
              px-4
              py-2
              text-sm
              font-medium
              transition
              hover:bg-slate-50
            "
                    >
                        Close
                    </button>
                </div>

                {/* Challenge */}

                <div className="mb-5 rounded-3xl border border-slate-200 p-5 md:mb-6 md:p-6">
                    <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                        Challenge
                    </h3>

                    <p className="leading-relaxed text-slate-600">
                        {study.challenge}
                    </p>
                </div>

                {/* Solution */}

                <div className="mb-5 rounded-3xl border border-slate-200 p-5 md:mb-6 md:p-6">
                    <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                        Solution
                    </h3>

                    <p className="leading-relaxed text-slate-600">
                        {study.solution}
                    </p>
                </div>

                {/* Results */}

                <div className="rounded-3xl border border-slate-200 p-5 md:p-6">
                    <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                        Results
                    </h3>

                    <div className="grid gap-3 md:grid-cols-2 md:gap-4">
                        {study.results.map((result) => (
                            <div
                                key={result}
                                className="
                  rounded-2xl
                  bg-slate-50
                  p-4
                  font-medium
                "
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