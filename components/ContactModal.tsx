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
          w-full
          max-w-lg
          rounded-[24px]
          bg-white
          p-5
          shadow-2xl
          md:rounded-[32px]
          md:p-8
        "
            >
                <h3
                    className="
            mb-4
            text-2xl
            font-bold
            md:text-3xl
          "
                >
                    Let's Connect 👋
                </h3>

                <p
                    className="
            mb-6
            text-sm
            leading-relaxed
            text-slate-600
            md:text-base
          "
                >
                    Thank you for visiting my portfolio.
                    I'm always open to discussing Frontend Architect,
                    Technical Lead and Senior Frontend opportunities,
                    consulting engagements or interesting projects.
                </p>

                <div
                    className="
            mb-6
            rounded-2xl
            bg-slate-100
            p-4
          "
                >
                    <p className="mb-2 text-sm text-slate-500">
                        Email
                    </p>

                    <a
                        href="mailto:kumar.devesh53@gmail.com"
                        className="
              break-all
              text-base
              font-semibold
              md:text-lg
            "
                    >
                        kumar.devesh53@gmail.com
                    </a>
                </div>

                <div
                    className="
            flex
            flex-col
            gap-3
            sm:flex-row
          "
                >
                    <a
                        href="mailto:kumar.devesh53@gmail.com"
                        className="
              flex-1
              rounded-full
              bg-black
              px-6
              py-3
              text-center
              font-medium
              text-white
              transition
              hover:bg-slate-800
            "
                    >
                        Send Email
                    </a>

                    <button
                        onClick={onClose}
                        className="
              flex-1
              rounded-full
              border
              border-slate-300
              px-6
              py-3
              font-medium
              transition
              hover:bg-slate-50
            "
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}