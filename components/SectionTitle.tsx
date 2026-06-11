type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-10 md:mb-16">
      {subtitle && (
        <p
          className="
            mb-3
            text-xs
            uppercase
            tracking-[0.2em]
            text-slate-500
            md:mb-4
            md:text-sm
          "
        >
          {subtitle}
        </p>
      )}

      <h2
        className="
          mb-4
          text-3xl
          font-bold
          leading-tight
          md:mb-6
          md:text-4xl
          lg:text-5xl
        "
      >
        {title}
      </h2>

      <div className="h-1 w-16 rounded-full bg-[#f36a14] md:w-20" />
    </div>
  );
}