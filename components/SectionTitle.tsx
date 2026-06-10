type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16">
      {subtitle && (
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-black-600">
          {subtitle}
        </p>
      )}

      <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
        {title}
      </h2>

      <div className="h-1 w-20 rounded-full bg-[#f36a14]" />
    </div>
  );
}